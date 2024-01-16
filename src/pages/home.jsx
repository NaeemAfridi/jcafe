import About from "../components/about/About";
import BookTable from "../components/bookTable/BookTable";
import Carousel from "../components/carousel/Carousel";
import Carousel2 from "../components/carousel/Carousel2";
import Chefs from "../components/chefs/Chefs";
import Hero from "../components/hero/Hero";
import Menu from "../components/menu/Menu";
import StatsCounter from "../components/statsCounter/StatsCounter";
import WhyUs from "../components/whyUs/WhyUs";

const home = () => {
  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <WhyUs />
        <StatsCounter />
        <Menu />
        <Chefs />
        <BookTable />
        <Carousel />
        <Carousel2 />
      </main>
    </>
  );
};

export default home;
