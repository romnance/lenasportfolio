import {useState, useEffect} from "react";
import useDocumentScrollThrottled from '../../helpers/documentScroll';
import {Header,Nav, Logo, Link, Links, Ol, Li, A, Menu, Button, HamBox, HamBoxInner, Sidebar, AsideNav, AsideOl, AsideLi, AsideA} from './styles';

export interface IHeaderProps {
}

export default function HeaderComponent (_props: IHeaderProps) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [hideHeader, setHideHeader] = useState(true);
  const [showShadow, setShowShadow] = useState(false);

  const shadowStyle = showShadow ? "0 9px 9px -9px rgba(202, 191, 237, 0.3)" : "";
  const hiddenStyle = hideHeader ? "translateY(-110%)" : "translateY(0)";

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useEffect(() => {
    setHideHeader(false);
  }, []);

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShowShadow(currentScrollTop > 2);
  });

  const menuOpener = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <Header shadowStyle={shadowStyle} hiddenStyle={hiddenStyle}>
      <Nav>
        <Logo>
          <Link>Lena&nbsp;Klimova</Link>
        </Logo>
        <Links>
          <Ol>
            <Li transition={"0ms"}>
              <A href="#what-i-do">What I Do</A>
            </Li>
            <Li transition={"100ms"}>
              <A href="#projects">Projects</A>
            </Li>
            <Li transition={"200ms"}>
              <A href="#get-in-touch">Get in touch</A>
            </Li>
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
                  <AsideLi>
                    <AsideA href="#what-i-do" onClick={menuOpener}>
                      What I Do
                    </AsideA>
                  </AsideLi>
                  <AsideLi>
                    <AsideA href="#projects" onClick={menuOpener}>
                      Projects
                    </AsideA>
                  </AsideLi>
                  <AsideLi>
                    <AsideA href="#get-in-touch" onClick={menuOpener}>
                      Get in touch
                    </AsideA>
                  </AsideLi>
                </AsideOl>
              </AsideNav>
            </Sidebar>
          </div>
        </Menu>
      </Nav>
    </Header>
  );
}
