import { Card } from "./card";
import { Count } from "./counts";

export type HandResponse = {
  _id: string;
  cards: Card[];
  count: Count;
};
