import { useState, useEffect } from "react";
import { Employee } from "../../model/Employee.model";
import { EmployeesList } from "./EmployeesList";
import { getEmployees, createEmployee } from "../../services/DataService";
import { EmployeeForm } from "./EmployeeForm";

export function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const onEmployeeAdd = async (employee: Employee) => {
    console.log(employee);
    const id = await createEmployee(employee);
    setEmployees([...employees, employee]);
    return id;
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
      <EmployeesList employees={employees} />
    </div>
  );
}