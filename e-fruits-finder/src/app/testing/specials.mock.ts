import {SpecialsModel, SpecialsType} from "../models/specials-model";

export const SPECIAL_MOCK: SpecialsModel[] = [
  {
    "uuid": "233d8582-141a-460d-b7e1-d623afd69e7d",
    "ingredientId": "62798278-2fbc-4c31-98de-b7959c191688",
    "type": SpecialsType.EVENT,
    "title": "Bratmas Party",
    "geo": "43.032446,-87.908098",
    "text": "Join us at Sweet Diner for this Special Holiday Event!"
  },
  {
    "uuid": "3c1aa6a4-802f-4f34-a232-bfd4d975f7b1",
    "ingredientId": "3d810ba9-7e4e-48aa-b2e9-7918e38b358d",
    "type": SpecialsType.LOCAL,
    "title": "1 Dozen, 1 Dollar",
    "geo": "43.044842,-87.904140",
    "text": "Eggs are on sale at a grocery store near you!"
  },
  {
    "uuid": "8f730f08-5ea5-48fb-bfd7-6a28337efc28",
    "ingredientId": "aa1ff525-4190-4a66-8d12-3f383a752b55",
    "type": SpecialsType.PROMO,
    "code": "GETMILK",
    "title": "$1 off Milk",
    "text": "Use the promocode GETMILK on Peapod and receive $1 off your next gallon!"
  },
  {
    "uuid": "c6912eeb-f686-482d-8bf4-c118510a4069",
    "ingredientId": "77ae45d7-659b-4cb5-a4ea-07f00e442974",
    "type": SpecialsType.SALE,
    "title": "Eriksens Hand Rolled Butter",
    "text": "Flash this recipe at a Roundy's near you and get 10% off Eriksens Hand Rolled Butter, salted or unsalted."
  }
];
