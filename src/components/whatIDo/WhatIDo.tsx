import React, { FC } from "react";
import { Container, Div, Heading } from "./styles";
import Pill from "./Pill";
import RoundPill from "./RoundPill";
import First from "../../images/Clouds.png";
import Second from "../../images/Idea.png";

type Props = {};

const WhatIDo: FC<Props> = () => {
  return (
    <Container>
      <Heading>What&nbsp;I&nbsp;Do</Heading>
      <Div>
        <Pill text="User&nbsp;Research" />
        <RoundPill imgLink={First} />
        <Pill text="User&nbsp;Testing" />
        <Pill text="Wireframing" />
      </Div>
      <Div>
        <Pill text="Prototyping" />
        <Pill text="Information&nbsp;Architecture" />
        <RoundPill imgLink={Second} />
        <Pill text="Visual&nbsp;Design" />
      </Div>
    </Container>
  );
};

export default WhatIDo;
