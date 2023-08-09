import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Search from "./components/Search";
import SearchButton from "./components/SearchButton";

function App() {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);
  return (
    <div className="App">
      <Banner />
      <Search />
      <SearchButton />
      <Footer />
    </div>
  );
}

export default App;
