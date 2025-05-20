import { FC } from "react";
import First from "../../images/Clouds.png";
import Second from "../../images/Idea.png";
import Pill from "./Pill";
import RoundPill from "./RoundPill";
import { Container, Heading, RowDesktop, RowMobile } from "./styles";

type Props = {};

const WhatIDo: FC<Props> = () => {
  return (
    <Container id="my-process">
      <Heading>My&nbsp;Process</Heading>
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
