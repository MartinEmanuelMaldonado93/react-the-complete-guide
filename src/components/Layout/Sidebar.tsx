import { Link, useLocation } from 'react-router-dom'
import { cn } from '../../lib/utils'

const navigation = [
  { name: 'Dashboard', href: '/', icon: '📊' },
  { name: 'Employees', href: '/employees', icon: '👥' },
  { name: 'Add Employee', href: '/employees/add', icon: '➕' },
]

function Sidebar() {
  const location = useLocation()

  return (
    <div className="w-64 bg-white shadow-sm h-screen">
      <nav className="mt-5 px-2">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'group flex items-center px-3 py-2 text-sm font-medium border-l-4 transition-colors duration-200',
                  isActive
                    ? 'bg-primary-50 border-primary-500 text-primary-700'
                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                )}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.name}
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
