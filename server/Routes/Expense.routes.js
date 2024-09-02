import express from "express";
import ExpenseModel from "../Models/Expense.model.js";
const ExpenseRouter = express.Router();
//getting all records
ExpenseRouter.get("/getExpenses/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const records = await ExpenseModel.find({ userId: userId });
    if (records.length === 0) {
      return res.status(404).send("No records found!!!");
    }
    res.status(200).send(records);
  } catch (e) {
    console.log("Error while trying to get all expenses : ", e);
  }
});

//adding a new record
ExpenseRouter.post("/", async (req, res) => {
  try {
    const record = req.body;
    const newrecord = new ExpenseModel(record);
    const savedRecord = await newrecord.save();
    if (!savedRecord){
        return res.status(404).send("Something went wrong");
    }
    res.status(200).send(savedRecord);
  } catch (e) {
    console.log("Error while trying to add a new record ", e);
  }
});

//updating an existing record
ExpenseRouter.put("/:id", async (req, res) => {
  try {
    const id=req.params.id;
    const newrecordBody=req.body;
    const record=await ExpenseModel.findByIdAndUpdate(id,newrecordBody);
    if (!record){
        res.status(404).send("Update failed");
    }
    res.status(200).send(record);
  } catch (e) {
    console.log("Error while trying to update an existing record ", e);
  }
});

//delete an existing record
ExpenseRouter.delete("/:id",async (req,res)=>{
    try {
       const id=req.params.id;
       const record=await ExpenseModel.findByIdAndDelete(id);
       if (!record){
          return res.status(404).send("Deletion failed!!!");
       }
       res.status(200).send(record);
    }
    catch(e){
        console.log("Error while trying to delete a pre existing record!!",e);
        
    }
});
export default ExpenseRouter;
