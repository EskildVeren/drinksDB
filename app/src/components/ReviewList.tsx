import * as reviewData from "@/data/mockReviews.json";
import { Martini } from "lucide-react";
import { ratedColor } from "./ReviewForm";

export default function ReviewList({
  drinkId,
  className,
}: {
  drinkId: number;
  className: string;
}) {
  return (
    <div
      className={`flex w-[40em] flex-col items-center justify-center border-2 ${className}`}
    >
      <p className="my-[1em] text-xl">Did other people like this cocktail?</p>
      {reviewData.reviews
        .filter((review) => review.drinkId === drinkId)
        .map((review) => (
          <ReviewListItem
            comment={review.comment}
            rating={review.rating}
            key={review.reviewId}
          />
        ))}
    </div>
  );
}

const martiniGlasses: number[] = [1, 2, 3, 4, 5];

export function ReviewListItem(review: { comment: string; rating: number }) {
  return (
    <div className="my-[0.5em] flex w-[29em] flex-col border-t-2 py-[0.5em]">
      <div className="my-[0.5em] flex flex-row justify-center">
        {martiniGlasses.map((glass) =>
          glass <= review.rating ? (
            <Martini
              color={ratedColor}
              className="hover:cursor-pointer"
              key={glass}
            />
          ) : (
            <Martini className="hover:cursor-pointer" key={glass} />
          ),
        )}
      </div>
      <div>
        <p>{review.comment}</p>
      </div>
    </div>
  );
}
