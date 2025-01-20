import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderThree } from "../../Components/Headers/HeaderThree";
import SearchBar from "../../Components/Searchbar/SearchBar";
import {
  collabState,
  createCollaboration,
  deleteCollaboration,
  getStudentCollaborations,
  updateCollaboration,
} from "../../Features/Slices/collaborationSlice";
import { selectStudentInfo } from "../../Features/Slices/studentSlice";
import Typography from "../../assets/scss/components/Typography";
import { CollaborationCard } from "./components/CollaborationCard";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomModal from "../../Components/Modal/Modal";
import useModal from "../../Hooks/useModal";
import { Form, Input } from "rsuite";
import Footer from "../LandingPage/Section/Footer";

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

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEdit, setEdit] = useState(false);
  const [cardId, setCardId] = useState("");
  const [refresh, setRefresh] = useState(false)

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
  const handleReset = () => {
    hide();
    setSearch("");
    setSearchQuery("");
    setTitle("");
    setDescription("");
    setEdit(false);
    setCardId("");
  };
  const handleEdit = (data) => {
    setEdit(true);
    const { title, description, cardId } = data;
    setTitle(title);
    setDescription(description);
    setCardId(cardId);
    console.log(data);
    show();
  };

  const handleDelete = (paperId) => {
    dispatch(deleteCollaboration({ paperId })).then(() => {

      setRefresh(true);
    })
    // dispatch delete fn
  };

  const handleSubmit = () => {
    const student_info = localStorage.getItem("studentInfo");

    let student_id = null;
    if (student_info) {
      const parsedStudentInfo = JSON.parse(student_info);
      student_id = parsedStudentInfo._id;
    }

    if (isEdit) {
      dispatch(updateCollaboration({ title, description, paperId: cardId }));
      setRefresh(!refresh);
    } else {
      if (student_id) {
        dispatch(createCollaboration({ title, description, createdBy: student_id }));
      } else {
        console.error("Student ID not found. Cannot create collaboration.");
      }
    }
    hide();
  };
  useEffect(() => {
    dispatch(
      getStudentCollaborations({
        studentId: studentId._id,
      })
    );
  }, [refresh]);

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
                    cardId={_id}
                    description={description}
                    username={d.username}
                    userImage={""}
                    userId={studentId?._id}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                );
              })
              : "Looks like you have not created any collaborations yet. Click Add New to create a new collaboration."}
          </div>
        </div>
      </div>

      <CustomModal open={isOpen} handleClose={handleReset}>
        <CustomModal.Header>
          <h3>
            {isEdit
              ? `Update Collaboration Request`
              : `Add New Collaboration Request`}
          </h3>
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
                    value={title}
                    size='md'
                  />
                  <Form.HelpText tooltip>Required</Form.HelpText>
                </div>
              </Form.Group>
              <Form.Group controlId='textarea-6'>
                <Form.ControlLabel>Description</Form.ControlLabel>
                <Input
                  as='textarea'
                  value={description}
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
              handleReset();
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
      <Footer/>
    </>
  );
};

export default MyCollaborations;
