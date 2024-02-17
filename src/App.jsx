import { useEffect, useState, Suspense, lazy } from "react";

//implement lazy loading to reduce initial load time
const Navbar = lazy(() => import("./components/Navbar.jsx"));
const HeroSection = lazy(() => import("./components/HeroSection.jsx"));
const HowItWorksSection = lazy(
  () => import("./components/HowItWorksSection.jsx"),
);
const MissionSection = lazy(() => import("./components/MissionSection.jsx"));
const DesignedForSection = lazy(
  () => import("./components/DesignedForSection.jsx"),
);
const FAQSection = lazy(() => import("./components/FAQ.jsx"));

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [load, setLoad] = useState(false);

  // Update state on image load
  const handleImageLoad = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // Update on resize
  useEffect(() => {
    window.addEventListener("resize", handleImageLoad);
    setLoad(true);
    return () => window.removeEventListener("resize", handleImageLoad);
  }, []);

  return (
    <div>
      {load ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <HeroSection isMobile={isMobile} handleImageLoad={handleImageLoad} />
          <HowItWorksSection />
          <MissionSection />
          <DesignedForSection />
          <FAQSection />
        </Suspense>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
