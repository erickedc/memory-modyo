import { IPicture } from "./Image.model";

export interface ICard{
  picture: IPicture;
  status: CardStatus;
  id: string;
}

export enum CardStatus{
  Hidden,
  Flipped,
  Matched
}