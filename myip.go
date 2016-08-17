package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type IPInfo struct {
	Ip string `json:"ip"`
}

func main() {

	url := "http://ipinfo.io/json"
	resp, err := http.Get(url)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}

	var data IPInfo
	err = json.Unmarshal(body, &data)
	if err != nil {
		panic(err)
	}

	// Print out ip attribute
	fmt.Println(data.Ip)

}
