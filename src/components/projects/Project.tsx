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
  GreenTag,
} from "./styles";

type Props = {
  heading: string;
  description: string;
  date: string;
  imgLink: string;
  tags: string[];
};

const Project: FC<Props> = ({ heading, description, date, imgLink, tags }) => {
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
      </Right>
    </ProjectContainer>
  );
};

export default Project;
