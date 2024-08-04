'use client'
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { updateAction } from "./action";

export function EditForm({ id, quantity}: any){
  const { register, setValue } = useForm()

  useEffect(() => {
    setValue('quantity', quantity)
  }, [setValue, quantity])

  return(
    <div className="flex flex-col items-center justify-center w-full">
      <form onSubmit={ async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        await updateAction(formData, id!)
      }
      } className="space-y-6 w-full">

        <div>
          <Label htmlFor="quantity">Quantity</Label>
          <Input 
            id="quantity"
            type="number"
            className={input_style}
            {...register("quantity", { required: true })}
          />
        </div>

        <Button 
          type="submit"
          >Update</Button>
      </form>
    </div>
  )
}

export const input_style = 'border border-black/10'
