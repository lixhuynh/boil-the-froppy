import React, { useState } from "react";
import RecCardGrid from "./RecCardGrid";

function SearchForm() {
  const [content, setContent] = useState([]);
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
        const res = await fetch("https://btf-server.vercel.app/api", params);
        const resData = await res.json();
        setContent(resData);
        setContentLoaded(true);
      } catch (error) {
        throw error;
      }
    }

    postData();
  }

  return (
    <>
      <div
        className="centered-container"
        style={{ padding: "30px 0px 0px 0px" }}
      >
        <h5>
          find a path between two anime using MyAnimeList recommendations!
        </h5>
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
        {contentLoaded && <RecCardGrid path={content} />}
      </div>
    </>
  );
}

export default SearchForm;
