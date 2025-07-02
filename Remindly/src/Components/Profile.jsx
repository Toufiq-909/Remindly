import {useNavigate} from"react-router-dom"
export default function Profile()
{
    let nav=useNavigate()
    return (
        <div className={"flex flex-col items-center justify-center h-[100vh]"}>
            <p className={"font-[tinos] italic text-3xl pl-4"}>
                Almost there!
                Just pick a profile picture and you're ready to roll.<br/>
                Start exploring and enjoying everything we’ve built for you!
            </p>
            <div className={"flex flex-col justify-around bg-red900 h-[80vh]"}>
                <div className={"flex flex-row  justify-center bgred-900"}>
                    <img src={"/p1.jpg"} className={"btn btn-square h-[100%] w-[18%] mr-4 lg:w-[10%] rounded-lg lg:mr-8"} onClick={()=>{
                        localStorage.setItem("profile",1)
                        nav("/Dashboard")
                    }}/>
                    <img src={"/p2.jpg"} className={"btn btn-square h-[100%] w-[18%] mr-4 lg:w-[10%] rounded-lg lg:mr-8"} onClick={()=>{
                        localStorage.setItem("profile",2)
                        nav("/Dashboard")
                    }}/>
                    <img src={"/p3.jpg"} className={"btn btn-square h-[100%] w-[18%] mr-4 lg:w-[10%] rounded-lg lg:mr-8"} onClick={()=>{
                        localStorage.setItem("profile",3)
                        nav("/Dashboard")
                    }}/>
                    <img src={"/p4.jpg"} className={"btn btn-square h-[100%] w-[18%] mr-4 lg:w-[10%] rounded-lg lg:mr-8"} onClick={()=>{
                        localStorage.setItem("profile",4)
                        nav("/Dashboard")
                    }}/>
                </div>
                <div className={"flex flex-row  justify-center bgred-900 mb-54 lg:mb-0"}>
                    <img src={"/p5.jpg"} className={"btn btn-square h-[100%] w-[18%] mr-4 lg:w-[10%] rounded-lg lg:mr-8"} onClick={()=>{
                        localStorage.setItem("profile",5)
                        nav("/Dashboard")
                    }}/>
                    <img src={"/p6.jpg"} className={"btn btn-square h-[100%] w-[18%] mr-4 lg:w-[10%] rounded-lg lg:mr-8"} onClick={()=>{
                        localStorage.setItem("profile",6)
                        nav("/Dashboard")
                    }}/>
                    <img src={"/p7.jpg"} className={"btn btn-square h-[100%] w-[18%] mr-4 lg:w-[10%] rounded-lg lg:mr-8"} onClick={()=>{
                        localStorage.setItem("profile",7)
                        nav("/Dashboard")
                    }}/>
                    <img src={"/p8.jpg"} className={"btn btn-square h-[100%] w-[18%] mr-4 lg:w-[10%] rounded-lg lg:mr-8 "} onClick={()=>{
                        localStorage.setItem("profile",8)
                        nav("/Dashboard")
                    }}/>
                </div>

            </div>
        </div>
    )
}