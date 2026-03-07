export default function UserDashboard() {
  return (
    <>
      {/* KPI Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-emerald-700">
          <div className="text-gray-600 text-sm font-semibold">Total Users</div>
          <div className="text-3xl font-bold text-gray-800 mt-2">1,234</div>
          <div className="text-emerald-700 text-xs mt-2">↑ 12% from last month</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-emerald-700">
          <div className="text-gray-600 text-sm font-semibold">Revenue</div>
          <div className="text-3xl font-bold text-gray-800 mt-2">$45,678</div>
          <div className="text-emerald-700 text-xs mt-2">↑ 8% from last month</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-gray-700">
          <div className="text-gray-600 text-sm font-semibold">Orders</div>
          <div className="text-3xl font-bold text-gray-800 mt-2">892</div>
          <div className="text-gray-500 text-xs mt-2">→ Same as last month</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-rose-700">
          <div className="text-gray-600 text-sm font-semibold">Pending</div>
          <div className="text-3xl font-bold text-gray-800 mt-2">23</div>
          <div className="text-rose-700 text-xs mt-2">↑ 5% from last month</div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-emerald-800 mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center pb-3 border-b border-gray-200">
            <span className="text-gray-700">New user registered</span>
            <span className="text-gray-500 text-sm">2 hours ago</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-gray-200">
            <span className="text-gray-700">Payment received</span>
            <span className="text-gray-500 text-sm">5 hours ago</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">System update completed</span>
            <span className="text-gray-500 text-sm">1 day ago</span>
          </div>
        </div>
      </div>
    </>
  );
}
