import { PropsWithChildren } from 'react';
import Head from 'next/head';

const TodoItem = ({ children } : PropsWithChildren) => (
  <li>
    <input className="mr-2" type="checkbox" />
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
        <TodoItem>
          Header: fixed with blur
        </TodoItem>
        <TodoItem>
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
