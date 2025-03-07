import { useState } from "react";
import Typography from "../../assets/scss/components/Typography";
import ConsultCard from '../../Components/Consultant_card/ConsultCard';
import { HeaderThree } from "../../Components/Headers/HeaderThree";
import PaginationComponent from "../../Components/Pagination/PaginationComponent";
import SearchBar from "../../Components/Searchbar/SearchBar";
import { useConsultancyCard } from "../../Hooks/useConsultancyCard";
import Footer from "../LandingPage/Section/Footer";
const Experts = () => {
  const limit = 9;
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activePage, setActivePage] = useState(1);

  const {
    consultancyCardData: consultancyCards,
    consultancyCount,
    isLoading,
    isError,
  } = useConsultancyCard(limit, (activePage - 1) * limit, searchTerm);


  const handleInputChange = (value) => {
    setSearchInput(value);
    if (value.trim() === "") {
      setSearchTerm("");
    }
  };

  const handleSearch = () => {
    setSearchTerm(searchInput.trim());
    setActivePage(1);
  };

  const image = "https://res.cloudinary.com/dsxrpa0ja/image/upload/v1732090327/imgae_eizrwi.png";
  const qualification = "Btech";
  const breadcrumbPath = [{ label: "Home", path: "/" }];

  return (
    <div>
      <HeaderThree title="EXPERTS" breadcrumbPath={breadcrumbPath} />
      <div className="default__layout_container">

        <Typography size={"3xl"} variant={"bold"} className={"text-center experts_mid_header1"}>
          Find your next research eSupervisor

        </Typography>

        <SearchBar
          value={searchInput}
          handleChange={handleInputChange}
          handleSearch={handleSearch}
          placeholder="Enter Expert's Name"
        />

        <Typography size={"md"} variant={"bold"} className={"text-center experts_mid_header2"}>
          Loved by over 600 academics
        </Typography>

        <div className="experts_div">
          <h3 className="top_experts">
            Top Experts
          </h3>
          <div className="cards-list">
            {!isLoading && !isError ? (
              consultancyCards.length > 0 ? (
                consultancyCards.map((d) => {
                  console.log(d)
                  const { title, description, teacherId, _id } = d;
                  const { name, qualification, experience} = teacherId
                  return (
                    <ConsultCard
                      data={d}
                      key={teacherId}
                      image={image}
                      title={title}
                      description={description}
                      name={teacherId?.name || "Unknown"}
                      qualification={qualification}
                    />
                  );
                })
              ) : (
                <p>No experts found</p>
              )
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>

        {/* <ConsultCard/> */}

        <PaginationComponent
          total={consultancyCount}
          limit={limit}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default Experts;
