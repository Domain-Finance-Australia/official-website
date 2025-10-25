export type TStrapiResponse<T = null> = {
  success: boolean;
  data?: T;
  error?: {
    status: number;
    name: string;
    message: string;
    details?: Record<string, string[]>;
  };
  meta?: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type BlockType =
  | "blocks.hero"
  | "blocks.affiliations"
  | "blocks.content-with-image"
  | "blocks.heading-and-text"
  | "blocks.product-cards"
  | "blocks.testimonials"
  | "blocks.value-propositions"
  | "blocks.calendly-booking-embed"
  | "blocks.faq";

interface BlockComponentType {
  __component: BlockType;
}

export type TBlock =
  | (BlockComponentType & TAffiliations)
  | (BlockComponentType & TContentWithImage)
  | (BlockComponentType & THeadingAndText)
  | (BlockComponentType & THero)
  | (BlockComponentType & TProductCards)
  | (BlockComponentType & TTestimonials)
  | (BlockComponentType & TValuePropositions);

export type LinkStyles = "PRIMARY" | "SECONDARY";

export type TLink = {
  id: number;
  href: string;
  label: string;
  isExternal: boolean;
  isButtonLink: boolean;
  style: LinkStyles;
};

export type TImage = {
  id: number;
  documentId: string;
  alternativeText: string | null;
  url: string;
};

export type TLogo = {
  id: number;
  label: string;
  href: string;
  isExternal: boolean;
  image: TImage;
};

export type TSubLink = {
  id: number;
  href: string;
  label: string;
  isExternal: boolean;
};

export type TNavLink = {
  id: number;
  href: string;
  label: string;
  subLinks: TSubLink[];
  isExternal: boolean;
};

export type TLinkColumn = {
  id: number;
  title: string;
  links: TLink[];
};

export type THeader = {
  id: number;
  logo: TLogo;
  navItems: TNavLink[];
};

export type TFooter = {
  id: number;
  logo: TLogo;
  address: string;
  email: string;
  phoneNumber: string;
  bottomLeftText: string;
  bottomRightText: string;
  linkColumns: TLinkColumn[];
  socialLinks: TLogo[];
};

export type TBanner = {
  id: number;
  isVisible: boolean;
  link: TLink;
  description: string;
};

export type TAffiliations = {
  id: number;
  heading: string;
  logos: TLogo[];
};

export type ContentWithImageStyles = "LEFT" | "RIGHT";

export type TContentWithImage = {
  id: number;
  heading: string;
  text: string;
  image: TImage;
  cta: TLink;
  style: ContentWithImageStyles;
};

export type HeadingAndTextAlignments = "LEFT" | "RIGHT" | "CENTER";

export type THeadingAndText = {
  id: number;
  heading: string;
  text: string;
  alignment: HeadingAndTextAlignments;
};

export type THero = {
  id: number;
  heading: string;
  text: string;
  links: TLink[];
  images: TImage[];
  imageAsBackground: boolean;
};

export type TProductCard = {
  id: number;
  heading: string;
  description: string;
  image: TImage;
  href: string;
};

export type TProductCards = {
  id: number;
  heading: string;
  subHeading: string;
  cards: TProductCard[];
};

export type TTestimonial = {
  id: number;
  name: string;
  text: string;
};

export type TTestimonials = {
  id: number;
  heading: string;
  testimonials: TTestimonial[];
};

export type TBenefit = {
  id: number;
  title: string;
  description: string;
  icon: TImage;
};

export type ValuePropositionStyles = "SIMPLE" | "DETAILED" | "NOIMAGE";

export type TValuePropositions = {
  id: number;
  heading: string;
  subHeading: string;
  image: TImage;
  benefits: TBenefit[];
  cta: TLink;
  style: ValuePropositionStyles;
};

export type TCalendlyEmbed = {
  id: number;
  calendlyLink: string;
};

export type TQuestion = {
  id: number;
  heading: string;
  text: string;
};

export type TFAQ = {
  id: number;
  heading: string;
  subHeading: string;
  questions: TQuestion[];
};
