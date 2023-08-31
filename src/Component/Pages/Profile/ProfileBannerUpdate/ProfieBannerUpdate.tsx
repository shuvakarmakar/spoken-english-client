
import React, { useContext, useState } from "react";
import { AuthContext, AuthContextType } from "../../../../Provider/AuthProvider/AuthProvider";
import useUser from "../../../../Hooks/useUser";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const img_hosting_token: string = import.meta.env.VITE_Image_Upload_Token;

const ProfileBannerUpdate: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { user } = useContext(AuthContext) as AuthContextType;
  const [refreshUsers] = useUser();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
 
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

   const handleUploadCroppedImage = () => {
     if (selectedImage) {
       const formData = new FormData();
       formData.append("image", selectedImage);

       fetch(img_hosting_url, {
         method: "POST",
         body: formData,
       })
         .then((res) => res.json())
         .then((data) => {
           const imageURL = data.data.display_url;
           if (imageURL) {
             fetch(
               `https://spoken-english-server-xi.vercel.app/users/profileBanner/upload/${user?.email}`,
               {
                 method: "PUT",
                 headers: {
                   "content-type": "application/json",
                 },
                 body: JSON.stringify({ image: imageURL }),
               }
             )
               .then((res) => res.json())
               .then((data) => {
                 console.log(data);
                 refreshUsers
                 onClose();
                 window.location.reload();
               });
           }
         });
     }
   };
  

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 z-50 overflow-auto flex items-center justify-center`}
    >
      <div
        className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
        onClick={onClose}
      />

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Upload and Crop Image</p>
            <button className="modal-close" onClick={onClose}>
              <span className="text-2xl">&times;</span>
            </button>
          </div>
          <hr />

          <div className="mt-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="imageInput"
            >
              Select an Image:
            </label>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <div className="mt-4">
            {selectedImage && (
              <div className="relative">
                {/* <Cropper
                  image={URL.createObjectURL(selectedImage)}
                  crop={crop}
                  zoom={1}
                  aspect={4 / 3}
                  onCropChange={handleCropChange as any}
                  onCropComplete={handleCropComplete}
                  showGrid={false}
                /> */}
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="User's Uploaded"
                  className="max-w-full h-auto"
                />
              </div>
            )}
          </div>
          <div className="mt-4">
            {selectedImage  && (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleUploadCroppedImage}
              >
                save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBannerUpdate;
