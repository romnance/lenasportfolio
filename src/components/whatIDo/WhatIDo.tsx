import React, { FC } from "react";
import { Container, Row1, Row2, Heading } from "./styles";
import Pill from "./Pill";
import RoundPill from "./RoundPill";
import First from "../../images/Clouds.png";
import Second from "../../images/Idea.png";

type Props = {};

const WhatIDo: FC<Props> = () => {
  return (
    <Container>
      <Heading>What&nbsp;I&nbsp;Do</Heading>
      <Row1>
        <Pill text="User&nbsp;Research" />
        <RoundPill imgLink={First} />
        <Pill text="User&nbsp;Testing" />
        <Pill text="Wireframing" />
      </Row1>
      <Row2>
        <Pill text="Prototyping" />
        <Pill text="Information&nbsp;Architecture" />
        <RoundPill imgLink={Second} />
        <Pill text="Visual&nbsp;Design" />
      </Row2>
    </Container>
  );
};

export default WhatIDo;
