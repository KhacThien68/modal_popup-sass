import React from 'react'
import { SidebarItem } from './SidebarItem'

export type ItemSideBar = {
  label: string
  key: number
  children: React.ReactNode
}

type LeftSideBarProps = {
  itemList?: ItemSideBar[]
  activeItem: number
  setActiveItem: (activeItem: number) => void
}

const LeftSideBar = ({
  itemList,
  activeItem,
  setActiveItem,
}: LeftSideBarProps) => {
  return (
    <div className="left_sidebar-container">
      <ul>
        {itemList?.map((item, index) => {
          const isActive = activeItem === item.key
          return (
            <SidebarItem
              key={index}
              item={item}
              label={item.label}
              activeItem={activeItem}
              isActive={isActive}
              setActiveItem={(number) =>setActiveItem(number)}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default LeftSideBar
