import React, { useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  ZegoUIKitPrebuilt,
  ZegoCloudRoomConfig,
} from "@zegocloud/zego-uikit-prebuilt";
import {
  AuthContext,
  AuthContextType,
} from "../../Provider/AuthProvider/AuthProvider";

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

  return (
    <div>
      <div ref={containerRef} />
    </div>
  );
};

export default Calling;
