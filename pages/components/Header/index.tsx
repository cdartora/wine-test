import Image from "next/image";
import { Container, HeaderButton, HeaderContainer, HeaderLine, HeaderNav, IconsContainer, Selected } from "./style";
import Logo from '../../../assets/black.svg'
import SearchIcon from '../../../assets/search.svg';
import ProfileIcon from '../../../assets/perfil.svg';
import WineBox from '../../../assets/winebox.svg';

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Container>
          <Image src={Logo} alt="Wine" className="button" />
          <HeaderNav>
            <HeaderButton>
              <span className="button">
                Clube
              </span>
            </HeaderButton>
            <Selected>
              <span className="button">
                Loja
              </span>
            </Selected>
            <HeaderButton>
              <span className="button">
                Produtores
              </span>
            </HeaderButton>
            <HeaderButton>
              <span className="button">
                Ofertas
              </span>
            </HeaderButton>
            <HeaderButton>
              <span className="button">
                Eventos
              </span>
            </HeaderButton>
          </HeaderNav>
        </Container>
        <IconsContainer>
          <Image src={SearchIcon} alt="Lupa" className="button" />
          <Image src={ProfileIcon} alt="Silhueta do torso de uma pessoa" className="button" />
          <Image src={WineBox} alt="Caixa de vinhos Wine" className="button" />
        </IconsContainer>
      </HeaderContainer>
      <HeaderLine />
    </>
  )
};