import {useUser} from "@clerk/clerk-react";
import ExpenseList from "./ExpenseList";
import Expenseform from "./Expenseform";
import { useEffect } from "react";

export const Dashboard=()=>{
    const {user}=useUser();
    useEffect(()=>{
        console.log("Your user",user);
        
    })
    return (
        <div className="container flex flex-col gap-4 items-center">
            <h1 className="font-bold text-slate-200 text-3xl">Welcome {user?.firstName}! here are your finances</h1>
            <Expenseform/>
            <ExpenseList/>
        </div>
    )
}