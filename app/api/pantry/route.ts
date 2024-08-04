import { NextResponse } from "next/server";
import { inventory } from "@/db/schema/inventory";
import { eq } from "drizzle-orm";
import { db } from "@/db";

export async function DELETE(req: any){
  const id = req.nextUrl.searchParams.get("id");

  await db.delete(inventory)
    .where(eq(inventory.id, parseInt(id)));

  
  return NextResponse.json({message: 'post deleted'}, {status: 201});
}