import React from 'react';
import FAQQuestionScreen from '../../src/components/screens/FAQQuestionScreen';
import webPageHOC from '../../src/components/wrappers/WebPage/hoc';

function FAQInternaScreen({ category, question }) {
  return (
    <FAQQuestionScreen
      question={question}
      category={category}
    />
  );
}

FAQInternaScreen.propTypes = FAQQuestionScreen.propTypes;

export default webPageHOC(FAQInternaScreen);

export async function getStaticProps({ params }) {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then(async (respostaDoServer) => {
      const resposta = await respostaDoServer.json();
      return resposta.data;
    });

  const dadosDaPagina = faqCategories.reduce((valorAcumulado, faqCategory) => {
    const foundQuestion = faqCategory.questions.find((question) => {
      if (question.slug === params.slug) {
        return true;
      }
      return false;
    });

    if (foundQuestion) {
      return {
        ...valorAcumulado,
        category: faqCategory,
        question: foundQuestion,
      };
    }

    return valorAcumulado;
  }, {});

  return {
    props: {
      category: dadosDaPagina.category,
      question: dadosDaPagina.question,
      pageProps: {
        seoProps: {
          headTitle: dadosDaPagina.question.title,
          pathName: 'Perguntas Frequentes',
        },
        boxProps: {
          backgroundImage: 'none',
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then(async (respostaDoServer) => {
      const resposta = await respostaDoServer.json();
      return resposta.data;
    });

  const paths = faqCategories.reduce((valorAcumulado, faqCategory) => {
    const questionsPaths = faqCategory.questions.map((question) => {
      const questionSlug = question.slug;
      return { params: { slug: questionSlug } };
    });

    return [
      ...valorAcumulado,
      ...questionsPaths,
    ];
  }, []);

  return {
    paths,
    fallback: false,
  };
}
