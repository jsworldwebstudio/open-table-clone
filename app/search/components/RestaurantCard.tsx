import Price from "@/app/components/Price";
import Stars from "@/app/components/Stars";
import { calculateReviewRatingAverage } from "@/utilities/calculateReviewRatingAverage";
import { Cuisine, Location, PRICE, Review } from "@prisma/client";
import Link from "next/link";

interface Restaurant {
  id: number;
  name: string;
  main_image: string;
  price: PRICE;
  cuisine: Cuisine;
  location: Location;
  slug: string;
  reviews: Review[];
}

export default function RestaurantCard({restaurant}: {restaurant: Restaurant}) {

  const renderRatingText = () => {
    const rating = calculateReviewRatingAverage(restaurant.reviews);

    if(rating > 4) return "Awesome"
    else if (rating <= 4 && rating > 3) return "Good"
    else if (rating <= 3 && rating > 0) return "Average"
    else return "";
  }

  return (
    <div className="flex pb-5 ml-4 border-b">
      <img
        src={restaurant.main_image}
        alt=""
        className="rounded w-44 h-36"
      />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <Stars reviews={restaurant.reviews} />
          <p className="ml-2 text-sm">{renderRatingText()}</p>
        </div>
        <div className="mb-9">
          <div className="flex font-light text-reg">
            <Price price={restaurant.price} />
            <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
            <p className="mr-4 capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>View more information</Link>
        </div>
      </div>
    </div>
  )
}