import { useMemo } from "react";
import { io } from "socket.io-client";

const defaultUrl = "http://localhost:5001";
const defaultOptions = {
  reconnectionAttempts: 5,
  transports: ["websocket"],
};
export const useSockets = (url = defaultUrl, options = defaultOptions) => {
  const socket = useMemo(
    () => io(url, { ...defaultOptions, ...options }),
    [url, options]
  );

  return { socket, io };
};
