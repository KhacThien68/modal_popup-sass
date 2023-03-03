import { ItemSideBar } from './LeftSideBar'

type Props = {
  item: ItemSideBar
  label: string
  activeItem: number
  isActive: boolean
  setActiveItem: (activeItem: number) => void
}

export const SidebarItem = ({
  item,
  label,
  isActive,
  setActiveItem,
}: Props) => {
    const handleClickItem = () => {
        setActiveItem(item.key)
    }
  return (
    <li>
      <div
        style={{
          backgroundColor: isActive ? '#e6eef6' : '#f6f6f6',
          borderRight: isActive ? '4px solid #4776fa' : '',
        }}
        className="sidebar-item"
        onClick={handleClickItem}
      >
        <p>{label}</p>
      </div>
    </li>
  )
}
