package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/api/test", test).Methods("GET")

	log.Fatal(http.ListenAndServe(":4000", r))
}

func test(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello World"))
}
