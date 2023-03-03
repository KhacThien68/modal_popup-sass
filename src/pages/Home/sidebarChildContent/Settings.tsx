import UserImg from '../../../assets/img/userImg.jpg'

export const Settings = () => {
  return (
    <div className="settings-container">
      <img
        style={{ objectFit: 'cover', borderRadius: '50%' }}
        src={UserImg}
        alt="user information"
        width={100}
        height={100}
      />
      <div className="user-info">
        <div className="user-name">
          <div className="name-part">
            <p>First Name</p>
            <div className="content-container">
              <span>Han</span>
            </div>
          </div>
          <div className="name-part">
            <p>Last Name</p>
            <div className="content-container">
              <span>Ngoc</span>
            </div>
          </div>
        </div>
        <div className="user-email">
          <p>Email</p>
          <div className="email-content">hanttn@creativeforce.io</div>
        </div>
      </div>
    </div>
  )
}
