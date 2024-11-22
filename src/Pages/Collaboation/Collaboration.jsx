import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderThree } from "../../Components/Headers/HeaderThree";
import CustomModal from "../../Components/Modal/Modal";
import PaginationComponent from "../../Components/Pagination/PaginationComponent";
import SearchBar from "../../Components/Searchbar/SearchBar";
import { useCollaboration } from "../../Hooks/use-collaboration";
import Typography from "../../assets/scss/components/Typography";
import { CollaborationCard } from "./components/CollaborationCard";
import useModal from "../../Hooks/useModal";
import { Form } from "rsuite";
import { Input } from "rsuite";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { createCollabConvo } from "../../Features/Slices/chatSlice";
import { selectStudentInfo } from "../../Features/Slices/studentSlice";
const breadcrumbPath = [
  {
    label: "Home",
    path: "/",
  },
];

const Collaboration = () => {
  /*
  ----------------------------------------------------------------
                         MESSAGE STATES
  ----------------------------------------------------------------
  */
  const dispatch = useDispatch();
  const {
    isOpen: isCollabMessageModalOpen,
    show: showCollabMessageModal,
    hide: hideCollabMessageModal,
  } = useModal();
  const [message, setMessage] = useState();
  const [selectedCard, setSelectedCard] = useState("");
  const loggedinUser = useSelector(selectStudentInfo)

  /*
  ----------------------------------------------------------------
                         COLLAB PAGE STATES
  ----------------------------------------------------------------
  */
  const limit = 9;
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePage, setActivePage] = useState(1);

  const { data } = useCollaboration(
    limit,
    (activePage - 1) * limit,
    searchQuery
  );

  const { allCollaborations, count, loading } = data;

  /*
  ----------------------------------------------------------------
                          SEARCHING
  ----------------------------------------------------------------
  */
  const handleSearch = () => {
    setSearchQuery(search.trim());
  };

  const handleInputChange = (value) => {
    setSearch(value);
    if (value.trim() === "") {
      setSearchQuery("");
    }
  };
  /*
  ----------------------------------------------------------------
                          Handlers
  ----------------------------------------------------------------
  */

  const reset = () => {
    hideCollabMessageModal();
    setMessage("");
    setSelectedCard("");
  };
  const handleCollabRequest = (data) => {
    setSelectedCard(data);
    showCollabMessageModal();
  };

  const handleSubmitCollabRequest = () => {
    const payload = {
      content: message,
      sender: loggedinUser._id,
      senderModel: "Student",
      recipient: selectedCard?.createdBy,
      recipientModel: "Student",
    };

    dispatch(createCollabConvo(payload));
    reset()
  };

  return (
    <div>
      <HeaderThree breadcrumbPath={breadcrumbPath} title={"Collaboration"} />
      <div className='default__layout_container'>
        <Typography size={"3xl"} variant={"bold"} className={"text-center"}>
          Find Your Next Research Collaboration
        </Typography>

        <SearchBar
          value={search}
          handleChange={handleInputChange}
          handleSearch={handleSearch}
          placeholder='Search Collaboration'
        />

        <div className='flex collaboration__cards_wrapper flex-wrap'>
          {allCollaborations.length && !loading
            ? allCollaborations?.map((d) => {
                const { _id, title, description } = d;
                return (
                  <CollaborationCard
                    cardInfo ={d}

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

        <PaginationComponent
          total={count}
          limit={limit}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </div>

      <div>
        <CustomModal open={isCollabMessageModalOpen} handleClose={reset}>
          <CustomModal.Header>
            <Typography size={"xl"}>Send Collaboration Request</Typography>
          </CustomModal.Header>
          <CustomModal.Body>
            <div>
              <Form fluid>
                <Form.Group controlId='textarea-6'>
                  <Form.ControlLabel>Write Message</Form.ControlLabel>
                  <Input
                    as='textarea'
                    value={message}
                    onChange={setMessage}
                    name='message'
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
  );
};

export default Collaboration;
