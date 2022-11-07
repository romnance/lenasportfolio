import { Ul, Li, LogoUl, Icon, Image } from './styles'
import Logo from '../../images/logo.png'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom'

type Props = {
  open: boolean
}

function RightNav(props: Props) {

    const activeStyle = {
       fontWeight: 'bold',
        color: '#0DADEA',
      
  };

  return (
    <Router>
      <Ul open={props.open}>
         <LogoUl src={Logo} alt={'Lena Klimova'} />
        <NavLink
          to='/menu1'
             style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
        >
          <Li>Menu 1</Li>
        </NavLink>
        <NavLink
          to='/menu2'
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
        >
          <Li>Menu 2</Li>
        </NavLink>
        <NavLink
          to='/menu3'
             style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
        >
          <Li>Menu 3</Li>
        </NavLink>
        <NavLink
          to='/menu4'
                style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
        >
          <Li>Menu 4</Li>
        </NavLink>
        <NavLink
          to='/menu5'
               style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
        >
          <Li>Menu 5</Li>
        </NavLink>
      </Ul>

      <Routes>
        <Route  path='/menu1'>
            <Icon>
            <Image src={Logo} alt='React' />
          </Icon>
        </Route>
        <Route path='/menu2'>
          <Icon>
            <Image src={Logo} alt='React' />
          </Icon>
        </Route>
        <Route path='/menu3'>
            <Icon>
            <Image src={Logo} alt='React' />
          </Icon>
        </Route>
        <Route  path='/menu4'>
                <Icon>
            <Image src={Logo} alt='React' />
          </Icon>
        </Route>
        <Route  path='/menu5'>
                <Icon>
            <Image src={Logo} alt='React' />
          </Icon>
        </Route>
      </Routes>
    </Router>
  )
}

export default RightNav;