import React, { FC } from "react";
import { Container, Heading } from "./styles";
import Project from "./Project";
import First from "../../images/Olivia.png";
import Second from "../../images/Motorica.png";
import Third from "../../images/Toothie.png";
import Fourth from "../../images/OTP.png";
import { motion, Variants } from "framer-motion";

type Props = {};

const content = [
  {
    heading: "Olivia-your menopause support",
    description:
      "Re-designing and enhancing the app to increase downloads and improve retention",
    date: "2021-present",
    tags: ["Female health", "Health-tech", "IOS", "App design", "Apple store"],
    projectLink:
      "https://www.behance.net/gallery/165061051/Olivia-Appyour-menopause-support?fbclid=IwAR2eglmRAYTMdDSWZYK8jdEYvzFOUt5KVXFtwwubYxS2e3SQWkBGJO2Va6k",
  },
  {
    heading: "Customer support app for Motorica",
    description:
      "Omnichannel concept for the prosthetic company to improve user experience",
    date: "2021",
    tags: [
      "Prosthetic Hand",
      "Inclusive design",
      "Android",
      "App design",
      "Diploma project",
      "Group project",
    ],
    projectLink:
      "https://www.behance.net/gallery/138460175/Custom-Support-app-for-Motorica",
  },
  {
    heading: "Branding, UX/UI design for oral care brand Toothe",
    description: "E-commerce concept from the ground up for non-existing beauty brand",
    date: "2021",
    tags: [
      "E-commerce",
      "Beauty",
      "Web-design",
      "Responsive design",
      "Internship project",
    ],
    projectLink: "https://www.behance.net/gallery/127438539/Oral-care-brand-Toothe",
  },
  {
    heading: "Bonus program concept for OTP Bank",
    description:
      "App concept for the bank loyalty program to increase retention rate and user satisfaction",
    date: "2021",
    tags: ["Fintech", "Bank app", "Categories", "IOS", "App design", "Study project"],
    projectLink:
      "https://www.behance.net/gallery/127353891/Concept-for-bonus-program-app-from-OTP-Bank",
  },
];

const yHeight = window.innerWidth >= 768 ? 250 : 100;

const cardVariants: Variants = {
  offscreen: {
    y: yHeight,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

const Projects: FC<Props> = () => {
  return (
    <>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.div variants={cardVariants}>
          <div className="Common-container">
            <Heading>Projects</Heading>
          </div>
          <Container id="projects">
            <div className="Common-container">
              <Project
                heading={content[0].heading}
                description={content[0].description}
                date={content[0].date}
                tags={content[0].tags}
                imgLink={First}
                projectLink={content[0].projectLink}
                purpleTag={false}
              />
            </div>
          </Container>
        </motion.div>
      </motion.div>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.div variants={cardVariants}>
          <Container>
            <div className="Common-container">
              <Project
                heading={content[1].heading}
                description={content[1].description}
                date={content[1].date}
                tags={content[1].tags}
                imgLink={Second}
                projectLink={content[1].projectLink}
                purpleTag={false}
              />
            </div>
          </Container>
        </motion.div>
      </motion.div>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.div variants={cardVariants}>
          <Container>
            <div className="Common-container">
              <Project
                heading={content[2].heading}
                description={content[2].description}
                date={content[2].date}
                tags={content[2].tags}
                imgLink={Third}
                projectLink={content[2].projectLink}
                purpleTag={false}
              />
            </div>
          </Container>
        </motion.div>
      </motion.div>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.div variants={cardVariants}>
          <Container>
            <div className="Common-container">
              <Project
                heading={content[3].heading}
                description={content[3].description}
                date={content[3].date}
                tags={content[3].tags}
                projectLink={content[3].projectLink}
                imgLink={Fourth}
                purpleTag={false}
              />
            </div>
          </Container>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Projects;
