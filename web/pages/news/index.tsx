import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import NewsPage from 'modules/NewsPage';
import { db } from 'firebase-config';
import Banner from 'components/Banner';
import { collection, doc, getDocs } from 'firebase/firestore';

export default NewsPage;
export async function getServerSideProps({ locale }: any) {
  const querySnapshot = await getDocs(collection(db, 'news'));

  const news: any = [];

  querySnapshot.forEach((doc) => {
    news.push({ id: doc.id, ...doc.data() });
  });
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      news,
      // Will be passed to the page component as props
    },
  };
}
