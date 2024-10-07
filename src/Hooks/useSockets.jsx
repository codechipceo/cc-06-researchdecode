import { useEffect } from "react";
import { useMemo } from "react";
import { io } from "socket.io-client";
const activeEnv = import.meta.env.VITE_NODE_ENV;
const defaultUrl =
  activeEnv === "test"
    ? "https://api.researchdecode.com/"
    : "http://localhost:5000";
const defaultOptions = {
  reconnectionAttempts: 5,
  transports: ["websocket"],
  // autoConnect:false
};
export const useSockets = (url = defaultUrl, options = defaultOptions) => {
  const socket = useMemo(
    () => io(url, { ...defaultOptions, ...options }),
    [url, options]
  );

  useEffect(() => {
    // Cleanup function to disconnect socket on unmount
    return () => {
      console.log(socket);
      if (socket) {
        socket.emit("leaveroom", "left");
        //  socket.disconnect();
      }
    };
  }, [socket]);

  return { socket, io };
};
