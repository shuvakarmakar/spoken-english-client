import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useUser from "../../../../Hooks/useUser";
import { Helmet } from "react-helmet";
interface User {
  uid: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  education: string;
  Roll: string;
  _id: string;
  about: string;
  // Add other properties as needed
}

const ProfileSettings = () => {
  const [users] = useUser();
  const location = useLocation();
  const id = location?.state;
  const user = users.find((u: any) => u.uid === id) as unknown as User;

  // console.log(user);
  const [edit, setEdit] = useState(true);

  const handleSaveChanges = async (event: React.FormEvent<HTMLFormElement>) => {
    // Handle save changes logic here
    event.stopPropagation();
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;
    const about = formData.get("about") as string;
    const education = formData.get("education") as string;
    setEdit(true);
    const updateUser = { name, email, phone, address, education, about };
    fetch(
      `https://spoken-english-server-xi.vercel.app/UpdateProfile/${user?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateUser),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // refreshUsers();
      });
    console.log(updateUser);
  };

  return (
    <div className="mx-auto p-6 bg-white rounded-lg shadow-md w-[70%] my-[200px]">
      <Helmet>
        <title>Profile Settings</title>
      </Helmet>
      <div className="flex justify-between my-2">
        <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
        <button className="btn" onClick={() => setEdit(!edit)}>
          Edit
        </button>
      </div>
      <form onSubmit={handleSaveChanges}>
        <div className="space-y-4 md:flex flex-col">
          <input
            type="text"
            className={"input"}
            name="name"
            placeholder="Name"
            defaultValue={user?.name}
            disabled={edit}
          />

          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            defaultValue={user?.email}
            disabled={edit}
          />
          <input
            type="tel"
            className="input"
            placeholder="Phone"
            defaultValue={user?.phone}
            name="phone"
            disabled={edit}
          />
          <input
            type="text"
            className="input"
            placeholder="Address"
            defaultValue={user?.address}
            name="address"
            disabled={edit}
          />
          <input
            type="text"
            className="input"
            placeholder="Education"
            defaultValue={user?.education}
            name="education"
            disabled={edit}
          />
          <input
            className="about input"
            placeholder="about"
            defaultValue={user?.about}
            name="about"
            disabled={edit}
          />
          <input
            type="text"
            className="input"
            placeholder="Role"
            defaultValue={user?.Roll}
            disabled
          />
        </div>

        <div className="mt-6 space-x-2">
          <button disabled={edit} className="btn">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;
