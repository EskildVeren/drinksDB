import React from "react";
import { ReviewData } from "./ReviewForm";
import ReviewListItem from "./ReviewListItem";

const mockReviews: ReviewData[] = [
  {
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum sed",
    rating: 2,
  },
  {
    comment: "Lorem ipsum dolor sit amet, consectetur",
    rating: 2,
  },
  {
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum sed tortor in tempus. Sed egestas tellus nec nibh lobortis, id porttitor ex blandit. Nam sed ligula orci. Donec dapibus risus",
    rating: 2,
  },
  { comment: "Lorem ipsum", rating: 2 },
  {
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum sed tortor in tempus. Sed egestas tellus nec nibh lobortis, id porttitor ex blandit. Nam sed ligula orci. Donec dapibus risus vel felis ultrices, non aliquam velit sollicitudin. Nullam iaculis erat et mollis bibendum. In mi ex, venenatis vel erat eget, iaculis aliquam neque. Quisque semper faucibus augue id suscipit. Nulla suscipit volutpat sagittis. Nulla venenatis ligula et mauris dignissim accumsan. Praesent a dolor non lectus varius vulputate id non ipsum. Integer quis ante aliquet, imperdiet dui in, euismod felis. Sed eu vulputate sapien.",
    rating: 2,
  },
];

function ReviewList() {
  return (
    <div className="flex flex-col border-2 w-[40em] justify-center items-center">
      <p className="text-xl my-[1em]">See if other enjoyed this drink</p>
      {mockReviews.map((review) => (
        <ReviewListItem comment={review.comment} rating={review.rating} />
      ))}
    </div>
  );
}

export default ReviewList;
