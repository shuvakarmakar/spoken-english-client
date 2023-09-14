import React, { FormEvent, useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  ZegoUIKitPrebuilt,
  ZegoCloudRoomConfig,
} from "@zegocloud/zego-uikit-prebuilt";
import {
  AuthContext,
  AuthContextType,
} from "../../Provider/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const Calling: React.FC = () => {
  const { roomId } = useParams<{ roomId: string }>(); // Define roomId directly as a string
  const { user } = useContext(AuthContext) as AuthContextType;
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const myMeeting = async () => {
      if (!user || !roomId) {
        return;
      }

      const appID = 453174440;
      const serverSecret = "2dfeec651726351e96d3a9385b8b550a";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        user?.displayName || ""
      );

      if (!containerRef.current) {
        return;
      }

      const roomConfig: ZegoCloudRoomConfig = {
        container: containerRef.current,
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showTurnOffRemoteCameraButton: true,
        showTurnOffRemoteMicrophoneButton: true,
        showRemoveUserButton: true,
        showScreenSharingButton: true,
        sharedLinks: [
          {
            name: "Copy Link",
            url: `https://spoken-english-65d22.web.app/Connect/room/${roomId}`,
          },
        ],
      };

      const zc = ZegoUIKitPrebuilt.create(kitToken);
      zc.joinRoom(roomConfig);
    };

    myMeeting();
  }, [roomId, user]);

  // const inputRef = useRef()

  const handleSendLink = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const link = form.link.value as string;

    fetch(`https://spoken-english-server-xi.vercel.app/SendCall/${roomId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ link, name: user?.displayName }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Link sent successfully");
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  return (
    <div className="flex justify-center items-center h-[100vh] flex-col gap-10">
      <Helmet>
        <title>Video Call</title>
      </Helmet>
      <div ref={containerRef} />
      <form onSubmit={handleSendLink} className="relative">
        <input
          type="text"
          placeholder="Enter Link"
          name="link"
          className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
        <button className="absolute inset-y-0 right-0 px-4 py-2 text-white bg-blue-500 border border-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
          Send
        </button>
      </form>
    </div>
  );
};

export default Calling;
