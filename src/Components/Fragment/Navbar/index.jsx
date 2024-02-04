const Navbar = (Props) => {
    const { children } = Props

    return (
        <nav className="w-full h-16 px-10 bg-slate-800 flex justify-between items-center border-b-2 border-lime-300 fixed top-0 right-0 left-0">
            {children}
        </nav>
    )
}

const Logo = () => {
    return (
        <div className="w-30 h-5">
            <h2 className="text-lime-300 text-xl">My Galery</h2>
        </div>
    )
}

const Menu = () => {
    const Li = ["Home", "Product", "About", "Contact"]

    return (
        <div className="w-30 h-5 ml-[100px]">
            <ul className="flex justify-between text-slate-100 w-[400px]">
                {Li.map((value, index) => {
                    return (
                        <li key={index} className="text-md font-bold hover:text-lime-300 cursor-pointer">{value}</li>
                    )
                })}
            </ul>
        </div>
    )
}

const ButtonTransparent = () => {
    return (
        <button className="w-20 h-10 bg-slate-800 text-lime-300 rounded-md font-bold text-md border-2 border-lime-300 mx-3 hover:bg-lime-300 hover:text-slate-800">Sign Up</button>
    )
}

const ButtonSignIn = () => {
    return (
        <button className="w-20 h-10 bg-lime-300 text-black rounded-md font-bold text-md hover:bg-lime-400 active:bg-lime-500">Sign In</button>
    )
}

const OptionLR = () => {
    return (
        <div>
            <Navbar.ButtonTransparent />
            <Navbar.ButtonSignIn />
        </div>
    )
}

Navbar.Logo = Logo
Navbar.Menu = Menu
Navbar.ButtonTransparent = ButtonTransparent
Navbar.ButtonSignIn = ButtonSignIn
Navbar.OptionLR = OptionLR


export default Navbar