import withLayout from '../components/MyLayout';

const Page = () => <p>This is the about page</p>;

export default withLayout(Page);

/*
//Method 2 - Page content as a prop
======================
import Layout from '../components/MyLayout.js';

const aboutPageContent = <p>This is the about page</p>;

export default function About() {
  return <Layout content={aboutPageContent} />;
}
*/
