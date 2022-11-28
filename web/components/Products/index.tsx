import { Button, Card, Col, Pagination, Row } from 'antd';
import clsx from 'clsx';
import Spacing from 'components/Spacing';
import React, { useMemo, useState } from 'react';
import styles from './styles.module.less';
interface Product {
  code: 'agricultural' | 'building' | 'furniture' | 'garment' | 'other';
  name: string;
  script: string;
  itemQuantity?: number;
}
const Products = () => {
  const [filter, setFilter] = useState<'agricultural' | 'building' | 'furniture' | 'garment' | 'other'>('agricultural');
  const [currentPage, setCurrentPage] = useState<number>(1);

  console.log({ filter });
  const products: Product[] = [
    {
      code: 'agricultural',
      name: 'Agricultural',
      script:
        'Agricultural production capacity in Vietnam is a bright spot in the agricultural industry in the export market. Up to the present time (June 2022), the results of the agricultural product industry increased by 16.8% of the main export agricultural products according to the reported data on the export of agricultural products. Exporting pepper is on the top in the world; exporting cafes is on the second place in the world and the rice export reached nearly 3 million tons, increased by 10.3%.',
      itemQuantity: 16,
    },

    {
      code: 'building',
      name: 'Building materials',
      script: `Vietnam possesses plentiful mineral resources so the export of products related to construction materials is a huge advantage. We meet 30% of the capacity for export. And now, Vietnam's building materials industry has exported to over 120 countries and territories.`,
      itemQuantity: 10,
    },
    {
      code: 'furniture',
      name: 'Furniture',
      script: `Vietnam possesses plentiful mineral resources so the export of products related to construction materials is a huge advantage. We meet 30% of the capacity for export. And now, Vietnam's building materials industry has exported to over 120 countries and territories.`,
      itemQuantity: 6,
    },
    {
      code: 'garment',
      name: 'Garments',
      script: `Vietnam possesses plentiful mineral resources so the export of products related to construction materials is a huge advantage. We meet 30% of the capacity for export. And now, Vietnam's building materials industry has exported to over 120 countries and territories.`,
      itemQuantity: 5,
    },
    {
      code: 'other',
      name: 'Other',
      script: `Vietnam possesses plentiful mineral resources so the export of products related to construction materials is a huge advantage. We meet 30% of the capacity for export. And now, Vietnam's building materials industry has exported to over 120 countries and territories.`,
      itemQuantity: 1,
    },
  ];
  const activeProduct = useMemo(() => {
    return products.find((product) => product.code === filter);
  }, [filter]);
  const imageProducts = useMemo(() => {
    const images: string[] = [];
    const length = activeProduct?.itemQuantity || 0;
    for (let index = 0; index < length; index++) {
      images.push(`/images/products/${activeProduct?.code || ''}/${activeProduct?.code}-${index + 1}.png`);
    }
    return images.splice((currentPage - 1) * 6, 6);
  }, [activeProduct, currentPage]);
  console.log({ imageProducts });

  return (
    <Spacing>
      <div className="d-flex gap-24 f-center mt-32 mb-32">
        {products.map((product) => (
          <div
            key={'button' + product.name}
            className={clsx(styles.button, [product.code === filter ? styles.active : ''], 'text-16 px-16 py-10')}
            onClick={() => {
              setCurrentPage(1);
              setFilter(product.code);
            }}
          >
            {product.name}
          </div>
        ))}
      </div>
      <div className="mb-32">{activeProduct?.script}</div>
      <Row className="mb-32 justify-center " gutter={[24, 24]}>
        {imageProducts.map((image, index) => (
          <Col key={index} xs={12} md={8} lg={6} xl={4} span={4}>
            <Card hoverable className={styles.card}>
              <img className="w-100 cover" src={image} alt="" />
            </Card>
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
          total={activeProduct?.itemQuantity || 0}
        />
      </div>
    </Spacing>
  );
};

export default Products;
