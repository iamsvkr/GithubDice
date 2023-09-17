const Test = () => {
  return (
<div className="w-full max-w-screen-xl rounded overflow-hidden shadow-lg bg-white">
        <img src="https://via.placeholder.com/800x200" alt="Avatar" className="w-full h-64 object-cover" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Repository Name</div>
            <div className="flex justify-between text-gray-600">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a.75.75 0 01.666.391l1.882 3.772 4.21.612a.75.75 0 01.416 1.28l-3.046 2.97.719 4.195a.75.75 0 01-1.088.791L10 13.347l-3.773 1.988a.75.75 0 01-1.088-.79l.72-4.195L2.805 7.753a.75.75 0 01.415-1.28l4.21-.611L9.334 2.39A.75.75 0 0110 2zm0 2.445L8.615 6.94a.75.75 0 01-.564.41l-3.692.537 2.672 2.607a.75.75 0 01.216.664l-.631 3.678 3.306-1.74a.75.75 0 01.698 0l3.306 1.74-.63-3.677a.75.75 0 01.216-.664l2.672-2.608-3.691-.536a.75.75 0 01-.564-.41L10 4.445V4z"></path>
                    </svg>
                    <span className="text-sm">1234 Stars</span>
                </div>
                <div>
                    <span className="text-sm">Language: JavaScript</span>
                </div>
            </div>
            <p className="text-gray-700 text-base mt-2">This is the description of the repository. It provides details about what the repository is all about and its purpose.</p>
        </div>
    </div>
      );
};

export default Test;
