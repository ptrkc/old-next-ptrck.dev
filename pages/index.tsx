import Link from 'next/link';

const Presentation = () => (
  <div className="flex justify-between">
    <div>
      <h1>Patrick is a developer🇧🇷👨‍💻</h1>
      <p>Hello!👋</p>
      <p>I&apos;m a full stack developer.</p>
      <p>I love to play with web apps, Flutter and linux in general. </p>
      <p>
        If you wanna know more about me or my background, check the
        <Link href="/about">
          {' '}
          About
          {' '}
        </Link>
        page.
      </p>
    </div>
    <div>this side the picture</div>
  </div>
);

const HomePage = () => (
  <div className="mx-auto pt-40">
    <Presentation />
  </div>
);

export default HomePage;
