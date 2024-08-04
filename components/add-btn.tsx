import { Button } from "./ui/button"
import { PlusCircledIcon } from "@radix-ui/react-icons"

export function AddBtn(){
  return(
    <div className="flex flex-col items-center justify-center gap-6 m-5">
      <Button 
        className="bg-blue-700 text-slate-50 hover:bg-opacity-70"

      >
        Add <PlusCircledIcon className="ml-2 h-5 w-5"/>
      </Button>
    </div>
  )
}