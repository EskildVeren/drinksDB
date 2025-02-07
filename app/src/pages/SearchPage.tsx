import { ResultList } from "@/components/ResultList";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import { makeVar, useReactiveVar } from "@apollo/client";

const inputVar = makeVar("");
const optionsVar = makeVar({
  sort: "asc",
  alcohol: true,
});

export default function SearchPage() {
  const inputValue = useReactiveVar(inputVar);
  const optionsValue = useReactiveVar(optionsVar);

  const handleCheckbox = () => {
    optionsVar({
      sort: optionsVar().sort,
      alcohol: !optionsVar().alcohol,
    });
  };

  return (
    <main className="flex flex-col items-center gap-10 ">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        role="search"
        className="flex w-8/12 flex-col items-center gap-4 "
      >
        <Label id="search_label">Search for your favorite drink!</Label>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Input
            placeholder={'"Margarita"'}
            onChange={(event) => {
              inputVar(event.target.value);
            }}
            value={inputValue}
            role="searchbox"
            aria-labelledby="search_label"
            data-cy="search-input"
          />
          <Button
            variant="default"
            type="submit"
            className="m-auto min-w-min"
            data-cy="search_button"
          >
            Search
          </Button>
        </div>

        <div className="flex max-w-full flex-col gap-8 sm:flex-row">
          <div className="flex flex-col items-center">
            <h2 className="text-center text-xl ">Sort name by:</h2>
            <RadioGroup
              onValueChange={async (value) => {
                await optionsVar({
                  sort: value,
                  alcohol: optionsVar().alcohol,
                });
                // wait for optionsVar to update before refetching
              }}
              defaultValue={optionsValue.sort}
              className="flex flex-col"
            >
              <div className="flex items-center gap-1 ">
                <RadioGroupItem
                  aria-labelledby="asc_label"
                  value="asc"
                  id="asc"
                />
                <Label className="text-lg" htmlFor="asc" id="asc_label">
                  A-Z
                </Label>
              </div>

              <div className="flex items-center gap-1 ">
                <RadioGroupItem
                  aria-labelledby="desc_label"
                  value="desc"
                  id="desc"
                />
                <Label className="text-lg" htmlFor="desc" id="desc_label">
                  Z-A
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-xl">Alcohol</h2>
            <div className="flex flex-row gap-1">
              <Checkbox
                className="self-center"
                checked={!optionsValue.alcohol}
                onCheckedChange={async () => {
                  await handleCheckbox();
                  // wait for optionsVar to update before refetching
                }}
                id="non-alcoholic"
                aria-labelledby="non-alcoholic_label"
              />
              <Label
                className="text-lg font-medium"
                htmlFor="non-alcoholic"
                id="non-alcoholic_label"
              >
                Non-alcoholic
              </Label>
            </div>
          </div>
        </div>
      </form>

      <>
        <ResultList />
      </>
    </main>
  );
}
