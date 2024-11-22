import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderThree } from "../../Components/Headers/HeaderThree";
import SearchBar from "../../Components/Searchbar/SearchBar";
import {
  collabState,
  createCollaboration,
  getStudentCollaborations,
} from "../../Features/Slices/collaborationSlice";
import { selectStudentInfo } from "../../Features/Slices/studentSlice";
import Typography from "../../assets/scss/components/Typography";
import { CollaborationCard } from "./components/CollaborationCard";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomModal from "../../Components/Modal/Modal";
import useModal from "../../Hooks/useModal";
import { Form, Input } from "rsuite";

const breadcrumbPath = [
  {
    label: "Home",
    path: "/",
  },
];

const MyCollaborations = () => {
  /*
  ----------------------------------------------------------------
                         STATES
  ----------------------------------------------------------------
  */

  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const { isOpen, show, hide } = useModal();

  const  [title, setTitle] = useState("")
  const  [description, setDescription] = useState("")

  const studentId = useSelector(selectStudentInfo);
  const dispatch = useDispatch();
  const collabStore = useSelector(collabState);

  const { myCollaborations, loading } = collabStore;

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
                          HANDLER FUNCTIONS
  ----------------------------------------------------------------
  */



  const  handleSubmit = () => {

    dispatch(createCollaboration({
      title,description
    }))

    hide()
  }
  useEffect(() => {
    dispatch(
      getStudentCollaborations({
        studentId: studentId._id,
      })
    );
  }, []);

  return (
    <>
      <div>
        <HeaderThree
          breadcrumbPath={breadcrumbPath}
          title={"My Collaborations"}
        />
        <div className='default__layout_container'>
          <Typography size={"3xl"} variant={"bold"} className={"text-center"}>
            Search Your Collaborations
          </Typography>

          <SearchBar
            value={search}
            handleChange={handleInputChange}
            handleSearch={handleSearch}
            placeholder='Search Collaboration'
          />

          <CustomButton variant={"primary"} onClick={show}>
            + Add new
          </CustomButton>
          <div className='flex collaboration__cards_wrapper flex-wrap'>
            {myCollaborations.length && !loading
              ? myCollaborations.map((d) => {
                  const { _id, title, description } = d;
                  return (
                    <CollaborationCard
                      title={title}
                      key={_id}
                      description={description}
                      username={d.username}
                      userImage={""}
                      userId={studentId?._id}
                    />
                  );
                })
              : "Looks like you have not created any collaborations yet. Click Add New to create a new collaboration."}
          </div>
        </div>
      </div>

      <CustomModal open={isOpen} handleClose={hide}>
        <CustomModal.Header>
          <h3>Add New Collaboration Request</h3>
        </CustomModal.Header>
        <CustomModal.Body>
          <div>
            <Form fluid>
              <Form.Group controlId='title'>
                <Form.ControlLabel>Title</Form.ControlLabel>
                <div className='flex'>
                  <Form.Control
                    name='title'
                    onChange={setTitle}
                    size='md'
                  />
                  <Form.HelpText tooltip>Required</Form.HelpText>
                </div>
              </Form.Group>
              <Form.Group controlId='textarea-6'>
                <Form.ControlLabel>Description</Form.ControlLabel>
                <Input
                  as='textarea'
                  onChange={setDescription}
                  name='description'
                />
              </Form.Group>
            </Form>
          </div>
        </CustomModal.Body>

        <CustomModal.FooterLeft>
          <CustomButton
            onClick={() => {
              hide();
            }}
          >
            Cancel
          </CustomButton>
        </CustomModal.FooterLeft>
        <CustomModal.FooterRight>
          <CustomButton variant='primary' onClick={handleSubmit}>
            Submit
          </CustomButton>
        </CustomModal.FooterRight>
      </CustomModal>
    </>
  );
};

export default MyCollaborations;
