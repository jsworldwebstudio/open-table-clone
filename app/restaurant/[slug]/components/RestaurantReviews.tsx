import { Review } from "@prisma/client";
import RestaurantReviewCard from "./RestaurantReviewCard";

export default function RestaurantReviews({reviews}: {reviews: Review[]}) {
  return (
    <div>
      <h1 className="pb-5 mt-10 text-3xl font-bold mb-7 borber-b">
        What {reviews.length} {reviews.length === 1 ? "person is" : "people are"} saying
      </h1>
      <div>
        {reviews.map(review => (
          <RestaurantReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}