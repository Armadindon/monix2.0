import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import NixBar from "./Components/NixBar";
import NixTabs from "./Components/NixTabs";
import Admin from "./Pages/Admin";
import CataloguePage from "./Pages/Catalogue";
import MembersPage from "./Pages/Members";

/** Simple dictionnaire faisant la correspondance tab -> url */
const configuredTabs: { [tabId: string]: string } = {
  membres: "/membres",
  catalogue: "/catalogue",
  documentation: "/documentation",
};

/** Permet de trouver l'id de la tab depuis son path */
const findAssociatedTab = (path: string) => {
  for (let key of Object.keys(configuredTabs)) {
    if (configuredTabs[key] === path) return key;
  }
  return "";
};

/** Composant principale de la page, il gère l'affichage de l'application */
const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("");

  useEffect(() => {
    setCurrentTab(findAssociatedTab(location.pathname));
  }, [location.pathname]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <NixBar />
      {location.pathname !== "/admin" && (
        <NixTabs
          tabs={Object.keys(configuredTabs)}
          selectedTab={currentTab ? currentTab : false}
          tabChange={(evt, val) => {
            setCurrentTab(val);
            navigate(configuredTabs[val]);
          }}
        />
      )}
      <Routes>
        <Route path="/" element={<div>Home Page (TODO)</div>} />
        <Route path="/membres" element={<MembersPage />} />
        <Route path="/catalogue" element={<CataloguePage />} />
        <Route
          path="/documentation"
          element={<div>Documentation (TODO)</div>}
        />
        <Route
          path="/admin"
          element={<Admin />}
        />
      </Routes>
    </Box>
  );
};

export default App;
