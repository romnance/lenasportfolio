import { Nav, Logo } from './styles'

import IcLogo from '../../images/logo.png'
import Burger from './Burger'

type Props = {
  children?: ChildNode
}

export default function Navbar(props: Props) {
  return (
    <>
      <Nav>
        <Logo src={IcLogo} alt='Lena Klimova' />
      </Nav>
      <Burger />
      {props.children}
    </>
  )
}