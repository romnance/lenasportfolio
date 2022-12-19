import { Container, Heading, Emoji, Img, P, Row, RowSimple, Link } from "./styles";
import First from "../../images/1-2.png";

export default function Footer() {
  return (
    <>
      <Container id="get-in-touch">
        <div>
          <RowSimple>
            <div>
              <Heading>Get in touch</Heading>
              <P>
                If you want to know more about me, my experience or want to chat about
                design and tech, I’ll be glad to hear from you.
              </P>
            </div>
            <Emoji>
              <Img src={First} />
            </Emoji>
          </RowSimple>
          <Row>
            <Link
              href="https://www.linkedin.com/in/lena-klimova-8a553314b/"
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link href="mailto:elenaklimova.elle@gmail.com">Email</Link>
          </Row>
          <Link href="https://www.linkedin.com/in/anromanova/" target="_blank">
            Developed by Anastasia Romanova
          </Link>
        </div>
      </Container>
    </>
  );
}
