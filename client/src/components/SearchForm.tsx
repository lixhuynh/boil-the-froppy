import { useState } from "react";
import RecCardGrid from "./RecCardGrid";

function SearchForm() {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [animeFrom, setAnimeFrom] = useState("");
  const [animeTo, setAnimeTo] = useState("");

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    async function postData() {
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([animeFrom, animeTo]),
      };
      try {
        const res = await fetch("/api", params);
        const resData = await res.json();
        console.log(resData);
        setContentLoaded(true);
      } catch (error) {
        throw error;
      }
    }

    postData();
  }

  return (
    <>
      <div className="centered-container">
        find a path between two anime using MyAnimeList recommendations!
      </div>
      <div className="centered-container">
        <form onSubmit={submitForm}>
          <input
            type="text"
            name="anime-from"
            value={animeFrom}
            onChange={(val) => setAnimeFrom(val.target.value)}
          />
          <span style={{ margin: "0 5px" }}>to</span>
          <input
            type="text"
            name="anime-to"
            value={animeTo}
            onChange={(val) => setAnimeTo(val.target.value)}
          />
          <button className="btn btn-success" type="submit">
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
