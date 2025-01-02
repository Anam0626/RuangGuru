package middleware

import (
	"a21hc3NpZ25tZW50/model"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
)

var secretKey = model.JwtKey

func Auth() gin.HandlerFunc {
	return gin.HandlerFunc(func(ctx *gin.Context) {
		// Ambil token session dari cookie
		tokenString, err := ctx.Cookie("session_token")
		if err != nil {
			// Jika cookie tidak ditemukan, periksa apakah request URL bukan "/" untuk mengembalikan error
			if ctx.Request.URL.Path != "/" {
				ctx.JSON(http.StatusUnauthorized, gin.H{"error": "session token not provided"})
			} else {
				// Ubah status code menjadi 303 (See Other)
				ctx.Redirect(http.StatusSeeOther, "/login")
			}
			ctx.Abort()
			return
		}

		// Parsing token dengan claims yang disesuaikan
		token, err := jwt.ParseWithClaims(tokenString, &model.Claims{}, func(token *jwt.Token) (interface{}, error) {
			return secretKey, nil
		})
		if err != nil || !token.Valid {
			// Ubah status code menjadi 400 Bad Request jika token tidak valid
			ctx.JSON(http.StatusBadRequest, gin.H{"error": "invalid or expired token"})
			ctx.Abort()
			return
		}

		// Mengambil claims dari token
		claims, ok := token.Claims.(*model.Claims)
		if ok && token.Valid {
			// Simpan userID dalam context dengan kunci "id"
			ctx.Set("id", claims.UserID)
			ctx.Next()
		} else {
			// Jika token tidak valid
			ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "invalid token"})
		}
	})
}
