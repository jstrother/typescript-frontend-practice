import { Employee } from "../../model/Employee.model";

interface EmployeesListProps {
  employees: Employee[]
}

export function EmployeesList(props: EmployeesListProps) {
  const renderedEmployees = props.employees.map((employee, index) => {
    return (
      <tr key={index}>
        <td>{employee.name}</td>
        <td>{employee.position}</td>
        <td>{employee.salary}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {renderedEmployees}
      </tbody>
    </table>
  );
}