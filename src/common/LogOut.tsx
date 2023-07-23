import { useNavigate } from "react-router-dom"


const LogOut = () => {

  const navigate = useNavigate()
  
  const handleLogOut = () => {
    navigate('/')
  }

  return (
    <>
    <button
    className="logout"
    onClick={handleLogOut}
    >  
    <img src="/media/logout.png" alt="" />
    </button>
    </>
  )
}

export default LogOut
