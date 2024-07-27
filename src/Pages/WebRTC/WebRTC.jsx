import { useRef, useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5001"); // Updated port

function WebRTC() {
  const [room, setRoom] = useState("");
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnection = useRef(null);

  useEffect(() => {
    socket.on("user-joined", (userId) => {
      console.log("User joined:", userId);
      callUser(userId);
    });

    socket.on("offer", async (data) => {
      if (data.offer) {
        await peerConnection.current.setRemoteDescription(
          new RTCSessionDescription(data.offer)
        );
        const answer = await peerConnection.current.createAnswer();
        await peerConnection.current.setLocalDescription(answer);
        socket.emit("answer", { room: data.room, answer });
      }
    });

    socket.on("answer", async (data) => {
      await peerConnection.current.setRemoteDescription(
        new RTCSessionDescription(data.answer)
      );
    });

    socket.on("candidate", async (data) => {
      await peerConnection.current.addIceCandidate(
        new RTCIceCandidate(data.candidate)
      );
    });

    return () => {
      socket.off("user-joined");
      socket.off("offer");
      socket.off("answer");
      socket.off("candidate");
    };
  }, []);

  const startStream = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    localVideoRef.current.srcObject = stream;
    if (!peerConnection.current) {
      peerConnection.current = new RTCPeerConnection();
      stream
        .getTracks()
        .forEach((track) => peerConnection.current.addTrack(track, stream));

      peerConnection.current.ontrack = (event) => {
        remoteVideoRef.current.srcObject = event.streams[0];
      };

      peerConnection.current.onicecandidate = (event) => {
        if (event.candidate) {
          socket.emit("candidate", { room, candidate: event.candidate });
        }
      };
    }
  };

  const joinRoom = () => {
    socket.emit("join", room);
  };

  const callUser = async (userId) => {
    const offer = await peerConnection.current.createOffer();
    await peerConnection.current.setLocalDescription(offer);
    socket.emit("offer", { room, offer });
  };

  return (
    <div>
      <input
        type='text'
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        placeholder='Room'
      />
      <button onClick={joinRoom}>Join Room</button>
      <button onClick={startStream}>Start Stream</button>
      <div>
        <video
          ref={localVideoRef}
          autoPlay
          playsInline
          muted
          style={{ width: "300px", height: "200px" }}
        ></video>
        <video
          ref={remoteVideoRef}
          autoPlay
          playsInline
          style={{ width: "300px", height: "200px" }}
        ></video>
      </div>
    </div>
  );
}

export default WebRTC;
