import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <Banner />
      <SearchForm />
      <Footer />
    </div>
  );
}

export default App;
