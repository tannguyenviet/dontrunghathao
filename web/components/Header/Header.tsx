import { Breadcrumb, Dropdown, Layout, Menu } from 'antd';
import Item from 'antd/lib/list/Item';
import MenuIcon from 'assets/svg/Menu';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import styles from './styles.module.less';
interface Props {
  // handleScroll:Function;
  aboutUsRef?: React.MutableRefObject<null>;
}
const Header: FC<Props> = ({ aboutUsRef }) => {
  const router = useRouter();
  const handleScroll = (sectionId: string) => {
    if (router.pathname !== '/') {
      return router.push(`/${router.locale}?act=${sectionId}`);
    }
    // const selector = "#" + sectionId ;
    const element = document.getElementById(sectionId);
    window?.scrollTo({
      top: element?.offsetTop - 120,
      left: 0,
      behavior: 'smooth',
    });
  };
  const { pathname, asPath, query, locale } = router;
  const handleChangeLanguage = (value?: string) => {
    router.replace({ pathname, query }, asPath, { locale: value });
  };
  const localeCurrent = router.locale || 'en';
  const [activeFlag, setActiveFlag] = useState('en');
  useEffect(() => {
    setActiveFlag(localeCurrent);
  }, [locale]);
  const menu = (
    <Menu
      className={styles.wrapMenu}
      onClick={(value) => {
        handleChangeLanguage(value.key);
      }}
      selectable
      items={[
        {
          key: 'en',
          label: (
            <span className={styles.flag}>
              <Image objectFit="contain" width={24} height={24} alt="flag" src="/images/en.png"></Image>
              <span>English</span>
            </span>
          ),
        },
        {
          key: 'vn',
          label: (
            <span className={styles.flag}>
              {' '}
              <Image objectFit="contain" width={24} height={24} alt="flag" src="/images/vn.png"></Image>{' '}
              <span>Vietnam</span>
            </span>
          ),
        },
        {
          key: 'it',
          label: (
            <span className={styles.flag}>
              {' '}
              <Image objectFit="contain" width={24} height={24} alt="flag" src="/images/it.png"></Image>{' '}
              <span>Italy</span>
            </span>
          ),
        },
        {
          key: 'cn',
          label: (
            <span className={styles.flag}>
              {' '}
              <Image objectFit="contain" width={24} height={24} alt="flag" src="/images/cn.png"></Image>{' '}
              <span>China</span>
            </span>
          ),
        },
        {
          key: 'kr',
          label: (
            <span className={styles.flag}>
              {' '}
              <Image objectFit="contain" width={24} height={24} alt="flag" src="/images/kr.png"></Image>{' '}
              <span>Korea</span>
            </span>
          ),
        },
        {
          key: 'ru',
          label: (
            <span className={styles.flag}>
              {' '}
              <Image objectFit="contain" width={24} height={24} alt="flag" src="/images/ru.png"></Image>{' '}
              <span>Russian</span>
            </span>
          ),
        },
      ]}
    ></Menu>
  );
  const sectionMenu = (
    <Menu
      selectable
      items={[
        {
          key: 'AboutUs',
          label: (
            <a
              onClick={() => {
                handleScroll('aboutUs');
              }}
            >
              About Us
            </a>
          ),
        },
        {
          key: 'Journey',
          label: (
            <a
              onClick={() => {
                handleScroll('journey');
              }}
            >
              Journey
            </a>
          ),
        },
        {
          key: 'WhyIDS',
          label: (
            <a
              onClick={() => {
                handleScroll('whyIDS');
              }}
            >
              Why IDS
            </a>
          ),
        },
        {
          key: 'Product',
          label: (
            <a
              onClick={() => {
                handleScroll('product');
              }}
            >
              Product
            </a>
          ),
        },
        {
          key: 'Projects',
          label: (
            <a
              onClick={() => {
                handleScroll('project');
              }}
            >
              Projects
            </a>
          ),
        },
        {
          key: 'Team',
          label: (
            <a
              onClick={() => {
                handleScroll('team');
              }}
            >
              Team
            </a>
          ),
        },
        {
          key: 'Clients',
          label: (
            <a
              onClick={() => {
                handleScroll('client');
              }}
            >
              Clients
            </a>
          ),
        },
        {
          key: 'Clients',
          label: <a href="/news">News</a>,
        },
      ]}
    ></Menu>
  );
  return (
    <div className={styles.header}>
      <div className={styles.wrap}>
        <a href="/">
          <Image width={138} height={50} alt="logo" src="/images/ids-logo.png"></Image>
        </a>
        <ul className={styles.listNav}>
          <li>
            <a
              onClick={() => {
                handleScroll('aboutUs');
              }}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                handleScroll('journey');
              }}
            >
              Journey
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                handleScroll('whyIDS');
              }}
            >
              Why IDS
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                handleScroll('product');
              }}
            >
              Product
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                handleScroll('project');
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                handleScroll('team');
              }}
            >
              Team
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                handleScroll('client');
              }}
            >
              Clients
            </a>
          </li>
          <li>
            <a href="/news">News</a>
          </li>
        </ul>

        <Dropdown className={styles.dropDown} overlay={menu}>
          <div className={styles.wrapContent}>
            <Image width={24} height={24} alt="country" src={`/images/${activeFlag}.png`} />
            <a onClick={(e) => e.preventDefault()}>{activeFlag}</a>
            <Image width={12} height={6} alt="drop" src="/images/down-icon.png" />
          </div>
        </Dropdown>
        <Dropdown className={styles.sectionDropdown} overlay={sectionMenu}>
          <MenuIcon />
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
