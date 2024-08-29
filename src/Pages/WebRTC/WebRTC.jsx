import { useEffect, useRef, useState } from "react";
import Peer from "peerjs";
import { io } from "socket.io-client";
import ResponsiveAppBar from "../../Components/Navbar/Navbar";
import { Container, Grid, Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { selectStudentInfo } from "../../Features/Slices/studentSlice";
import { useSelector } from "react-redux";

const socket = io("http://localhost:5001");

function Videocall() {
  const { peerId } = useParams();
  const [myId, setMyId] = useState("");
  const [callId, setCallId] = useState(""); // State for storing the ID to call
  const [currentCall, setCurrentCall] = useState(null); // State to manage the current call
  const myVideo = useRef();
  const userVideo = useRef();
  const peerInstance = useRef();
  const loggedinUser = useSelector(selectStudentInfo);

  useEffect(() => {
    if (!peerInstance.current) {
      setCallId(peerId);
      const peer = new Peer(loggedinUser._id, {
        config: {
          iceServers: [
            { url: "stun:stun.l.google.com:19302" }, // Public STUN server
            {
              url: "turn:13.235.36.252:3478",
              username: "user",
              credential: "H4iauI7gCpy39KxS9JoyeCzQzrnL4JGd",
            },
          ],
        },
      });
      peerInstance.current = peer;

      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          myVideo.current.srcObject = stream;
          peer.on("call", (call) => {
            call.answer(stream);
            setCurrentCall(call);
            call.on("stream", (userVideoStream) => {
              userVideo.current.srcObject = userVideoStream;
            });
          });
        })
        .catch((error) => {
          console.error("Failed to get user media", error);
        });

      peer.on("open", (id) => {
        console.log(id)
        setMyId(id);
      });
    }
  }, []);

  // Function to call another user by ID
  const callUser = (userId) => {
    if (peerInstance.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          const call = peerInstance.current.call(userId, stream);
          setCurrentCall(call);
          call.on("stream", (userVideoStream) => {
            userVideo.current.srcObject = userVideoStream;
          });
        })
        .catch((error) => {
          console.error("Failed to get user media", error);
        });
    } else {
      console.error("Peer instance is not initialized");
    }
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
      <ResponsiveAppBar />
      <Container>
        <Button onClick={() => callUser(callId)} variant='contained'>
          Call
        </Button>
        <Button
          color='error'
          // sx={{
          //   backgroundColor: "red",
          //   color: "white",
          //   "&:hover": { backgroundColor: "red" },
          // }}
          onClick={endCall}
          disabled={!currentCall}
        >
          End Call
        </Button>{" "}
        {/* End Call button */}
        <div
          style={{
            display: "flex",

            width: "100%",
          }}
        >
          <div style={{ borderRadius: 5, overflow: "hidden" }}>
            <video ref={myVideo} autoPlay playsInline muted />
            {myVideo.current && (
              <Typography mt={4} variant='h3'>
                {loggedinUser.firstName}
              </Typography>
            )}
          </div>
          <div style={{ borderRadius: 5, overflow: "hidden" }}>
            <video ref={userVideo} autoPlay playsInline />
            {currentCall && (
              <Typography mt={4} variant='h3'>
               Supervisor
              </Typography>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Videocall;
