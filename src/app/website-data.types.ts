// TypeScript interfaces for data.json

export interface SiteConfig {
  title: string;
  metaDescription: string;
  themeColor: string;
  lang: string;
}

export interface Brand {
  symbol: string;
  name: string;
  nameSecondary: string;
  homeAnchor: string;
  ariaLabel: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HeaderConfig {
  tagline: string;
  navAriaLabel: string;
  navItems: NavItem[];
}

export interface HeroCta {
  label: string;
  href: string;
  ariaLabel: string;
  arrow: string;
}

export interface HeroTextLink {
  label: string;
  href: string;
  arrowLabel: string;
}

export interface HeroNote {
  line1: string;
  line2: string;
}

export interface HeroStamp {
  line1: string;
  line2: string;
}

export interface HeroCaption {
  left: string;
  right: string;
}

export interface HeroArt {
  ariaLabel: string;
  stamp: HeroStamp;
  caption: HeroCaption;
  spark: string;
}

export interface HeroConfig {
  eyebrow: string;
  heading: string;
  headingEmphasis: string;
  headingSuffix: string;
  description: string;
  cta: HeroCta;
  textLink: HeroTextLink;
  note: HeroNote;
  art: HeroArt;
}

export interface SectionIndex {
  number: string;
  label: string;
}

export interface ImageStrip {
  ariaLabel: string;
  labelLeft: string;
  labelRight: string;
}

export interface CraftConfig {
  sectionIndex: SectionIndex;
  heading: string;
  headingEmphasis: string;
  headingSuffix: string;
  body: string;
  handwritten: string;
  imageStrip: ImageStrip;
}

export interface ServiceItem {
  number: string;
  icon: string;
  iconClass: string;
  title: string;
  description: string;
  mark: string;
}

export interface ServicesConfig {
  sectionIndex: SectionIndex;
  heading: string;
  headingEmphasis: string;
  subheading: string;
  items: ServiceItem[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ProcessConfig {
  imageAriaLabel: string;
  sectionIndex: SectionIndex;
  heading: string;
  headingEmphasis: string;
  steps: ProcessStep[];
}

export interface ClosingConfig {
  flower: string;
  eyebrow: string;
  heading: string;
  headingEmphasis: string;
  body: string;
  signoff: string;
  cta: HeroCta;
}

export interface FooterBrand {
  ariaLabel: string;
  href: string;
}

export interface FooterBackToTop {
  label: string;
  arrow: string;
  href: string;
}

export interface FooterConfig {
  brand: FooterBrand;
  tagline: string;
  copyrightYear: number;
  backToTop: FooterBackToTop;
  navItems: NavItem[];
}

export interface ContactPhone {
  label: string;
  number: string;
  href: string;
}

export interface ContactEmail {
  label: string;
  address: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  handle: string;
  href: string;
  ariaLabel: string;
}

export interface ContactConfig {
  address: string;
  addressMapUrl?: string;
  phones: ContactPhone[];
  email: ContactEmail;
  social: SocialLink[];
}

export interface WebsiteData {
  site: SiteConfig;
  brand: Brand;
  header: HeaderConfig;
  hero: HeroConfig;
  craft: CraftConfig;
  services: ServicesConfig;
  process: ProcessConfig;
  closing: ClosingConfig;
  footer: FooterConfig;
  contact: ContactConfig;
}
