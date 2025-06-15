export interface Employee {
  id: string;
  name: string;
  email: string;
  position: string;
  department: string;
  hireDate: string;
  salary: number;
  avatar?: string;
}

export interface EmployeeFormData {
  name: string;
  email: string;
  position: string;
  department: string;
  hireDate: string;
  salary: number;
}
