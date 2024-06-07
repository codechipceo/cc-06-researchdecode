// import { Fragment } from "react";
// import { useResearchPaper } from "../../Hooks/use-researchPaper";

// export const SearchPapers = () => {
//   const { doiNumber, setDoiNumber, handleSearch } = useResearchPaper();
//   return (
//     <Fragment>
//       <input
//         type='text'
//         value={doiNumber}
//         onChange={(e) => setDoiNumber(e.target.value)}
//       />
//       <button onClick={(e) => handleSearch(e, doiNumber)}>Search</button>
//     </Fragment>
//   );
// };

import React from "react";
import PaperCard from "../../Components/card";
import { useResearchPaper } from "../../Hooks/use-researchPaper";

export const SearchPapers = () => {
  const {
    doiNumber,
    setDoiNumber,
    researchPaper,
    isLoading,
    isError,
    handleSearch,
  } = useResearchPaper();

  return (
    <div>
      <form onSubmit={(e) => handleSearch(e, doiNumber)}>
        <input
          type="text"
          value={doiNumber}
          onChange={(e) => setDoiNumber(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error fetching research paper</p>
      ) : researchPaper ? (
        <PaperCard
        title={researchPaper.title}
        author={researchPaper.author}
        publishedDate={researchPaper.publishedDate}
        doi={researchPaper.DOI}
        language={researchPaper.language}
        abstract={researchPaper.abstract}
      />
      ) : null}
    </div>
  );
};

