import  { useEffect, useRef, useState } from "react";
import Peer from "peerjs";
import { io } from "socket.io-client";

const socket = io("http://localhost:5001");

function Videocall() {
  const [myId, setMyId] = useState("");
  const [callId, setCallId] = useState(""); // State for storing the ID to call
  const [currentCall, setCurrentCall] = useState(null); // State to manage the current call
  const myVideo = useRef();
  const userVideo = useRef();
  const peerInstance = useRef();

  useEffect(() => {
    // Create Peer instance
    const peer = new Peer();
    peerInstance.current = peer;

    // Get user's video and audio stream
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        // Display my video stream
        myVideo.current.srcObject = stream;

        // Answer incoming call
        peer.on("call", (call) => {
          call.answer(stream); // Answer the call with your own video/audio stream
          setCurrentCall(call); // Save the call to the state
          call.on("stream", (userVideoStream) => {
            userVideo.current.srcObject = userVideoStream; // Show the remote video stream
          });
        });

        // Emit 'join-room' with roomId and myId
        socket.emit("join-room", "my-room-id", peer.id);
      });

    // Set my PeerJS ID
    peer.on("open", (id) => {
      setMyId(id);
    });

    // Handle new user connection
    socket.on("connection", (userId) => {
      console.log("User connected:", userId);
    });

    // Handle user disconnection
    socket.on("user-disconnected", (userId) => {
      console.log("User disconnected:", userId);
    });
  }, []);

  // Function to call another user by ID
  const callUser = (userId) => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        const call = peerInstance.current.call(userId, stream);
        setCurrentCall(call); // Save the call to the state
        call.on("stream", (userVideoStream) => {
          userVideo.current.srcObject = userVideoStream; // Show the remote video stream
        });
      });
  };

  // Function to end the current call
  const endCall = () => {
    if (currentCall) {
      currentCall.close(); // Close the call
      setCurrentCall(null); // Reset the current call state
      userVideo.current.srcObject = null; // Clear the remote video stream
    }
  };

  return (
    <div>
      <h1>My ID: {myId}</h1>
      <input
        type='text'
        value={callId}
        onChange={(e) => setCallId(e.target.value)}
        placeholder='Enter Peer ID to call'
      />
      <button onClick={() => callUser(callId)}>Call</button>
      <button onClick={endCall} disabled={!currentCall}>
        End Call
      </button>{" "}
      {/* End Call button */}
      <div style={{ display: "flex", marginTop: "20px" }}>
        <video
          ref={myVideo}
          autoPlay
          playsInline
          muted
          style={{ width: "300px", marginRight: "20px" }}
        />
        <video
          ref={userVideo}
          autoPlay
          playsInline
          style={{ width: "300px" }}
        />
      </div>
    </div>
  );
}

export default Videocall;
