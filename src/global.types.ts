import { Dispatch, ReactNode, SetStateAction } from "react";

export interface cardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity?: number;
  totalPrice?: number;
}

export interface StateProps {
  value: string;
  displayValue: string;
  stateCode: string;
}
// Interface for representing a City
export interface City {
  value: string;
  displayValue: string;
}

// Interface for representing user data
export interface UserData {
  userName: string;
  email: string;
  state: string;
  city: string;
  password: string;
}

export interface LinkProps {
  label: string;
  url: string;
}

// Define the props for the SideSlider component
export interface SideSliderProps {
  showSlider: boolean;
  setShowSlider: Dispatch<SetStateAction<boolean>>;
  icon: ReactNode;
  title: ReactNode;
  content?: ReactNode;
}