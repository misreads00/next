// This is the Link API
import Link from 'next/link';

const Index = () => (
  <div>
	<Link href="/about">
	  <a title="About Page">About Page</a>
	</Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;

//Then click the "About Page" -> back button 
//It navigated the page to the index (home) page via the client side. 
