import type fluids from './recipe-fluids.ts';
import type itemGroups from './recipe-item-groups.ts';
import type items from './recipe-items.ts';
import type sites from './recipe-sites.ts';

export type RecipeItemId = keyof typeof items;
export type RecipeItemGroupId = keyof typeof itemGroups;
export type RecipeFluidId = keyof typeof fluids;
export type RecipeSiteId = keyof typeof sites;

export type RecipeItem = {
  name: string;
  site: RecipeSiteId;
  url?: string;
} & (
  | {
      sprite: [number, number];
      animated?: never;
    }
  | {
      animated: true;
      sprite?: never;
    }
);

export type RecipeItemGroup = {
  name: string;
  items: RecipeItemId[];
  prefix?: string;
} & (
  | {
      site: RecipeSiteId;
      url: string;
    }
  | {
      site?: never;
      url?: never;
    }
);

export type RecipeEntry = { suffix?: string } & (
  | {
      item: RecipeItemId;
      itemGroup?: never;
      fluid?: never;
      fluidAmount?: never;
      html?: never;
    }
  | {
      itemGroup: RecipeItemGroupId;
      item?: never;
      fluid?: never;
      fluidAmount?: never;
      html?: never;
    }
  | {
      fluid: RecipeFluidId;
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

export type RecipeSlotData = {
  amount?: number;
  randomCycle?: boolean;
} & (
  | {
      item: RecipeItemId[];
      itemGroup?: never;
    }
  | {
      itemGroup: RecipeItemGroupId;
      item?: never;
    }
);

export interface RecipeTankData {
  fluid: RecipeFluidId;
  amount: number;
}

export interface CraftingRecipeData {
  rows: (RecipeSlotData | null)[][];
  result: RecipeSlotData;
  shapeless?: boolean;
}

export type MachineRecipeData = Record<string, RecipeSlotData | RecipeTankData | number>;

export interface RecipeType<
  Data extends CraftingRecipeData | MachineRecipeData = MachineRecipeData,
> {
  name: string;
  site: RecipeSiteId;
  url: string;
  withEnergy?: boolean;
  allResultsBold?: boolean;
  recipes: Record<
    string,
    {
      results: RecipeEntry[];
      ingredients: RecipeEntry[];
      energy?: number;
      note?: string;
      data: Data;
    }
  >;
}

export type MachineRecipeElement =
  | {
      slot: string;
      top: number;
      left: number;
    }
  | {
      tank: string;
      top: number;
      left: number;
      height?: number;
      size: number;
      gauge: number;
    }
  | {
      label: string;
      top: number;
      right: number;
      align: 'left' | 'center' | 'right';
    };

export interface MachineRecipeLayout {
  background: string;
  width: number;
  height: number;
  elements: MachineRecipeElement[];
}

export interface DocNavItem {
  title: string;
  url?: string;
  icon?: [number, number];
  subitems?: DocNavItem[];
}

export interface DocNavGroup {
  title?: string;
  url?: string;
  items?: DocNavItem[];
  groups?: DocNavGroup[];
}

export interface DocNav {
  title: string;
  url: string;
  sections: {
    title?: string;
    groups: DocNavGroup[];
  }[];
}

export interface DownloadItem {
  id: string;
  logo?: string;
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
  url: string;
  installedIn: string;
  description: string;
  animated?: boolean;
}
