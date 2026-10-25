import type { ImageMetadata } from 'astro';

export interface ItemDefinition {
  name: string;
  url?: string | null;
}

export interface Item {
  name: string;
  href: string | undefined;
  image: ImageMetadata;
  iconImage: ImageMetadata | undefined;
  slotImage: ImageMetadata | undefined;
}

export interface ItemGroupDefinition {
  name: string;
  url?: string | null;
  prefix?: string;
  items: Item[];
}

export interface ItemGroup {
  name: string;
  href: string | undefined;
  prefix: string | undefined;
  items: Item[];
}

export interface FluidDefinition {
  name: string;
  url?: string | null;
}

export interface Fluid {
  name: string;
  href: string | undefined;
  image: ImageMetadata;
  iconImage: ImageMetadata | undefined;
}

export interface RecipeTypeDefinition {
  name: string;
  url: string;
  withEnergy?: boolean;
  allResultsBold?: boolean;
  component: RecipeComponent;
}

export interface RecipeType {
  name: string;
  href: string;
  withEnergy: boolean;
  allResultsBold: boolean;
  component: RecipeComponent;
}

export interface RecipeData {
  inputs: RecipeSlotOrTank[];
  outputs: RecipeSlotOrTank[];
  shapeless?: boolean;
}

export interface RecipeDefinition extends RecipeData {
  ingredients?: RecipeColumnItemData[];
  results?: RecipeColumnItemData[];
  amountSuffix?: boolean;
  energy?: number;
  note?: string;
}

export interface Recipe extends RecipeDefinition {
  type: RecipeType;
}

export type RecipeSlotOrTank = RecipeSlotData | RecipeTankData | null;

export type RecipeSlotData = {
  amount?: number;
  randomCycle?: boolean;
  chance?: number;
} & (
  | {
      item: Item | Item[];
      itemGroup?: never;
    }
  | {
      itemGroup: ItemGroup;
      item?: never;
    }
);

export interface RecipeTankData {
  fluid: Fluid;
  amount: number;
}

export type RecipeColumnItemData = { suffix?: string } & (
  | {
      item: Item;
      itemGroup?: never;
      fluid?: never;
      fluidAmount?: never;
      html?: never;
    }
  | {
      itemGroup: ItemGroup;
      item?: never;
      fluid?: never;
      fluidAmount?: never;
      html?: never;
    }
  | {
      fluid: Fluid;
      fluidAmount: number;
      item?: never;
      itemGroup?: never;
      html?: never;
    }
  | {
      html: string;
      item?: never;
      itemGroup?: never;
      fluid?: never;
      fluidAmount?: never;
    }
);

export type RecipeComponent = (props: { recipe: Recipe }) => unknown;

export interface DocNav {
  title: string;
  sections: {
    title?: string;
    groups: DocNavGroup[];
  }[];
}

export interface DocNavGroup {
  title?: string;
  url?: string;
  items?: DocNavItem[];
  groups?: DocNavGroup[];
}

export interface DocNavItem {
  title?: string;
  item?: Item | Fluid;
  url?: string;
  subitems?: DocNavItem[];
}

export interface DownloadItem {
  slug: string;
  title: string;
  note: string;
  links: {
    curseforge?: string;
    modrinth?: string;
    docs?: string;
    changelog?: string;
    source?: string;
  };
}

export interface Augment {
  name: string;
  item: Item;
  url: string;
  installedIn: string;
  description: string;
}
