import React from 'react';
import FAQScreen from '../../src/components/screens/FAQScreen';
import webPageHOC from '../../src/components/wrappers/WebPage/hoc';

function FAQPage({ faqCategories }) {
  return (
    <FAQScreen faqCategories={faqCategories} />
  );
}
FAQPage.propTypes = FAQScreen.propTypes;

export default webPageHOC(FAQPage, {
  pageProps: {
    seoProps: {
      headTitle: 'Perguntas Frequentes',
      pathName: 'Perguntas Frequentes',
    },
    boxProps: {
      backgroundImage: 'none',
    },
  },
});

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((respostaDoServer) => respostaDoServer.json())
    .then((respostaConvertida) => respostaConvertida.data);

  return {
    props: {
      faqCategories,
    }, // will be passed to the page component as props
  };
}
