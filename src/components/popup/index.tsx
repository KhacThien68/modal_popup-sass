import React from 'react'
import { ContentWithSidebar } from './ContentWithSidebar'
import { ItemSideBar } from './LeftSideBar'

type Button = {
  label: string
  event: () => void
  style?: object
  disabled?: boolean
}

type PopupProps = {
  title?: string
  header?: React.ReactNode
  appendStyleContent?: object
  appendStyleModal?: object
  className?: string
  hasSidebar?: boolean
  sidebarList?: ItemSideBar[]
  children?: React.ReactNode
  btnOK?: Button
  btnCancel?: Button
  handleClose: () => void
  footerStyle?: object
  appendStyle?: object
  hasFooter?: boolean
}

const Popup = ({
  title,
  header,
  appendStyleModal,
  className,
  hasSidebar = false,
  sidebarList,
  btnOK,
  btnCancel,
  handleClose,
  footerStyle,
  children,
  appendStyle,
  hasFooter = true,
}: PopupProps) => {
  const renderContent = () => {
    return hasSidebar ? (
      <ContentWithSidebar sidebarList={sidebarList} />
    ) : (
      children
    )
  }
  return (
    <div className="overlay">
      <div
        className={['modal', className].join(' ')}
        style={{ ...appendStyleModal }}
      >
        <div className={['popup-content', appendStyle].join(' ')}>
          {header || (
            <div className="header">
              <p className="header-title">{title || ''}</p>
              <button onClick={handleClose} className="button-delete">
                <span>X</span>
              </button>
            </div>
          )}
          <div className="content">{renderContent()}</div>
          {hasFooter && (
            <div style={footerStyle} className="popup-footer">
              {btnCancel && (
                <button
                  style={{
                    border: '1px solid #D5D5D5',
                    backgroundColor: '#FFFFFF',
                    color: btnCancel.disabled ? '#9C9C9C' : '#3a414b',
                    ...btnCancel.style,
                  }}
                  disabled={btnCancel.disabled}
                  onClick={btnCancel.event}
                >
                  {btnCancel.label}
                </button>
              )}
              {btnOK && (
                <button
                  style={{
                    border: 'none',
                    backgroundColor: btnOK.disabled ? '#D5D5D5' : '#2c73e8',
                    color: btnOK.disabled ? '#9C9C9C' : '#ffffff',
                    ...btnOK.style,
                  }}
                  disabled={btnOK.disabled}
                  onClick={btnOK.event}
                >
                  {btnOK.label}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Popup
