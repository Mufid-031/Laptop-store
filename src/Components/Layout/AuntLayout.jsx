import Login from "../Pages/LoginPages"
import Register from '../Pages/RegisterPages'

const AuntLayout = (Props) => {
    const { type } = Props

    return (
        <div className="w-full h-full flex items-center">
            {type === "login" ? <Login /> : <Register />}
        </div>
    )
}

export default AuntLayout