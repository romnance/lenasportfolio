import { motion, Variants } from "framer-motion";
import { FC } from "react";
import Second from "../../images/Motorica.png";
import First from "../../images/Olivia.png";
import Project from "./Project";
import { Container } from "./styles";

type Props = {};

const content = [
  {
    heading: "Kreddy – smart personal finance in your pocket",
    description:
      "1M+ downloads. A PFM app built for credit score insights, loan tracking, and AI-powered predictions",
    date: "2023 - present",
    tags: [
      "Fintech",
      "PFM",
      "AI features",
      "App design",
      "Apple Store",
      "Google Play",
    ],
    projectLink:
      "https://www.behance.net/gallery/165061051/Olivia-Appyour-menopause-support?fbclid=IwAR2eglmRAYTMdDSWZYK8jdEYvzFOUt5KVXFtwwubYxS2e3SQWkBGJO2Va6k",
    image: First,
  },
  {
    heading: "Olivia-your menopause support",
    description:
      "Re-designing and enhancing the app to increase downloads and improve retention",
    date: "2022 - 2023",
    tags: ["Female health", "Health-tech", "IOS", "App design", "Apple store"],
    projectLink:
      "https://www.behance.net/gallery/165061051/Olivia-Appyour-menopause-support?fbclid=IwAR2eglmRAYTMdDSWZYK8jdEYvzFOUt5KVXFtwwubYxS2e3SQWkBGJO2Va6k",
    image: First,
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
    image: Second,
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
      {content.map((item, index) => (
        <motion.div
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
          key={index}
        >
          <motion.div variants={cardVariants}>
            <Container>
              <div className="Common-container">
                <Project
                  heading={item.heading}
                  description={item.description}
                  date={item.date}
                  tags={item.tags}
                  imgLink={item.image}
                  projectLink={item.projectLink}
                  purpleTag={false}
                />
              </div>
            </Container>
          </motion.div>
        </motion.div>
      ))}
    </>
  );
};

export default Projects;
