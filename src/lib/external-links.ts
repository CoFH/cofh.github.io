import type { IconName } from './icons.ts';

export const DISCORD_URL = 'https://discord.gg/uRKrnbH';

export const EXTERNAL_LINKS: { title: string; url: string; icon: IconName }[] = [
  {
    title: 'Discord',
    url: DISCORD_URL,
    icon: 'chat',
  },
  {
    title: 'CurseForge',
    url: 'https://www.curseforge.com/members/teamcofh/projects',
    icon: 'curseforge',
  },
  {
    title: 'Modrinth',
    url: 'https://modrinth.com/user/KingLemming',
    icon: 'modrinth',
  },
  {
    title: 'GitHub',
    url: 'https://github.com/CoFH',
    icon: 'github',
  },
];
