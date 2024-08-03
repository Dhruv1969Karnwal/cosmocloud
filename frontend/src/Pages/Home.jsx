import { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://cosmocloud-backend-sb4a.onrender.com/api/users');
        console.log('Data fetched:', response.data.data);
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const get_personal_details = (id) => {
    navigate(`/profile/${id}`);
  };

  const delete_employee = async (id) => {
    try {
      // Send DELETE request to the backend
      await axios.delete(`/api/users/${id}`);
      // Update the state to remove the deleted employee
      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-5  right-4" onClick={() => navigate('/create')}>
    Create employee
    </button>
    <div className="grid grid-cols-1 gap-8 p-10 mt-14 lg:grid-cols-2 xl:grid-cols-4">
      {data.length > 0 ? (
        <>
          {data.map((item) => (
            <div
              key={item._id}
              className="flex items-center shadow justify-between p-4 bg-white rounded-md"
            >
              <div>
                <h6
                  className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase hover:text-red-300 cursor-pointer"
                  onClick={() => get_personal_details(item._id)}
                >
                  {`${item.firstName} ${item.lastName}`}
                </h6>
                <span className="inline-block px-2 py-px text-xs text-green-500 bg-green-100 rounded-md">
                  {item._id}
                </span>
              </div>
              <div onClick={() => delete_employee(item._id)} className="cursor-pointer">
                <MdDelete />
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
    </>
  );
};

export default Home;
