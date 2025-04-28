import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Appointments</h2>

      <div className="space-y-6">
        {doctors.slice(0, 2).map((doctor, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md flex gap-6">
            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-32 h-32 object-cover rounded-md"
              />
            </div>

            {/* Details */}
            <div className="flex-grow space-y-2">
              <p className="text-xl font-semibold">{doctor.name}</p>
              <p className="text-gray-600">{doctor.speciality}</p>
              <div className="text-gray-500">
                <p>Address:</p>
                <p>{doctor.address.line1}</p>
                <p>{doctor.address.line2}</p>
              </div>
              <p className="text-sm text-blue-600">
                <span className="font-semibold">Date & Time:</span> 25 July, 2024 | 8:30 PM
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col justify-center gap-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition duration-300">
                Pay Online
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600  hover:text-white transition duration-300">
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
