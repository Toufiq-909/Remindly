export function Otp()
{
    return(
        <div>
            <div className={"flex justify-center mt-4 ml-4 lg:ml-0"}>
                <p className={"font-[tinos] italic text-2xl  lg:text-3xl"}>You're almost there! Just verify the OTP to finish setting up your account</p>
            </div>
            <div className={"flex flex-col-reverse lg:flex-col ml-4 lg:flex-row lg:justify-evenly lg:mt-8 "}>
                <img src={"/otp.svg"} className={"w-[80%] ml-6 mt-2 lg:w-[35%] lg:ml-0 lg:mt-0"}/>
                <div className={" lg:w-[40%] h-[400px]   flex flex-col justify-evenly lg:mt-22"}>
                    <p className={"font-[tinos] italic text-2xl "} >
                        We've sent an OTP to {localStorage.getItem("mail")}. Please enter it below to verify your  mail
                    </p>
                    <div className={"flex w-[80%] lg:w-[50%] justify-evenly ml-4 lg:ml-0"}>
                        <input type={"text"} maxLength={1} className={"input w-[15%] lg:w-[14%]"} inputMode={"numeric"} onChange={(event) => {
                            let a = event.target.value;
                            if (a.charCodeAt(0) < 47 || a.charCodeAt(0) > 58) {
                                event.target.value = "";
                            }
                            else if(a==="") {
                                event.target.focus();
                            }
                            else {
                                let next = event.target.nextSibling;
                                next.focus();

                            }
                        }
                        }
                               autoFocus />
                        <input type={"text"} maxLength={1} className={"input w-[15%] lg:w-[14%]"} inputMode={"numeric"} onChange={(event) => {
                            let a = event.target.value;
                            if (a.charCodeAt(0) < 47 || a.charCodeAt(0) > 58) {
                                event.target.value = "";
                            }
                            else if(a==="") {
                                event.target.focus();
                            }
                            else {
                                let next = event.target.nextSibling;
                                next.focus();

                            }
                        }
                        }
                        />
                        <input type={"text"} maxLength={1} className={"input w-[15%] lg:w-[14%]"} inputMode={"numeric"}  onChange={(event) => {
                            let a = event.target.value;
                            console.log(a);

                            if (a.charCodeAt(0) < 47 || a.charCodeAt(0) > 58) {
                                event.target.value = "";
                            }
                            else if(a==="") {
                                event.target.focus();
                            }
                            else {
                                let next = event.target.nextSibling;
                                next.focus();

                            }
                        }
                        }
                        />
                        <input type={"text"} maxLength={1} className={"input w-[15%] lg:w-[14%]"} inputMode={"numeric"}  onChange={(event) => {
                            let a = event.target.value;
                            if (a.charCodeAt(0) < 47 || a.charCodeAt(0) > 58) {
                                event.target.value = "";
                            }
                            else if(a==="") {
                                event.target.focus();
                            }
                            else {
                                let next = event.target.nextSibling;
                                next.focus();

                            }
                        }
                        }
                        />
                        <input type={"text"} maxLength={1} className={"input w-[15%] lg:w-[14%]"}  inputMode={"numeric"}  onChange={(event) => {
                            let a = event.target.value;
                            if (a.charCodeAt(0) < 47 || a.charCodeAt(0) > 58) {
                                event.target.value = "";
                            }
                            else if(a==="") {
                                event.target.focus();
                            }
                            else {
                                let next = event.target.nextSibling;
                                next.focus();

                            }
                        }
                        }
                        />
                        <input type={"text"} maxLength={1} className={"input w-[15%] lg:w-[14%]"} inputMode={"numeric"}  onChange={(event) => {
                            let a = event.target.value;

                            if (a.charCodeAt(0) < 47 || a.charCodeAt(0) > 58) {
                                event.target.value = "";
                            }
                            else if(a==="") {
                                event.target.focus();
                            }

                            else {
                                let next = event.target.nextSibling;
                                next.focus();

                            }
                        }
                        }
                        />


                    </div>
                    <button className={"btn btn-secondary font-[tinos] italic w-[80%] lg:w-[60%] text-xl ml-4 lg:ml-0"}>Verify</button>
                    <div className={" w-[80%] lg:w-[60%] flex justify-between ml-4 lg:ml-0"}>
                        <button className={"btn btn-secondary font-[tinos] italic w-[49%] lg: w-[48%] text-xl"}>Change Mail</button>
                        <button className={"btn btn-secondary  font-[tinos] italic w-[49%] lg:w-[48%] text-xl"}>Send Again</button>
                    </div>


                </div>
            </div>
        </div>
    )
}