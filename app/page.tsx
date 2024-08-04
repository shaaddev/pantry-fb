import { AddBtn } from "@/components/add-btn";
import { CardDashboard } from "@/components/card-dashboard";
import { PantryAdd } from "@/components/pantry-content/pantry-add";
import { PantryList } from "@/components/pantry-list";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-12 gap-12">
      <div className="w-full ">
        <h1 className="text-4xl font-bold mb-5 text-center">Pantry Tracker</h1>
        <div className="flex flex-col items-center justify-center w-full">
          <CardDashboard>
            <PantryList />
          </CardDashboard>
        </div>
        <PantryAdd>
          <AddBtn />
        </PantryAdd>
      </div>
    </main>
  );
}
