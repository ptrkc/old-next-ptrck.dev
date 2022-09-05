import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import SegmentedControl from 'components/SegmentedControl';
import FileDropzone, { ProcessedFile } from 'components/FileDropzone';

const OPTIONS = [
  { label: 'Main', value: 'Main 🍔' },
  { label: 'Sides', value: 'Sides 🍟' },
  { label: 'Deserts', value: 'Deserts 🍦' },
  { label: 'Drinks', value: 'Drinks 🍹' },
];

const SegmentedControlSection = () => {
  const [selectedValue, setSelectedValue] = useState(OPTIONS[0].value);
  return (
    <div className="grid grid-cols-1 gap-4">
      <h1>SegmentedControl</h1>
      <p>
        Selected value:
        {' '}
        {selectedValue}
      </p>
      <p>Component:</p>
      <SegmentedControl
        options={OPTIONS}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
    </div>
  );
};

const FileDropzoneSection = () => {
  const [selectedFiles, setSelectedFiles] = useState<Array<ProcessedFile>>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mimeTypes, setMimeTypes] = useState(['image/jpeg', 'image/png', 'text/plain', 'application/pdf']);
  const [isMultiple, setIsMultiple] = useState(true);

  const handleSubmit = () => new Promise<void>((resolve) => {
    setIsSubmitting(true);
    setSelectedFiles(selectedFiles.map((file) => ({ ...file, status: 'submitting' })));
    setTimeout(() => {
      setSelectedFiles(selectedFiles.map((file) => ({ ...file, status: 'added' })));
      setIsSubmitting(false);
      resolve();
    }, 1000);
  });
  const reset = () => setSelectedFiles([]);

  useEffect(() => {
    reset();
  }, [isMultiple, mimeTypes]);

  const isDisabled = isSubmitting || !selectedFiles.length;

  return (
    <div className="grid grid-cols-1 gap-4">
      <h1>FileDropzone</h1>
      <label htmlFor="mime-types" className="w-full grid gap-2">
        MIME Types (comma separated, will reset selected files)
        <input
          id="mime-types"
          type="text"
          className="rounded-md p-2 text-black"
          value={mimeTypes}
          onChange={(event) => setMimeTypes(event.target.value.split(','))}
        />
      </label>
      <label htmlFor="multiple">
        <div className="flex gap-2">
          <input
            id="multiple"
            type="checkbox"
            onChange={() => setIsMultiple(!isMultiple)}
            checked={isMultiple}
          />
          Multiple files (will reset selected files)
          {String(isMultiple)}
        </div>
      </label>
      <p>Component (not an actual upload, 1 second timeout):</p>
      <FileDropzone
        multiple={isMultiple}
        value={selectedFiles}
        onChange={setSelectedFiles}
        mimeTypes={mimeTypes}
      />
      <button
        className="btn btn-blue mx-auto"
        type="button"
        disabled={isDisabled}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

const ComponentsPage: NextPage = () => (
  <div>
    <Head>
      <title>React Components</title>
      <meta name="description" content="Custom React Components." />
    </Head>
    <main className="max-w-4xl mx-auto p-2 grid grid-cols-1 gap-10">
      <hr className="border-neutral-600" />
      <SegmentedControlSection />
      <hr className="border-neutral-600" />
      <FileDropzoneSection />
      <hr className="border-neutral-600" />
    </main>
  </div>
);

export default ComponentsPage;
