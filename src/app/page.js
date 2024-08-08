  "use client"
 import React, { useState } from 'react';
import StatsCard from '../components/StatsCard';
import { FiCalendar, FiUsers, FiDollarSign, FiUserPlus } from 'react-icons/fi';
import Charts from '../components/Charts'; 
import Navbar from '@/components/Header';

export default function Home() {

  const [filter, setFilter] = useState('');
  const data = [
    { col1: 'Data 1', col2: 'Data 2', col3: 'Data 3', col4: 'Data 4' },
    { col1: 'Data 5', col2: 'Data 6', col3: 'Data 7', col4: 'Data 8' },
    // Add more data as needed
  ];

  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      value.toLowerCase().includes(filter.toLowerCase())
    )
  );
  return (
  <>
  <Navbar/>
    <main className="flex-1 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-5 overflow-y-auto min-h-screen">
       <div className="overflow-x-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-2 mb-4">
      <StatsCard
        icon={<FiCalendar size={24} />}
        bgColor="bg-gray-800"
        title="Bookings"
        value="281"
        footer="+55% than last week"
        positive
      />
      <StatsCard
        icon={<FiUsers size={24} />}
        bgColor="bg-blue-600"
        title="Today's Users"
        value="2,300"
        footer="+3% than last month"
        positive
      />
      <StatsCard
        icon={<FiDollarSign size={24} />}
        bgColor="bg-green-600"
        title="Revenue"
        value="34k"
        footer="+1% than yesterday"
        positive
      />
      <StatsCard
        icon={<FiUserPlus size={24} />}
        bgColor="bg-pink-600"
        title="Followers"
        value="+91"
        footer="Just updated"
      />
    </div>
    <div className="overflow-x-auto  bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <input
          type="text"
          placeholder="Filter..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Column 1
            </th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Column 2
            </th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Column 3
            </th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Column 4
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="py-2 px-4 border-b border-gray-200">{row.col1}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row.col2}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row.col3}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row.col4}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Charts />
    </main>
    </>
   
  );
}
