import express from "express"

const app = express();

app.get ("/", (req, res) => {
    res.send("Hola mundo!")
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log("App listening on port: ", PORT)
})