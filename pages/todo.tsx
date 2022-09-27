import { PropsWithChildren } from 'react';
import Head from 'next/head';
import cn from 'utils/classnames';

const TodoItem = ({ children, checked } : PropsWithChildren<{checked?: boolean}>) => (
  <li className={cn(checked && 'text-neutral-500 line-through')}>
    <input className="mr-2" type="checkbox" checked={!!checked} readOnly />
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
        <TodoItem checked>
          Style: dark mode
        </TodoItem>
        <TodoItem checked>
          Style: dark mode sync between tabs
        </TodoItem>
        <TodoItem checked>
          Style: animate page transitions
        </TodoItem>
        <TodoItem checked>
          Header: fixed with blur
        </TodoItem>
        <TodoItem>
          Header: Show underlined active page
        </TodoItem>
        <TodoItem checked>
          About: actual download pdf
        </TodoItem>
        <TodoItem>
          About: add pics to cards
        </TodoItem>
        <TodoItem>
          Home: blog preview
        </TodoItem>
        <TodoItem>
          Home: projects preview
        </TodoItem>
        <TodoItem>
          Home: techs I know list;
        </TodoItem>
        <TodoItem checked>
          Projects: add pictures with base64 blur
        </TodoItem>
        <TodoItem>
          Blog: MDX, Notion, GitHub?
        </TodoItem>
        <TodoItem>
          Blog: views, likes, comments?
        </TodoItem>
      </ul>
    </div>
  </>
);

export default TodoPage;
