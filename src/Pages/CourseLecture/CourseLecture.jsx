import React from "react";
import "./CourseLecture.scss";
import bgcl from "../../assets/Images/a1.jpeg";
import { HeaderThree } from "../../Components/Headers/HeaderThree";
import Play from "../../assets/Images/Play.png";
// import { Play } from "lucide-react";

const CourseLecture = () => {
  const breadcrumbPath = [{ label: "Home", path: "/" }];

  const playlistItems = [
    {
      id: 1,
      title: "Class 01 - Lorem Ipsum",
      duration: "20:30",
      thumbnail:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      title: "Class 02 - Lorem Ipsum",
      duration: "18:45",
      thumbnail:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      title: "Class 03 - Lorem Ipsum",
      duration: "22:15",
      thumbnail:
        "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 4,
      title: "Class 04 - Lorem Ipsum",
      duration: "19:20",
      thumbnail:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 5,
      title: "Class 05 - Lorem Ipsum",
      duration: "21:10",
      thumbnail:
        "https://images.unsplash.com/photo-1503437313881-503a91226402?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 6,
      title: "Class 06 - Lorem Ipsum",
      duration: "23:30",
      thumbnail:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <>
      <HeaderThree
        // title={"Course Lecture"}
        breadcrumbPath={breadcrumbPath}
        backgroundImage={bgcl}
      />

      <div className="course-container">
        <div className="main-content">
          <div className="video-container">
            <img
              src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1600&auto=format&fit=crop&q=80"
              alt="Course Preview"
            />
            <div className="play-button">
              {/* <Play size={32} /> */}
              <img src={Play} alt="" srcset="" />
            </div>
          </div>
          <h1 className="course-title">
            Web Development with PHP & Laravel - Class 01
          </h1>
          <p className="course-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante
            nunc, commodo dignissim diam eu, viverra sagittis urna. Vestibulum
            imperdiet metus eros, id convallis dolor venenatis eu. Vestibulum
            sollicitudin justo pharetra, elementum risus id, egestas massa. Ut
            ut consectetur arci. Aenean porta nisi quis venenatis ullamcorper.
            Duis suscipit id quam in molestie. Fusce accumsan fermentum magna at
            condimentum. Nam non nunc id tortor mattis volutpat. Nullam sed
            tellus nisi. At suscipit diam, ac suscipit tortor augue ligula,
            fermentum in nibh eu, venenatis gravida urna. Donec egestas non
            tellus non suscipit est tempus nec. Integer elementum volutpat enim,
            a lobortis tortor pretium eget.
          </p>
        </div>

        <div className="playlist-container">
          <h2 className="playlist-title">Course Playlists</h2>
          {playlistItems.map((item) => (
            <div key={item.id} className="playlist-item">
              <img src={item.thumbnail} alt={item.title} />
              <div className="item-details">
                <div className="item-title">{item.title}</div>
                <div className="item-duration">{item.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseLecture;
