import React from "react";
import AddEmployee from "./AddEmployee";
import AllEmployees from "./AllEmployees";
import "./EmployeeCss/Employee.css";
const EmployeesRoot = () => {
  const employees = [
    {
      _id: 5512,
      name: "Sajal Howlader",
      designation: "Front-End Developer",
      mail: "sajalHowlader08@gmail.com",
      location: "Savar Dhaka,Bangladesh",
    },
    {
      _id: 5582,
      name: "Sajal Howlader",
      designation: "Front-End Developer",
      mail: "sajalHowlader08@gmail.com",
      location: "Savar Dhaka,Bangladesh",
    },
  ];

  return (
    <section>
      <div className="flex justify-between items-center border-b-2 border-cyan-600 py-3">
        <span></span>
        <h2 className="text-center text-2xl font-bold ">
          <span className="text-5xl font-serif text-primary">E</span>mployees
        </h2>
        <AddEmployee />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5">
        {employees.map((employee) => (
          <AllEmployees key={employee._id} employee={employee} />
        ))}
      </div>
    </section>
  );
};

export default EmployeesRoot;
