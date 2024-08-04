import { db } from "@/db";
import { inventory } from "@/db/schema/inventory";
import { RemoveBtn, AddBtn } from "./pantry-btns";
import { PantryUpdate } from "./pantry-content/pantry-update";

export async function PantryList(){
  const invent = await db.select().from(inventory)
  
  return(
    <div className="flex flex-col items-center justify-center">
      <h2 className="font-medium my-5">Inventory Items</h2>
      {invent.map((m, index) => (
        <div key={index} className="flex flex-row items-center justify-between bg-slate-200 p-2 rounded-xl mb-5 w-full gap-2 md:gap-0">
          <p>{m.name} = {m.quantity}</p>

          <div className="flex md:flex-row ">
            <PantryUpdate id={m.id} quantity={m.quantity}>
              <AddBtn />
            </PantryUpdate>
            <RemoveBtn id={m.id}/>
          </div>
        </div>
      ))}
    </div>
  )
}