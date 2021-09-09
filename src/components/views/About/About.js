import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import image from '../../../images/image.jpg';
import reactImage from '../../../images/react.svg.png';
import reduxImage from '../../../images/redux.png';
import routerImage from '../../../images/router.png';
import htmlImage from '../../../images/html.svg.png';
import cssImage from '../../../images/css.png';
import scssImage from '../../../images/scss.svg.png';
import styledImage from '../../../images/styled.png';
import nodeImage from '../../../images/node.svg.png';
import mongoImage from '../../../images/mongo.svg';
import materialImage from '../../../images/material.png';
import jestImage from '../../../images/jest.png';
import javascriptImage from '../../../images/javascript.svg';
import gitImage from '../../../images/git.png';
import chaiImage from '../../../images/chai.png';
import bootstrapImage from '../../../images/bootstrap.svg';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import device from '../../../utilities/deviceSettings';

const Root = styled.div`
  color: rgba(255, 255, 255, 0.9);
  width: 100%;
  padding-top: 35px;
  position: relative;
`;

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.2);
  height: 590px;
  margin-bottom: 40px;

  @media ${device.mobileL} {
    height: auto;
  }
`;

const ContainerRoot = styled(Container)`
  display: flex !important;
  ${({ column }) => column && `flex-direction: column;`}
`;

const Btn = styled.span`
  width: 100%;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
  cursor: pointer;
  background: ${(props) => props.theme.darkModeBackground};
  color: ${(props) => props.theme.darkModeFont};
  font-size: 24px;
  ${({ btn, theme }) => btn && `border-bottom: 3px solid ${theme.darkModeFont}`};
`;

const ImageWrapper = styled.div`
  padding: 20px;
`;

const Image = styled.img`
  width: 250px;
  border-radius: 50%;
  height: 250px;
  object-fit: cover;

  @media ${device.laptop} {
    width: 180px;
    height: 180px;
  }
  @media ${device.tablet} {
    width: 150px;
    height: 150px;
  }
  @media ${device.mobileL} {
    width: 120px;
    height: 120px;
  }
  @media ${device.mobileS} {
    width: 100px;
    height: 100px;
  }
`;

const ContentWrapper = styled.div`
  display: ${({ btn }) => (btn ? `flex` : `none`)};
  flex-direction: column;
  padding-top: 15px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 19px;
  margin: 0;
  line-height: 25px;
  padding-bottom: 10px;

  @media ${device.laptop} {
    font-size: 16px;
    line-height: 22px;
  }
  @media ${device.tablet} {
    line-height: 21px;
  }
