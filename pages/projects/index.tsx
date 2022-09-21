import LinkBox from 'components/LinkBox';
import UnderlinedLink from 'components/UnderlinedLink';
import Head from 'next/head';
import { PropsWithChildren } from 'react';

const CardBottom = ({ children }: PropsWithChildren) => (
  <div className="relative bottom-0 flex flex-col gap-2">
    {children}
  </div>
);
const Description = ({ children }: PropsWithChildren) => (
  <p>
    {children}
  </p>
);

const ProjectCard = ({ title, children }: PropsWithChildren<{title:string}>) => (
  <div className="flex flex-col bg-orange-50 border-2 border-neutral-800 duration-200 shadow-neutral-800 hover:shadow-[4px_4px]">
    <div className="h-40 border-b-2 border-neutral-800 flex justify-center items-center">img goes here</div>
    <div className="p-4 flex flex-col items-start gap-2 grow">
      <p className="font-bold">{title}</p>
      <div className="flex flex-col grow w-full justify-between gap-2">{children}</div>
    </div>
  </div>
);

const Projects = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
    <ProjectCard title="ptrck.dev">
      <Description>
        Your&apos;re here! Still
        {' '}
        <UnderlinedLink href="/todo">
          under development
        </UnderlinedLink>
        {' '}
        :)
      </Description>
      <CardBottom>
        <p>Tags: React, Next.js, TypeScript, Tailwind CSS.</p>
        <LinkBox className="w-full" href="https://github.com/ptrkc/ptrck.dev">
          GitHub
        </LinkBox>
      </CardBottom>
    </ProjectCard>
    <ProjectCard title="Banana Game">
      <Description>
        Play on your computer with the arrows keys or on your phone by touching the sides of the
        screen.
      </Description>
      <CardBottom>
        <p>Tags: TypeScript, OOP, Canvas.</p>
        <div className="flex gap-2 w-full">
          <LinkBox className="w-full" href="https://ptrkc.github.io/banana-game/public/index.html">
            Play
          </LinkBox>
          <LinkBox className="w-full" href="https://github.com/ptrkc/banana-game">
            GitHub
          </LinkBox>
        </div>
      </CardBottom>
    </ProjectCard>
    <ProjectCard title="Cineflex">
      <Description>
        A frontend for booking movie tickets. Note: it uses a shared mock API, so if you get a
        &quot;Session full&quot; alert, please try another movie or time.
      </Description>
      <CardBottom>
        <p>Tags: JavaScript, React, styled-components.</p>
        <div className="flex gap-2 w-full">
          <LinkBox className="w-full" href="https://cineflex-react.vercel.app/">
            Try it
          </LinkBox>
          <LinkBox className="w-full" href="https://github.com/ptrkc/cineflex-react">
            GitHub
          </LinkBox>
        </div>
      </CardBottom>
    </ProjectCard>
    <ProjectCard title="MyWallet">
      <Description>
        Simple tracker of incomes and expenses. Hosted on Heroku free
        {' '}
        <UnderlinedLink
          href="https://help.heroku.com/RSBRUH58/removal-of-heroku-free-product-plans-faq"
        >
          (RIP)
        </UnderlinedLink>
        , might take some seconds to load.
      </Description>
      <CardBottom>
        <p>Tags: React, styled-components, JavaScript, Node.js, PostgreSQL, express.</p>
        <div className="flex gap-2 w-full">
          <LinkBox className="w-full" href="https://mywallet-react.vercel.app/">
            Try it
          </LinkBox>
          <LinkBox className="w-full" href="https://github.com/ptrkc/mywallet-react">
            Front
          </LinkBox>
          <LinkBox className="w-full" href="https://github.com/ptrkc/mywallet-api">
            Back
          </LinkBox>
        </div>
      </CardBottom>
    </ProjectCard>
  </div>
);
const ProjectsPage = () => (
  <>
    <Head>
      <title>Projects - Patrick Carneiro - Software Developer</title>
    </Head>
    <div className="flex flex-col items-start gap-4">
      <h1>Projects</h1>
      <p>
        Some projects I felt like sharing, but there are more on my
        {' '}
        <UnderlinedLink href="https://github.com/ptrkc">GitHub</UnderlinedLink>
        .
      </p>
      <Projects />
    </div>
  </>
);

export default ProjectsPage;
