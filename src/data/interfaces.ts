export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface RegisterButtonProps {
  extraStyle?: string;
  onClick?: () => void;
}

export interface IPanelItem {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

export interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface IFormField {
  name: keyof IFormInput;
  label: string;
  placeholder: string;
}

export interface IFormFields extends IFormField {
  errorMsg: string;
  register: any;
  errors: any;
}

export interface ILink {
  title: string;
  url: string;
}

export interface IconSocial {
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export interface ISocialLink extends IconSocial {
  title: string;
}
