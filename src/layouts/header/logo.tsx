import { useNavigate } from 'react-router-dom'
import { ROUTER } from '../../router/config'
import logoIcon from '../../assets/logo/logoIcon.svg'

export const Logo = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(ROUTER.HOME_PAGE)
  }

  return (
    <img src={logoIcon} alt="logo" onClick={onClick} className="logo-icon" />
  )
}
