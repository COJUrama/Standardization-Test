import Header from './Header';
import Shop from './Shopping/Shop';
import Products from './The Products/Products';
import Features from './The Features/Features';
import Blog from './The Blog/Blog';
import Testimonials from './The Testimonials/Testimonials';
import CallToAction from './CallToAction';
import Footer from './Footer';

function Home() {
  return (
    <>
      <Header />
      <Shop />
      <Products />
      <Features />
      <Blog />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Home;
