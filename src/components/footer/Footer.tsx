import { Container, Heading, Emoji, Img } from "./styles";
import First from "../../images/1-2.png";

export default function Footer() {
  return (
    <Container>
      <Heading>Get in touch</Heading>
      <Emoji>
        <Img src={First} />
      </Emoji>
    </Container>
  );
}
