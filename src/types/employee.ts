export type Employee = {
  id: string;
  name: string;
  email: string;
  position: string;
  department: string;
  hireDate: string;
  salary: number;
  avatar?: string;
}

export type EmployeeFormData = {
  name: string;
  email: string;
  position: string;
  department: string;
  hireDate: string;
  salary: number;
}
