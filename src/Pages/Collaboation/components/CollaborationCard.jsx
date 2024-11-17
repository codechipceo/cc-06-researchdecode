import Typography from "../../../assets/scss/components/Typography";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import SendMessage  from "../../../assets/Icons/send_message_arrow.svg?react";
import { selectStudentInfo } from "../../../Features/Slices/studentSlice";
import { useSelector } from "react-redux";

export const CollaborationCard = ({
  title,
  description,
  userImage,
  username,
  userId,
  handleBtnClick,
}) => {

  const studentInfo = useSelector(selectStudentInfo)
  const isOwner = userId === studentInfo._id
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

        {isOwner ? (
<div className='flex flex-between'>
          <CustomButton variant={"primary"}>Edit</CustomButton>
          <CustomButton color={"red"} appearance={"primary"}>
            Delete
          </CustomButton>
        </div>
        ) : <CustomButton
          variant={"primary"}
          onClick={handleBtnClick}
          className={"collaboration__card_action_btn"}
        >
          Send Message <SendMessage />
        </CustomButton>}



      </div>
    </div>
  );
};
