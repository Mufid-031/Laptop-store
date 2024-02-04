import FormInput from "../Fragment/Input"

const Login = () => {
    return (
        <div className="w-[500px] bg-slate-700 drop-shadow-xl rounded-lg mx-auto mt-28 px-10">
            <FormInput.Title text="Login" />
            <form action="" className="flex flex-col mt-5">
                <FormInput text="Email" type="email" name="email" id="email" placeholder="Email">
                    <FormInput.Label htmlFor="email" text="Email" />
                    <FormInput.Input type="email" name="email" id="email" placeholder="Email" />
                </FormInput>
                <FormInput text="Password" type="password" name="password" id="password" placeholder="Password">
                    <FormInput.Label htmlFor="password" text="Password" />
                    <FormInput.Input type="password" name="password" id="password" placeholder="Password" />
                </FormInput>
                <p className="text-md text-slate-100 ">Forgot <span className="text-lime-300 cursor-pointer">password?</span></p>
                <FormInput.Button to="/app" text="Login" />
                <FormInput.OptionLR value=" Register" to="/register" />
            </form>
        </div>
    )
}

export default Login