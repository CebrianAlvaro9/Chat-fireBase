import { Input } from "./input";
import { Messages } from "./messages";


export function Chat(){

    return(
        <div className="flex flex-col flex-auto h-full p-6">
        <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            <div className="flex flex-col h-full overflow-x-auto mb-4">
                <div className="flex flex-col h-full">
            <Messages/>
</div>
</div>
        <Input/>
        </div>
    </div>
    )
}