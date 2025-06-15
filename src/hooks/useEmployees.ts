import { useState, useEffect } from 'react'
import { Employee, EmployeeFormData } from '../types/employee'

// Mock data for initial employees
const initialEmployees: Employee[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@company.com',
    position: 'Software Engineer',
    department: 'Engineering',
    hireDate: '2023-01-15',
    salary: 75000,
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@company.com',
    position: 'Product Manager',
    department: 'Product',
    hireDate: '2022-11-20',
    salary: 85000,
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike.johnson@company.com',
    position: 'UX Designer',
    department: 'Design',
    hireDate: '2023-03-10',
    salary: 70000,
  },
]

export const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>(() => {
    const saved = localStorage.getItem('employees')
    return saved ? JSON.parse(saved) : initialEmployees
  })

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees))
  }, [employees])

  const addEmployee = (employeeData: EmployeeFormData) => {
    const newEmployee: Employee = {
      ...employeeData,
      id: Date.now().toString(),
    }
    setEmployees(prev => [...prev, newEmployee])
    return newEmployee
  }

  const updateEmployee = (id: string, employeeData: EmployeeFormData) => {
    setEmployees(prev =>
      prev.map(emp =>
        emp.id === id ? { ...emp, ...employeeData } : emp
      )
    )
  }

  const deleteEmployee = (id: string) => {
    setEmployees(prev => prev.filter(emp => emp.id !== id))
  }

  const getEmployee = (id: string) => {
    return employees.find(emp => emp.id === id)
  }

  return {
    employees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee,
  }
}
