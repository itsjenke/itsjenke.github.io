import dynamic from 'next/dynamic';

const HeaderResponsive = dynamic(() => import('../../components/general/Header'));
const HeroContentLeft = dynamic(() => import('../../components/general/Hero'));
const FeaturesTitle = dynamic(() => import('../../components/general/Feature'));
const CardsCarousel = dynamic(() => import('../../components/general/Carousel'));
const ArticlesCardsGrid = dynamic(() => import('../../components/general/Card'));
const FooterSocial = dynamic(() => import('../../components/general/Footer'));

export default function Home() {

  return (
    <>
    <HeaderResponsive/>
    <HeroContentLeft/>
    <FeaturesTitle/>
    <CardsCarousel/>
    <ArticlesCardsGrid/>
    <FooterSocial/>
    </>
  )
}
