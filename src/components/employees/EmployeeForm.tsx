import { SyntheticEvent, useState } from "react";
import { Employee } from "../../model/Employee.model";

interface CreateEmployeeFormProps {
  onEmployeeAdd: (employee: Employee) => Promise<string>;
}

export function EmployeeForm(props: CreateEmployeeFormProps) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState(0);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    
    if (name && position && salary) {
      const newEmployee = {
        name,
        position,
        salary,
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const id = await props.onEmployeeAdd(newEmployee as any);
      console.log(`Created new employee with id ${id}`);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} />
      <label htmlFor="position">Position</label>
      <input type="text" name="position" id="position" onChange={(e) => setPosition(e.target.value)} />
      <label htmlFor="salary">Salary</label>
      <input type="text" name="salary" id="salary" onChange={(e) => setSalary(Number(e.target.value))} />
      <button>Add Employee</button>
    </form>
  );
}