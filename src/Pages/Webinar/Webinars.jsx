// import React from 'react';
// import { Panel } from 'rsuite';
// import Typography from '../../assets/scss/components/Typography';
// import WebinarCard from '../../Components/WebinarCard/WebinarCard';
// import '../../assets/scss/components/webinarCard.scss'
// import { useWebinar } from '../../Hooks/use-Webinar';
// const Webinars = () => {
//   const {
//     webinars,
//     totalCount,
//     webinarById,
//     isError,
//     isLoading,
//   } = useWebinar(5);
//   console.log(webinars);
//   return (
//     <Panel className="recommended-courses">
//       {/* Header */}
//       <div className="recommended-header">
//         <Typography size="2xl" variant="medium">
//           Featured Webinar
//         </Typography>
//       </div>
//       {/* Webinars Grid */}
//       <div className="courses-container">
//         {webinars.map((webinar) => (
//           <div className="courses-item" key={webinar.id}>
//             <WebinarCard webinar={webinar} />
//           </div>
//         ))}
//       </div>
//     </Panel>
//   );
// };
// export default Webinars;