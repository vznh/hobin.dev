package main

import (
	"context"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/sashabaranov/go-openai"

	"portfolio/hidden"
)

type Question struct {
	Question string `json:"question"`
}

var chatMessages []openai.ChatCompletionMessage

func main() {
	// http server
	router := gin.Default()
	router.Use(corsMiddleware())

	buildHandler := http.FileServer(http.Dir("./client/build"))
	router.GET("/", gin.WrapH(buildHandler))
	router.NoRoute(gin.WrapH(buildHandler))

	// openai implementation
	client := openai.NewClient(hidden.OPENAI_API_KEY)

	// trained instructions
	chatMessages = append(chatMessages, openai.ChatCompletionMessage{
		Role:    openai.ChatMessageRoleSystem,
		Content: hidden.DirectionsToFollow,
	})

	// trained data
	chatMessages = append(chatMessages, openai.ChatCompletionMessage{
		Role:    openai.ChatMessageRoleSystem,
		Content: hidden.AboutMe,
	})

	router.POST("/api/question", func(c *gin.Context) {
		var question Question
		if err := c.ShouldBindJSON(&question); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		chatMessages = append(chatMessages, openai.ChatCompletionMessage{
			Role:    openai.ChatMessageRoleUser,
			Content: question.Question,
		})

		resp, err := client.CreateChatCompletion(
			context.Background(),
			openai.ChatCompletionRequest{
				Model:    openai.GPT3Dot5Turbo,
				Messages: chatMessages,
			},
		)

		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		lastResponse := resp.Choices[0].Message.Content
		chatMessages = append(chatMessages, openai.ChatCompletionMessage{
			Role:    openai.ChatMessageRoleAssistant,
			Content: lastResponse,
		})

		c.JSON(http.StatusOK, gin.H{"answer": lastResponse})
	})

	router.Run(":8080")
}

func corsMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
