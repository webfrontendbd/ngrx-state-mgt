export interface Employee {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  salary: number;
}

export interface Employees {
  employeeList: Employee[];
}
