import { Routes, Route } from "react-router-dom";

import Landing_page from "./pages/landing_page";
import Navbar from "./component/navbar_with_links";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing_page />} />
      </Routes>
    </>
  );
}
