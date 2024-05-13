const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const products_route = require("./routes/products");
const connectDB = require("./db/connect");

app.get("/", (req, res) => {
    res.send("The page is live now");

});

app.use("/api/products", products_route);

const start = async () => {
    try{
        await connectDB();
        app.listen(PORT, () => {
            console.log(`${PORT} Connected`);
        });
    }
    catch (error) {
        console.log(error);
    }
};

start();