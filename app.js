const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js")



const app = express()

let items =[]
let workList =[]

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
app.set("view engine", "ejs")


app.get("/", function(req, res){
    let day = date.getDate()    
    res.render("list", {kindOfDay: day, newItem: items})

})

app.post("/", function(req, res){
    let item = req.body.todo

    if(req.body.list === "Work"){
        workList.push(item)
        res.redirect("/work")
    }else{
        items.push(item)
        res.redirect("/")
    }    
})

app.get("/work", function(req, res){
    res.render("list", {kindOfDay: "Work List", newItem: workList})
})



app.listen(4000, function(){
    console.log("Port 4000 is working...")
})








