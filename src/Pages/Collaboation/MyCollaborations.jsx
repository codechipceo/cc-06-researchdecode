import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderThree } from "../../Components/Headers/HeaderThree";
import SearchBar from "../../Components/Searchbar/SearchBar";
import { collabState, getStudentCollaborations } from "../../Features/Slices/collaborationSlice";
import { selectStudentInfo } from "../../Features/Slices/studentSlice";
import Typography from "../../assets/scss/components/Typography";
import { CollaborationCard } from "./components/CollaborationCard";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomModal from "../../Components/Modal/Modal";
import useModal from "../../Hooks/useModal";

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
  const { isOpen, show, hide} = useModal()

  const studentId = useSelector(selectStudentInfo);
  const dispatch = useDispatch();
  const collabStore = useSelector(collabState);

  const {myCollaborations , loading} = collabStore;



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

      <CustomButton variant={'primary'} onClick={show}>
        + Add new
      </CustomButton>
        <div className='flex collaboration__cards_wrapper flex-wrap'>
          {myCollaborations.length && !loading
            ? myCollaborations
                .map((d) => {
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
            header

        </CustomModal.Header>
        <CustomModal.Body>
          body
        </CustomModal.Body>

        <CustomModal.FooterLeft>
          Footer left
        </CustomModal.FooterLeft>
        <CustomModal.FooterRight>
          footer right
        </CustomModal.FooterRight>
      </CustomModal>
    </>
  );
};

export default MyCollaborations;
