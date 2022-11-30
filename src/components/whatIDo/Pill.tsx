import React, { FC } from "react";
import { Pill, PillText } from "./styles";

type Props = {
  text: string;
};

const PillComponent: FC<Props> = ({ text }) => {
  return (
    <Pill>
      <PillText>{text}</PillText>
    </Pill>
  );
};

export default PillComponent;
