import type { SatteriProcessorOptions } from '@astrojs/markdown-satteri';

import { icons } from './icons.ts';

type HastPluginEntry = NonNullable<SatteriProcessorOptions['hastPlugins']>[number];

export const headingAnchors: HastPluginEntry = {
  name: 'heading-anchors',
  element: {
    filter: ['h2', 'h3', 'h4', 'h5', 'h6'],
    visit(node, ctx) {
      const id = node.properties?.id;
      if (typeof id !== 'string') {
        return;
      }

      ctx.appendChild(node, {
        type: 'element',
        tagName: 'a',
        properties: {
          className: ['heading-anchor'],
          href: `#${id}`,
          ariaLabel: 'Link to this section',
        },
        children: [
          {
            type: 'element',
            tagName: 'svg',
            properties: {
              className: ['icon', 'icon-sm'],
              viewBox: icons.link.viewBox,
              ariaHidden: 'true',
              focusable: 'false',
            },
            children: [
              {
                type: 'element',
                tagName: 'path',
                properties: { d: icons.link.path, fill: 'currentColor' },
                children: [],
              },
            ],
          },
        ],
      });
    },
  },
};
