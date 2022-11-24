import { PropsWithChildren } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import LinkBox from 'components/LinkBox';
import UnderlinedLink from 'components/UnderlinedLink';
import projects from './projects';

const CardBottom = ({ children }: PropsWithChildren) => (
  <div className="relative bottom-0 flex flex-col gap-2">{children}</div>
);
const Description = ({ children }: PropsWithChildren) => <p>{children}</p>;

const ProjectImage = ({
  image,
}: {
  image: { src: string; blurData: string; alt: string };
}) => (
  <div className="border-b-2 border-neutral-800 dark:border-orange-100 flex justify-center items-center overflow-hidden relative">
    <Image
      src={image.src}
      blurDataURL={image.blurData}
      placeholder="blur"
      width={400}
      height={250}
      alt={image.alt}
      className="relative w-full"
    />
  </div>
);

const ProjectContent = ({
  title,
  children,
}: PropsWithChildren<{ title: string }>) => (
  <div className="p-4 flex flex-col items-start gap-2 grow">
    <p className="font-bold">{title}</p>
    <div className="flex flex-col grow w-full justify-between gap-2">
      {children}
    </div>
  </div>
);

const ProjectCard = ({ children }: PropsWithChildren) => (
  <div
    className={`
  flex flex-col transition-[box-shadow] bg-orange-50 dark:bg-neutral-900 border-2 
  border-neutral-800 dark:border-orange-100 shadow-neutral-800 hover:shadow-[4px_4px]
  `}
  >
    {children}
  </div>
);

const Projects = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 py-6 gap-8 w-full">
    {projects.map(project => (
      <ProjectCard key={project.title}>
        <ProjectImage image={project.image} />
        <ProjectContent title={project.title}>
          <Description>{project.description}</Description>
          <CardBottom>
            <p>Tags: {project.tags.join(', ')}.</p>
            <div className="flex gap-2 w-full">
              {project.links.map(link => (
                <LinkBox key={link.href} className="w-full" href={link.href}>
                  {link.text}
                </LinkBox>
              ))}
            </div>
          </CardBottom>
        </ProjectContent>
      </ProjectCard>
    ))}
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
        Some projects I felt like sharing, but there are more on my{' '}
        <UnderlinedLink href="https://github.com/ptrkc">GitHub</UnderlinedLink>.
      </p>
      <Projects />
    </div>
  </>
);

export default ProjectsPage;
