import { Button, Card, Col, Pagination, Row } from 'antd';
import clsx from 'clsx';
import Spacing from 'components/Spacing';
import { getDatabase, ref, onValue } from 'firebase/database';
import React, { useEffect, useMemo, useState } from 'react';
import styles from './styles.module.less';
import { db } from 'firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';
import ReadMore from 'components/ReadMore';
import NextIcon from 'assets/svg/Next';
export interface Item {
  name: string;
  information: string;
  manufacturePlaces: string[];
  certificates: string[];
  image: string;
}

export interface Product {
  type: 'agricultural' | 'building' | 'furniture' | 'garment' | 'other';
  name: string;
  script: string;
  itemQuantity?: number;
  items: Item[];
}
const Products = () => {
  const [filter, setFilter] = useState<'agricultural' | 'building' | 'furniture' | 'garment' | 'other'>('building');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const database = getDatabase();
  const querySnapshot = getDocs(collection(db, 'news'));
  const [products, setProducts] = useState<Product[]>([]);
  const starCountRef = ref(database, 'product/products');
  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      // updateStarCount(postElement, data);
      setProducts(data);
    });
  }, []);

  const activeProduct = useMemo(() => {
    return products.find((product) => product.type === filter) || ({} as Product);
  }, [products, filter]);
  const imageProducts = useMemo(() => {
    const images: string[] = [];
    const length = activeProduct?.itemQuantity || 0;
    for (let index = 0; index < length; index++) {
      images.push(`/images/products/${activeProduct?.type || ''}/${activeProduct?.type}-${index + 1}.png`);
    }
    return images.splice((currentPage - 1) * 6, 6);
  }, [products, currentPage]);
  const activeItemProducts = useMemo(() => {
    const cloneItem: Item[] = [];
    if (activeProduct && activeProduct.items) {
      activeProduct.items.forEach((item) => cloneItem.push(item));
    }
    const cloneActiveProducts: Product = { ...activeProduct, items: cloneItem };
    return cloneActiveProducts?.items?.splice((currentPage - 1) * 6, 6);
  }, [activeProduct, currentPage]);
  return (
    <Spacing>
      <div className="d-flex gap-24 f-center f-wrap mt-32 mb-32">
        {products.map((product) => (
          <div
            key={'button' + product.name}
            className={clsx(styles.button, [product.type === filter ? styles.active : ''], 'text-16 px-16 py-10')}
            onClick={() => {
              setCurrentPage(1);
              setFilter(product.type);
            }}
          >
            {product.name}
          </div>
        ))}
      </div>
      <div className="mb-32">{activeProduct?.script}</div>
      <Row className="mb-32 justify-center " gutter={[24, 24]}>
        {activeItemProducts?.map((item, index) => (
          <Col key={index} xs={12} md={8} lg={6} xl={4} span={4}>
            <a
              className="h-100"
              href={`/product/${filter}/id/${item.name.toLowerCase()}`}
              rel="noopener noreferrer"
            >
              <Card hoverable className={styles.card}>
                <div className={clsx(styles.name, 'bolder')}>{item.name}</div>
                <img
                  className="w-100 cover"
                  src={item.image.split('/upload').join('/upload/w_672,h_856,c_fill/')}
                  alt=""
                />
                <span className={clsx(styles.nextIcon, 'f-start red opacity-8')}>
                  <span className="mr-8 bold white">Read more</span>
                  <NextIcon />
                </span>
              </Card>
            </a>
          </Col>
        ))}
      </Row>

      <div className="d-flex f-center">
        <Pagination
          className={clsx(styles.pagination, 'mb-32')}
          onChange={(value) => setCurrentPage(value)}
          defaultPageSize={6}
          defaultCurrent={1}
          current={currentPage}
          total={activeProduct.items?.length}
          hideOnSinglePage
        />
      </div>
    </Spacing>
  );
};

export default Products;
