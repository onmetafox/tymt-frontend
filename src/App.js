import React, { useState, useEffect } from "react";
import MainLayout from './layout/MainLayout';
import { Routes, Route} from "react-router-dom";
import Error from './view/404';
// import Waitlist from './view/Waitlist';
// import ContactForm from './view/ContactForm';
import Loader from "./view/Loader";
// import Privacy from "./view/Privacy";
// import Terms from "./view/Terms";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to mimic the page loading process
    const delay = setTimeout(() => {
      setLoading(false); // Set loading to false after the delay
      clearTimeout(delay);
    }, 1000); // Adjust the delay time as needed

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(delay);
  }, []);

  return (
    <Routes>
      {loading && <Route path="*" element={<Loader />}></Route>}
      {!loading && (
        <>
          <Route path="/" element={<MainLayout />}></Route>
          <Route path="*" element={<Error />}></Route>
          {/* <Route path="waitlist" element={<Waitlist />}></Route>
          <Route path="contactForm" element={<ContactForm />}></Route>
          <Route path="privacy" element={<Privacy />}/>
          <Route path="terms" element={<Terms />}/> */}
        </>
      )}
    </Routes>
  );
}

export default App;
