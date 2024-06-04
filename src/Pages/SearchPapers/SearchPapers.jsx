import { Fragment } from "react";
import { useResearchPaper } from "../../Hooks/use-researchPaper";

export const SearchPapers = () => {
  const { doiNumber, setDoiNumber, handleSearch } = useResearchPaper();
  return (
    <Fragment>
      <input
        type='text'
        value={doiNumber}
        onChange={(e) => setDoiNumber(e.target.value)}
      />
      <button onClick={(e) => handleSearch(e, doiNumber)}>Search</button>
    </Fragment>
  );
};
