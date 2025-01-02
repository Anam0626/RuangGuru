package middleware

import (
	"a21hc3NpZ25tZW50/model"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
)

var secretKey = model.JwtKey

func Auth() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		tokenString, err := ctx.Cookie("session_token")
		if err != nil {
			if strings.Contains(ctx.GetHeader("Content-Type"), "application/json") {
				ctx.JSON(http.StatusUnauthorized, gin.H{"error": "session token not provided"})
			} else {
				ctx.Redirect(http.StatusSeeOther, "/login")
			}
			ctx.Abort()
			return
		}

		token, err := jwt.ParseWithClaims(tokenString, &model.Claims{}, func(token *jwt.Token) (interface{}, error) {
			return secretKey, nil
		})
		if err != nil || !token.Valid {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": "invalid or expired token"})
			ctx.Abort()
			return
		}

		claims, ok := token.Claims.(*model.Claims)
		if ok && token.Valid {
			ctx.Set("email", claims.Email)
			ctx.Next()
		} else {
			ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "invalid token"})
		}
	}
}
