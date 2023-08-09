function Search() {
  return (
    <>
      <div className="centered-container">
        find a path between two anime using MAL recommendations!
      </div>
      <div className="centered-container">
        <input type="text" />
        <span style={{ margin: "0 5px" }}>to</span>
        <input type="text" />
      </div>
    </>
  );
}

export default Search;
