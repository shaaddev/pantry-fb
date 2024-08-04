'use client'
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { createAction } from "./action";

export function CreateForm(){
  const { register } = useForm()



  return(
    <div className="flex flex-col items-center justify-center w-full">
      <form onSubmit={ async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        await createAction(formData)
      }
      } className="space-y-6 w-full">

        <div>
          <Label htmlFor="name">Item</Label>
          <Input 
            id="name"
            type="text"
            className={input_style}
            {...register("name", { required: true })}
          />
        </div>

        <Button 
          type="submit"
          >Add</Button>
      </form>
    </div>
  )
}

export const input_style = 'border border-black/10'
