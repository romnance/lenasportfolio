import { FC } from "react";
import {
  Button,
  ComingSoonTag,
  ControlPillMobile,
  Date,
  Description,
  GreenTag,
  Img,
  Left,
  OverlayContainer,
  ProjectContainer,
  ProjectHeading,
  PurpleTag,
  Right,
  TagsContainer,
} from "./styles";

type Props = {
  heading: string;
  description: string;
  date: string;
  imgLink: string;
  projectLink?: string;
  tags: string[];
  purpleTag: Boolean;
};

const Project: FC<Props> = ({
  heading,
  description,
  date,
  imgLink,
  tags,
  purpleTag,
  projectLink,
}) => {
  return (
    <ProjectContainer>
      <Left>
        {!projectLink && <ComingSoonTag>Coming Soon</ComingSoonTag>}
        <ProjectHeading>{heading}</ProjectHeading>
        <Description>{description}</Description>
        <Date>{date}</Date>
        <TagsContainer>
          {tags.map((tag) => (
            <GreenTag>{tag}</GreenTag>
          ))}
        </TagsContainer>
      </Left>
      <Right>
        <a href={projectLink} target="_blank" rel="noreferrer">
          <OverlayContainer>
            <Img src={imgLink} />
            <Button>{!projectLink ? "Coming soon" : "View project"}</Button>
          </OverlayContainer>
        </a>
        {purpleTag && (
          <ControlPillMobile>
            <PurpleTag>Coming soon</PurpleTag>
          </ControlPillMobile>
        )}
      </Right>
    </ProjectContainer>
  );
};

export default Project;
