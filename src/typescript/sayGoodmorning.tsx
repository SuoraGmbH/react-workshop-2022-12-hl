function sayGoodMorning(country: Country) {
  return <i>{localization[country]}</i>;
}

const localization = {
  de: "Guten Morgen",
  nl: "Goedemorgen",
  en: "Good morning",
};

type Localization = typeof localization;
type Country = keyof Localization;

sayGoodMorning("nl");
export const element = <h1>{sayGoodMorning("de")}, Sara!</h1>;
