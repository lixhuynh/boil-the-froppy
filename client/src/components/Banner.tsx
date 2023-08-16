function Banner() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/src/assets/froggy.svg"
            width="50"
            height="30"
            className="icon d-inline-block align-top"
            style={{ padding: "0 10px" }}
          />
          boil the froppy
        </a>
        <a className="nav-link" href="https://github.com/lixhuynh">
          created by @lixhuynh
        </a>
      </div>
    </nav>
  );
}

export default Banner;
