import IgniteLogo from "../../assets/icons/igniteLogo";
import { HeaderContainer, Menu } from "./styles";
import {Timer, Scroll} from 'phosphor-react'
import { NavLink } from "react-router-dom";

export default function Header(){
  return(
    <HeaderContainer>
      <IgniteLogo/>
      <Menu>
        <NavLink to="/">
          <Timer size={24}/>
        </NavLink>
        <NavLink to="/history">
          <Scroll size={24}/>
        </NavLink>
      </Menu>
    </HeaderContainer>
  )
}