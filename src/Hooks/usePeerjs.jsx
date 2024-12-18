import { useEffect, useRef, useState } from "react";
import Peer from "peerjs";

export const usePeerJs = (myPeerId, remoteUserPeerId) => {
  const [currentCall, setCurrentCall] = useState(null);
  const myVideo = useRef();
  const userVideo = useRef();
  const peerInstance = useRef();

  const getUserMedia = async () => {
    try {
      return await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
    } catch (error) {
      console.error("Failed to access media devices:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (!peerInstance.current) {
      const peer = new Peer(myPeerId, {
        host: "0.peerjs.com",
        port: 443,
        secure: true,
      });
      peerInstance.current = peer;

      peer.on("call", (call) => {
        getUserMedia().then((stream) => {
          myVideo.current.srcObject = stream;
          call.answer(stream);
          call.on("stream", (userStream) => {
            userVideo.current.srcObject = userStream;
          });
          setCurrentCall(call);
        });
      });
    }

    return () => {
      if (peerInstance.current) {
        peerInstance.current.destroy();
        peerInstance.current = null;
      }
    };
  }, [myPeerId]);

  const callUser = async () => {
    if (peerInstance.current) {
      try {
        const stream = await getUserMedia();
        myVideo.current.srcObject = stream;
        const call = peerInstance.current.call(remoteUserPeerId, stream);
        call.on("stream", (userStream) => {
          userVideo.current.srcObject = userStream;
        });
        setCurrentCall(call);
      } catch (error) {
        console.error("Error during call:", error);
      }
    } else {
      console.error("Peer instance is not initialized");
    }
  };

  const endCall = () => {
    if (currentCall) {
      currentCall.close();
      setCurrentCall(null);

      if (myVideo.current.srcObject) {
        const tracks = myVideo.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
        myVideo.current.srcObject = null;
      }
      if (userVideo.current.srcObject) {
        const tracks = userVideo.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
        userVideo.current.srcObject = null;
      }

      if (peerInstance.current) {
        peerInstance.current.disconnect();
        peerInstance.current.destroy();
      }

    }
  };

  return {
    myVideo,
    userVideo,
    callUser,
    endCall,
    currentCall,
  };
};
