import RestaurantReviewCard from "./RestaurantReviewCard";

export default function RestaurantReviews() {
  return (
    <div>
      <h1 className="pb-5 mt-10 text-3xl font-bold mb-7 borber-b">
        What 100 people are saying
      </h1>
      <div>
        <RestaurantReviewCard />
      </div>
    </div>
  )
}