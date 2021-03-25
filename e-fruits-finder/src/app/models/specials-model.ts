export interface SpecialsModel {
  uuid: string;
  ingredientId: string;
  type?: SpecialsType;
  title: string;
  geo?: string;
  text: string;
  code?: string;
}


export enum SpecialsType {
  EVENT = 'event',
  LOCAL = 'local',
  PROMO = 'promocode',
  SALE = 'sale'
}
