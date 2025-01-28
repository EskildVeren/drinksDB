import { DBDrink } from "@/lib/utils";
import { Link } from "react-router-dom";

export function ResultList() {
  const newProps = generateDrinks();
  return (
    <nav data-cy="result-list" className="flex flex-wrap justify-center gap-5">
      {newProps.map((item) => (
        <ResultListItem
          key={item.id}
          className="w-full max-w-full sm:w-1/4"
          {...item}
        />
      ))}
    </nav>
  );
}

export function ResultListItem({
  id,
  name,
  imageUrl,
  className,
}: { className: string } & DBDrink) {
  return (
    <Link to={`details/${id}`} className={className}>
      <div
        data-cy="result-list-items"
        role="link"
        tabIndex={0}
        className="flex flex-col"
        id={`${id}`}
      >
        <img width={700} height={700} src={imageUrl} alt={`Image of ${name}`} />
        <div className="p-2">
          <h2 className="text-center">{name}</h2>
        </div>
      </div>
    </Link>
  );
}

export const generateDrinks = () => {
  return [
    {
      id: 0,
      name: "Mojito",
      instructions: "bland",
      alcoholic: true,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcu33Pfd3jIs2GmlYn0AJIuoQzRt0vHiInPAUnOwG3HCMyns7-zom9N8ACdoqWVxdNDbSMBpJ2H8eeT_4FsbOQxr3VNBr908bD2O-suA",
      glass: "highball",
      measures: [
        {
          measure: "1tsp",
          ingredient: {
            name: "mint",
          },
        },
      ],
    },
  ];
};
