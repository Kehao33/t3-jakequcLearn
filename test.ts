import Case from "case";

type Template =
  | "upper"
  | "lower"
  | "capital"
  | "snake"
  | "pascal"
  | "camel"
  | "kebab"
  | "header"
  | "constant"
  | "title"
  | "sentence"
  | "flip"
  | "random";

const formatLabel = (
  value: string,
  template: Template = "title",
  options?: {
    fill?: string;
    noApostrophes?: boolean;
    names?: Array<string>;
    abbreviations?: Array<string>;
  }
): string => {
  const { fill, noApostrophes, names, abbreviations } = options || {};
  switch (template) {
    case "upper":
    case "lower":
    case "capital":
      // return Case[template](value, names, noApostrophes);
    case "sentence":
      return Case[template](value, names, abbreviations);
    default:
      return Case[template](value);
  }
};

export default formatLabel;


console.log(formatLabel("Add A Department"))