import { useState } from "react";
import { HeaderThree } from "../../Components/Headers/HeaderThree";
import SearchBar from "../../Components/Searchbar/SearchBar";
import Typography from "../../assets/scss/components/Typography";
import { CollaborationCard } from "./components/CollaborationCard";
import PaginationComponent from "../../Components/Pagination/PaginationComponent";
import { useCollaboration } from "../../Hooks/use-collaboration";
const breadcrumbPath = [
  {
    label: "Home",
    path: "/",
  },
];

const dummyData = [
  {
    title: "Sample Collaboration",
    description:
      "This is a sample collaboration. It's a great opportunity to learn and grow together.This is a sample collaboration. It's a great opportunity to learn and grow together.This is a sample collaboration. It's a great opportunity to learn and grow together.This is a sample collaboration. It's a great opportunity to learn and grow together.This is a sample collaboration.",
    collaborators: ["User 1", "User 2", "User 3"],
    tags: ["AI", "Machine Learning", "Data Science"],
    date: "2022-01-01",
    status: "Active",
    username: "mansab",
  },
  {
    title: "Sample Collaboration",
    description:
      "This is a sample collaboration. It's a great opportunity to learn and grow together.This is a sample collaboration. It's a great opportunity to learn and grow together.This is a sample collaboration. It's a great opportunity to learn ",
    collaborators: ["User 1", "User 2", "User 3"],
    tags: ["AI", "Machine Learning", "Data Science"],
    date: "2022-01-01",
    status: "Active",
    username: "ubaid",
  },
  {
    title: "Sample Collaboration",
    description:
      "This is a sample collaboration. It's a great opportunity to learn and grow together.This is a sample collaboration. It's a great opportunity to learn and grow together.This is a sample collaboration. It's a great opportunity to learn ",
    collaborators: ["User 1", "User 2", "User 3"],
    tags: ["AI", "Machine Learning", "Data Science"],
    date: "2022-01-01",
    status: "Active",
    username: "ubaid",
  },
];

const Collaboration = () => {
  /*
  ----------------------------------------------------------------
                         STATES
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
                    title={title}
                    key={_id}
                    description={description}
                    username={d.username}
                    userImage={""}
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
    </div>
  );
};

export default Collaboration;
