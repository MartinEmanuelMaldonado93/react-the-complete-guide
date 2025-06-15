import { Link } from 'react-router-dom'
import { Employee } from '../../types/employee'

type EmployeeCardProps = {
  employee: Employee
  onDelete: (id: string) => void
}

function EmployeeCard({ employee, onDelete }: EmployeeCardProps) {
  const handleDelete = () => {
    onDelete(employee.id)
  }

  return (
    <div className="card hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
            <span className="text-white font-medium text-lg">
              {employee.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              {employee.name}
            </h3>
            <p className="text-sm text-gray-600">{employee.position}</p>
            <p className="text-sm text-gray-500">{employee.department}</p>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Link
            to={`/employees/${employee.id}`}
            className="text-primary-600 hover:text-primary-700 text-sm font-medium"
          >
            View
          </Link>
          <Link
            to={`/employees/${employee.id}/edit`}
            className="text-gray-600 hover:text-gray-700 text-sm font-medium"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="text-red-600 hover:text-red-700 text-sm font-medium"
          >
            Delete
          </button>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray-500">Email:</span>
          <p className="text-gray-900">{employee.email}</p>
        </div>
        <div>
          <span className="text-gray-500">Salary:</span>
          <p className="text-gray-900">${employee.salary.toLocaleString()}</p>
        </div>
        <div>
          <span className="text-gray-500">Hire Date:</span>
          <p className="text-gray-900">{new Date(employee.hireDate).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}

export default EmployeeCard
