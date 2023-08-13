import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import SearchForm from "./components/SearchForm";

function App() {
  const [backendData, setBackendData] = useState({ query: [0] });
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
      <SearchForm data={backendData} />
      <Footer />
    </div>
  );
}

export default App;
