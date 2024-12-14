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
import { useEffect, useState } from "react";

export const useChat = () => {
  const dispatch = useDispatch();
  const inbox = useSelector((state) => state.chats.inbox);
  const isLoading = useSelector((state) => state.chats.isLoading);
  const isError = useSelector((state) => state.chats.isError);
  const errorMessage = useSelector((state) => state.chats.errorMessage);
  const [chat, setChat] = useState([])

  const fetchInbox = (payload) => dispatch(getInbox(payload));
  const fetchAllChats = (payload) => dispatch(getAllChats(payload));
  const fetchChatById = (payload) => dispatch(getChatById(payload));
  const updateChatAction = (payload) => dispatch(updateChat(payload));
  const deleteChatAction = (payload) => dispatch(deleteChat(payload));
  const sendMessageAction = (payload) => dispatch(sendMessage(payload));
  const fetchChatHistory = (payload) => dispatch(getChatHistory(payload));


  useEffect(() => {

    setChat(() =>inbox?.map((e) => serialise(e)) )
  }, [inbox])
  const serialise = (inboxObj) => {
    const { model, details } = inboxObj
    const { firstName, lastName, role, name, _id} = details
    if (model === "Student") {

      return {
        userId: _id,
        name: firstName + " " + lastName,
        role: role,
        model: model
      };
    } else {
      return {
        userId: _id,
        name: name, role: role, model: model
      };
    }

  }

  return {
    inbox : chat,
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
