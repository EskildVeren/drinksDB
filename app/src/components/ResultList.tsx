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

export const generateDrinks: () => DBDrink[] = () => {
  return [
    {
      id: 0,
      name: "Mojito",
      instructions: "bland",
      alcoholic: true,
      imageUrl:
        "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
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
    {
      id: 1,
      name: "Melya",
      instructions:
        "Brew espresso. In a coffee mug, place 1 teaspoon of unsweetened powdered cocoa, then cover a teaspoon with honey and drizzle it into the cup. Stir while the coffee brews, this is the fun part. The cocoa seems to coat the honey without mixing, so you get a dusty, sticky mass that looks as though it will never mix. Then all at once, presto! It looks like dark chocolate sauce. Pour hot espresso over the honey, stirring to dissolve. Serve with cream.",
      alcoholic: false,
      imageUrl:
        "http://www.thecocktaildb.com/images/media/drink/xwtptq1441247579.jpg",
      glass: "Coffee mug",
      measures: [
        {
          measure: "1 cup",
          ingredient: {
            name: "Espresso",
          },
        },
        {
          measure: "1 ts",
          ingredient: {
            name: "Unsweetened powdered cocoa",
          },
        },
        {
          measure: "1 ts",
          ingredient: {
            name: "Honey",
          },
        },
        {
          measure: "A dash",
          ingredient: {
            name: "Whipped cream",
          },
        },
      ],
    },

    {
      id: 2,
      name: "Café Mocha",
      instructions:
        "Brew espresso. In a coffee mug, add hot chocolate mix. Pour the espresso into the mug and stir to dissolve. Top with steamed milk and garnish with whipped cream and a sprinkle of cocoa powder.",
      alcoholic: false,
      imageUrl:
        "https://www.mommyhatescooking.com/wp-content/uploads/2023/10/mocha-4-scaled.jpg",
      glass: "Coffee mug",
      measures: [
        { measure: "1 shot", ingredient: { name: "Espresso" } },
        { measure: "2 tbsp", ingredient: { name: "Hot chocolate mix" } },
        { measure: "1/2 cup", ingredient: { name: "Steamed milk" } },
        { measure: "A dollop", ingredient: { name: "Whipped cream" } },
        { measure: "A pinch", ingredient: { name: "Cocoa powder" } },
      ],
    },
    {
      id: 3,
      name: "Iced Caramel Latte",
      instructions:
        "Fill a glass with ice. Add caramel syrup and milk. Pour in the brewed espresso. Stir well and top with whipped cream and a drizzle of caramel syrup.",
      alcoholic: false,
      imageUrl:
        "https://mocktail.net/wp-content/uploads/2022/06/Iced-Caramel-Latte_4-ig.jpg",
      glass: "Tall glass",
      measures: [
        { measure: "1 shot", ingredient: { name: "Espresso" } },
        { measure: "1/4 cup", ingredient: { name: "Caramel syrup" } },
        { measure: "3/4 cup", ingredient: { name: "Milk" } },
        { measure: "1 cup", ingredient: { name: "Ice cubes" } },
        { measure: "A dollop", ingredient: { name: "Whipped cream" } },
        { measure: "1 tbsp", ingredient: { name: "Caramel drizzle" } },
      ],
    },
    {
      id: 4,
      name: "Irish Coffee",
      instructions:
        "Brew coffee. In a heatproof glass, add sugar and whiskey. Pour in the hot coffee and stir. Top with a layer of lightly whipped cream.",
      alcoholic: true,
      imageUrl:
        "https://www.thecocktaildb.com/images/media/drink/sywsqw1439906999.jpg",
      glass: "Heatproof glass",
      measures: [
        { measure: "1 cup", ingredient: { name: "Hot coffee" } },
        { measure: "2 tsp", ingredient: { name: "Brown sugar" } },
        { measure: "1 shot", ingredient: { name: "Irish whiskey" } },
        { measure: "A dollop", ingredient: { name: "Lightly whipped cream" } },
      ],
    },
    {
      id: 5,
      name: "Espresso Martini",
      instructions:
        "Combine espresso, vodka, and coffee liqueur in a shaker with ice. Shake well and strain into a chilled martini glass. Garnish with coffee beans.",
      alcoholic: true,
      imageUrl:
        "https://www.thecocktaildb.com/images/media/drink/n0sx531504372951.jpg",
      glass: "Martini glass",
      measures: [
        { measure: "1 shot", ingredient: { name: "Espresso" } },
        { measure: "1 shot", ingredient: { name: "Vodka" } },
        { measure: "1/2 shot", ingredient: { name: "Coffee liqueur" } },
        { measure: "3", ingredient: { name: "Coffee beans (for garnish)" } },
      ],
    },
    {
      id: 6,
      name: "Matcha Latte",
      instructions:
        "Whisk matcha powder with hot water until smooth. Add the mixture to a cup and top with steamed milk. Sweeten to taste with honey or sugar.",
      alcoholic: false,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGWtPrzyApvXV1So996Ps47hPNNVWepasLVQ&s",
      glass: "Coffee mug",
      measures: [
        { measure: "1 tsp", ingredient: { name: "Matcha powder" } },
        { measure: "1/4 cup", ingredient: { name: "Hot water" } },
        { measure: "3/4 cup", ingredient: { name: "Steamed milk" } },
        { measure: "To taste", ingredient: { name: "Honey or sugar" } },
      ],
    },
    {
      id: 7,
      name: "Hot Chocolate",
      instructions:
        "Heat milk in a saucepan. Stir in cocoa powder and sugar until dissolved. Pour into a mug and top with whipped cream and chocolate shavings.",
      alcoholic: false,
      imageUrl:
        "https://40204166.fs1.hubspotusercontent-na1.net/hub/40204166/hubfs/New%20Recipe%20images/Perfect%20Hot%20Cocoa.jpg?width=526&height=430&name=Perfect%20Hot%20Cocoa.jpg",
      glass: "Coffee mug",
      measures: [
        { measure: "1 cup", ingredient: { name: "Milk" } },
        { measure: "2 tbsp", ingredient: { name: "Cocoa powder" } },
        { measure: "1 tbsp", ingredient: { name: "Sugar" } },
        { measure: "A dollop", ingredient: { name: "Whipped cream" } },
        { measure: "1 tbsp", ingredient: { name: "Chocolate shavings" } },
      ],
    },
    {
      id: 8,
      name: "Affogato",
      instructions:
        "Place a scoop of vanilla ice cream in a cup or small bowl. Pour hot espresso over the ice cream and serve immediately.",
      alcoholic: false,
      imageUrl:
        "https://thebigmansworld.com/wp-content/uploads/2023/06/affogato-recipe.jpg",
      glass: "Small bowl",
      measures: [
        { measure: "1 scoop", ingredient: { name: "Vanilla ice cream" } },
        { measure: "1 shot", ingredient: { name: "Hot espresso" } },
      ],
    },
    {
      id: 9,
      name: "Chai Latte",
      instructions:
        "Brew chai tea. In a saucepan, heat milk with sugar and vanilla. Combine the tea and milk mixture in a cup, then sprinkle with cinnamon.",
      alcoholic: false,
      imageUrl:
        "https://tornadoughalli.com/wp-content/uploads/2021/09/CHAI-LATTE-2-1.jpg",
      glass: "Coffee mug",
      measures: [
        { measure: "1 bag", ingredient: { name: "Chai tea" } },
        { measure: "1 cup", ingredient: { name: "Milk" } },
        { measure: "1 tsp", ingredient: { name: "Sugar" } },
        { measure: "1/2 tsp", ingredient: { name: "Vanilla extract" } },
        { measure: "A pinch", ingredient: { name: "Cinnamon" } },
      ],
    },
    {
      id: 10,
      name: "Lemon Iced Tea",
      instructions:
        "Brew tea and let it cool. Add lemon juice and honey, then pour over ice. Garnish with a lemon slice.",
      alcoholic: false,
      imageUrl:
        "https://www.acouplecooks.com/wp-content/uploads/2022/03/Lemon-Iced-Tea-001s.jpg",
      glass: "Tall glass",
      measures: [
        { measure: "1 bag", ingredient: { name: "Black tea" } },
        { measure: "1 tbsp", ingredient: { name: "Lemon juice" } },
        { measure: "1 tbsp", ingredient: { name: "Honey" } },
        { measure: "1 cup", ingredient: { name: "Ice cubes" } },
        { measure: "1 slice", ingredient: { name: "Lemon (for garnish)" } },
      ],
    },
    {
      id: 11,
      name: "Cold Brew Coffee",
      instructions:
        "Mix coarsely ground coffee with cold water. Let it steep in the fridge for 12-24 hours. Strain and serve over ice.",
      alcoholic: false,
      imageUrl:
        "https://thebigmansworld.com/wp-content/uploads/2025/01/nitro-cold-brew-recipe.jpg",
      glass: "Tall glass",
      measures: [
        { measure: "1/2 cup", ingredient: { name: "Coarsely ground coffee" } },
        { measure: "2 cups", ingredient: { name: "Cold water" } },
        { measure: "1 cup", ingredient: { name: "Ice cubes" } },
      ],
    },
    {
      id: 12,
      name: "Mint Lemonade",
      instructions:
        "In a glass, muddle mint leaves with sugar. Add lemon juice and fill the glass with water and ice. Stir well.",
      alcoholic: false,
      imageUrl:
        "https://dirtanddough.com/wp-content/uploads/2023/04/mint-lemonade-featured-image.jpg",
      glass: "Tall glass",
      measures: [
        { measure: "6 leaves", ingredient: { name: "Mint" } },
        { measure: "1 tbsp", ingredient: { name: "Sugar" } },
        { measure: "2 tbsp", ingredient: { name: "Lemon juice" } },
        { measure: "1 cup", ingredient: { name: "Water" } },
        { measure: "1 cup", ingredient: { name: "Ice cubes" } },
      ],
    },
    {
      id: 13,
      name: "Mango Smoothie",
      instructions:
        "Blend mango, yogurt, milk, and honey until smooth. Pour into a glass and serve chilled.",
      alcoholic: false,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHAjjUXRuq3pcPKkZrXtC3WHL1EL7jNX0LzQ&s",
      glass: "Tall glass",
      measures: [
        { measure: "1 cup", ingredient: { name: "Fresh mango" } },
        { measure: "1/2 cup", ingredient: { name: "Yogurt" } },
        { measure: "1/2 cup", ingredient: { name: "Milk" } },
        { measure: "1 tbsp", ingredient: { name: "Honey" } },
      ],
    },
    {
      id: 14,
      name: "Pina Colada",
      instructions:
        "Blend pineapple juice, coconut cream, and ice until smooth. Serve in a glass with a pineapple wedge for garnish.",
      alcoholic: false,
      imageUrl:
        "https://www.thecocktaildb.com/images/media/drink/upgsue1668419912.jpg",
      glass: "Tall glass",
      measures: [
        { measure: "1/2 cup", ingredient: { name: "Pineapple juice" } },
        { measure: "1/2 cup", ingredient: { name: "Coconut cream" } },
        { measure: "1 cup", ingredient: { name: "Ice cubes" } },
        { measure: "1 wedge", ingredient: { name: "Pineapple (for garnish)" } },
      ],
    },
    {
      id: 15,
      name: "Strawberry Milkshake",
      instructions:
        "Blend strawberries, milk, ice cream, and sugar until smooth. Serve in a chilled glass.",
      alcoholic: false,
      imageUrl:
        "https://www.thehungrybites.com/wp-content/uploads/2023/06/Strawberry-milkshake-frappuccino-featured.jpg",
      glass: "Tall glass",
      measures: [
        { measure: "1 cup", ingredient: { name: "Fresh strawberries" } },
        { measure: "1/2 cup", ingredient: { name: "Milk" } },
        { measure: "1/2 cup", ingredient: { name: "Vanilla ice cream" } },
        { measure: "1 tbsp", ingredient: { name: "Sugar" } },
      ],
    },

    {
      id: 16,
      name: "Microwave Hot Cocoa",
      instructions:
        "Combine sugar, cocoa, salt and hot water in 1-quart micro-proof measuring cup (or coffee mug). Microwave at HIGH (100%) for 1 to 1 1/2 minutes or until boiling. Add milk, sitr and microwave an additonal 1 1/2 to 2 minutes or until hot. Stir in vanilla, blend well.",
      alcoholic: false,
      imageUrl:
        "http://www.thecocktaildb.com/images/media/drink/8y4x5f1487603151.jpg",
      glass: "Microwave safe measuring cup",
      measures: [
        {
          measure: "1 cup",
          ingredient: {
            name: "hot water",
          },
        },
        {
          measure: "1.5 tbsp",
          ingredient: {
            name: "sugar",
          },
        },
        {
          measure: "1 tbsp",
          ingredient: {
            name: "powdered cocoa",
          },
        },
        {
          measure: "1/8 ts",
          ingredient: {
            name: "salt",
          },
        },
      ],
    },
  ];
};
