export default function Qr()
{
    return(
        <div className={"flex flex-col justify-around items-center h-[80vh] lg:h-[90vh]"}>
            <img src={"/qr.jpeg"} className={"w-[60%] lg:w-[18%]"}/>
            <p className={"font-[tinos] italic text-2xl ml-6"}>  Tried to integrate payment gateway,but it is only for registered business.😭😭</p>
        </div>

    )
}