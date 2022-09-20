import Head from 'next/head';
import UnderlinedLink from 'components/UnderlinedLink';

const AboutPage = () => (
  <>
    <Head>
      <title>About - Patrick Carneiro - Software Developer</title>
    </Head>
    <div className="flex flex-col justify-center">
      <h1>About</h1>
      <ul>
        <li> 👶 May, 1996: &quot;Hello World&quot;, Rio, Brazil.</li>
        <li> 🇺🇸 Jan, 2012 - Jun 2012: Was an exchange student in Louisiana, USA.</li>
        <li> 💼 Jun, 2017: Started my bachelors in Business.</li>
        <li>
          🏰 Nov, 2019 - Feb 2020: Approved to the
          {' '}
          <UnderlinedLink href="https://jobs.disneycareers.com/cultural-exchange-program">Cultural Exchange Program</UnderlinedLink>
          {' '}
          at the Walt Disney
          World Resort, Florida, USA.
        </li>
        <li> 🌱 Feb, 2020: Became vegan after about 3 years vegetarian.</li>
        <li> 🎓 Jun, 2020: Got my bachelors degree in Business.</li>
        <li>
          🐧 2020: During lockdown, bought a Raspberry Pi to play with, switched to Linux on all my
          computers and started learning to program.
        </li>
        <li>
          📚 Mar, 2021 - Sep, 2021: Got accepted into a competitive
          {' '}
          <UnderlinedLink href="https://www.linkedin.com/school/driven-education">web development bootcamp</UnderlinedLink>
          {' '}
          (+5000 people applied / 50 selected). Delivered most of the assignments &quot;beyond
          expectations&quot;.
        </li>
        <li>
          🧑‍💻 Oct, 2021: landed my first Software Engineer job for an American Startup.
        </li>
      </ul>
    </div>
  </>
);

export default AboutPage;
