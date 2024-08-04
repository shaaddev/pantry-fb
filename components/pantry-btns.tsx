'use client'
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export function RemoveBtn({ id }: { id: number }) {
  const router = useRouter()

  const removeInventory = async () => {
    const confirmed = confirm("Are you sure you want to remove this item from your inventory?")

    if(confirmed){
      const res = await fetch(`/api/pantry?id=${id}`, {
        method: 'DELETE'
      })

      if (!res.ok){
        throw new Error('Something went wrong')
      }
    }

    router.refresh()
  }

  return(
    <>
      <Button type="button" onClick={removeInventory} className="ml-2 bg-red-500">
        Remove
      </Button>
    </>
  )
}

export function AddBtn(){
  return(
    <>
      <Button type="button" className="ml-2 bg-sky-500">Add</Button>
    </>
  )
}