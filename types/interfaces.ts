import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface FooterLinks {
  name: string;
  icon: IconType;
  link: string;
}

export interface NavbarLinks {
	ref: string;
	label: string;
}

export interface IProject {
	name: string;
	category: string;
	image: StaticImageData;
	code_url: string;
	live_url: string;
}