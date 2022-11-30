import React, { FC } from "react";
import { Ellipse, Emoji, Img } from "./styles";

type Props = {
  imgLink: string;
};

const RoundPill: FC<Props> = ({ imgLink }) => {
  return (
    <Ellipse>
      <Emoji>
        <Img src={imgLink} />
      </Emoji>
    </Ellipse>
  );
};

export default RoundPill;
