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
      id: 0,
      rating: 4,
      textContent: "My current favourite drink",
    },
    {
      id: 1,
      rating: 2,
      textContent: "Could use some more lime",
    },
    {
      id: 2,
      rating: 5,
      textContent:
        "Mojitoen gir et forfriskende hint av mynte og lime, perfekt balansert med et snev av sødme og en boblende friskhet. Blandingen av fersk mynte og syrlig lime skaper en skarp og oppkvikkende drink. Det er en tidløs klassiker, ideell for solrike ettermiddager eller livlige sammenkomster. Helt herlig!",
    },
  ];
};
