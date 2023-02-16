import Image from 'next/image'
import React from 'react'
import PayoneerBG from '../../../../public/assets/payoneerbg.jpg'
import PayoneerLogo from '../../../../public/assets/payoneer.png'
import styles from './login.module.css'
import Input from '../../common/Input/input'

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <div className={styles.payoImg}>
          LOGO
          {/* <Image src={PayoneerLogo} width={230} /> */}
        </div>
        <Input />
      </div>
      <div className={styles.bgImg}>
        <Image src={PayoneerBG} className={styles.heroBg} />
      </div>
    </div>
  )
}

export default Login