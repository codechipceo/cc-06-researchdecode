import React from 'react'
import { MdSend } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import CustomButton from '../CustomButton/CustomButton';

const Consultancy_card = ({ image, title, description, name, qualification }) => {
    // const title1 = "Full stack developer";
    // const description1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, tempore!";
    // const name1 = "Amit pattanaik";
    // const qualification1 = "Btech";
    return (
        <div className='card'>
            <div className='card-left'>
                <img src={image} alt="" className='user-img' />
            </div>
            <div className='card-right'>
                <div className='card-right-upper'>
                    <p className='title'>{title}</p>
                    <p className='description'>{description}</p>
                </div>
                <div className='card-right-low'>
                    <p>{name}</p>
                    <p>Qualification : {qualification}</p>
                    <div className='buttons'>
                        <CustomButton /*onClick={() => navigate(`/signin`)}*/ variant={"primary"} fontWeight={"semibold"} className="get-started btn-size-11">Hire me <MdSend style={{ color: "white", marginLeft: "10px" }} /></CustomButton>
                        <AiOutlineMessage size={50} color="aqua" style={{ cursor: "pointer" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Consultancy_card
