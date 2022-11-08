import * as React from 'react';

import {Header,Nav, Logo, Link, Links, Ol, Li, A, Menu, Button, HamBox, HamBoxInner} from './styles';

export interface IHeaderProps {
}

export default function HeaderComponent (_props: IHeaderProps) {
  return (
    <Header>
      <Nav>
        <Logo><Link>Lena&nbsp;Klimova</Link></Logo>
        <Links>
          <Ol>
            <Li transition={"0ms"} ><A href='#'>What I Do</A></Li>
            <Li transition={"100ms"}><A href='#'>Projects</A></Li>
            <Li transition={"200ms"}><A href='#'>Get in touch</A></Li>
          </Ol>
        </Links>
        <Menu>
          <div>
            <Button>
            <HamBox>
            <HamBoxInner></HamBoxInner>
            </HamBox>
            </Button>
          </div>
        </Menu>
      </Nav>
    </Header>
  );
}
