function Banner() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img
          src="/src/assets/froggy.svg"
          width="50"
          height="30"
          className="icon d-inline-block align-top"
          style={{ padding: "0 10px" }}
        />
        Boil the Froppy
      </a>
    </nav>
  );
}

export default Banner;
