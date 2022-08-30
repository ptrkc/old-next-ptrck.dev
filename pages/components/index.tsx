import type { NextPage } from 'next';
import Head from 'next/head';
import SegmentedControl from 'components/SegmentedControl';
import { useState } from 'react';

const SegmentedControlSection = () => {
  const [selectedValue, setSelectedValue] = useState('Food');
  const options = [
    { label: 'Food', value: 'Food' },
    { label: 'Drinks', value: 'Drinks' },
    { label: 'Deserts', value: 'Deserts' },
  ];
  return (
    <div>
      <h1>SegmentedControl</h1>
      <SegmentedControl
        options={options}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
    </div>
  );
};

const ComponentsPage: NextPage = () => (
  <div>
    <Head>
      <title>React Components</title>
      <meta name="description" content="Personal blog and portfolio." />
    </Head>
    <main className="flex justify-center items-center h-screen">
      <SegmentedControlSection />
    </main>
  </div>
);

export default ComponentsPage;
