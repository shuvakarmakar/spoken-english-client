import React, {useState } from "react";
import { useLocation } from "react-router-dom";
import useUser from "../../../../Hooks/useUser";
interface User {
  uid: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  education: string;
  Roll: string;
  // Add other properties as needed
}

const ProfileSettings = () => {
  const [users, loading, refreshUsers] = useUser();
  const location = useLocation();
  const id= location?.state;
 const user = users.find((u: any) => u.uid === id) as unknown as User;

  // console.log(user);
    const [edit,setEdit]=useState(true)
 
  // console.log(id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [education, setEducation] = useState("");
  // const [chatAvailable, setChatAvailable] = useState(false);

  const handleDeleteAccount = () => {
    // Handle account deletion logic here
  };

  const handleSaveChanges = () => {
    // Handle save changes logic here
    setEdit(true)
    console.log({name,email,phone,address,education});
  };

  return (
    <div className="mx-auto p-6 bg-white rounded-lg shadow-md w-[70%] my-10">
      <div className="flex justify-between my-2">
        <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
        <button className="btn" onClick={() => setEdit(!edit)}>
          Edit
        </button>
      </div>
      <div className="space-y-4 md:flex flex-col">
          <input
            type="text"
            className={"input"}
            placeholder="Name"
            value={user?.name?user.name:name}
            onChange={(e) => setName(e.target.value)}
            disabled={edit}
          />
      

        <input
          type="email"
          className="input"
          placeholder="Email"
          value={user?.email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={edit}
        />
        <input
          type="tel"
          className="input"
          placeholder="Phone"
          value={user?.phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={edit}
        />
        <input
          type="text"
          className="input"
          placeholder="Address"
          value={user?.address}
          onChange={(e) => setAddress(e.target.value)}
          disabled={edit}
        />
        <input
          type="text"
          className="input"
          placeholder="Education"
          value={user?.education}
          onChange={(e) => setEducation(e.target.value)}
          disabled={edit}
        />
        <input
          type="text"
          className="input"
          placeholder="Role"
          value={user?.Roll}
          disabled
        />
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
