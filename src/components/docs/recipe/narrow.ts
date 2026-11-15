import type { RecipeSlotData, RecipeSlotOrTank, RecipeTankData } from '../../../mods/types.ts';

export function asSlot(input: RecipeSlotOrTank | undefined): RecipeSlotData | undefined {
  if (input === undefined || input === null) {
    return undefined;
  }

  if (isTank(input)) {
    throw new Error(
      `Expected an item slot, got a tank of ${(input.fluid ?? input.fluidGroup).name}`,
    );
  }

  return input;
}

export function isTank(input: RecipeSlotData | RecipeTankData): input is RecipeTankData {
  return 'fluid' in input || 'fluidGroup' in input;
}

export function asTank(input: RecipeSlotOrTank | undefined): RecipeTankData | undefined {
  if (input === undefined || input === null) {
    return undefined;
  }

  if (!isTank(input)) {
    throw new Error('Expected a tank, got an item slot');
  }

  return input;
}
