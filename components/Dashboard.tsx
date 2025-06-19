import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { AlertTriangle, Shield, AlertCircle, TrendingUp } from 'lucide-react';
import { Issue } from '../Issues/types';

interface DashboardProps {
  issues: Issue[];
}

const Dashboard: React.FC<DashboardProps> = ({ issues }) => {
  const total = issues.length;
  const high = issues.filter(issue => issue.severity === 'High').length;
  const medium = issues.filter(issue => issue.severity === 'Medium').length;
  const low = issues.filter(issue => issue.severity === 'Low').length;

  const chartData = [
    { name: 'High', value: high, color: '#ef4444' },
    { name: 'Medium', value: medium, color: '#f97316' },
    { name: 'Low', value: low, color: '#eab308' }
  ].filter(item => item.value > 0);

  const StatCard = ({ title, count, color, icon: Icon, gradient }: any) => (
    <div className={`relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${gradient} group`}>
      <div className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className={`p-3 rounded-full ${color} bg-opacity-20`}>
            <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
          </div>
          <div className={`text-3xl font-bold ${color.replace('bg-', 'text-')}`}>
            {count}
          </div>
        </div>
        <h3 className="text-gray-700 dark:text-gray-300 font-medium text-sm tracking-wide uppercase">
          {title} Priority
        </h3>
        <div className="mt-2 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className={`h-full ${color} transition-all duration-1000 ease-out ${total > 0
                ? count === total
                  ? 'w-full'
                  : count > total * 0.75
                    ? 'w-3/4'
                    : count > total * 0.5
                      ? 'w-1/2'
                      : count > total * 0.25
                        ? 'w-1/4'
                        : count > 0
                          ? 'w-1/12'
                          : 'w-0'
                : 'w-0'
              }`}
          ></div>
        </div>
      </div>
    </div>
  );

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
          {/* ... */}
          <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
            <p className="font-semibold text-gray-800 dark:text-gray-200">
              {data.name} Priority
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Count: <span className="font-bold">{data.value}</span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Percentage: <span className="font-bold">{((data.value / total) * 100).toFixed(1)}%</span>
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* ... */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Accessibility Dashboard
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Monitor and track accessibility issues across your platform
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {total}
              </div>
            </div>
            <h3 className="text-gray-700 dark:text-gray-300 font-medium">Total Issues</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">All severity levels</p>
          </div>

          <StatCard
            title="High"
            count={high}
            color="bg-red-500"
            icon={AlertTriangle}
            gradient="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20"
          />

          <StatCard
            title="Medium"
            count={medium}
            color="bg-orange-500"
            icon={AlertCircle}
            gradient="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20"
          />

          <StatCard
            title="Low"
            count={low}
            color="bg-yellow-500"
            icon={Shield}
            gradient="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20"
          />
        </div>

        {/* Chart Section */}
        {total > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Issues Distribution
              </h2>
            </div>

            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <defs>
                    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3" />
                    </filter>
                  </defs>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={120}
                    innerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    filter="url(#shadow)"
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        stroke="white"
                        strokeWidth={3}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    wrapperStyle={{
                      paddingTop: '20px',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {total === 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-xl border border-gray-200 dark:border-gray-700 text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              No Issues Found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Great! Your platform currently has no accessibility issues to report.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;