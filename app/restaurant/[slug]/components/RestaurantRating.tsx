import Stars from "@/app/components/Stars";
import { calculateReviewRatingAverage } from "@/utilities/calculateReviewRatingAverage";
import { Review } from "@prisma/client";

export default function RestaurantRating({reviews}: {reviews: Review[]}) {
  const reviewRating = calculateReviewRatingAverage(reviews);
  return (
    <div className="flex items-end">
      <div className="flex items-center mt-2 ratings">
        <Stars reviews={reviews} />
        <p className="ml-3 text-reg">{reviewRating.toFixed(1)}</p>
      </div>
      <div>
        <p className="ml-4 text-reg">{reviews.length} Review{reviews.length === 1 ? "" : "s"}</p>
      </div>
    </div>
  )
}