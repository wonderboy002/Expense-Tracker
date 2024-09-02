import React from "react";
import axios from "axios";

const ExpenseList = ({ expenseList, onExpenseUpdated }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // Extracts the date part as "YYYY-MM-DD"
  };

  async function deleteExpense(id) {
    try {
      await axios.delete(`http://localhost:3001/Expense/${id}`);
      // Update the expense list state to remove the deleted expense
      onExpenseUpdated(id);
    } catch (e) {
      console.log("Error while Deleting expense!!", e);
    }
  }

  return (
    <div>
      <h1 className="text-3xl text-white font-bold">
        Here Are Your Expenses!!!
      </h1>
      <div className="TableContainer pt-4 flex flex-wrap gap-4 w-full">
        {expenseList &&
          expenseList.map((exp) => (
            <div
              key={exp._id}
              className="card flex flex-col min-w-[250px] font-semibold rounded-md px-4 py-2 bg-white"
            >
              <div>
                <h1>{exp.description}</h1>
              </div>
              <div>
                {exp.amount > 0 ? (
                  <h1 className="text-green-500">+₹{exp.amount}</h1>
                ) : (
                  <h1 className="text-red-600">₹{exp.amount}</h1>
                )}
                <h1>Category: {exp.category}</h1>
              </div>
              <div>
                <h1>Payment by: {exp.method}</h1>
                <h1>Transaction Date: {formatDate(exp.date)}</h1>
              </div>
              <div className="btns flex items-center justify-center gap-2">
                <button className="bg-green-600 hover:bg-green-500 px-2 py-1 rounded-md text-white font-bold">
                  Update
                </button>
                <button
                  onClick={() => deleteExpense(exp._id)}
                  className="bg-red-600 hover:bg-red-400 px-2 py-1 rounded-md text-white font-bold"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ExpenseList;
