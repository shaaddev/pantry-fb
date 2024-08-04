import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PantryC } from "./pantry-c"
import { EditForm } from "../pantry-forms/edit-form"


export function PantryUpdate({ children, id, quantity}: {children: React.ReactNode, id: number, quantity: number}) {
  return(
    <Dialog>
      <DialogTrigger>
        {children}
      </DialogTrigger>
      <PantryC>
        <EditForm
          id={id}
          quantity={quantity}
        />
      </PantryC>
    </Dialog>
  )
}