package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type Quotes struct {
	Tags   []string `json:"tags"`
	Author string   `json:"author"`
	Quote  string   `json:"content"`
}

func ClientGet() ([]Quotes, error) {
	resp, err := http.Get("http://api.quotable.io/quotes/random?limit=3")
	if err != nil {
		return nil, err
	}
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}
	quotes := []Quotes{}
	err = json.Unmarshal(body, &quotes)
	if err != nil {
		return nil, err
	}
	return quotes, nil
}

type data struct {
	Email string `json:"email"`
	Name  string `json:"name"`
}

type Postman struct {
	Data data
	Url  string `json:"url"`
}

func ClientPost() (Postman, error) {
	postBody, _ := json.Marshal(map[string]string{
		"name":  "Dion",
		"email": "dionbe2022@gmail.com",
	})
	requestBody := bytes.NewBuffer(postBody)

	resp, err := http.Post("https://postman-echo.com/post", "application/json", requestBody)
	if err != nil {
		return Postman{}, err
	}
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return Postman{}, err
	}
	postman := Postman{}
	err = json.Unmarshal(body, &postman)
	if err != nil {
		return Postman{}, err
	}
	return postman, nil // TODO: replace this
}

func main() {
	get, _ := ClientGet()
	fmt.Println(get)

	post, _ := ClientPost()
	fmt.Println(post)
}
