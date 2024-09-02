import express from "express";
import mongoose from "mongoose";
import ExpenseRouter from "./Routes/Expense.routes.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config();
const port = 3001;
app.use(express.json());
app.use(cors());
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


app.get("/",(req,res)=>{
  res.send("Welcome Home!!!");
})

const mongoURI=process.env.MONGO_URI;



mongoose.connect(mongoURI)
.then(()=>console.log("Successfully Connected to mongodb"))
.catch((e)=>console.error(e))

app.use("/Expense",ExpenseRouter);