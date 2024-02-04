import { Link } from "react-router-dom"

const FormInput = (Props) => {
    const { children } = Props

    return (
        <>
            {children}
        </>

    )
}

const Title = (Props) => {
    const { text } = Props

    return (
        <>
            <h1 className="text-5xl font-semibold pt-5 text-lime-300">{text}</h1>
            <p className="text-lg mt-3 text-slate-100">Welcome back, please enter your details</p>
        </>
    )
}

const Label = (Props) => {
    const { htmlFor, text } = Props

    return (
        <label className="pb-2 text-2xl text-lime-300" htmlFor={htmlFor}>{text}</label>
    )
}

const Input = (Props) => {
    const { type, name, id, placeholder } = Props

    return (
        <input className="h-10 mt-2 mb-3 pl-2 text-lg focus:ring-4 focus:ring-lime-300" type={type} name={name} id={id} placeholder={placeholder} />
    )
}

const Button = (Props) => {
    const { text, to } = Props

    return (
        <Link to={to} ><button className="w-full h-10 mt-10 mb-10 bg-lime-300 text-black rounded-md font-bold text-xl hover:bg-lime-400 active:bg-lime-500">{text}</button></Link>

    )
}

const OptionLR = (Props) => {
    const { value, to } = Props

    return (
        value === " Login" ? <p className="text-md text-slate-100 text-center pb-5">Already have an account?<Link to={to} className="text-lime-300 cursor-pointer">{value}</Link></p> : <p className="text-md text-slate-100 text-center pb-5">Don&apos;t have an account?<Link to={to} className="text-lime-300 cursor-pointer">{value}</Link></p>
    )
}

FormInput.Title = Title
FormInput.Label = Label
FormInput.Input = Input
FormInput.Button = Button
FormInput.OptionLR = OptionLR


export default FormInput