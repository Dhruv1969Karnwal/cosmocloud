import { useState } from 'react';
// import axios from 'axios'; // Import axios for making HTTP requests

const Create = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    //   const response = await axios.post('/your-backend-endpoint', formData);
      // Handle success (e.g., show a message or redirect)
      console.log('Form submitted successfully:', formData);
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-3xl mx-auto p-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Create Employee</h1>
          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Personal Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 dark:text-white mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-white mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 dark:text-white mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 dark:text-white mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-gray-700 dark:text-white mb-1">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-white mb-1">ZIP Code</label>
                  <input
                    type="number"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
              </div>
            </div>
            {/* Contact Method */}
            <div>
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Contact Method</h2>
              <div className="mt-4">
                <label className="block text-gray-700 dark:text-white mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 dark:text-white mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
