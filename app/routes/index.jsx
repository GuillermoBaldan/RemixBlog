import { Link } from '@remix-run/react'

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>RemixBlog</h1>
     
      <Link to='/about'>
        Ir a About
      </Link>
    </div>
  );
}
