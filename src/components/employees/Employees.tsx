import { useState, useEffect } from "react";
import { Employee } from "../../model/Employee.model";
import { EmployeesList } from "./EmployeesList";
import { getEmployees, createEmployee } from "../../services/DataService";
import { EmployeeForm } from "./EmployeeForm";

export function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const onEmployeeAdd = async (employee: Employee) => {
    setErrorMessage('');
    try {
      console.log(employee);
      const id = await createEmployee(employee);
      setEmployees([...employees, employee]);
      return id;
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      const employees = await getEmployees();
      setEmployees(employees);
    };
    fetchEmployees();
  }, []);

  return (
    <div>
      <EmployeeForm onEmployeeAdd={onEmployeeAdd} />
      {
        errorMessage ? <label style={{color: 'red'}}>{errorMessage}</label> : null
      }
      <EmployeesList employees={employees} />
    </div>
  );
}