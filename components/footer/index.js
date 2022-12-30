import React from 'react'
import CopyRight from './CopyRight'
import Link from './Link'
import NewsLetter from './NewsLetter'
import Payment from './Payment'
import Socials from './Socials'
import styles from './style.module.scss'
export default function Footer({ country }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Link />
        <Socials />
        <NewsLetter />
        <Payment />
        <CopyRight country={country} />
      </div>
    </footer>
  )
}
