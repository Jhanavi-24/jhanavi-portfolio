import React from "react";
import { Navbar, NavbarContent, NavbarItem, Link, Button, ToastProvider } from "@heroui/react";
import { motion } from "framer-motion";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Experience } from "./components/experience";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { Education } from "./components/education";
import { Publications } from "./components/publications";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function App() {
  const [activeSection, setActiveSection] = React.useState("about");
  const sections = ["about", "experience", "projects", "skills", "education", "publications", "contact"];
  
  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    let newActiveSection = sections[0];
    
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element && pageYOffset >= element.offsetTop - 200) {
        newActiveSection = section;
      }
    });
    
    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  };
  
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <ToastProvider />
      <Navbar 
        className="bg-background/70 backdrop-blur-md border-b border-divider"
        isBlurred
        isBordered
        maxWidth="xl"
        position="sticky"
      >
        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          {sections.map((section) => (
            <NavbarItem key={section} isActive={activeSection === section}>
              <Link
                className="text-sm font-medium capitalize"
                color={activeSection === section ? "primary" : "foreground"}
                onPress={() => scrollToSection(section)}
              >
                {section}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button 
              as={Link} 
              color="primary" 
              href="mailto:jhanavip@buffalo.edu" 
              variant="flat"
              radius="full"
              startContent={<span className="i-lucide-mail text-lg" />}
            >
              Contact Me
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        <Header />
        <div className="max-w-5xl mx-auto px-4 py-8 space-y-24">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Publications />
          <Contact />
        </div>
        <Footer />
      </motion.main>
    </>
  );
}