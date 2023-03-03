import UserImg from '../../assets/img/userImg.jpg'

export const UserInfo: React.FC = () => {
  return (
    <>
      <div className="user_info-container">
        <img src={UserImg} alt="user information" />
        <p>Khắc Thiện</p>
      </div>
    </>
  )
}
