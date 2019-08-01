import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/me-photo-tree.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`font-sans text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hi, <br /> I'm Josh Bowes!
        </BigTitle>
        <Subtitle>Technical leader, designer at heart, and dog lover living and working in San Francisco.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Experience</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Bank Of The West (2019)"
            link="https://www.bankofthewest.com"
            bg="linear-gradient(to right, #383838	 0%, #151313 100%)"
          >
            Senior Digital Product Management for bankofthewest.com.
          </ProjectCard>
          <ProjectCard
            title="Ally Financial (2012-2019)"
            link="https://www.ally.com"
            bg="linear-gradient(to right, #383838	 0%, #151313 100%)"
          >Ally.com Director of Development, AI/Chatbot Technical Program Manager, Technical Delivery Manager, Lead JavaScript/UI Developer
          </ProjectCard>
          <ProjectCard
            title="Wave Motion Digital (2008-2012)"
            link="https://wavemotiondigital.com/"
            bg="linear-gradient(to right, #383838	 0%, #151313 100%)"
          >
            Senior Web Developer working for dozens of non-profit clients, such as American Cancer Society Action Network, APCO International, and New Israel Fund. 
          </ProjectCard>
          <ProjectCard
            title="The Vanguard Group (2006-2007)"
            link="https://www.vanguard.com"
            bg="linear-gradient(to right, #383838	 0%, #151313 100%)"
          >
            UI and Java developer. Technical Business System Analayst. 
          </ProjectCard>
          <ProjectCard
            title="IBM (2005-2006)"
            link="https://www.ibm.com"
            bg="linear-gradient(to right, #383838	 0%, #151313 100%)"
          >
            Software developer - Eclipse plugin development - and technical writing
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>80s kid. Pretend musician.  Aspiring digital and traditional artist. Passionate about good design and technology. Studied computer science at NCSU and worked as a professional developer and digital leader since 2004 for both large enterprises and small, non-profit organizations. Sometimes have good ideas.</AboutSub>
        </AboutHero>
        <AboutDesc>
          {/* Timeline:
           <ul>
            <li>Born and raised in Chapel Hill, NC.</li>
            <li>Moved in Raleigh, NC in 2001 and studied Computer Science at NCSU.</li>
            <li>Worked as a developer at IBM and graduated in 2006.</li>
            <li>Moved to Charlotte, NC and worked as a developer and manager at The Vanguard Group, Wave Motion Digital, and Ally Financial.  </li>
            <li>Moved to San Francisco in 2019. Worked as Senior Product Manager for Bank of the West.</li>
            <li>Pursuing game design and development as a hobby for learning and ideation. Goal will be to put out at least one game in 2019.</li>
          </ul>
              */}
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:mrbowes@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.linkedin.com/in/josh-bowes">LinkedIn</a> &{' '}
            <a href="https://www.instagram.com/itsbowes/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Gatsby Starter Portfolio Cara.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">GitHub Repository</a>. Made by{' '}
          <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
