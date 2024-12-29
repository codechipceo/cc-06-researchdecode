import React ,{useState} from 'react';
import { Panel } from 'rsuite';
import Typography from '../../assets/scss/components/Typography';
import WebinarCard from '../../Components/WebinarCard/WebinarCard';
import '../../assets/scss/components/webinarCard.scss'
import { useWebinar } from '../../Hooks/use-Webinar';
const AllWebinars = () => {

  const limit = 8;
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePage, setActivePage] = useState(1);

  const {
    webinars,
    totalCount,
    webinarById,
    isError,
    isLoading,
  } = useWebinar(
    limit,
    (activePage - 1) * limit,
    searchQuery
  );

  return (
    <Panel className="recommended-courses">
      {/* Header */}
      <div className="recommended-header">
        <Typography size="2xl" variant="medium">
          Featured Webinar
        </Typography>
      </div>
      {/* Webinars Grid */}
      <div className="courses-container">
        {webinars.map((webinar) => (
          <div className="courses-item" key={webinar.id}>
            <WebinarCard webinar={webinar} />
          </div>
        ))}
      </div>
    </Panel>
  );
};
export default AllWebinars;