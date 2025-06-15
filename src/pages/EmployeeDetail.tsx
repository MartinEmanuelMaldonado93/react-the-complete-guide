import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEmployees } from '../hooks/useEmployees'

function EmployeeDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { getEmployee, deleteEmployee } = useEmployees()
  
  const employee = id ? getEmployee(id) : null

  if (!employee) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Employee Not Found</h1>
        <p className="text-gray-600 mb-6">The employee you're looking for doesn't exist.</p>
        <Link to="/employees" className="btn-primary">
          Back to Employees
        </Link>
      </div>
    )
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      deleteEmployee(employee.id)
      navigate('/employees')
    }
  }

  return (
    <div>
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{employee.name}</h1>
          <p className="mt-2 text-gray-600">{employee.position}</p>
        </div>
        <div className="flex space-x-3">
          <Link
            to={`/employees/${employee.id}/edit`}
            className="btn-secondary"
          >
            Edit Employee
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Delete Employee
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="card">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Employee Information</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500">Full Name</label>
                <p className="mt-1 text-lg text-gray-900">{employee.name}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-500">Email</label>
                <p className="mt-1 text-lg text-gray-900">{employee.email}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-500">Position</label>
                <p className="mt-1 text-lg text-gray-900">{employee.position}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-500">Department</label>
                <p className="mt-1 text-lg text-gray-900">{employee.department}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-500">Hire Date</label>
                <p className="mt-1 text-lg text-gray-900">
                  {new Date(employee.hireDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-500">Salary</label>
                <p className="mt-1 text-lg text-gray-900">
                  ${employee.salary.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-medium text-2xl">
                  {employee.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">{employee.name}</h3>
              <p className="text-gray-600">{employee.position}</p>
              <p className="text-sm text-gray-500 mt-1">{employee.department}</p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Employee ID</span>
                  <span className="text-gray-900">#{employee.id}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Years with company</span>
                  <span className="text-gray-900">
                    {Math.floor((new Date().getTime() - new Date(employee.hireDate).getTime()) / (1000 * 60 * 60 * 24 * 365))} years
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Link
          to="/employees"
          className="text-primary-600 hover:text-primary-700 font-medium"
        >
          ← Back to Employees
        </Link>
      </div>
    </div>
  )
}

export default EmployeeDetail
