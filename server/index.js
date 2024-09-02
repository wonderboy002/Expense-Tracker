import express from "express";
import mongoose from "mongoose";
import ExpenseRouter from "./Routes/Expense.routes.js";

const app = express();
console.log(new Date());

const port = 3001;
app.use(express.json());
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


app.get("/",(req,res)=>{
  res.send("Welcome Home!!!");
})

const mongoURI="mongodb+srv://nipunkup:njzCslzwJ7vgrAwB@cluster0.531tq.mongodb.net/";

mongoose.connect(mongoURI)
.then(()=>console.log("Successfully Connected to mongodb"))
.catch((e)=>console.error(e))

app.use("/Expense",ExpenseRouter);