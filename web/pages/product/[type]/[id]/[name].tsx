import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Product from 'modules/Product';
export default Product;
export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      // Will be passed to the page component as props
    },
  };
}
