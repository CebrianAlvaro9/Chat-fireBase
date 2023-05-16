import { Chat } from "../components/chat";
import Sidebar from "../components/sidebar";


export function Home() {


    return (
        <div className="flex h-screen antialiased text-gray-800">
            <div className="flex flex-row h-full w-full overflow-x-hidden">
               <Sidebar/>
               <Chat/>
            </div>
        </div>
    )
}