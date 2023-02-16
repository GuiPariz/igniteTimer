import IgniteLogo from "../../assets/icons/igniteLogo";
import { HeaderContainer, Menu } from "./styles";
import {Timer, Scroll} from 'phosphor-react'

export default function Header(){
  return(
    <HeaderContainer>
      <IgniteLogo/>
      <Menu>
        <a href="">
          <Timer size={24}/>
        </a>
        <a href="history">
          <Scroll size={24}/>
        </a>
      </Menu>
    </HeaderContainer>
  )
}