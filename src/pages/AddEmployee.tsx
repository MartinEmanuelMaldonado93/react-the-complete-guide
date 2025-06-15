import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useEmployees } from '../hooks/useEmployees'
import { cn } from '../lib/utils'

const employeeSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  position: z.string().min(2, 'Position must be at least 2 characters'),
  department: z.string().min(2, 'Department must be at least 2 characters'),
  hireDate: z.string().min(1, 'Hire date is required'),
  salary: z.number().min(1, 'Salary must be greater than 0'),
})

type EmployeeFormData = z.infer<typeof employeeSchema>

function AddEmployee() {
  const navigate = useNavigate()
  const { addEmployee } = useEmployees()
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmployeeFormData>({
    resolver: zodResolver(employeeSchema),
  })

  const onSubmit = async (data: EmployeeFormData) => {
    try {
      addEmployee(data)
      navigate('/employees')
    } catch (error) {
      console.error('Error adding employee:', error)
    }
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Add Employee</h1>
        <p className="mt-2 text-gray-600">
          Create a new employee record
        </p>
      </div>

      <div className="max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                {...register('name')}
                type="text"
                className={cn(
                  'mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500',
                  errors.name ? 'border-red-300' : 'border-gray-300'
                )}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                className={cn(
                  'mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500',
                  errors.email ? 'border-red-300' : 'border-gray-300'
                )}
                placeholder="john@company.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                Position
              </label>
              <input
                {...register('position')}
                type="text"
                className={cn(
                  'mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500',
                  errors.position ? 'border-red-300' : 'border-gray-300'
                )}
                placeholder="Software Engineer"
              />
              {errors.position && (
                <p className="mt-1 text-sm text-red-600">{errors.position.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                Department
              </label>
              <input
                {...register('department')}
                type="text"
                className={cn(
                  'mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500',
                  errors.department ? 'border-red-300' : 'border-gray-300'
                )}
                placeholder="Engineering"
              />
              {errors.department && (
                <p className="mt-1 text-sm text-red-600">{errors.department.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="hireDate" className="block text-sm font-medium text-gray-700">
                Hire Date
              </label>
              <input
                {...register('hireDate')}
                type="date"
                className={cn(
                  'mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500',
                  errors.hireDate ? 'border-red-300' : 'border-gray-300'
                )}
              />
              {errors.hireDate && (
                <p className="mt-1 text-sm text-red-600">{errors.hireDate.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                Salary
              </label>
              <input
                {...register('salary', { valueAsNumber: true })}
                type="number"
                className={cn(
                  'mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500',
                  errors.salary ? 'border-red-300' : 'border-gray-300'
                )}
                placeholder="75000"
              />
              {errors.salary && (
                <p className="mt-1 text-sm text-red-600">{errors.salary.message}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => navigate('/employees')}
              className="btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                'btn-primary',
                isSubmitting && 'opacity-50 cursor-not-allowed'
              )}
            >
              {isSubmitting ? 'Adding...' : 'Add Employee'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddEmployee
