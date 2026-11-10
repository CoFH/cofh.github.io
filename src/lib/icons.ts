import {
  faArrowLeft,
  faArrowRight,
  faBook,
  faBox,
  faCheck,
  faChevronDown,
  faChevronRight,
  faCircleQuestion,
  faCode,
  faFileLines,
  faHammer,
  faLink,
  faList,
  faMagnifyingGlass,
  faMoon,
  faRss,
  faShieldHalved,
  faStar,
  faSun,
  faTriangleExclamation,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { siCurseforge, siDiscord, siGithub, siModrinth, type SimpleIcon } from 'simple-icons';

interface IconShape {
  viewBox: string;
  path: string;
}

function getFontAwesome({ icon: [width, height, , , path] }: IconDefinition): IconShape {
  return {
    viewBox: `0 0 ${width} ${height}`,
    path: typeof path === 'string' ? path : path.join(' '),
  };
}

function getSimpleIcons({ path }: SimpleIcon): IconShape {
  return {
    viewBox: '0 0 24 24',
    path,
  };
}

export const icons = {
  arrowLeft: getFontAwesome(faArrowLeft),
  arrowRight: getFontAwesome(faArrowRight),
  book: getFontAwesome(faBook),
  chat: getSimpleIcons(siDiscord),
  check: getFontAwesome(faCheck),
  chevron: getFontAwesome(faChevronDown),
  chevronRight: getFontAwesome(faChevronRight),
  code: getFontAwesome(faCode),
  curseforge: getSimpleIcons(siCurseforge),
  file: getFontAwesome(faFileLines),
  github: getSimpleIcons(siGithub),
  hammer: getFontAwesome(faHammer),
  help: getFontAwesome(faCircleQuestion),
  link: getFontAwesome(faLink),
  list: getFontAwesome(faList),
  modrinth: getSimpleIcons(siModrinth),
  moon: getFontAwesome(faMoon),
  package: getFontAwesome(faBox),
  rss: getFontAwesome(faRss),
  search: getFontAwesome(faMagnifyingGlass),
  shield: getFontAwesome(faShieldHalved),
  star: getFontAwesome(faStar),
  sun: getFontAwesome(faSun),
  warning: getFontAwesome(faTriangleExclamation),
};

export type IconName = keyof typeof icons;

export function getIconDataUri(name: IconName): string {
  const { viewBox, path } = icons[name];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}"><path d="${path}"/></svg>`;

  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
