import Link from "next/link"
import Recentcard from "./recentpostcard"
const RecentPost=()=>{

    return (
        <div className="bg-red-100 my-[66px] md:h-[502px] flex flex-col justify-evenly">
<div className=" w-[92%] md:w-[1030px] p-6 mx-auto flex flex-col justify-between">
<div className="flex flex-row justify-between">
<h2 className="text-[22px] font-medium">Recent Post</h2>
<Link href="" className="text-[22px] font-medium text-red-400  hover:underline md:hover:underline">View all</Link>
</div>

<div className=" mt-[16px] flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between">
<Recentcard/>
<Recentcard/>
</div>
</div>

        </div>
        
    )
}
export default RecentPost
