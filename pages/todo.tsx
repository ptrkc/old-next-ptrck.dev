import { PropsWithChildren } from 'react';
import Head from 'next/head';
import cn from 'utils/classnames';

const TodoItem = ({ children, checked } : PropsWithChildren<{checked?: boolean}>) => (
  <li className={cn(checked && 'text-neutral-500 line-through')}>
    <input className="mr-2" type="checkbox" checked={!!checked} />
    {children}
  </li>
);

const TodoPage = () => (
  <>
    <Head>
      <title>TODO - Patrick Carneiro - Software Developer</title>
    </Head>
    <div className="flex flex-col items-start gap-4">
      <h1>TODO:</h1>
      <ul>
        <TodoItem>
          Style: dark mode
        </TodoItem>
        <TodoItem checked>
          Header: fixed with blur
        </TodoItem>
        <TodoItem checked>
          About: actual download pdf
        </TodoItem>
        <TodoItem>
          About: add pics
        </TodoItem>
        <TodoItem>
          Home: blog preview
        </TodoItem>
        <TodoItem>
          Home: projects preview
        </TodoItem>
        <TodoItem>
          Home: techs I know, list or fancy &quot;marquee&quot;
        </TodoItem>
        <TodoItem>
          Home: testimonials, thanks mom;
        </TodoItem>
        <TodoItem>
          Projects: add photos (with loading blur)
        </TodoItem>
        <TodoItem>
          Projects: add photos with loading blur
        </TodoItem>
        <TodoItem>
          Blog: MDX vs Notion?
        </TodoItem>
        <TodoItem>
          Blog: views
        </TodoItem>
        <TodoItem>
          Blog: likes and comments?
        </TodoItem>
        <TodoItem>
          Components: adjust style
        </TodoItem>
      </ul>
    </div>
  </>
);

export default TodoPage;
