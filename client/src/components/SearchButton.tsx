import { useState } from "react";
import RecCardGrid from "./RecCardGrid";

function SearchButton() {
  const [contentLoaded, setContentLoaded] = useState(false);
  const loadContent = () => {
    setContentLoaded(true);
  };

  return (
    <>
      <div className="centered-container">
        <button type="button" className="btn btn-success" onClick={loadContent}>
          kero!
        </button>
      </div>
      <div className="centered-container">
        {contentLoaded && <RecCardGrid />}
      </div>
    </>
  );
}

export default SearchButton;
