import React, { useContext, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import {
  AuthContext,
  AuthContextType,
} from "../../Provider/AuthProvider/AuthProvider";

const Calling = () => {
  const { roomId: roomID } = useParams();
  const { user } = useContext(AuthContext) as AuthContextType;
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const myMeeting = async () => {
      if (!user) {
        return;
      }

      const appID = 453174440;
      const serverSecret = "2dfeec651726351e96d3a9385b8b550a";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        Date.now().toString(), // Corrected syntax
        user?.displayName || "" // Corrected syntax
      );

      if (!containerRef.current) {
        return;
      }

      const zc = ZegoUIKitPrebuilt.create(kitToken);
      zc.joinRoom({
        container: containerRef.current,
        sharedLinks: [
          {
            name: "Copy Link",
            url: `http://localhost:5173/Connect/room/${roomID}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: true,
      });
    };

    myMeeting();
  }, [roomID, user]);

  return (
    <div>
      <div ref={containerRef} />
    </div>
  );
};

export default Calling;
