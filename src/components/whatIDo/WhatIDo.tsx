import React, { FC } from "react";
import { Container, RowDesktop, RowMobile, Heading } from "./styles";
import Pill from "./Pill";
import RoundPill from "./RoundPill";
import First from "../../images/Clouds.png";
import Second from "../../images/Idea.png";

type Props = {};

const WhatIDo: FC<Props> = () => {
  return (
    <Container id="what-i-do">
      <Heading>What&nbsp;I&nbsp;Do</Heading>
      <RowDesktop>
        <Pill text="User&nbsp;Research" />
        <RoundPill imgLink={First} />
        <Pill text="User&nbsp;Testing" />
        <Pill text="Wireframing" />
      </RowDesktop>
      <RowDesktop>
        <Pill text="Prototyping" />
        <Pill text="Information&nbsp;Architecture" />
        <RoundPill imgLink={Second} />
        <Pill text="Visual&nbsp;Design" />
      </RowDesktop>
      <RowMobile>
        <Pill text="User&nbsp;Research" />
        <RoundPill imgLink={First} />
        <Pill text="User&nbsp;Testing" />
      </RowMobile>
      <RowMobile>
        <Pill text="Prototyping" />
        <Pill text="Information&nbsp;Architecture" />
      </RowMobile>
      <RowMobile>
        <RoundPill imgLink={Second} />
        <Pill text="Visual&nbsp;Design" />
      </RowMobile>
    </Container>
  );
};

export default WhatIDo;
