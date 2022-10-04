import { PropsWithChildren } from 'react';
import Head from 'next/head';
import { FiPaperclip } from 'react-icons/fi';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import UnderlinedLink from 'components/UnderlinedLink';
import LinkBox from 'components/LinkBox';
import cn from 'utils/classnames';

interface TimelineItemProps extends PropsWithChildren {
  icon: string;
  date: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const TimeLine = ({ children }: PropsWithChildren) => (
  <div className="flex flex-col min-h-max">{children}</div>
);

const TimelineItem = ({ icon, date, isFirst, isLast, children }: TimelineItemProps) => (
  <div className="flex items-center relative">
    <div className="flex flex-col justify-center items-center">
      <div className={cn('border-neutral-800 dark:border-orange-100 border-[1px] absolute top-0 h-1/2 -z-10', isFirst && 'hidden')} />
      <div className={cn('border-neutral-800 dark:border-orange-100 border-[1px] absolute bottom-0 h-1/2 -z-10', isLast && 'hidden')} />
      <div className="text-xl w-10 h-10 shrink-0 bg-white dark:bg-neutral-800 border-neutral-800 dark:border-orange-100 border-2 flex justify-center items-center rounded-full">
        {icon}
      </div>
    </div>
    <div className="bg-white dark:bg-neutral-800 border-neutral-800 dark:border-orange-100 border-[1px] w-5 shrink-0" />
    <div className="border-neutral-800 dark:border-orange-100 border-2 bg-white dark:bg-neutral-800 p-2 my-1">
      <p className="text-neutral-500">{date}</p>
      <p>{children}</p>
    </div>
  </div>
);

const AboutPage = () => (
  <>
    <Head>
      <title>About - Patrick Carneiro - Software Developer</title>
    </Head>
    <div className="flex flex-col items-start gap-4">
      <h1>About</h1>
      <h2>Links</h2>
      <div className="flex flex-wrap gap-4">
        <LinkBox href="/Patrick_Carneiro_CV_2022.pdf" target="_blank" rel="noopener noreferrer">
          Resume.pdf
          <FiPaperclip />
        </LinkBox>
        <LinkBox href="https://github.com/ptrkc" target="_blank" rel="noopener noreferrer">
          GitHub
          <SiGithub />
        </LinkBox>
        <LinkBox href="https://www.linkedin.com/in/patrickcarneiro" target="_blank" rel="noopener noreferrer">
          LinkedIn
          <SiLinkedin />
        </LinkBox>
      </div>
      <h2>Timeline</h2>
      <TimeLine>
        <TimelineItem icon="🧑‍💻" date="Oct, 2021" isFirst>
          Landed my first Software Engineer job for an american start-up.
        </TimelineItem>
        <TimelineItem icon="📚" date="Mar, 2021 - Sep, 2021">
          Got accepted into a competitive
          {' '}
          <UnderlinedLink href="https://www.linkedin.com/school/driven-education">web development bootcamp</UnderlinedLink>
          {' '}
          (+5000 people applied / 50 selected). Delivered most of the assignments &quot;beyond
          expectations&quot;.
        </TimelineItem>
        <TimelineItem icon="🐧" date="2020">
          During lockdown, bought a Raspberry Pi to play with, switched to Linux on all my
          computers and started learning to program.
        </TimelineItem>
        <TimelineItem icon="🎓" date="Jun, 2020">Got my bachelors degree in Business Administration.</TimelineItem>
        <TimelineItem icon="🌱" date="Feb, 2020">Became vegan after about 3 years vegetarian.</TimelineItem>
        <TimelineItem icon="🏰" date="Nov, 2019 - Feb 2020">
          Approved for the
          {' '}
          <UnderlinedLink href="https://jobs.disneycareers.com/cultural-exchange-program">Cultural Exchange Program</UnderlinedLink>
          {' '}
          at the Walt Disney
          World Resort, Florida, USA.
        </TimelineItem>
        <TimelineItem icon="💼" date="Jun, 2017">Started my bachelors in Business Administration.</TimelineItem>
        <TimelineItem icon="🇺🇸" date="Jan, 2012 - Jun 2012">When I was 15, I was an exchange student in Louisiana, USA.</TimelineItem>
        <TimelineItem icon="👶" date="May, 1996" isLast>&quot;Hello World&quot;, Rio, Brazil.</TimelineItem>
      </TimeLine>
    </div>
  </>
);

export default AboutPage;
