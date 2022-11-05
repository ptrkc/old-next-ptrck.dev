import { PropsWithChildren } from 'react';
import Head from 'next/head';
import Image, { ImageProps } from 'next/image';
import LinkBox from 'components/LinkBox';
import UnderlinedLink from 'components/UnderlinedLink';

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

const ProjectImage = ({ alt, src, height, width, blurDataURL }: ImageProps) => (
  <div className="h-40 border-b-2 border-neutral-800 dark:border-orange-100 flex justify-center items-center overflow-hidden relative">
    <Image
      src={src}
      blurDataURL={blurDataURL}
      placeholder="blur"
      width={width}
      height={height}
      alt={alt}
      className="relative w-full"
    />
  </div>
);

const ProjectContent = ({ title, children }:PropsWithChildren<{title:string}>) => (
  <div className="p-4 flex flex-col items-start gap-2 grow">
    <p className="font-bold">{title}</p>
    <div className="flex flex-col grow w-full justify-between gap-2">{children}</div>
  </div>
);

const ProjectCard = ({ children }: PropsWithChildren) => (
  <div className={`
  flex flex-col transition-[box-shadow] bg-orange-50 dark:bg-neutral-900 border-2 
  border-neutral-800 dark:border-orange-100 shadow-neutral-800 hover:shadow-[4px_4px]
  `}
  >
    {children}
  </div>
);

const Projects = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 py-6 gap-8 w-full">
    <ProjectCard>
      <ProjectImage
        src="/images/recursion.jpg"
        width={450}
        height={264}
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nAEaAOX/AHNoWtfFrv3pzv/02AAdAADZxbP/+d7/+tzQbxEYn4a2zQAAAABJRU5ErkJggg=="
        alt="this website"
      />
      <ProjectContent title="ptrck.dev">
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
      </ProjectContent>
    </ProjectCard>

    <ProjectCard>
      <ProjectImage
        src="/images/banana.jpg"
        width={400}
        height={250}
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGM4emDVtFk9HGwS+vqmDDV1Ve9+PFGU17a2cQQAjhUKBsc+HDIAAAAASUVORK5CYII="
        alt="Banana Game"
      />
      <ProjectContent title="Banana Game">
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
      </ProjectContent>
    </ProjectCard>

    <ProjectCard>
      <ProjectImage
        src="/images/cineflex.jpg"
        width={400}
        height={250}
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGNgYWEtLy+PiIji4OBg6Orqev363Z+fj3t66gBsJgtlG+USbAAAAABJRU5ErkJggg=="
        alt=""
      />
      <ProjectContent title="Cineflex">
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
      </ProjectContent>
    </ProjectCard>

    <ProjectCard>
      <ProjectImage
        src="/images/mywallet.jpg"
        width={400}
        height={250}
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGOocZz5//n//y//Z5m0MpgyZBQzbCtl2KnCEAoAt/oLs8lLV/MAAAAASUVORK5CYII="
        alt="MyWallet"
      />
      <ProjectContent title="MyWallet">
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
      </ProjectContent>
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
