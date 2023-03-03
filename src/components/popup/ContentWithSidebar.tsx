import { ItemSideBar } from './LeftSideBar'
import LeftSideBar from './LeftSideBar'
import { useState } from 'react'

type Props = {
  sidebarList?: ItemSideBar[]
}

export const ContentWithSidebar = ({ sidebarList }: Props) => {
  const [activeItem, setActiveItem] = useState(1)
  const activeSidebarItem = sidebarList?.find((item) => item.key === activeItem)
  const renderContentSidebar = () => {
    return activeSidebarItem?.children
  }
  return (
    <div className="content-sidebar-container">
      <LeftSideBar
        itemList={sidebarList}
        activeItem={activeItem}
        setActiveItem={(number: number) => setActiveItem(number)}
      />
      <div className="content-sidebar">
        <div className="content-sidebar-header">
          <h1>{activeSidebarItem?.label}</h1>
        </div>
        {renderContentSidebar()}
      </div>
    </div>
  )
}
