import React, { useState } from 'react'
import Typography from '../../../assets/scss/components/Typography';
import SearchBar from '../../../Components/Searchbar/SearchBar';
import { useCollaboration } from '../../../Hooks/use-collaboration';
import { CollaborationCard } from '../../Collaboation/components/CollaborationCard';
import { useDispatch, useSelector } from "react-redux";
import { selectStudentInfo } from '../../../Features/Slices/studentSlice';
import useModal from '../../../Hooks/useModal';
import CustomModal from '../../../Components/Modal/Modal';
import { Form } from "rsuite";
import { Input } from "rsuite";
import CustomButton from '../../../Components/CustomButton/CustomButton';
import { sendMessage } from '../../../Features/Slices/chatSlice';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

function HomeCollaboration() {

    const limit = 3;
    const [search, setSearch] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const dispatch = useDispatch();
    const {
        isOpen: isCollabMessageModalOpen,
        show: showCollabMessageModal,
        hide: hideCollabMessageModal,
    } = useModal();
    const [message, setMessage] = useState();
    const [selectedCard, setSelectedCard] = useState("");
    const loggedinUser = useSelector(selectStudentInfo);

    const { data } = useCollaboration(
        limit,
        0,
        searchQuery
    );
    const { allCollaborations, loading } = data;

    const handleSearch = () => {
        setSearchQuery(search.trim());
    };

    const handleInputChange = (value) => {
        setSearch(value);
        if (value.trim() === "") {
            setSearchQuery("");
        }
    };
    const handleCollabRequest = (data) => {
        setSelectedCard(data);
        showCollabMessageModal();
    };

    const reset = () => {
        hideCollabMessageModal();
        setMessage("");
        setSelectedCard("");
    };

    const handleSubmitCollabRequest = () => {
        const payload = {
            content: message,
            sender: loggedinUser._id,
            senderModel: "Student",
            recipient: selectedCard?.createdBy,
            recipientModel: "Student",
        };

        dispatch(sendMessage(payload));
        reset();
    };

    return (
        <div className="default__layout_container">
            <div  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <Typography size={"3xl"} variant={"bold"} className={""}>
                     Find Your Next Research Collaboration
                 </Typography>
                  <Link to="/collaboration" style={{ textDecoration: 'underline', color: '#49BBBD', }} className='link-text'  >
                    <Typography size={"lg"}   variant={"bold"} className={""}>
                    View All
                    </Typography>
                 </Link>
            </div>
           

            {/* <SearchBar
                value={search}
                handleChange={handleInputChange}
                handleSearch={handleSearch}
                placeholder="Search Collaboration"
            /> */}

            <div className="flex collaboration__cards_wrapper flex-wrap">
                {allCollaborations.length && !loading
                    ? allCollaborations?.map((d) => {
                        const { _id, title, description } = d;
                        return (
                            <CollaborationCard
                                cardInfo={d}
                                title={title}
                                key={_id}
                                description={description}
                                username={d?.username}
                                userImage={""}
                                handleMessage={handleCollabRequest}
                            />
                        );
                    })
                    : "Trying to fetch data..."}
            </div>
            <div>
                <CustomModal open={isCollabMessageModalOpen} handleClose={reset}>
                    <CustomModal.Header>
                        <Typography size={"xl"}>Send Collaboration Request</Typography>
                    </CustomModal.Header>
                    <CustomModal.Body>
                        <div>
                            <Form fluid>
                                <Form.Group controlId="textarea-6">
                                    <Form.ControlLabel>Write Message</Form.ControlLabel>
                                    <Input
                                        as="textarea"
                                        value={message}
                                        onChange={setMessage}
                                        name="message"
                                    />
                                </Form.Group>
                            </Form>
                        </div>
                    </CustomModal.Body>
                    <CustomModal.FooterLeft>
                        <CustomButton onClick={reset}>Cancel</CustomButton>
                    </CustomModal.FooterLeft>
                    <CustomModal.FooterRight>
                        <CustomButton
                            variant={"primary"}
                            onClick={handleSubmitCollabRequest}
                        >
                            Submit
                        </CustomButton>
                    </CustomModal.FooterRight>
                </CustomModal>
            </div>
        </div>

    )
}

export default HomeCollaboration
