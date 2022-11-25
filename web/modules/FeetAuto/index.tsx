import React, { useEffect, useState } from 'react';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { db } from 'firebase-config';
import Banner from 'components/Banner';



const FeetAuto = () => {
  const [news, setNews] = useState([]);
  const [newPost, setNewPost] = useState<any>(null);
  useEffect(() => {
    const getNews = async () => {
      const docRef = doc(db, 'news', 'kbZB5JdiGpIfdMwLaz9p');
      const docSnap = await getDoc(docRef);
      const newPost = docSnap.data();
      setNewPost(newPost);

      const querySnapshot = await getDocs(collection(db, 'news'));
      const news: any = [];
      querySnapshot.forEach((doc) => news.push(doc.data()));
      setNews(news);
      console.log();
    };
    getNews();
  }, []);
  console.log({newPost});
  
  return <div>
    

    {newPost && 
    <Banner image={newPost.backgroundImage} time='27-24 Octobo'  title={newPost.mainTitle}/> 
    
    }
  </div>;
};

export default FeetAuto;
