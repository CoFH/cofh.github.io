import type { RecipeSlotData, RecipeSlotOrTank, RecipeTankData } from '../../../data/types.ts';

export function asSlot(input: RecipeSlotOrTank | undefined): RecipeSlotData | undefined {
  if (input === undefined || input === null) {
    return undefined;
  }

  if ('fluid' in input) {
    throw new Error(`Expected an item slot, got a tank of ${input.fluid.name}`);
  }

  return input;
}

export function asTank(input: RecipeSlotOrTank | undefined): RecipeTankData | undefined {
  if (input === undefined || input === null) {
    return undefined;
  }

  if (!('fluid' in input)) {
    throw new Error('Expected a tank, got an item slot');
  }

  return input;
}
