import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import globalStyles from '~/styles/global.css'

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => ([
  {
    rel: 'stylesheet',
    href: globalStyles
  }
])

function Layout () {
return (
  <>
    <header>
    <Link to='/'>
    <h3>RemixBlog ✨</h3>
    </Link>
    </header>
    <Outlet />
    <footer>
    <small>©Copyrigth 2022 BaldanCode. No Te lo copies!!</small>
    </footer>
  </>
)
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <title>RemixBlog</title>
        <Meta />
        <Links />
      </head>

      <body>
       
      <Layout />
        <ScrollRestoration />

        <Scripts />

        <LiveReload />
      </body>
    </html>
  );
}
