
import { navLists } from '../constants';
import { appleImg } from '../utils';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div 
      className={`fixed top-0 left-0 h-full w-64 bg-black transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex justify-between items-center p-5 border-b border-gray-700">
        <img src={appleImg} alt={'logo'} width={14} height={18} />
        <button 
          onClick={toggleSidebar}
          className="text-white text-xl"
        >
          ✕
        </button>
      </div>
      <nav className="mt-5">
        {navLists.map((nav, index) => (
          <a 
            key={index} 
            href="#" 
            className="block px-5 py-3 text-gray-400 hover:text-white border-b border-gray-700"
          >
            {nav}
          </a>
        ))}
      </nav>
    </div>
  );
};


export default Sidebar;