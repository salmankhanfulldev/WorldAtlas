import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Country from "./pages/Country";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import ErrorPage from "./components/UI/ErrorPage";
import { CountryDetails } from "./components/Layout/CountryDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/country" element={<Country />} />
            <Route path="/country/:id" element={<CountryDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />}></Route>
            {/* <Route path="*" element={<h1>OoP! Error Page is Generated</h1>}></Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

// import React from "react";
// import "./App.css";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Country from "./pages/Country";
// import Contact from "./pages/Contact";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AppLayout from "./components/Layout/AppLayout";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<AppLayout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="country" element={<Country />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
