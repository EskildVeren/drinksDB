import { Martini } from "lucide-react";
import { ReviewData, ratedColor } from "./ReviewForm";

let martiniGlasses: number[] = [1, 2, 3, 4, 5];

function ReviewListItem(
  { comment, rating, reviewId }: ReviewData,
  key: number,
) {
  return (
    <div className="my-[0.5em] flex w-[29em] flex-col border-t-2 py-[0.5em]">
      <div className="my-[0.5em] flex flex-row justify-center">
        {martiniGlasses.map((glass) =>
          glass <= rating ? (
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
        <p>{comment}</p>
      </div>
    </div>
  );
}

export default ReviewListItem;
