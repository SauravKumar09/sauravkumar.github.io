import React from 'react'
import styled, { useTheme } from 'styled-components';
import { Bio } from '../../data/constants';
import { MenuRounded } from "@mui/icons-material";
import { Link as LinkR } from 'react-router-dom';

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
@media screen and (max-width: 960px){
  transition: 0.8s all ease;
}
`;

const ColorText = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 32px;
`;

const NavContainer = styled.div`
display: flex;
justify-content: space-between;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1200px;
font-size: 1rem;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  width: 80%;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
@media screen and (max-width: 640px){
  padding: 0 0px;
}
`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const NavItems = styled.ul`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
gap: 32px;
padding: 0 6px;
list-style: none;

@media screen and (max-width: 768px){
  display: none;
}
`;

const NavLink = styled.a`
color: ${({ theme }) => theme.text_primary};
font-weight: 500;
cursor: pointer;
text-decoration: none;
transition: all 0.2s ease-in-out;
&:hover{
  color: ${({ theme }) => theme.primary};
}
`;

const ButtonContainer = styled.div`
display:flex;
align-items: center;
justify-content: end;
width: 80%;
height: 100%;
padding: 0 6px;
@media screen and (max-width: 768px){
  display: none;
}
`;


const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;  


export const Span = styled.div`
padding: 0 4px;
font-weight: bold;
font-size: 18px;
`;

const MobileMenu = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
gap: 16px;
position: absolute;
top: 80;
right: 0;
width: 100%;
padding: 42px 40px 24px 40px;
background: ${({ theme }) => theme.card_light+99};
transition: all 0.3s ease-in-out;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
border-radius: 0 0 20 20px;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
opacity: ${({ open }) => open ? "1" : "0"};
z-index: ${({ open }) => open ? "1" : "-1"}; 
`;

const MobileMenuLinks = styled.a`
color: ${({ theme }) => theme.text_primary};
font-weight: 500;
cursor: pointer;
text-decoration: none;
transition: all 0.2s ease-in-out;
&:hover{
  color: ${({ theme }) => theme.primary};
}
`

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
   <Nav>
    <NavContainer>
      <NavLogo to="/">
          <ColorText>&lt;</ColorText>
          <div style={{ color: theme.primary }}>Saurav Kumar</div> 
          <ColorText>&gt;</ColorText>
        </NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>
      <NavItems>
        <NavLink href="#about">About</NavLink>
        <NavLink href='#skills'>Skills</NavLink>
        <NavLink href='#experience'>Experience</NavLink>
        <NavLink href='#projects'>Projects</NavLink>
        <NavLink href='#education'>Education</NavLink>
      </NavItems>
      {/* <ButtonContainer>
          <GithubButton href={Bio.github} target='_blank'>Github Profile</GithubButton>
      </ButtonContainer>
    </NavContainer> */}
    {isOpen && (
        <MobileMenu isOpen={isOpen}>
          <MobileMenuLinks href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileMenuLinks>
            <MobileMenuLinks href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileMenuLinks>
            <MobileMenuLinks href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileMenuLinks>
            <MobileMenuLinks href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileMenuLinks>
            <MobileMenuLinks href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileMenuLinks>
            <GithubButton 
            style={{
              background: theme.primary, 
              color: theme.text_primary,
            }} 
            href={Bio.github} target="_blank">Github Profile</GithubButton>
        </MobileMenu>
      )
    }
      <ButtonContainer>
          <GithubButton href={Bio.github} target='_blank'>Github Profile</GithubButton>
      </ButtonContainer>
    </NavContainer>
  </Nav>
  );
};

export default Navbar