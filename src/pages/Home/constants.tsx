import { ItemSideBar } from '../../components/popup/LeftSideBar'
import { Settings } from './sidebarChildContent/Settings'

export const SIDEBAR_LIST: ItemSideBar[] = [
  {
    label: 'Settings',
    key: 1,
    children: <Settings />,
  },
  {
    label: 'Contact Info',
    key: 2,
    children: <div>Contact Info</div>,
  },
  {
    label: 'Date & Time',
    key: 3,
    children: <div>Date & Time</div>,
  },
  {
    label: '2FA',
    key: 4,
    children: <div>2FA</div>,
  },
]
