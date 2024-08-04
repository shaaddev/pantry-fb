'use server'
import { revalidatePath } from "next/cache"
import { db } from "@/db"
import { inventory } from "@/db/schema/inventory"
import { eq } from "drizzle-orm"

export const createAction = async (formData: FormData) => {
  const name = formData.get('name') as string

  try {
    await db.insert(inventory).values({
      name: name,
      quantity: 1
    })
  } catch (error) {
    return console.log('error', error)
  }

  revalidatePath('/')
}

export const updateAction = async (formData: FormData, id: number) => {
  const quantity = formData.get('quantity') as string

  try {
    await db.update(inventory)
      .set({ quantity: parseInt(quantity) })
      .where(eq(inventory.id, id))
  } catch (error){
    return console.log('error', error)
  }

  revalidatePath('/')
}