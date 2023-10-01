import dynamic from 'next/dynamic';

const HeaderResponsive = dynamic(() => import('../../components/general/Header'));
const Impressum = dynamic(() => import('../../components/general/Impressum'));
const FooterSocial = dynamic(() => import('../../components/general/Footer'));

export default function Home() {

  return (
    <>
    <HeaderResponsive/>
    <Impressum/>
    <FooterSocial/>
    </>
  )
}
