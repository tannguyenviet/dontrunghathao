import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Feet from 'modules/FeetPage'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from 'firebase-config';
import { initializeApp } from 'firebase-admin/app';
export default Feet
export async function getStaticProps({ locale } :any) {
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