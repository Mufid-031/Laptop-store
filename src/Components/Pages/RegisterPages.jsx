import FormInput from "../Fragment/Input"


const Register = () => {
    return (
        <div className="w-[500px] bg-slate-700 drop-shadow-xl rounded-lg mx-auto mt-20 px-10">
            <FormInput.Title text="Register" />
            <form action="" className="flex flex-col mt-5">
                <FormInput text="Full Name" type="fullName" name="fullName" id="fullName" placeholder="John Doe">
                    <FormInput.Label htmlFor="fullName" text="Full Name" />
                    <FormInput.Input type="fullName" name="fullName" id="fullName" placeholder="John Doe" />
                </FormInput>
                <FormInput text="Password" type="password" name="password" id="password" placeholder="*****">
                    <FormInput.Label htmlFor="password" text="Password" />
                    <FormInput.Input type="password" name="password" id="password" placeholder="*****" />
                </FormInput>
                <FormInput text="Confirm Password" type="confirmpassword" name="confirmpassword" id="confirmpassword" placeholder="*****">
                    <FormInput.Label htmlFor="confirmpassword" text="Confirm Password" />
                    <FormInput.Input type="confirmpassword" name="confirmpassword" id="confirmpassword" placeholder="*****" />
                </FormInput>
                <FormInput.Button to="/login" text="Register" />
                <FormInput.OptionLR value=" Login" to="/login" />
            </form>
        </div>
    )
}

export default Register