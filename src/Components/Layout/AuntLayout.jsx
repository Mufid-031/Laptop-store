import Login from "../Pages/LoginPages"
import Register from '../Pages/RegisterPages'
import { useState } from "react"

const AuntLayout = (Props) => {
    const { type } = Props

    const [account, setAccount] = useState({})


    return (
        <div className="w-full h-full flex items-center">
            {type === "login" ? <Login account={account} /> : <Register setAccount={setAccount} />}
        </div>
    )
}

export default AuntLayout