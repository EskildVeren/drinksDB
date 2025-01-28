import DrinkDetails from "@/components/DrinkDetails";
import { generateDrinks } from "@/components/ResultList";
import ReviewForm from "@/components/ReviewForm";
import ReviewList, { ReviewShape } from "@/components/ReviewList";
import { useParams } from "react-router-dom";

export default function DetailsPage() {
  const drinks = generateDrinks();
  const { drinkId } = useParams();
  const dataDrink = drinks[Number(drinkId)];
  const dataReviews = generateReviews();
  return (
    <main className="flex flex-col gap-8">
      <>
        <DrinkDetails {...dataDrink} />
        <ReviewForm drinkId={dataDrink.id} className="self-center" />
        <ReviewList className="self-center" reviews={dataReviews} />
      </>
    </main>
  );
}

const generateReviews: () => ReviewShape[] = () => {
  return [
    {
      textContent:
        "This drink is pure bliss in a glass. It’s like sipping on a tropical sunset!",
      rating: 5,
      id: 1,
    },
    {
      textContent:
        "The perfect balance of sweet and tangy—like a little vacation for your taste buds.",
      rating: 5,
      id: 2,
    },
    {
      textContent:
        "Smooth and refreshing, with just the right amount of fizz. A solid go-to for any occasion.",
      rating: 4,
      id: 3,
    },
    {
      textContent:
        "Really enjoyable! The flavors pop like a well-timed toast at a party.",
      rating: 4,
      id: 4,
    },
    {
      textContent:
        "A delightful sip, though I wish the finish was a bit more exciting. Still a crowd-pleaser!",
      rating: 4,
      id: 5,
    },
    {
      textContent:
        "Absolutely sensational! Every sip feels like a celebration of flavor.",
      rating: 5,
      id: 6,
    },
    {
      textContent:
        "It’s like the drink knew exactly what my soul needed—crisp, cool, and completely satisfying.",
      rating: 5,
      id: 7,
    },
  ];
};
