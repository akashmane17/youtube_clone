import { useState } from "react";
import Navbar from "./scenes/navbar";
import Feed from "./scenes/feed";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchFeed from "./scenes/feed/SearchFeed";

function App() {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(true);

  return (
    <BrowserRouter>
      <div className="bg-black-1 app">
        {/* <SidebarPop /> */}
        <Navbar
          isMenuToggled={isMenuToggled}
          setIsMenuToggled={setIsMenuToggled}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Feed
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
              />
            }
          />
          <Route
            path="/video/:id"
            element={
              <Feed
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
              />
            }
          />
          <Route
            path="/channel/:id"
            element={
              <Feed
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
              />
            }
          />
          <Route
            path="/search/:searchterm"
            element={
              <SearchFeed
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
              />
            }
          />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
