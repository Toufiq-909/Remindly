import {useNavigate} from "react-router-dom"
export default function Pagenotfound()
{
    let nav=useNavigate();
    return(

        <div className={"flex flex-col items-center justify-evenly  h-[85vh] lg:h-[90vh]"}>
            <img src={"/404.svg"} className={"lg:w-[35%]"}/>
            <p className={"font-[tinos] italic text-2xl  font-light lg:mb-4"}>Oops! Looks like you're lost.</p>
            <button className={"btn btn-secondary font-[tinos] italic w-[80%] text-2xl lg:w-[30%]"} onClick={()=>{
                nav("/",{
                    replace:true
                })
            }}>Take me Back to Home</button>
        </div>

    )
}