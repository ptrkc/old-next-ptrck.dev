import { PropsWithChildren, ReactNode } from 'react';
import Image from 'next/future/image';
import {
  SiChakraui, SiCss3, SiExpress, SiFlutter, SiGit, SiGithub, SiHtml5, SiJavascript, SiLinux,
  SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiReact, SiStyledcomponents, SiTailwindcss,
  SiTypescript, SiVisualstudiocode,
} from 'react-icons/si';
import { FiArrowRight } from 'react-icons/fi';
import LinkBox from 'components/LinkBox';
import WavingHand from 'components/WavingHand';
import cn from 'utils/classnames';

const ProfilePicture = () => (
  <Image
    placeholder="blur"
    className="overflow-hidden rounded-full border-2 border-neutral-800 dark:border-orange-100 dark:grayscale"
    alt="Patrick"
    src="/images/patrick.jpg"
    width={450}
    height={600}
    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/APLz9PX4+9bb4AD79vb/0cK9u8IAwrK5qYJ3gXB5ADYAAI8xRmIAIUB4Fv66tTIFAAAAAElFTkSuQmCC"
  />
);

const Presentation = () => (
  <div className="w-full flex justify-between gap-8 flex-col sm:flex-row mx-auto">
    <div className="max-w-[200px] mx-auto">
      <ProfilePicture />
    </div>
    <div className="gap-4 flex flex-col items-baseline">
      <p>
        <WavingHand />
        Hello there! My name is
      </p>
      <h1 className="text-4xl">Patrick Carneiro</h1>
      <p>and I&apos;m a full-stack developer. I love to create things for both work and fun.</p>
      <p>
        I&apos;ve been using mostly JavaScript, TypeScript, React, Next.js, and Node.js.
      </p>
      <LinkBox href="/about" className="mx-auto sm:mx-0 mt-8">
        More about and CV
        <FiArrowRight />
      </LinkBox>
    </div>
  </div>
);

interface ListItemProps extends PropsWithChildren{iconColor?: string, icon: ReactNode}

const ListItem = ({ iconColor, children, icon }: ListItemProps) => (
  <li className="flex items-center gap-2">
    <span className={cn('grayscale-[.1]', iconColor && iconColor)}>{icon}</span>
    {children}
  </li>
);

const Techs = () => (
  <div className="flex flex-col gap-4">
    <h1>Tech skills</h1>
    <p>
      Stuff I know + stuff I&apos;m learning*. Always open to learn more!
    </p>
    <div className="flex flex-wrap gap-6 justify-between">
      <div>
        <h2>Front-end</h2>
        <ul>
          <ListItem iconColor="text-orange-500" icon={<SiHtml5 />}>HTML</ListItem>
          <ListItem iconColor="text-blue-500" icon={<SiCss3 />}>CSS</ListItem>
          <ListItem iconColor="text-yellow-500" icon={<SiJavascript />}>JavaScript</ListItem>
          <ListItem iconColor="text-blue-500" icon={<SiTypescript />}>TypeScript</ListItem>
          <ListItem iconColor="text-blue-500" icon={<SiReact />}>React</ListItem>
          <ListItem icon={<SiNextdotjs />}>Next.js</ListItem>
          <ListItem iconColor="text-blue-500" icon={<SiTailwindcss />}>Tailwind CSS</ListItem>
          <ListItem iconColor="text-cyan-500" icon={<SiChakraui />}>Chakra-UI</ListItem>
          <ListItem iconColor="text-pink-500" icon={<SiStyledcomponents />}>styled-components</ListItem>
        </ul>
      </div>
      <div>
        <h2>Backend</h2>
        <ul>
          <ListItem iconColor="text-yellow-500" icon={<SiJavascript />}>JavaScript</ListItem>
          <ListItem iconColor="text-blue-500" icon={<SiTypescript />}>TypeScript</ListItem>
          <ListItem iconColor="text-green-500" icon={<SiNodedotjs />}>Node.js</ListItem>
          <ListItem icon={<SiExpress />}>Express</ListItem>
          <ListItem iconColor="text-blue-500" icon={<SiPostgresql />}>PostgreSQL</ListItem>
          <ListItem iconColor="text-sky-500" icon={<SiPrisma />}>Prisma</ListItem>
        </ul>
      </div>
      <div>
        <h2>Other</h2>
        <ul>
          <ListItem iconColor="text-blue-500" icon={<SiFlutter />}>Flutter*</ListItem>
          <ListItem iconColor="text-orange-500" icon={<SiGit />}>Git</ListItem>
          <ListItem icon={<SiGithub />}>GitHub</ListItem>
          <ListItem iconColor="text-blue-500" icon={<SiVisualstudiocode />}>VS Code</ListItem>
          <ListItem icon={<SiLinux />}>Linux</ListItem>
        </ul>
      </div>
    </div>
  </div>
);

const HomePage = () => (
  <div className="mx-auto grid grid-cols-1 gap-16 py-10 text-lg">
    <Presentation />
    <Techs />
  </div>
);

export default HomePage;
