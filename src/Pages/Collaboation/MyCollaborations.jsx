import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderThree } from "../../Components/Headers/HeaderThree";
import SearchBar from "../../Components/Searchbar/SearchBar";
import { collabState, getStudentCollaborations } from "../../Features/Slices/collaborationSlice";
import { selectStudentInfo } from "../../Features/Slices/studentSlice";
import Typography from "../../assets/scss/components/Typography";
import { CollaborationCard } from "./components/CollaborationCard";

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
            : "Trying to fetch data..."}
        </div>


      </div>
    </div>
  );
};

export default MyCollaborations;
