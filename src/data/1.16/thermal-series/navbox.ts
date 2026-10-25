import type { DocNav } from '../../types.ts';
import ts from './items.ts';

export default {
  title: 'Thermal Series',
  sections: [
    {
      groups: [
        {
          title: 'Information',
          items: [{ item: ts.thermalpedia }],
        },
      ],
    },
  ],
} satisfies DocNav;
