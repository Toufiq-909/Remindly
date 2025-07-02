import {House,CirclePlus,Pencil,Archive,LogOut,Menu} from "lucide-react"
import {useNavigate} from"react-router-dom"
import {useState} from "react";
import {motion,AnimatePresence} from "motion/react"
export function Sidebar(props)
{
    let a=window.innerWidth;
    let nav=useNavigate();
    return(
        <div className={"flex  bgred-900 flex-col h-[80vh]   w-[60%] justify-between items-start  ml-4  mt-4  lg:w-[30%] lg:pr-48 lg:items-center lg:mt-8"}>

            <div>
                <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent font-[tinos]
                italic text-3xl ml-4 lg:ml-0">Remindly</span>
            </div>

            <div className={"flex flex-col mb-56 bg-red900 h-[40vh] justify-evenly w-[60%] lg:mb-54 lg:w-[130%] xl:w-[85%] 2xl:w-[60%]"}>

                <button className={"btn flex justify-evenly font-[tinos] italic text-xl"} onClick={()=>{props.ss(!props.sidebar)}}>
                    <House className={""}/>
                    Home
                </button>

                <button className={"btn flex justify-evenly font-[tinos] italic text-xl"}onClick={()=>{props.ss(!props.sidebar)}}>
                    <CirclePlus className={""}/>
                    Add New
                </button>

                <button className={"btn flex justify-evenly font-[tinos] italic text-xl"}onClick={()=>{props.ss(!props.sidebar)}}>
                    <Pencil className={""}/>
                    Update
                </button>

                <button className={"btn flex justify-evenly font-[tinos] italic text-xl"}onClick={()=>{props.ss(!props.sidebar)}}>
                    <Archive className={""}/>
                    Archive
                </button>


            </div>


            <button className={"btn flex justify-evenly font-[tinos] italic text-xl w-[60%] lg:w-[130%] xl:w-[85%] 2xl:w-[60%]"} onClick={
                ()=>{
                    localStorage.clear();
                    nav("/",{
                        replace:true
                    })
                }

            }>
                <LogOut className={""}/>
                Log out
            </button>




        </div>
    )
}

export function Main()
{
    let nav=useNavigate();
    let [sidebar,ss]=useState(false)
    let width=window.innerWidth;
    return(
        <div>
            <div className={"flex w-[70%] bg-red900  justify-between items-center mt-5 fixed right-0 mr-6 lg:mt-0 lg:justify-around lg:items-start"}>

                <p className={"font-[tinos] italic  text-xl  lg:text-2xl  mb-0 lg:mb-14 "}>
                    Let’s make today count,
                    {
                        width < 768 &&
                        <br/>
                    }
                    muheeth312@eatshello
                </p>

                <img src={"/p" + localStorage.getItem("profile") + ".jpg"}
                     className={" btn btn-circle w-[22%] h-[70px]   md:w-[13%] md:h-[75px]  lg:h-[80px] lg:w-[8%]"}
                     onClick={() => {
                         nav("/profile");
                     }}/>


            </div>
            {width < 1024 &&
                <button className={"btn mt-7 ml-4 transition-all duration-500 ease-in-out "} onClick={
                    () => {
                        ss(!sidebar)
                    }
                }>
                    <Menu size={30}/>
                </button>
            }
            <AnimatePresence>
                {sidebar && (
                    <motion.div
                        initial={{x: "-100%", opacity: 1}}
                        animate={{x: 0, opacity: 1}}
                        exit={{x: "-100%", opacity: 0}}
                        transition={{duration: 0.4}}
                    >
                    <Sidebar ss={ss}
                                 sidebar={sidebar}
                        />
                    </motion.div>
                )


                }
            </AnimatePresence>
            {
                width > 1023 &&
                <>
                    <Sidebar/>
                    <Vanakam/>
                </>
            }
        </div>

    )
}

export function Vanakam() {
    return (
        <div className={"bg-blue-500"}>hello</div>
    )

}