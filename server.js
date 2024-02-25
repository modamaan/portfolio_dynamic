const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/dbConfig")
const portfolioRoute = require("./routes/portfolioRoute");

connectDB()
const app = express()
dotenv.config()

app.use(express.json());
app.use("/api/portfolio", portfolioRoute);

const port = process.env.PORT || 5000

const path = require("path")

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, './client/build')))
    app.use("*", function (req, res) {
        res.sendFile(path.join(__dirname, './client/build/index.html'))
    })
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})