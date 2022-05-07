const axios = require("axios")
const express = require('express')
const app = express()

const getCapital = (query) => {
    return new Promise ((resolve, reject) => {
        axios.request(query)
        .then(res => {
          let capital = res.data[0].capital[0];
          resolve(capital);
        })
        .catch(error => {
          reject(error)
      });
    })
}

app.get('/capital', (req, res) => {

    let country = req.query.country;
    let query = {
        url: `https://restcountries.com/v3.1/name/${country}`
    }
    
    let capital;
    getCapital(query)
      .then(data => capital = data)
      .catch(err => {
          let errorMessage = err.request.res.statusCode + " " + err.request.res.statusMessage;
          capital = errorMessage;
        })
    
    setTimeout(() => {
      res.json({
        "statusCode": 200,
        "statusMessage": "Connection is good",
        "capital": capital
    })
    }, 500)
    
  })

app.listen(3000, (req, res) => {
    console.log('running at port 3000')
})