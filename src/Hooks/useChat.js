import { useDispatch, useSelector } from "react-redux";
import {
  getInbox,
  getAllChats,
  getChatById,
  updateChat,
  deleteChat,
  sendMessage,
  getChatHistory,
} from "../Features/Slices/chatSlice";

export const useChat = () => {
  const dispatch = useDispatch();
  const inbox = useSelector((state) => state.chats.inbox);
  const isLoading = useSelector((state) => state.chats.isLoading);
  const isError = useSelector((state) => state.chats.isError);
  const errorMessage = useSelector((state) => state.chats.errorMessage);

  const fetchInbox = (payload) => dispatch(getInbox(payload));
  const fetchAllChats = (payload) => dispatch(getAllChats(payload));
  const fetchChatById = (payload) => dispatch(getChatById(payload));
  const updateChatAction = (payload) => dispatch(updateChat(payload));
  const deleteChatAction = (payload) => dispatch(deleteChat(payload));
  const sendMessageAction = (payload) => dispatch(sendMessage(payload));
  const fetchChatHistory = (payload) => dispatch(getChatHistory(payload));

  return {
    inbox,
    isLoading,
    isError,
    errorMessage,
    fetchInbox,
    fetchAllChats,
    fetchChatById,
    updateChatAction,
    deleteChatAction,
    sendMessageAction,
    fetchChatHistory,
  };
};
