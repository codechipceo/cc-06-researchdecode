import { useState } from 'react';
import { HeaderThree } from '../../Components/Headers/HeaderThree';
import SearchBar from '../../Components/Searchbar/SearchBar';
import Typography from '../../assets/scss/components/Typography';
import { CollaborationCard } from './components/CollaborationCard';
import PaginationComponent from '../../Components/Pagination/PaginationComponent';
const breadcrumbPath = [
  {
    label: "Home",
    path: "/",
  },
]

const dummyData = [
  {
  title: "Sample Collaboration",
  description:
    "This is a sample collaboration. It's a great opportunity to learn and grow together.This is a sample collaboration. It's a great opportunity to learn and grow together.This is a sample collaboration. It's a great opportunity to learn and grow together.This is a sample collaboration. It's a great opportunity to learn and grow together.This is a sample collaboration.",
  collaborators: ["User 1", "User 2", "User 3"],
  tags: ["AI", "Machine Learning", "Data Science"],
  date: "2022-01-01",
    status: "Active",
  username:'mansab'
},
  {
  title: "Sample Collaboration",
  description:
    "This is a sample collaboration. It's a great opportunity to learn and grow together.This is a sample collaboration. It's a great opportunity to learn and grow together.This is a sample collaboration. It's a great opportunity to learn ",
  collaborators: ["User 1", "User 2", "User 3"],
  tags: ["AI", "Machine Learning", "Data Science"],
  date: "2022-01-01",
    status: "Active",
  username:'ubaid'
},
  {
  title: "Sample Collaboration",
  description:
    "This is a sample collaboration. It's a great opportunity to learn and grow together.This is a sample collaboration. It's a great opportunity to learn and grow together.This is a sample collaboration. It's a great opportunity to learn ",
  collaborators: ["User 1", "User 2", "User 3"],
  tags: ["AI", "Machine Learning", "Data Science"],
  date: "2022-01-01",
    status: "Active",
  username:'ubaid'
},

]

const Collaboration = () => {
  // states
  const [search, setSearch] = useState('')
  const  [activePage, setActivePage] = useState(1)


  // handler functions
  const handleSearch = (value) => {
    console.log("searching for: ", value);

    setSearch("dne");
  }
    return (
      <div>
        <HeaderThree breadcrumbPath={breadcrumbPath} title={"Collaboration"} />
        <div className='default__layout_container'>
          <Typography size={"3xl"} variant={"bold"} className={"text-center"}>
            Find Your Next Research Collaboration
          </Typography>

          <SearchBar
            value={search}
            setValue={setSearch}
            onSearch={handleSearch}
            placeholder='Search Collaboration'
          />

          <div className='flex collaboration__cards_wrapper flex-wrap'>
            {dummyData.map((d) => {
              return (
                <CollaborationCard
                  title={d.title}
                  key={d.title}
                  description={d.description}
                  username={d.username}
                  userImage={""}
                />
              );
            })}
          </div>

          <PaginationComponent total={dummyData.length} limit={1} activePage={activePage} setActivePage={setActivePage}/>

        </div>
      </div>
    );
}

export default Collaboration