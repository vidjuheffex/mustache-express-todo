const express = require("express");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

var todos = ["take out trash", "walk dog", "feed hobos"];

let completedTodos = ["learn swedish"];

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    return res.render("index", {todos: todos, completedTodos: completedTodos});
});

app.post("/", (req,res)=> {
    todos.push(req.body.newTodo);
    return res.redirect("/");
});

app.put("/", (req,res) => {
    todos.splice(todos.indexOf(req.body.value), 1);
    completedTodos.push(req.body.value);
    return res.redirect(303, "/");
   // return res.render("index", {todos: todos, completedTodos: completedTodos});
});
        



app.listen(port, ()=>console.log("Server listening on port: ", port));

