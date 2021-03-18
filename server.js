const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const ejs = require('ejs');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

let country;
let data;
let countryName;
let todayCase;
let totalCases;
let todayRecovered;
let recovered;
let todayDeaths;
let deaths;
let casesPerMillion;
let active;

app.get("/", function(req,res){
    res.render("index", {
        countryName: countryName,
        todayCase: todayCase,
        totalCases: totalCases,
        todayRecovered: todayRecovered,
        recovered: recovered,
        todayDeaths: todayDeaths,
        deaths: deaths,
        casesPerMillion: casesPerMillion,
        active: active
    });
})

app.post("/", function(req, res){
    country = req.body.country;
    axios.get(`https://corona.lmao.ninja/v2/countries/${country}`)
        .then(data => {
            data = data.data;
            countryName = data.country;
            todayCase = data.todayCases;
            totalCases = data.cases;
            todayRecovered = data.todayRecovered;
            recovered = data.recovered;
            todayDeaths = data.todayDeaths;
            deaths = data.deaths;
            casesPerMillion = data.casesPerOneMillion;
            active = data.active;
            res.redirect("/");
        }).catch(err => {
            res.render("warning");
        })
})

app.listen(process.env.PORT || "3000", function(req,res){
    console.log('server is up and running');
})

 