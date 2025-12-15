export interface Location {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
  image: string;
  description: string;
  slug: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  locationId: string;
  featured?: boolean;
  image?: string;
}

export type MenuCategory = 
  | "starters"
  | "steaks"
  | "sides"
  | "seafood"
  | "desserts"
  | "wine"
  | "cocktails";

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  locationId: string;
  image: string;
  slug: string;
}

export interface ReservationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: Date;
  time: string;
  guests: number;
  locationId: string;
  specialRequests?: string;
  occasion?: string;
}
