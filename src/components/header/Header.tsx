import React, {useState} from "react";
import {Header,Nav, Logo, Link, Links, Ol, Li, A, Menu, Button, HamBox, HamBoxInner, Sidebar, AsideNav, AsideOl, AsideLi, AsideA} from './styles';

export interface IHeaderProps {
}

export default function HeaderComponent (_props: IHeaderProps) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const menuOpener = () => {
    setOpenMenu(!openMenu);
  }

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
            <Button onClick={menuOpener}>
              <HamBox>
                  <HamBoxInner visible={openMenu ? "visible" : "hidden"}></HamBoxInner>
              </HamBox>
            </Button>
            <Sidebar visible={openMenu ? "visible" : "hidden"}>
            <AsideNav visible={openMenu ? "visible" : "hidden"}>
              <AsideOl>
                  <AsideLi><AsideA href='#'>What I Do</AsideA></AsideLi>
                  <AsideLi><AsideA href='#'>Projects</AsideA></AsideLi>
                  <AsideLi><AsideA href='#'>Get in touch</AsideA></AsideLi>
              </AsideOl>
            </AsideNav>
            </Sidebar>
          </div>
        </Menu>
      </Nav>
    </Header>
  );
}
