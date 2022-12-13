import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import NewsPage from 'modules/NewsPage';
import { db } from 'firebase-config';
import Banner from 'components/Banner';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import FeetAuto from 'modules/FeetAuto';
import { getDatabase, ref, onValue } from 'firebase/database';
export default FeetAuto;
export async function getServerSideProps({ locale }: any) {
  const docRef = doc(db, 'news', 'kbZB5JdiGpIfdMwLaz9p');
  const docSnap = await getDoc(docRef);
  const newPost = docSnap.data();

  const querySnapshot = await getDocs(collection(db, 'news'));

  const news: any = [];
  const id = docSnap.id;

  querySnapshot.forEach((doc) => {
    news.push({ id: doc.id, ...doc.data() });
  });


  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      newPost: { ...newPost, id },
      news,
      // Will be passed to the page component as props
    },
  };
}