`;

const Icon = styled.img`
  height: 35px;
  object-fit: cover;
  padding-right: 10px;

  @media ${device.laptop} {
    height: 28px;
  }
  @media ${device.tablet} {
    height: 24px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 19px;
  padding: 5px 8px;

  @media ${device.tablet} {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 20px;
  width: 100%;
  h2 {
    margin: 0;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  @media ${device.tablet} {
    padding-bottom: 15px;

    h2 {
      font-size: 22px;
    }
  }
`;

const Info = styled.div`
  display: flex;
`;

const SocialIconWrapper = styled.a`
  width: 60px;
  height: 60px;
  margin: 40px;
  color: inherit;
  margin-bottom: 20px;
  svg {
    width: 100%;
    height: 100%;
  }

  @media ${device.laptop} {
    width: 40px;
    height: 40px;
  }
`;

const Website = styled.a`
  text-align: center;
  display: block;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  font-size: 30px;

  &:hover {
    color: #bbb;
  }

  @media ${device.laptop} {
    font-size: 25px;
  }

  @media ${device.mobileL} {
    margin-bottom: 30px;
  }
`;

const Social = styled.div`
  display: flex;
`;

const MobileWrapper = styled(Wrapper)`
  width: 100%;
`;

const MobileBtnWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const About = () => {
  const [btn, setBtn] = useState('aboutMe');
  const width = window.innerWidth;
  const mobileWidth = width < 427;
  return (
    <Root>
      {mobileWidth !== true ? (
        <ContainerRoot>
          <Wrapper>
            <Btn onClick={() => setBtn('aboutMe')} btn={btn === 'aboutMe' && true}>
              About me
            </Btn>
            <ContentWrapper btn={btn === 'aboutMe' && true}>
              <Info>
                <ImageWrapper>
                  <Image src={image} />
                </ImageWrapper>
                <div>
                  <Text>Hi there!</Text>
                  <Text>
                    My name is Damian Filipek and I'm 22 years old. In November 2020 I
                    strated my jurney with programming. Since then I’m spending 40 to
                    50 hours per week mastering my skills. In my portfolio I already
                    have many projects, with which I am very satisfied and willing to
                    share.
                  </Text>
                  <Text>
                    Apart from programming in my spare time i relly enjoy playing
                    chess, reading some criminal or waching F1 races with a group of
                    friends.
                  </Text>
                </div>
              </Info>
              <div>
                <Social>
                  <SocialIconWrapper href="https://github.com/damianfilipek81">
                    <GitHubIcon />
                  </SocialIconWrapper>
                  <SocialIconWrapper href="https://www.linkedin.com/in/damianfilipek81/">
                    <LinkedInIcon />
                  </SocialIconWrapper>
                </Social>
                <Website href="https://damianfilipek.com/">My portfolio</Website>
              </div>
            </ContentWrapper>
          </Wrapper>
          <Wrapper>
            <Btn onClick={() => setBtn('mySkills')} btn={btn === 'mySkills' && true}>
              My skills
            </Btn>
            <ContentWrapper btn={btn === 'mySkills' && true}>
              <SkillsContainer>
                <h2>Logic</h2>
                <div>
                  <IconWrapper>
                    <Icon src={javascriptImage} />
                    Javascript
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={reactImage} />
                    React
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={reduxImage} />
                    React Redux
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={reduxImage} />
                    Redux Thunk
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={routerImage} />
                    React Router
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={nodeImage} />
                    NodeJS
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={nodeImage} />
                    ExpressJS
                  </IconWrapper>
                </div>
              </SkillsContainer>
              <SkillsContainer>
                <h2>Styling</h2>
                <div>
                  <IconWrapper>
                    <Icon src={htmlImage} />
                    HTML
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={cssImage} />
                    CSS
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={scssImage} />
                    SCSS
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={styledImage} />
                    Styled Components
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={bootstrapImage} />
                    Bootstrap
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={materialImage} />
                    Material Ui
                  </IconWrapper>
                </div>
              </SkillsContainer>
              <SkillsContainer>
                <h2>Database</h2>
                <div>
                  <IconWrapper>
                    <Icon src={mongoImage} />
                    MongoDB
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={mongoImage} />
                    Mongoose
                  </IconWrapper>
                </div>
              </SkillsContainer>
              <SkillsContainer>
                <h2>Testing</h2>
                <div>
                  <IconWrapper>
                    <Icon src={jestImage} />
                    Jest
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={chaiImage} />
                    Chai
                  </IconWrapper>
                  <IconWrapper>Enzyme</IconWrapper>
                </div>
              </SkillsContainer>
              <SkillsContainer>
                <h2>Others</h2>
                <div>
                  <IconWrapper>
                    <Icon src={gitImage} />
                    Git
                  </IconWrapper>
                  <IconWrapper>Jira</IconWrapper>
                  <IconWrapper>English B2/C1</IconWrapper>
                </div>
              </SkillsContainer>
            </ContentWrapper>
          </Wrapper>
        </ContainerRoot>
      ) : (
        <ContainerRoot column>
          <MobileBtnWrapper>
            <Btn onClick={() => setBtn('aboutMe')} btn={btn === 'aboutMe' && true}>
              About me
            </Btn>
            <Btn onClick={() => setBtn('mySkills')} btn={btn === 'mySkills' && true}>
              My skills
            </Btn>
          </MobileBtnWrapper>
          <MobileWrapper>
          <ContentWrapper btn={btn === 'aboutMe' && true}>
              <Info>
                <ImageWrapper>
                  <Image src={image} />
                </ImageWrapper>
                <div>
                  <Text>Hi there!</Text>
                  <Text>
                    My name is Damian Filipek and I'm 22 years old. In November 2020 I
                    strated my jurney with programming. Since then I’m spending 40 to
                    50 hours per week mastering my skills. In my portfolio I already
                    have many projects, with which I am very satisfied and willing to
                    share.
                  </Text>
                  <Text>
                    Apart from programming in my spare time i relly enjoy playing
                    chess, reading some criminal or waching F1 races with a group of
                    friends.
                  </Text>
                </div>
              </Info>
              <div>
                <Social>
                  <SocialIconWrapper href="https://github.com/damianfilipek81">
                    <GitHubIcon />
                  </SocialIconWrapper>
                  <SocialIconWrapper href="https://www.linkedin.com/in/damianfilipek81/">
                    <LinkedInIcon />
                  </SocialIconWrapper>
                </Social>
                <Website href="https://damianfilipek.com/">My portfolio</Website>
              </div>
            </ContentWrapper>
          <ContentWrapper btn={btn === 'mySkills' && true}>
              <SkillsContainer>
                <h2>Logic</h2>
                <div>
                  <IconWrapper>
                    <Icon src={javascriptImage} />
                    Javascript
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={reactImage} />
                    React
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={reduxImage} />
                    React Redux
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={reduxImage} />
                    Redux Thunk
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={routerImage} />
                    React Router
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={nodeImage} />
                    NodeJS
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={nodeImage} />
                    ExpressJS
                  </IconWrapper>
                </div>
              </SkillsContainer>
              <SkillsContainer>
                <h2>Styling</h2>
                <div>
                  <IconWrapper>
                    <Icon src={htmlImage} />
                    HTML
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={cssImage} />
                    CSS
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={scssImage} />
                    SCSS
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={styledImage} />
                    Styled Components
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={bootstrapImage} />
                    Bootstrap
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={materialImage} />
                    Material Ui
                  </IconWrapper>
                </div>
              </SkillsContainer>
              <SkillsContainer>
                <h2>Database</h2>
                <div>
                  <IconWrapper>
                    <Icon src={mongoImage} />
                    MongoDB
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={mongoImage} />
                    Mongoose
                  </IconWrapper>
                </div>
              </SkillsContainer>
              <SkillsContainer>
                <h2>Testing</h2>
                <div>
                  <IconWrapper>
                    <Icon src={jestImage} />
                    Jest
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={chaiImage} />
                    Chai
                  </IconWrapper>
                  <IconWrapper>Enzyme</IconWrapper>
                </div>
              </SkillsContainer>
              <SkillsContainer>
                <h2>Others</h2>
                <div>
                  <IconWrapper>
                    <Icon src={gitImage} />
                    Git
                  </IconWrapper>
                  <IconWrapper>Jira</IconWrapper>
                  <IconWrapper>English B2/C1</IconWrapper>
                </div>
              </SkillsContainer>
            </ContentWrapper>
          </MobileWrapper>
        </ContainerRoot>
      )}
    </Root>
  );
};

export default About;
