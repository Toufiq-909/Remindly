import {House,CirclePlus,Pencil,Archive,LogOut,Menu} from "lucide-react"
import {useNavigate} from"react-router-dom"
import {useState} from "react";
import {motion,AnimatePresence} from "motion/react"
export function Sidebar(props)
{

    let nav=useNavigate();
    return(
        <div className={"flex  bgred-900 flex-col h-[80vh]   w-[60%] justify-between items-start  ml-4  mt-4  lg:w-[30%] lg:pr-48 lg:items-center lg:mt-0"}>

            <div>
                <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent font-[tinos]
                italic text-3xl ml-4 lg:ml-0">Remindly</span>
            </div>

            <div className={"flex flex-col mb-56 bg-red900 h-[40vh] justify-evenly w-[60%] md:w-[40%] lg:mb-54 lg:w-[130%] xl:w-[85%] 2xl:w-[60%]"}>

                <button className={"btn btn-secondary flex justify-evenly font-[tinos] italic text-xl"}
                        onClick={()=>{
                            props.sct("Home")
                            if(props.ss!==undefined) {
                                props.ss(!props.sidebar)
                            }


                }}>

                    <House className={""}/>
                    Home
                </button>

                <button className={"btn btn-secondary flex justify-evenly font-[tinos] italic text-xl"}
                        onClick={()=>{
                            if(props.ss!==undefined) {
                                props.ss(!props.sidebar)
                            }
                    props.sct("Add")}}>
                    <CirclePlus className={""}/>
                    Add New
                </button>

                <button className={"btn btn-secondary flex justify-evenly font-[tinos] italic text-xl"}
                        onClick={()=>{
                            if(props.ss!==undefined) {
                                props.ss(!props.sidebar)
                            }
                    props.sct("Update")}}>
                    <Pencil className={""}/>
                    Update
                </button>

                <button className={"btn btn-secondary flex justify-evenly font-[tinos] italic text-xl"}
                        onClick={()=>{
                            props.sct("Archive")
                            if(props.ss!==undefined) {
                                props.ss(!props.sidebar)
                            }
                   }}>
                    <Archive className={""}/>
                    Archive
                </button>


            </div>


            <button className={"btn btn-secondary flex justify-evenly font-[tinos] italic text-xl w-[60%] md:w-[40%] lg:w-[130%] xl:w-[85%] 2xl:w-[60%]"} onClick={
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
    let [sidebar,ss]=useState(false);
    let [CurrentTab,sct]=useState("Home");
    let Tabmap={
        "Add":Add,
        "Home":Home,
        "Update":Update,
        "Archive":Trash

    }
    let Tab=Tabmap[CurrentTab]




    let width=window.innerWidth;
    return(
        <div>

            {width < 1024 &&
                <>
                <div
                    className={"flex  bg-red900  justify-evenly items-center mt-4"}>

                    <button className={"btn btn-secondary"} onClick={
                        () => {
                            ss(!sidebar)
                        }
                    }>
                        <Menu size={25}/>
                    </button>


                    <p className={"font-[tinos] italic  text-xl   "}>
                        Let’s make today count,
                        {
                            width < 768 &&
                            <br/>
                        }
                        muheeth312@eatshello
                    </p>

                    <img src={"/p" + localStorage.getItem("profile") + ".jpg"}
                         className={" btn btn-circle w-[22%] h-[88px]   md:w-[13%] md:h-[95px]  lg:h-[80px] lg:w-[8%]"}
                         onClick={() => {
                             nav("/profile");
                         }}/>


                </div>

                    {!sidebar &&
                        <Tab/>

                    }


                </>

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
                                 sct={sct}
                        />
                    </motion.div>
                )


                }
            </AnimatePresence>
            {
                width > 1023 &&

                <div>

                    <div
                        className={"navbar   bg-red900    mt-2"}>

                        <div className="navbar-start ">

                        </div>


                        <div className={"navbar-center"}>
                            <p className={"font-[tinos] italic  text-2xl lg:text-3xl"}>
                                Let’s make today count,
                                muheeth312@eatshello
                            </p>
                        </div>

                        <div className={"navbar-end "}>
                            <img src={"/p" + localStorage.getItem("profile") + ".jpg"}
                                  className={"btn btn-circle w-[20%] h-[95px] "}

                                 onClick={() => {
                                     nav("/profile");
                                 }}/>

                        </div>


                    </div>

                    <div className={"flex items-start"}>
                        <Sidebar sct={sct}/>
                       <div className={"ml12"}>
                           <Tab/>
                       </div>
                    </div>


                </div>

            }


        </div>

    )
}

function Add() {
    let [email, se] = useState("causal");
    let [checkbox, sc] = useState(false);
    let [priority,sp]=useState("");
    let[category,scat]=useState("");

    return (
        <div className={"bg-red900  font-[tinos] italic h-[190vh] flex flex-col justify-around ml-14 lg:ml-12 lg:h-[180vh] "}>


            <div className={"ml-0 md:ml-38 lg:ml-22"}>
            <p className={"text-3xl ml-12 md:ml-18 "}>Create Reminder</p>
                <p className={"text-xl mt-1"}>Set up your new reminder with all the details</p>
            </div>


            <fieldset className="fieldset">
                <legend className="fieldset-legend  text-xl ">Title</legend>
                <input type="text" className="input input-secondary input-lg w-[90%] lg:w-[60%]"
                       placeholder="eg., Team meeting, Doctor appointment"/>
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend text-xl">Description</legend>
                <textarea className="textarea  textarea-secondary input-lg w-[90%] lg:w-[60%]" placeholder="Brief description of what this reminder is for.."></textarea>

            </fieldset>


            <div>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xl">Date</legend>
                    <input type="date" className="input input-secondary input-lg w-[90%] lg:w-[60%]" placeholder="pick your date"/>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xl">Time</legend>
                    <input type="time" className="input input-secondary input-lg w-[90%] lg:w-[60%]" placeholder="pick your date"/>
                </fieldset>
            </div>

            <div>
                <p className={"text-xl font-bold mb-2"}>Priority Level</p>
                <div className={"flex flex-col bg-red900 w-[90%] h-[20vh] justify-around lg:flex-row lg:justify-between lg:w-[60%] lg:h-auto"}>
                    <button className={"btn "+(priority==="high"?"btn-error " :"btn-soft ")+"w-[100%]  lg:w-[28%] "} onClick={()=>{
                        sp("high");
                    }}>High</button>
                    <button className={"btn "+(priority==="medium"?"bg-yellow-400":"btn-soft")+" w-[100%]  lg:w-[28%] "}  onClick={()=>{
                        sp("medium");
                    }}>Medium</button>
                    <button className={"btn "+(priority==="low"?"btn-secondary":"btn-soft")+" w-[100%]  lg:w-[28%] "}  onClick={()=>{
                        sp("low");
                    }}>Low</button>
                </div>
            </div>

            <div>
                <p className={"text-xl font-bold "}>Category</p>

                <div className={"flex flex-row bg-red900 h-[50vh]  lg:flex-col lg:justify-around lg:h-[30vh]"}>
                    <div className={"flex flex-col bg-blue900 w-[80%] h-[50vh] justify-around items-start lg:flex-row lg:justify-between lg:w-[60%] lg:h-auto"}>
                        <div
                            className={"flex flex-col btn h-[7vh] w-[60%] lg:h-[10vh] lg:w-[20%] " + (category === "meeting" ? "btn-accent" : "btn-soft")}
                            onClick={() => {
                                scat("meeting")
                            }}>
                            <p className={" text-3xl"}>🗓️</p>
                            <p>Meeting</p>
                        </div>
                        <div
                            className={"flex flex-col btn h-[7vh] w-[60%] lg:h-[10vh] lg:w-[20%] " + (category === "todo" ? "btn-accent" : "btn-soft")}
                            onClick={() => {
                                scat("todo")
                            }}>
                            <p className={" text-3xl"}> ✅</p>
                            <p>To-dos</p>
                        </div>
                        <div
                            className={"flex flex-col btn h-[7vh] w-[60%] lg:h-[10vh] lg:w-[20%] " + (category === "doc" ? "btn-accent" : "btn-soft")}
                            onClick={() => {
                                scat("doc")
                            }}>
                            <p className={" text-3xl"}> 🏥</p>
                            <p>Health</p>
                        </div>

                        <div
                            className={"flex flex-col btn h-[7vh] w-[60%] lg:h-[10vh] lg:w-[20%] " + (category === "money" ? "btn-accent" : "btn-soft")}
                            onClick={() => {
                                scat("money")
                            }}>
                            <p className={" text-3xl"}> 💰</p>
                            <p>Finance</p>
                        </div>


                    </div>

                    <div
                        className={"flex flex-col bg-red400 w-[80%] h-[50vh] justify-around items-center lg:flex-row-reverse lg:justify-between lg:w-[60%] lg:h-auto"}>

                        <div
                            className={"flex flex-col  btn h-[7vh] w-[60%] lg:h-[10vh] lg:w-[20%] " + (category === "shopping" ? "btn-accent" : "btn-soft")}
                            onClick={() => {
                                scat("shopping")
                            }}>
                            <p className={" text-3xl"}> 🛒</p>
                            <p>Shopping</p>
                        </div>

                        <div
                            className={"flex flex-col btn h-[7vh] w-[60%] lg:h-[10vh] lg:w-[20%] " + (category === "health" ? "btn-accent" : "btn-soft")}
                            onClick={() => {
                                scat("health")
                            }}>
                            <p className={" text-3xl"}>🏃</p>
                            <p>Fitness</p>
                        </div>


                        <div
                            className={"flex flex-col btn h-[7vh] w-[60%] lg:h-[10vh] lg:w-[20%] " + (category === "events" ? "btn-accent" : "btn-soft")}
                            onClick={() => {
                                scat("events")
                            }}>
                            <p className={" text-3xl"}> 🎉</p>
                            <p>Events</p>
                        </div>
                        <div
                            className={"flex flex-col btn h-[7vh] w-[60%] lg:h-[10vh] lg:w-[20%] " + (category === "travel" ? "btn-accent" : "btn-soft")}
                            onClick={() => {
                                scat("travel")
                            }}>
                            <p className={" text-3xl"}> ✈️</p>
                            <p>Travel</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className={"flex"}>

                    <input type="checkbox" className="checkbox checkbox-secondary" onClick={() => {
                        sc(!checkbox)
                    }}/>
                    <p className={"text-xl font-bold ml-2  lg:ml-4"}>This is a recurring reminder</p>

            </div>

            {checkbox &&
                <div>
                    <p className={"text-xl font-bold"}>Repeat</p>
                    <select className={"select select-secondary text-xl w-[90%] lg:w-[60%]"}>
                        <option className={"text-xl "}>Daily</option>
                        <option className={"text-xl "}>Weekly</option>
                        <option className={"text-xl "}>Monthly</option>
                        <option className={"text-xl "}>Yearly</option>
                    </select>
                </div>

            }

            <div>
                <p className={"text-xl font-bold"}>Pick Your Preferred Email Style</p>
                <select className={"select select-secondary text-xl w-[90%] lg:w-[60%]"} onChange={(event) => {
                    se(event.target.value)

                }}>
                    <option value={"causal"}>Causal</option>
                    <option value={"short"}>Short</option>
                    <option value={"motivating"}>Motivating</option>
                    <option value={"dev"}>Developer choice</option>
                </select>
            </div>


            <div className={"text-xl h-[25vh] overflow-y-auto bg-gray-100 p-4 rounded-lg w-[90%] lg:w-[60%]"}>
                {
                    email === "causal" &&
                    <div>

                        <p>Subject: Hey! Just a heads up 😊</p>

                        <p>Body: Hey there,

                            Just dropping in to remind you:
                            (your description)
                            No rush — just keeping you in the loop. You got this!
                        </p>

                        <p> closing: Cheers,</p>
                        <p>Remindly</p>


                    </div>

                }


                {
                    email==="short" &&
                    <div>

                        <p>Subject: Quick reminder ⏰</p>

                        <p>
                            Body: Just a gentle reminder —
                            don’t forget your task!
                            (your description)
                            Stay on top of things and keep going strong! 💪
                        </p>


                        <p> closing: That’s it — just a heads-up!,</p>
                        <p>Remindly</p>


                    </div>


                }

                {
                    email === "motivating" &&
                    <div>

                        <p>Subject: Let’s go! 🚀</p>

                        <p>Body: Hey!

                            Here’s a quick reminder to keep you on track:
                            (your description)
                            You're doing great. One step at a time. You've got this 💪
                        </p>


                        <p>Closing:Remindly</p>


                    </div>


                }

                {
                    email === "dev" &&
                    <div>

                        <p>Subject: Yo, real quick ✌️</p>

                        <p>Body: Ayo,Nigger

                            Just tappin’ in — you got this lined up:
                            (Your Description)
                            You're doing great. One step at a time. You've got this 💪
                        </p>


                        <p>Closing:Your homie at Remindly</p>


                    </div>


                }


            </div>


            <div className={"flex justify-between w-[90%] lg:w-[60%]"}>
                <button className={"btn  btn-error w-[40%] lg:w-[47%] text-md lg:text-xl"}>Cancel</button>
                <button className={"btn btn-primary w-[40%]  lg:w-[47%] text-md lg:text-xl"}>Create Reminder</button>
            </div>


        </div>
    )
}

function Home() {
    console.log("hello")
    return (
        <p>Home</p>
    )
}

function Update() {
    console.log("hello")
    return (
        <p>update</p>
    )
}

function Trash() {
    console.log("hello")
    return (
        <p>trash</p>
    )
}
