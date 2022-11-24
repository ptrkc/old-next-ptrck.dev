import { ReactElement } from 'react';
import {
  SiCss3,
  SiFlutter,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import cn from 'utils/classnames';
import { NextPageWithLayout } from './_app';

const logos = [
  {
    Icon: SiHtml5,
    style: 'text-orange-500',
  },
  {
    Icon: SiCss3,
    style: 'text-blue-500',
  },
  {
    Icon: SiJavascript,
    style: 'text-yellow-500',
  },
  {
    Icon: SiTypescript,
    style: 'text-blue-600',
  },
  {
    Icon: SiNodedotjs,
    style: 'text-green-500',
  },
  {
    Icon: SiReact,
    style: 'text-sky-500',
  },
  {
    Icon: SiNextdotjs,
    style: 'text-white bg-black rounded-full',
  },
  {
    Icon: SiPostgresql,
    style: 'text-blue-600',
  },
  {
    Icon: SiPrisma,
    style: 'text-gray-700',
  },
  {
    Icon: SiFlutter,
    style: 'text-sky-500',
  },
  {
    Icon: SiLinux,
    style: 'text-black bg-white rounded-full',
  },
];
const TestPage: NextPageWithLayout = () => (
  <div className="bg-white h-screen">
    <div className="bg-neutral-900 w-[1584px] h-[396px] overflow-hidden flex flex-wrap p-4 grayscale-[.5]">
      {Array.from(Array(20).keys()).map(index => {
        const { Icon, style } = logos[index] || logos[index % logos.length];

        return (
          <>
            <span className={cn('text-[76px] mx-[21px] my-[24px]', style)}>
              <Icon />
            </span>
            <span className={cn('w-[76px] h-[76px] mx-[21px] my-[24px]')} />
          </>
        );
      })}
    </div>
  </div>
);

TestPage.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default TestPage;
