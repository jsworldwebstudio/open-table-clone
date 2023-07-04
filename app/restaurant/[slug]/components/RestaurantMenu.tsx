import { Item } from "@prisma/client";
import RestaurantMenuCard from "./RestaurantMenuCard";

export default function RestaurantMenu({menu}: {menu: Item[]}) {
  return (
    <main className="mt-5 bg-white">
      <div>
        <div className="pb-1 mt-4 mb-1">
          <h1 className="text-4xl font-bold">Menu</h1>
        </div>
        {menu.length ? (
          <div className="flex flex-wrap justify-between">
            {menu.map(item => (
              <RestaurantMenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-between">
            <p>This restaurant does not have a menu.</p>
          </div>
        )}
      </div>
    </main>
  )
}