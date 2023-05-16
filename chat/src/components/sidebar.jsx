import { Chats } from "./chats";
import { Navbar } from "./navbar";
const Sidebar = () => {
    return (
        <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
       <Navbar></Navbar>
       <Chats/>
    </div>
    );
  };
  
  export default Sidebar;