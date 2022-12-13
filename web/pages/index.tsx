import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LandingPage from '../modules/LandingPage';
import { db } from 'firebase-config';
import { getDatabase, onValue, ref } from 'firebase/database';

export default LandingPage;
export async function getStaticProps({ locale }: any) {
  const querySnapshot = await getDocs(collection(db, 'news'));

  const news: any = [];

  querySnapshot.forEach((doc) => {
    news.push({ id: doc.id, ...doc.data() });
  });
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      // Will be passed to the page component as props
      news,
    },
  };
}
