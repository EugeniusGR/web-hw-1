import {
  Header,
  InfoBlock,
  MarketPlace,
  News,
  About,
  Creator,
} from "./components";
import { useState } from "react";

import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Header page={page} setPage={setPage} />
      {page === "home" && (
        <>
          <InfoBlock />
          <MarketPlace />
        </>
      )}

      {page === "news" && (
        <>
          <News />
        </>
      )}
      {page === "about" && (
        <>
          <About />
        </>
      )}
      {page === "creator" && (
        <>
          <Creator />
        </>
      )}
    </>
  );
}

export default App;
