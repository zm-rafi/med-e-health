import React, { useState } from 'react';
import profile_pic from '../assets/profile_pic.png'; // Import properly

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: profile_pic,
    email: 'richard@gmail.com',
    phone: '01234567890',
    address: {
      line1: '123 Main St',
      line2: 'Apt 4B',
    },
    gender: 'Male',
    dob: '1990-01-01',
  });
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg mx-auto flex flex-col gap-4 p-4">
      <img className="w-36 rounded-full mx-auto" src={userData.image} alt="Profile" />

      {isEdit ? (
        <input
          className="bg-gray-50 text-2xl font-medium mx-auto mt-4 text-center"
          type="text"
          value={userData.name}
          onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
        />
      ) : (
        <h2 className="text-2xl font-bold text-center">{userData.name}</h2>
      )}

      <hr />

      <div>
        <h3 className="font-semibold">Contact Information</h3>

        <p><strong>Email:</strong> {userData.email}</p>

        <p><strong>Phone:</strong></p>
        {isEdit ? (
          <input
            type="text"
            value={userData.phone}
            onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))}
            className="bg-gray-50"
          />
        ) : (
          <p>{userData.phone}</p>
        )}

        <p><strong>Address:</strong></p>
        {isEdit ? (
          <>
            <input
              type="text"
              value={userData.address.line1}
              onChange={(e) => setUserData((prev) => ({
                ...prev,
                address: { ...prev.address, line1: e.target.value },
              }))}
              className="bg-gray-50"
              placeholder="Address Line 1"
            />
            <input
              type="text"
              value={userData.address.line2}
              onChange={(e) => setUserData((prev) => ({
                ...prev,
                address: { ...prev.address, line2: e.target.value },
              }))}
              className="bg-gray-50 mt-2"
              placeholder="Address Line 2"
            />
          </>
        ) : (
          <>
            <p>{userData.address.line1}</p>
            <p>{userData.address.line2}</p>
          </>
        )}
      </div>

      <hr />

      <div>
        <h3 className="font-semibold">Basic Information</h3>

        <p><strong>Gender:</strong></p>
        {isEdit ? (
          <select
            value={userData.gender}
            onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
            className="bg-gray-50"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        ) : (
          <p>{userData.gender}</p>
        )}

        <p><strong>Birthday:</strong></p>
        {isEdit ? (
          <input
            type="date"
            value={userData.dob}
            onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))}
            className="bg-gray-50"
          />
        ) : (
          <p>{userData.dob}</p>
        )}
      </div>

      <div className="mt-4 text-center">
        {isEdit ? (
          <button
            onClick={() => setIsEdit(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
