import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import ExpenseList from "./ExpenseList";
import Expenseform from "./Expenseform";
import axios from "axios";
import {Link} from "react-router-dom";

export const Dashboard = () => {
  const { user } = useUser();
  const [expenseList, setExpenseList] = useState([]);

  const fetchExpenses = () => {
    if (user?.id) {
      axios
        .get(`http://localhost:3001/Expense/getExpenses/${user?.id}`)
        .then((res) => setExpenseList(res.data))
        .catch((e) => console.log("Error fetching expenses", e));
    }
  };

  useEffect(() => {
    fetchExpenses(); // Fetch expenses when the component mounts
  }, [user]); // Refetch when user changes

  // Function to refresh expense list
  function refresh() {
    fetchExpenses();
  }

  // Function to update expense list after deletion
  function updateExpenseList(id) {
    setExpenseList(expenseList.filter(exp => exp._id !== id));
  }
  
  if (!user){
    return <h1 className="text-white font-extrabold text-4xl">Sign in into Your Account to use<br></br> <Link to="/auth" className="text-black">Sign in</Link></h1>
  }
  return (
    <div className="container flex flex-col gap-4 items-center">
      <h1 className="font-bold text-slate-200 text-3xl">
        Welcome {user?.firstName}! Add new Expense Below
      </h1>
      <Expenseform onExpenseAdded={refresh} />
      <ExpenseList expenseList={expenseList} onExpenseUpdated={updateExpenseList} />
    </div>
  );
};
