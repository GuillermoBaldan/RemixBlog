import {
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

function Layout () {
return (
  <>
    <header>
    <h1>RemixBlog ✨</h1>
    <p>The place where you´ll find more than code</p>
    </header>
    <Outlet />
    <footer>
    ©Copyrigth 2022 BaldanCode. No Te lo copies!!
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

        <link rel='stylesheet' href={globalStyles} />
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
