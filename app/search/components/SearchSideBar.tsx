import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";

export default function SearchSideBar({locations, cuisines, searchParams}:
  {locations: Location[];
    cuisines: Cuisine[];
    searchParams: { city?: string, cuisine?: string, price?: PRICE }
  }
) {

  const prices = [
    {
      price: PRICE.CHEAP,
      label: "$",
      className: "w-full p-2 font-light border rounded-l text-reg text-center"
    },
    {
      price: PRICE.REGULAR,
      label: "$$",
      className: "w-full p-2 font-light border-t border-b border-r text-reg text-center"
    },
    {
      price: PRICE.EXPENSIVE,
      label: "$$$",
      className: "w-full p-2 font-light border-t border-b border-r rounded-r text-reg text-center"
    }
  ]
  return (
    <div className="w-1/5">
      <div className="flex flex-col pb-4 border-b">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                city: location.name,
              },
            }}
            className="font-light capitalize text-reg"
            key={location.id}
          >
            {location.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col pb-4 mt-3 border-b">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                cuisine: cuisine.name,
              },
            }}
            className="font-light capitalize text-reg"
            key={cuisine.id}
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className="pb-4 mt-3">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {prices.map(({ price, label, className }) => (
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  price,
                },
              }}
              className={className}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}