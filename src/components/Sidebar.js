// components/Sidebar.js
import { FiHome, FiUser, FiSettings } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <aside className="bg-white dark:bg-gray-800 w-64 space-y-6 py-7 px-2 hidden sm:block">
      <div className="text-gray-600 dark:text-gray-400 text-sm uppercase font-semibold px-2">Main</div>
      <nav>
        <a
          href="#"
          className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white p-2 rounded-md"
        >
          <FiHome className="w-5 h-5" />
          <span>Home</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white p-2 rounded-md"
        >
          <FiUser className="w-5 h-5" />
          <span>Profile</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white p-2 rounded-md"
        >
          <FiSettings className="w-5 h-5" />
          <span>Settings</span>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
