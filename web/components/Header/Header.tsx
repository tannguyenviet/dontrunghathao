import { Breadcrumb, Dropdown, Layout, Menu } from 'antd';
import Item from 'antd/lib/list/Item';
import MenuIcon from 'assets/svg/Menu';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from './styles.module.less';

const Header = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const handleChangeLanguage = (value?: string) => {
    console.log('zooo');
    router.replace({ pathname, query }, asPath, { locale: value });
  };

  const menu = (
    <Menu
      onClick={(value) => {
        handleChangeLanguage(value.key);
      }}
      selectable
      items={[
        {
          key: 'en',
          label: <span>English</span>,
        },
        {
          key: 'vn',
          label: <span>Vietnam</span>,
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
          label: <a>AboutUs</a>,
        },
        {
          key: 'Journey',
          label: <a>Journey</a>,
        },
        {
          key: 'WhyIDS',
          label: <a>WhyIDS</a>,
        },
        {
          key: 'Product',
          label: <a>Product</a>,
        },
        {
          key: 'Projects',
          label: <a>Projects</a>,
        },
        {
          key: 'Team',
          label: <a>Team</a>,
        },
        {
          key: 'Clients',
          label: <a>Clients</a>,
        },
      ]}
    ></Menu>
  );
  return (
    <div className={styles.header}>
      <div className={styles.wrap}>
        <a href="">
          <Image width={138} height={50} alt="logo" src="/images/ids-logo.png"></Image>
        </a>
        <ul className={styles.listNav}>
          <li>
            <a>AboutUs</a>
          </li>
          <li>
            <a>Journey</a>
          </li>
          <li>
            <a>WhyIDS</a>
          </li>
          <li>
            <a>Product</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Team</a>
          </li>
          <li>
            <a>Clients</a>
          </li>
        </ul>
        <Dropdown className={styles.sectionDropdown} overlay={sectionMenu}>
          <MenuIcon />
        </Dropdown>
        <Dropdown className={styles.dropDown} overlay={menu}>
          <div className={styles.wrapContent}>
            <Image width={24} height={24} alt="country" src="/images/country-1.png" />
            <a onClick={(e) => e.preventDefault()}>EN</a>
            <Image width={12} height={6} alt="drop" src="/images/down-icon.png" />
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
