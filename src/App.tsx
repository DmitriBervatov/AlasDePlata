import { motion, useScroll } from "motion/react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./pages";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Navbar />
      <main>
        <motion.div
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            originX: 0,
          }}
          className="top-0 left-0 right-0 h-1 bg-fifth-alas-de-plata"
        />
        <Home />
        {/* <Navbar2/> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
