// components/DashboardContent.js
import StatsCardWithImage from '../components/StatsCard';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi';

const DashboardContent = () => {
  return (
    <main className="flex-1 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCardWithImage
          imageUrl="https://via.placeholder.com/400x200"
          icon={<FiHome />}
          bgColor="bg-blue-500"
          title="Card Title 1"
          value="Value 1"
          footer="Some additional information"
          positive
        />
        <StatsCardWithImage
          imageUrl="https://via.placeholder.com/400x200"
          icon={<FiUser />}
          bgColor="bg-green-500"
          title="Card Title 2"
          value="Value 2"
          footer="Some additional information"
        />
        <StatsCardWithImage
          imageUrl="https://via.placeholder.com/400x200"
          icon={<FiSettings />}
          bgColor="bg-red-500"
          title="Card Title 3"
          value="Value 3"
          footer="Some additional information"
          positive
        />
      </div>
    </main>
  );
};

export default DashboardContent;
