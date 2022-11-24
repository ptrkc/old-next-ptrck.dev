const possibleTags = {
  nextjs: {
    styles: { background: '#000000', color: 'white' },
    text: 'Next.js',
  },
  javascript: {
    styles: { background: '#F7DF1E', color: 'black' },
    text: 'JavaScript',
  },
  typescript: {
    styles: { background: '#3178C6', color: 'white' },
    text: 'TypeScript',
  },
  styledcomponents: {
    styles: { background: '#DB7093', color: 'black' },
    text: 'styled-components',
  },
  react: { styles: { background: '#61DAFB', color: 'black' }, text: 'React' },
  nodejs: {
    styles: { background: '#339933', color: 'white' },
    text: 'Node.js',
  },
  tailwindcss: {
    styles: { background: '#06B6D4', color: 'white' },
    text: 'Tailwind CSS',
  },
  postgresql: {
    styles: { background: '#4169E1', color: 'white' },
    text: 'PotsgreSQL',
  },
  express: {
    styles: { background: '#000000', color: 'white' },
    text: 'Express',
  },
  default: { styles: { background: '#000000', color: 'white' }, text: '' },
} as const;

export type TagNames = keyof typeof possibleTags;

const Tag = ({ tag }: { tag: TagNames }) => {
  const tagData = possibleTags[tag] || possibleTags.default;
  return (
    <span
      style={tagData.styles}
      className="rounded-full px-2 py-1 text-xs dark:brightness-75"
    >
      {tagData.text || tag}
    </span>
  );
};

export default Tag;
