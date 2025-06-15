import { useEmployees } from '../hooks/useEmployees'

const Dashboard = () => {
  const { employees } = useEmployees()

  const stats = [
    {
      name: 'Total Employees',
      value: employees.length,
      icon: '👥',
      color: 'bg-blue-500',
    },
    {
      name: 'Departments',
      value: new Set(employees.map(emp => emp.department)).size,
      icon: '🏢',
      color: 'bg-green-500',
    },
    {
      name: 'Average Salary',
      value: `$${Math.round(employees.reduce((sum, emp) => sum + emp.salary, 0) / employees.length).toLocaleString()}`,
      icon: '💰',
      color: 'bg-yellow-500',
    },
    {
      name: 'New Hires (2023)',
      value: employees.filter(emp => emp.hireDate.startsWith('2023')).length,
      icon: '🆕',
      color: 'bg-purple-500',
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome to the Employee Management System
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="card">
            <div className="flex items-center">
              <div className={`flex-shrink-0 ${stat.color} rounded-md p-3`}>
                <span className="text-white text-xl">{stat.icon}</span>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {stat.name}
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {stat.value}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="card">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-3">
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2">🎉</span>
              Welcome to your Employee Management System!
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2">📊</span>
              You have {employees.length} employees in your system
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2">🚀</span>
              Start by viewing your employees or adding new ones
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
