import { Employee } from "../model/Employee.model";

export async function getEmployees(): Promise<Employee[]> {
  return [
    {
      name: 'Jim',
      employedAt: new Date(),
      id: '123',
      position: 'Engineer',
      salary: 100000
    },
    {
      name: 'Deb',
      employedAt: new Date(),
      id: '456',
      position: 'Manager',
      salary: 100000
    },
    {
      name: 'Oscar',
      employedAt: new Date(),
      id: '789',
      position: 'HR',
      salary: 100000
    }
  ];
}

export async function createEmployee(employee: Employee) {
  return `${employee.name}321`
}