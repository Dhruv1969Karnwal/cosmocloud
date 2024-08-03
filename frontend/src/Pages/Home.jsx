import { MdDelete } from "react-icons/md";

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-8 p-10 mt-14 lg:grid-cols-2 xl:grid-cols-4">

    <div className="flex items-center shadow justify-between p-4 bg-white rounded-md">
        <div>
            <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
                Name
            </h6>
            <span className="inline-block px-2 py-px text-xs text-green-500 bg-green-100 rounded-md">
                emp_id
            </span>
        </div>
        <div>
        <MdDelete />
        </div>
    </div>


    <div className="flex items-center shadow justify-between p-4 bg-white rounded-md">
        <div>
            <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
                Users
            </h6>
            <span className="text-xl font-semibold">50,021</span>
            <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                +2.6%
            </span>
        </div>
        <div>
            <span>
                <svg className="w-12 h-12 text-gray-300" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                    </path>
                </svg>
            </span>
        </div>
    </div>

    <div className="flex items-center shadow justify-between p-4 bg-white rounded-md">
        <div>
            <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
                Orders
            </h6>
            <span className="text-xl font-semibold">45,021</span>
            <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                +3.1%
            </span>
        </div>
        <div>
            <span>
                <svg className="w-12 h-12 text-gray-300" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
            </span>
        </div>
    </div>

    <div className="flex items-center shadow justify-between p-4 bg-white rounded-md">
        <div>
            <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
                Tickets
            </h6>
            <span className="text-xl font-semibold">20,516</span>
            <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                +3.1%
            </span>
        </div>
        <div>
            <span>
                <svg className="w-12 h-12 text-gray-300" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z">
                    </path>
                </svg>
            </span>
        </div>
    </div>
</div>
  )
}

export default Home