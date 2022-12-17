import React, { FC } from "react";
import {
  ProjectContainer,
  Left,
  Right,
  Img,
  ProjectHeading,
  Description,
  Date,
  TagsContainer,
  PurpleTag,
  ControlPillMobile,
  GreenTag,
} from "./styles";

type Props = {
  heading: string;
  description: string;
  date: string;
  imgLink: string;
  tags: string[];
  purpleTag: Boolean;
};

const Project: FC<Props> = ({ heading, description, date, imgLink, tags, purpleTag }) => {
  return (
    <ProjectContainer>
      <Left>
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
        <Img src={imgLink} />
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
