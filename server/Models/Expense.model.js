import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    requried: true,
  },
  date: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    required: true,
  },
});

const ExpenseModel=mongoose.model("Expense",ExpenseSchema);
export default ExpenseModel;