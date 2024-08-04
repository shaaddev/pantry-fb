import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PantryC } from "./pantry-c"
import { CreateForm } from "../pantry-forms/create-form"


export function PantryAdd({ children}: {children: React.ReactNode}) {
  return(
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <PantryC>
        <CreateForm />
      </PantryC>
    </Dialog>
  )
}