import express, { application } from "express";
//import dotenv from "dotenv";
//dotenv.cofig();


const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res) => {
    res.json({message: "YES"});
});

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`); 
})

