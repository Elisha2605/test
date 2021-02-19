const express = require('express');
const app = express();
const port = 8080;


app.get("/time", (req, res) => {
    let date_ob = new Date();
    let hours = ("0" + date_ob.getHours()).slice(-2);               //adjust 0 before single digit hour
    let minutes = ("0" + date_ob.getMinutes()).slice(-2); 
    res.send("The time is currently: " + hours + ":" + minutes);  
});

app.get("/day", (req, res) => {
    let date_ob = new Date();
    let day = ("0" + date_ob.getDay());
    res.send("Today is: " + day)
});

app.get("/month", (req, res) => {
    let date_ob = new Date();
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);           // +1 (getMonth : returns the month as an integer (0-11). January is represented as 0 and December as 11)
    res.send(" We are in: " + month)
});













app.listen(port);