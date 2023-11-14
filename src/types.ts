// types.ts
export interface UserData {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

export type TitleProps = {
	title: string;
	productClass?: number | string;
};
export interface ServiceProps {
	title: string;
	paragraph: string;
	image: string;
}
export interface SpecialistProps {
	title: string;
	paragraph: string;
}

export type ArrowProps = {
	direction: string;
};

export type ButtonProps = {
	children: string;
	width: number;
	height: number;
	image: string;
	propsClass: string;
};

export type Item = {
	id: number;
	additional: string;
	brand?: string | undefined;
	country_of_registration_of_brand: string;
	depth_mm: number;
	height: number;
	ip_class: string;
	model: string;
	nominal_power_watt: number;
	nominal_tok_amper: number;
	nominal_voltage: number;
	number_of_panels_in_set: number;
	number_of_photocells_in_module?: number;
	photo: string;
	price: number;
	type: string;
	weight_kg: number;
	width?: number | string;
};

export type PropsCard = {
	item: Item;
};

export type ProductProps = {
	params: {
		id: string;
	};
};
