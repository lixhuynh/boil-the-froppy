import { useState } from "react";
import RecCardGrid from "./RecCardGrid";

function SearchForm() {
  const [contentLoaded, setContentLoaded] = useState(false);
  const loadContent = async () => {
    setContentLoaded(true);
  };

  return (
    <>
      <div className="centered-container">
        find a path between two anime using MyAnimeList recommendations!
      </div>
      <div className="centered-container">
        <form>
          <input type="text" name="anime-to" />
          <span style={{ margin: "0 5px" }}>to</span>
          <input type="text" name="anime-from" />
          <button
            className="btn btn-success"
            type="submit"
            onClick={loadContent}
          >
            kero!
          </button>
        </form>
      </div>
      <div className="centered-container">
        {contentLoaded && <RecCardGrid />}
      </div>
    </>
  );
}

export default SearchForm;
