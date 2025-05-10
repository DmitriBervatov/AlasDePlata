import { motion, useScroll } from "motion/react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { Toaster } from "../ui/sonner";

const Layout = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <motion.div
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            originX: 0,
          }}
          className="top-0 left-0 right-0 h-1 bg-fifth-alas-de-plata"
        />
        <Outlet />
        <Toaster />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
