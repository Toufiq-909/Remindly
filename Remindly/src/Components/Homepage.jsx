import {useNavigate} from "react-router-dom"
export default function Homepage() {
    let nav=useNavigate();
    return (
        <>
        <div className={"flex flex-col mt-6 ml-4  items-center   h-[80vh] lg:mt-12"}>
            <p className="font-[tinos] italic font-medium text-4xl">
                A peaceful place to keep your mind clear welcome to <span
                className="bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500
 bg-clip-text text-transparent">
  Remaindly
</span>
            </p>

            <div className={"flex flex-col h-[70vh] mt-6  lg:flex-row-reverse lg:w-[80%] lg:justify-around lg:mt-23"}>
                <p className={"font-[tinos] italic font-medium text-2xl lg:w-[50%] lg:mt-9"}>
                    We’ll send you reminders by email to help you stay on track and get started. If you'd like to
                    receive
                    updates on WhatsApp too, consider supporting us with a small donation — it helps us keep
                    improving!

                </p>

                <div
                    className={"flex flex-col  justify-evenly items-center mt-6 h-[35vh]  lg:w-[35%] lg:h-[40vh]"}>
                    <label className="input w-[90%]">
                        <span className="label ">@</span>
                        <input className={"font-[tinos] italic text-xl "} type={"email"}
                               placeholder={"Enter your Email"}/>
                    </label>

                    <label className="input w-[90%]">
                        <span className="label ">🔒</span>
                        <input className={"font-[tinos] italic text-xl"} type={"email"}
                               placeholder={"Enter your password"}/>
                    </label>
                    <button className={"btn btn-secondary font-[tinos] italic text-xl w-[90%]"}>Sign In</button>

                    <p className={"font-[tinos] italic text-xl"}>or</p>

                    <button className={"btn btn-secondary font-[tinos] italic text-xl w-[90%]"}>Create Account
                    </button>


                </div>


            </div>
            <button className={"btn  font-[tinos] italic text-xl mt-4 ml-5 w-[90%] lg:w-[26%] lg:mr-182 mb-12"} onClick={()=>{
                nav("/qr")
            }}>Donate Now!
            </button>


        </div>

            <footer className={"footer footer-center font-[tinos] italic text-lg mt-18 lg:mt-0"}>
                by Toufiq // 2025

            </footer>

        </>
    )
}

