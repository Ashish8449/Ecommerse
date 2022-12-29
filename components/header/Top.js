import React from 'react'
import styles from './style.module.scss'
import { MdSecurity } from 'react-icons/md'
import { BsSuitHeart } from 'react-icons/bs'
import { RiAccountPinCircleLine, RiArrowDropDownFill } from 'react-icons/ri'
import Link from 'next/link'
import { useState } from 'react'
import UserMenu from './UserMenu'
// import UserMenu from './UserMenu'
// import { useSession } from 'next-auth/react'
const country = {
  flag: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
  name: 'India',
}
export default function Top() {
  //   const { data: session } = useSession()
  const [visible, setVisible] = useState(false)
  const [logIn, setLogIn] = useState(false)
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.li}>
            <img src={country?.flag} alt='' />
            <span>{country?.name} / INR</span>
          </li>
          <li className={styles.li}>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li className={styles.li}>
            <span>Customer Service</span>
          </li>
          <li className={styles.li}>
            <span>Help</span>
          </li>
          <li className={styles.li}>
            <BsSuitHeart />
            <Link href='/profile/whishlist'>
              <span>Whishlist</span>
            </Link>
          </li>
          <li
            className={styles.li}
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            {logIn ? (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <img src={session?.user?.image} alt='' />
                  <span>{session?.user?.name}</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            ) : (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            )}
            {/* <li className={styles.li}>
              <div className={styles.flex}>
                <RiAccountPinCircleLine />
                <span>Account</span>
                <RiArrowDropDownFill />
              </div>
            </li> */}
            {/* session={session} */}
            {visible && <UserMenu />}
          </li>
        </ul>
      </div>
    </div>
  )
}
