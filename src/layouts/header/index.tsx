import React from 'react'
import { Logo } from './logo'
import { UserInfo } from './userInfo'

const Header = () => {
  return (
    <div className="container">
      <div className="content-left">
        <Logo />
      </div>
      <div className="content-right">
        <UserInfo />
      </div>
    </div>
  )
}

export default Header
