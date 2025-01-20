import Typography from "../../../assets/scss/components/Typography";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import SendMessage from "../../../assets/Icons/send_message_arrow.svg?react";
import { selectStudentInfo } from "../../../Features/Slices/studentSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CollaborationCard = ({
  title,
  description,
  cardId,
  userImage,
  username,
  userId,
  handleMessage,
  cardInfo,
  handleEdit,
  handleDelete
}) => {
  const studentInfo = useSelector(selectStudentInfo);
  const navigate  =  useNavigate()
  const isOwner = userId === studentInfo?._id;
  return (
    <div className='collaboration__card__container'>
      <div className='collaboration__card__container--inner-wrapper'>
        <div>
          <Typography size={"xl"} variant={"semibold"}>
            {title}
          </Typography>
          <div>
            <div>
              <img src={userImage} alt='' />
            </div>
            <Typography>{username}</Typography>
          </div>

          <div>
            <Typography
              size={"xs"}
              variant={"regular"}
              fontColor={"neutral40"}
              className={"text-justify"}
            >
              {description}
            </Typography>
          </div>
        </div>

        {isOwner && studentInfo ? (
          <div className='flex flex-between'>
            <CustomButton
              variant={"primary"}
              onClick={() => {
                handleEdit({
                  cardId,
                  title,
                  description,
                });
              }}
            >
              Edit
            </CustomButton>
            <CustomButton
              color={"red"}
              appearance={"primary"}
              onClick={() => handleDelete(cardId)}
            >
              Delete
            </CustomButton>
          </div>
        ) : (
          <CustomButton
            variant={"primary"}
            onClick={() =>
              studentInfo ? handleMessage({ ...cardInfo, userId }) : navigate("/signin")
            }
            className={"collaboration__card_action_btn"}
          >
            Send Message <SendMessage />
          </CustomButton>
        )}
      </div>
    </div>
  );
};
