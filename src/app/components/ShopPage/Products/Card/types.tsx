export type Item ={
  additional : string;
  brand : string;
  country_of_registration_of_brand : string;
  depth_mm : number;
  height : number;
  ip_class: string;
  model: string;
  nominal_power_watt: number;
  nominal_tok_amper: number;
  nominal_voltage: number;
  number_of_panels_in_set: number;
  number_of_photocells_in_module?: number | undefined;
  photo: string;
  price: number;
  type: string;
  weight_kg: number;
  width?: number | string;
}

export type PropsCard = {
  item: Item;
};