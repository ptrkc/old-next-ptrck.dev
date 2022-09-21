import Image from 'next/future/image';
import { FiArrowRight } from 'react-icons/fi';
import LinkBox from 'components/LinkBox';

const ProfilePicture = () => (
  <Image
    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAADAgMAAADEhDYSAAAACVBMVEWAgIAAAACAAADfLp0nAAAADklEQVR4nGNgYAhgWAAAAZYA8fanfOoAAAAASUVORK5CYII="
    placeholder="blur"
    className="overflow-hidden rounded-full border-2 border-neutral-800"
    width="450"
    height="600"
    src="/images/patrick.jpg"
    alt="patrick"
  />
);

const Presentation = () => (
  <div className="flex justify-between gap-8 flex-col sm:flex-row mx-auto">
    <div className="max-w-[200px] mx-auto">
      <ProfilePicture />
    </div>
    <div className="gap-2 flex flex-col items-baseline">
      <p>👋Hello! I am</p>
      <h1>Patrick Carneiro</h1>
      <p>and I&apos;m a developer, creating things for both work and fun.</p>
      <p>
        I&apos;ve been using mostly JavaScript, TypeScript, React, Next.js, Node.js and Flutter.
      </p>
      <LinkBox href="/about" className="mx-auto sm:mx-0">
        More about and CV
        <FiArrowRight />
      </LinkBox>
    </div>
  </div>
);

const HomePage = () => (
  <div className="mx-auto flex justify-between pt-10">
    <Presentation />
  </div>
);

export default HomePage;
