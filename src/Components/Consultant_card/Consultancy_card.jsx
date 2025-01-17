import React from 'react';
import { MdSend } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';

const Consultancy_card = ({ image, title, description, name, qualification, data }) => {
    const navigate = useNavigate()
    const { _id , teacherId } = data

    return (
        <div className='card'>
            <div className='card-left'>
                <img src={image} alt="" className='user-img' />
            </div>
            <div className='card-right'>
                <div className='card-right-upper'>
                    <p className='title'>{title}</p>
                    <p className='description'>{description && description?.substring(0,128)}</p>
                </div>
                <div className='card-right-low'>
                    <p>{name}</p>
                    <p>Qualification : {qualification}</p>
                    <div className='buttons'>
                        <CustomButton onClick={() =>navigate(`/supervisor/${_id}`)} fullWidth variant={"primary"} fontWeight={"semibold"}  className="">Hire me <MdSend style={{ color: "white", marginLeft: "10px" }} /></CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Consultancy_card
