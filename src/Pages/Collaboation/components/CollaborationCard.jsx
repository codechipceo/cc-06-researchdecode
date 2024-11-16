import Typography from "../../../assets/scss/components/Typography";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import SendMessage  from "../../../assets/Icons/send_message_arrow.svg?react";

export const CollaborationCard = ({
  title,
  description,
  userImage,
  username,
  userId,
  handleBtnClick,
}) => {
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

        <CustomButton
          variant={"primary"}
          onClick={handleBtnClick}
          className={"collaboration__card_action_btn"}
        >
          Send Message <SendMessage />
        </CustomButton>
      </div>
    </div>
  );
};
