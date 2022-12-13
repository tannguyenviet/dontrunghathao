import { Card, Col, Row, Space, Spin } from 'antd';
import clsx from 'clsx';
import { Item, Product } from 'components/Products';
import Spacing from 'components/Spacing';
import { log } from 'console';
import { getDatabase, onValue, ref } from 'firebase/database';
import { collection } from 'firebase/firestore';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.less';
const productTemp: Item = {
  name: 'Tea',
  information:
    'Tea is the second most popular beverage in the world (after drinking water) with a lold origin, attached to many Asian ethnic groups. Tea leaves can be oxidized (fermented), roasted, dried, or mixed with other herbs such as flowers, spices, or other fruits before being made into boiling water. Compared with other foods, tea is a low-energy drink that also has the ability to prevent diseases and improve health.',
  manufacturePlaces: ['Thai Nguyen', 'Moc Chau', 'Ha Giang', 'Bao Loc'],
  certificates: [
    'CFS (Certificate of Free Sale) certifies that the products or goods are manufactured and allowed to circulate freely in the exporting country.',
    'HC (Health Certificate)',
    'ISO 22000/HACCP',
  ],
  image:
    'https://res.cloudinary.com/dveexa3ua/image/upload/v1669909798/ids-networks/products/agricultural/agricultural-13_ptkdms.png',
};
const ProductPage = () => {
  const database = getDatabase();
  const [product, setProduct] = useState<Item>();
  const { query } = useRouter();
  const { type, id, name } = query;

  const starCountRef = ref(database, 'product/products');
  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      let products: Product[] = snapshot.val() || [];
      const product = products
        .find((product) => product.type === type)
        ?.items.find((item) => item.name.toLowerCase() === name);
      if (product) {
        setProduct(product);
      }
    });
  }, []);
  return (
    <Spacing className="minH-75vh">
      <Spin spinning={!product}>
        {product && (
          <Row className="mt-180 mb-99" gutter={[64, { xs: 24, sm: 40, md: 60, lg: 92 }]}>
            <Col span={24} lg={14} md={24}>
              <Space className="text-16 " direction="vertical" size={8}>
                <div className="text-35 bolder mb-24">{product?.name}</div>
                <div className="mb-24">{product.information}</div>
                <div className="mb-24">
                  <div className="mb-12 text-20 bolder">Certificate</div>
                  {product.certificates.map((certificate, index) => (
                    <div key={'certificate' + index} className="mb-8">
                      {certificate}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="mb-20 text-20 bolder">Place of Manufacture</div>
                  <Space size={24}>
                    {product.manufacturePlaces.map((place) => (
                      <Space direction="vertical">
                        <div className="text-13">Vietnam</div>
                        <div className="bolder red">{place}</div>
                      </Space>
                    ))}
                  </Space>
                </div>
              </Space>
            </Col>
            <Col className="d-flex f-center" span={24} lg={10} md={24}>
              <div className={styles.wrapImage}>
                <div className={styles.bg}></div>
                <img
                  className={clsx(styles.image, 'w-100 cover')}
                  src={product.image.split('upload').join('upload/w_500,h_500,c_fill')}
                  alt=""
                />
              </div>
            </Col>
          </Row>
        )}
      </Spin>
    </Spacing>
  );
};

export default ProductPage;
