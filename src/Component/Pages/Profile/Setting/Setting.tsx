import React, {useState } from "react";
import { useLocation } from "react-router-dom";
import useUser from "../../../../Hooks/useUser";

const ProfileSettings = () => {
  const [users, loading, refreshUsers] = useUser();
  const location = useLocation();
  const id= location?.state;
  const user = users.find(u => u.uid == id);
  console.log(user);
   
 
  // console.log(id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [education, setEducation] = useState("");
  const [chatAvailable, setChatAvailable] = useState(false);

  const handleDeleteAccount = () => {
    // Handle account deletion logic here
  };

  const handleSaveChanges = () => {
    // Handle save changes logic here
  };

  return (
    <div className="mx-auto max-w-md p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
      <div className="space-y-4">
        <input
          type="text"
          className="input"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          className="input"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          className="input"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          className="input"
          placeholder="Education"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2 leading-tight"
            checked={chatAvailable}
            onChange={() => setChatAvailable(!chatAvailable)}
          />
          <span className="text-sm">Available for Chat</span>
        </label>
      </div>
      <div className="mt-6 space-x-2">
        <button className="btn" onClick={handleSaveChanges}>
          Save Changes
        </button>
        <button className="btn btn-red" onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
