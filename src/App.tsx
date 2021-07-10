import React, {useState} from 'react';
import UserList from './UserList';


const App: React.FC = () => {
  const [page, setPage] = useState<number>(0)
  const [title, setTitle] = useState<string>("Top Users")
  return (
      <>
        <div className="bg-gray-100 text-center px-12 pb-12">
          <UserList title={title} page={page}/>
          <div className="flex justify-between mt-12 space-x-2">
            <button
                className="bg-blue-600 text-white font-semibold py-2 px-4 text-center rounded-xl hover:bg-blue-500 hover:text-black"
                onClick={() => setPage(page + 1)}
            >
              Next
            </button>
            <button
                className="bg-blue-600 text-white font-semibold py-2 px-4 text-center rounded-xl shadow-md hover:bg-blue-500 hover:text-black"
                onClick={() => (
                    title === "Top Users" ? (setTitle("My List"), setPage(page + 1)) : (setTitle("Top Users"), setPage(page - 1))

                )}
            >
              You List
            </button>
          </div>
        </div>
      </>
  );
}

export default App;
