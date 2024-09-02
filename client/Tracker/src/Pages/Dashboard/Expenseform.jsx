import React, { useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

function Expenseform({ onExpenseAdded }) {
  const [Description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [method, setMethod] = useState("");
  const { user } = useUser();

  async function handleSubmit(e) {
    e.preventDefault();

    const expense = {
      userId: user?.id,
      description: Description,
      date: new Date(),
      amount: amount,
      category: category,
      method: method,
    };

    try {
      await axios.post(`http://localhost:3001/Expense/`, expense);
      setAmount("");
      setCategory("");
      setMethod("");
      setDescription("");
      onExpenseAdded(); // Call the refresh function passed from Dashboard
    } catch (error) {
      console.log("Error adding expense", error);
    }
  }

  return (
    <div className="FormContainer w-full flex items-center flex-col gap-2">
      <input
        type="text"
        className="w-3/4 w-[600px] min-w-[400px] p-2 max-w-[600px] p-2"
        name="Description"
        id="desc"
        placeholder="Enter Description of Expense"
        value={Description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        name="amount"
        className="w-[600px] min-w-[400px] p-2"
        id="amt"
        placeholder="Enter the amount of Your expense in rupees"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        required
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        name="category"
        className="w-[600px] min-w-[400px]  max-w-[600px] p-2"
      >
        <option value="Select">Select a category</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Food">Food</option>
        <option value="Rent">Salary</option>
        <option value="Utilities">Utilities</option>
        <option value="Rent">Rent</option>
        <option value="Other">Other</option>
      </select>
      <select
        name="method"
        onChange={(e) => setMethod(e.target.value)}
        value={method}
        className="w-[600px] min-w-[400px] p-2"
      >
        <option value="Method">Select a payment method</option>
        <option value="Bank Transfer">Bank transfer</option>
        <option value="Cash">Cash</option>
      </select>
      <button
        onClick={handleSubmit}
        className="px-2 py-3 w-[600px] min-w-[400px]  bg-black text-white rounded-lg hover:bg-white hover:text-black font-bold"
      >
        Add Record
      </button>
    </div>
  );
}

export default Expenseform;
