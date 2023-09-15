import { FooterSocial } from '../../components/general/Footer';
import { FeaturesTitle } from '../../components/general/Feature';
import { HeroContentLeft } from '../../components/general/Hero';
import { CardsCarousel } from '../../components/general/Carousel';
import { HeaderResponsive } from '../../components/general/Header';
import { ArticlesCardsGrid } from '../../components/general/Card';

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
