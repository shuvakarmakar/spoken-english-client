import React, { useContext, useState } from "react";
import Cropper from "react-easy-crop";
import { Area } from "react-easy-crop";
import {
  AuthContext,
  AuthContextType,
} from "../../../../Provider/AuthProvider/AuthProvider";
import useUser from "../../../../Hooks/useUser";
// import { FaChampagneGlasses } from "react-icons/fa6";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { user } = useContext(AuthContext) as AuthContextType;
  const [refreshUsers] = useUser();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [crop, setCrop] = useState<Area>({ x: 0, y: 0, width: 1, height: 1 });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleCropChange = (newCrop: Area) => {
    setCrop(newCrop);
  };

  const handleCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
 

      console.log(croppedArea);
 
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleUploadCroppedImage = () => {

    if (selectedImage && croppedAreaPixels) {
      // Create a canvas and draw the cropped image
      const canvas = document.createElement("canvas");
      const image = new Image();
      image.src = URL.createObjectURL(selectedImage);
      image.onload = () => {
        canvas.width = croppedAreaPixels.width;
        canvas.height = croppedAreaPixels.height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(
            image,
            croppedAreaPixels.x,
            croppedAreaPixels.y,
            croppedAreaPixels.width,
            croppedAreaPixels.height,
            0,
            0,
            croppedAreaPixels.width,
            croppedAreaPixels.height
          );

          // Convert the canvas to a data URL
          const croppedImageDataUrl = canvas.toDataURL("image/jpeg");
          if (croppedImageDataUrl) {
                fetch(
                  `https://spoken-english-server-xi.vercel.app/users/profileImage/upload/${user?.email}`,
                  {
                    method: "PUT",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify({ image: croppedImageDataUrl }),
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
        
          // You can now upload croppedImageDataUrl to your server or perform any other action

          console.log("Cropped image data URL:", croppedImageDataUrl);
        }
      };
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
                <Cropper
                  image={URL.createObjectURL(selectedImage)}
                  crop={crop}
                  zoom={1}
                  aspect={3 / 3}
                  onCropChange={handleCropChange as any}
                  onCropComplete={handleCropComplete}
                  showGrid={false}
                />
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="User's Uploaded"
                  className="max-w-full h-auto"
                />
              </div>
            )}
          </div>
          <div className="mt-4">
            {selectedImage && croppedAreaPixels && (
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

export default Modal;
