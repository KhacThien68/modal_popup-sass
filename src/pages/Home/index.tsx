import React, { useState } from 'react'
import Popup from '../../components/popup'
import { SIDEBAR_LIST } from './constants'

const Home = () => {
  const [isShowPopup, setIsShowPopup] = useState(false)

  const handleShowPopup = () => {
    setIsShowPopup(true)
  }

  const handleClosePopup = () => {
    setIsShowPopup(false)
  }

  return (
    <div className="home_page-container">
      <div className="title">Home component</div>
      <button className="button" onClick={handleShowPopup}>
        Show Popup
      </button>
      {isShowPopup && (
        <Popup
          title={'Đây là popup'}
          hasSidebar
          sidebarList={SIDEBAR_LIST}
          handleClose={handleClosePopup}
          hasFooter={true}
          btnCancel={{
            label: 'Cancel',
            event: handleClosePopup,
          }}
        />
      )}
    </div>
  )
}

export default Home
