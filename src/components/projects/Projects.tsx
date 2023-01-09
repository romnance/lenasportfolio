import React, { FC, useEffect, useState } from "react";
import useDocumentScrollThrottled from "../../helpers/documentScroll";
import { Container, Heading, PurpleTag, ControlPillDesktop } from "./styles";
import Project from "./Project";
import First from "../../images/Olivia.png";
import Second from "../../images/Motorica.png";
import Third from "../../images/Toothie.png";
import Fourth from "../../images/OTP.png";

type Props = {};

const content = [
  {
    heading: "Olivia-your menopause support",
    description:
      "Re-designing and enhancing the app to increase downloads and improve retention",
    date: "2021-present",
    tags: ["Female health", "Health-tech", "IOS", "App design", "Apple store"],
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

const Projects: FC<Props> = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);

  const MINIMUM_SCROLL = 1200;
  const MINIMUM_SCROLL_2 = 1900;
  const MINIMUM_SCROLL_3 = 2400;
  const MINIMUM_SCROLL_4 = 3400;
  const TIMEOUT_DELAY = 300;

  useEffect(() => {
    setShowFirst(true);
  }, []);

  useDocumentScrollThrottled((callbackData) => {
    const { currentScrollTop } = callbackData;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
    const isMinimumScrolled2 = currentScrollTop > MINIMUM_SCROLL_2;
    const isMinimumScrolled3 = currentScrollTop > MINIMUM_SCROLL_3;
    const isMinimumScrolled4 = currentScrollTop > MINIMUM_SCROLL_4;
    setTimeout(() => {
      // setShowFirst(isMinimumScrolled);
      if (isMinimumScrolled) setShowFirst(true);
      if (isMinimumScrolled2) setShowSecond(true);
      if (isMinimumScrolled3) setShowThird(true);
      if (isMinimumScrolled4) setShowFourth(true);
    }, TIMEOUT_DELAY);
  });

  return (
    <>
      <div className="Common-container">
        <Heading>Projects</Heading>
      </div>
      <Container active={showFirst} id="projects">
        <div className="Common-container">
          <ControlPillDesktop>
            <PurpleTag>Coming soon</PurpleTag>
          </ControlPillDesktop>
          <Project
            heading={content[0].heading}
            description={content[0].description}
            date={content[0].date}
            tags={content[0].tags}
            imgLink={First}
            purpleTag={true}
          />
        </div>
      </Container>
      <Container active={showSecond}>
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
      <Container active={showThird}>
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
      <Container active={showFourth}>
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
    </>
  );
};

export default Projects;
