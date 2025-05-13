import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./layouts/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Report from "./pages/Report";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <>
      <MainLayout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/report" element={<Report />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/details" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
