import type { NextPage } from 'next';
import Head from 'next/head';
import SegmentedControl from 'components/SegmentedControl';
import { useState } from 'react';

const OPTIONS = [
  { label: 'Main', value: 'Main' },
  { label: 'Sides', value: 'Sides' },
  { label: 'Deserts', value: 'Deserts' },
  { label: 'Drinks', value: 'Drinks' },
];

const SegmentedControlSection = () => {
  const [selectedValue, setSelectedValue] = useState(OPTIONS[0].value);
  return (
    <div className="grid grid-cols-1 gap-4">
      <h1>SegmentedControl</h1>
      <p>Select any of the options below:</p>
      <SegmentedControl
        options={OPTIONS}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <p>
        Selected value:
        {' '}
        {JSON.stringify(selectedValue)}
      </p>
    </div>
  );
};

const ComponentsPage: NextPage = () => (
  <div>
    <Head>
      <title>React Components</title>
      <meta name="description" content="Custom React Components." />
    </Head>
    <main className="max-w-4xl mx-auto p-2">
      <SegmentedControlSection />
    </main>
  </div>
);

export default ComponentsPage;
