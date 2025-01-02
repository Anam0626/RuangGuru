package main

import (
	"math/rand"
	"net/http"
	"time"
)

var Quotes = []string{
	"Be yourself; everyone else is already taken. ― Oscar Wilde",
	"Be the change that you wish to see in the world. ― Mahatma Gandhi",
	"I have not failed. I've just found 10,000 ways that won't work. ― Thomas A. Edison",
	"It is never too late to be what you might have been. ― George Eliot",
	"Everything you can imagine is real. ― Pablo Picasso",
	"Nothing is impossible, the word itself says 'I'm possible'! ― Audrey Hepburn",
}

// QuotesHandler struct for holding quotes
type QuotesHandler struct {
	Quotes []string
}

// ServeHTTP handles the HTTP request by sending a random quote
func (qh QuotesHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	// Check if the Quotes slice is empty
	if len(qh.Quotes) == 0 {
		http.Error(w, "No quotes available", http.StatusInternalServerError)
		return
	}

	// Randomly select a quote from Quotes
	randomIndex := rand.Intn(len(qh.Quotes))
	w.Header().Set("Content-Type", "text/plain; charset=utf-8")
	w.Write([]byte(qh.Quotes[randomIndex]))
}

func main() {
	// Seed the random number generator
	rand.Seed(time.Now().UnixNano())

	// Handler for the main quotes
	quotesHandler := QuotesHandler{Quotes: Quotes}
	go http.ListenAndServe("localhost:8080", quotesHandler)

	// Handler for an alternative quote (example with a different slice)
	narutoHandler := QuotesHandler{Quotes: []string{"datebayi"}}
	http.ListenAndServe("localhost:8081", narutoHandler)
}
