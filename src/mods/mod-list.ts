import { defineModList } from './define.ts';

export default defineModList([
  {
    mc: '1.20',
    label: '1.20.1',
    major: true,
    sections: [
      {
        title: 'Core',
        mods: [
          {
            slug: 'cofh-core',
            title: 'CoFH Core',
            summary: 'Core functionality for all Team CoFH mods.',
            docs: 'wip',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/cofh-core',
              modrinth: 'https://modrinth.com/mod/cofh-core',
              changelog: 'https://github.com/CoFH/Version/blob/main/cofh_core/changelog.md',
              source: 'https://github.com/CoFH/CoFHCore/tree/1.20.1',
            },
          },
        ],
      },
      {
        title: 'Thermal Series',
        mods: [
          {
            slug: 'thermal-foundation',
            title: 'Thermal Foundation',
            summary: 'Ores, metals and materials shared by the Thermal Series.',
            requires: ['cofh-core'],
            docs: 'wip',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-foundation',
              modrinth: 'https://modrinth.com/mod/thermal-foundation',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalFoundation/tree/1.20.1',
            },
          },
          {
            slug: 'thermal-expansion',
            title: 'Thermal Expansion',
            summary: 'The original Thermal mod: machines, dynamos and storage.',
            requires: ['thermal-foundation'],
            docs: 'wip',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-expansion',
              modrinth: 'https://modrinth.com/mod/thermal-expansion',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalExpansion/tree/1.20.1',
            },
          },
          {
            slug: 'thermal-dynamics',
            title: 'Thermal Dynamics',
            summary: 'Ducts for moving energy, fluids and items.',
            requires: ['thermal-foundation'],
            docs: 'wip',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-dynamics',
              modrinth: 'https://modrinth.com/mod/thermal-dynamics',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalDynamics/tree/1.20.1',
            },
          },
          {
            slug: 'thermal-cultivation',
            title: 'Thermal Cultivation',
            summary: 'Crops, farming and food.',
            requires: ['thermal-foundation'],
            docs: 'wip',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-cultivation',
              modrinth: 'https://modrinth.com/mod/thermal-cultivation',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalCultivation/tree/1.20.1',
            },
          },
          {
            slug: 'thermal-innovation',
            title: 'Thermal Innovation',
            summary: 'Powered tools and gadgets.',
            requires: ['thermal-foundation'],
            docs: 'wip',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-innovation',
              modrinth: 'https://modrinth.com/mod/thermal-innovation',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalInnovation/tree/1.20.1',
            },
          },
          {
            slug: 'thermal-locomotion',
            title: 'Thermal Locomotion',
            summary: 'Rails and minecarts.',
            requires: ['thermal-foundation'],
            docs: 'wip',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-locomotion',
              modrinth: 'https://modrinth.com/mod/thermal-locomotion',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalLocomotion/tree/1.20.1',
            },
          },
          {
            slug: 'thermal-integration',
            title: 'Thermal Integration',
            summary: 'Recipes and compatibility for using Thermal with other mods.',
            requires: ['thermal-foundation'],
            docs: 'wip',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-integration',
              modrinth: 'https://modrinth.com/mod/thermal-integration',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalIntegration/tree/1.20.1',
            },
          },
        ],
      },
      {
        title: 'More mods',
        mods: [
          {
            slug: 'redstone-arsenal',
            title: 'Redstone Arsenal',
            summary: 'RF-powered tools, weapons and armor.',
            requires: ['cofh-core'],
            docs: 'wip',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/redstone-arsenal',
              modrinth: 'https://modrinth.com/mod/redstone-arsenal',
              source: 'https://github.com/CoFH/RedstoneArsenal/tree/1.20.1',
            },
          },
          {
            slug: 'archers-paradox',
            title: "Archer's Paradox",
            summary: 'Adds a bunch of new arrows.',
            requires: ['cofh-core'],
            docs: 'wip',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/archers-paradox',
              modrinth: 'https://modrinth.com/mod/archers-paradox',
              changelog: 'https://github.com/CoFH/Version/blob/main/archers_paradox/changelog.md',
              source: 'https://github.com/CoFH/ArchersParadox/tree/1.20.1',
            },
          },
          {
            slug: 'ensorcellation',
            title: 'Ensorcellation',
            summary: 'Adds a bunch of new enchantments.',
            requires: ['cofh-core'],
            docs: 'wip',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/ensorcellation',
              modrinth: 'https://modrinth.com/mod/ensorcellation',
              changelog: 'https://github.com/CoFH/Version/blob/main/ensorcellation/changelog.md',
              source: 'https://github.com/CoFH/Ensorcellation/tree/1.20.1',
            },
          },
          {
            slug: 'tools-complement',
            title: "Tool's Complement",
            summary: 'Tools and armor for most standard metals.',
            requires: ['cofh-core'],
            docs: 'wip',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/tools-complement',
              modrinth: 'https://modrinth.com/mod/tools-complement',
              source: 'https://github.com/CoFH/ToolsComplement/tree/1.20.1',
            },
          },
          {
            slug: 'oh-my-gourd',
            title: 'Oh My Gourd',
            summary: "New carved pumpkin and jack o'lantern variants.",
            requires: ['cofh-core'],
            docs: 'wip',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/oh-my-gourd',
              modrinth: 'https://modrinth.com/mod/oh-my-gourd',
              source: 'https://github.com/CoFH/OMGourd/tree/1.20.1',
            },
          },
        ],
      },
      {
        title: 'Tweaks',
        mods: [
          {
            slug: 'capable-cauldrons',
            title: 'Capable Cauldrons',
            summary: 'Makes cauldrons work with modded pipes and machines.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/capable-cauldrons',
              modrinth: 'https://modrinth.com/mod/capable-cauldrons',
              source: 'https://github.com/CoFH/CapableCauldrons/tree/1.20.x',
            },
          },
          {
            slug: 'capable-composters',
            title: 'Capable Composters',
            summary: 'Makes composters work with modded pipes and machines.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/capable-composters',
              modrinth: 'https://modrinth.com/mod/capable-composters',
              source: 'https://github.com/CoFH/CapableComposters/tree/1.20.x',
            },
          },
          {
            slug: 'right-click-get-crops',
            title: 'Right Click, Get Crops',
            summary: 'Right-click to harvest and replant crops.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/right-click-get-crops',
              modrinth: 'https://modrinth.com/mod/right-click-get-crops',
              source: 'https://github.com/CoFH/RightClickGetCrops/tree/1.20.x',
            },
          },
          {
            slug: 'no-night-vision-flashing',
            title: 'No Night Vision Flashing',
            summary: 'Night vision fades out instead of flashing.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/no-night-vision-flashing',
              modrinth: 'https://modrinth.com/mod/no-nv-flash',
              source: 'https://github.com/CoFH/NoNVFlash/tree/1.20.x',
            },
          },
          {
            slug: 'uneffectual',
            title: 'Uneffectual',
            summary: 'Hide unwanted effect icons.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/uneffectual',
              modrinth: 'https://modrinth.com/mod/uneffectual',
              source: 'https://github.com/CoFH/Uneffectual/tree/1.20.x',
            },
          },
        ],
      },
    ],
  },
  {
    mc: '1.19',
    label: '1.19.2',
    sections: [
      {
        title: 'Core',
        mods: [
          {
            slug: 'cofh-core',
            title: 'CoFH Core',
            summary: 'Core functionality for all Team CoFH mods.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/cofh-core',
              modrinth: 'https://modrinth.com/mod/cofh-core',
              changelog: 'https://github.com/CoFH/Version/blob/main/cofh_core/changelog.md',
              source: 'https://github.com/CoFH/CoFHCore/tree/1.19.x',
            },
          },
        ],
      },
      {
        title: 'Thermal Series',
        mods: [
          {
            slug: 'thermal-foundation',
            title: 'Thermal Foundation',
            summary: 'Ores, metals and materials shared by the Thermal Series.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-foundation',
              modrinth: 'https://modrinth.com/mod/thermal-foundation',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalFoundation/tree/1.19.x',
            },
          },
          {
            slug: 'thermal-expansion',
            title: 'Thermal Expansion',
            summary: 'The original Thermal mod: machines, dynamos and storage.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-expansion',
              modrinth: 'https://modrinth.com/mod/thermal-expansion',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalExpansion/tree/1.19.x',
            },
          },
          {
            slug: 'thermal-dynamics',
            title: 'Thermal Dynamics',
            summary: 'Ducts for moving energy, fluids and items.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-dynamics',
              modrinth: 'https://modrinth.com/mod/thermal-dynamics',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalDynamics/tree/1.19.x',
            },
          },
          {
            slug: 'thermal-cultivation',
            title: 'Thermal Cultivation',
            summary: 'Crops, farming and food.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-cultivation',
              modrinth: 'https://modrinth.com/mod/thermal-cultivation',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalCultivation/tree/1.19.x',
            },
          },
          {
            slug: 'thermal-innovation',
            title: 'Thermal Innovation',
            summary: 'Powered tools and gadgets.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-innovation',
              modrinth: 'https://modrinth.com/mod/thermal-innovation',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalInnovation/tree/1.19.x',
            },
          },
          {
            slug: 'thermal-locomotion',
            title: 'Thermal Locomotion',
            summary: 'Rails and minecarts.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-locomotion',
              modrinth: 'https://modrinth.com/mod/thermal-locomotion',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalLocomotion/tree/1.19.x',
            },
          },
          {
            slug: 'thermal-integration',
            title: 'Thermal Integration',
            summary: 'Recipes and compatibility for using Thermal with other mods.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-integration',
              modrinth: 'https://modrinth.com/mod/thermal-integration',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalIntegration/tree/1.19.x',
            },
          },
        ],
      },
      {
        title: 'More mods',
        mods: [
          {
            slug: 'redstone-arsenal',
            title: 'Redstone Arsenal',
            summary: 'RF-powered tools, weapons and armor.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/redstone-arsenal',
              modrinth: 'https://modrinth.com/mod/redstone-arsenal',
              source: 'https://github.com/CoFH/RedstoneArsenal/tree/1.19.x',
            },
          },
          {
            slug: 'archers-paradox',
            title: "Archer's Paradox",
            summary: 'Adds a bunch of new arrows.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/archers-paradox',
              modrinth: 'https://modrinth.com/mod/archers-paradox',
              changelog: 'https://github.com/CoFH/Version/blob/main/archers_paradox/changelog.md',
              source: 'https://github.com/CoFH/ArchersParadox/tree/1.19.x',
            },
          },
          {
            slug: 'ensorcellation',
            title: 'Ensorcellation',
            summary: 'Adds a bunch of new enchantments.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/ensorcellation',
              modrinth: 'https://modrinth.com/mod/ensorcellation',
              changelog: 'https://github.com/CoFH/Version/blob/main/ensorcellation/changelog.md',
              source: 'https://github.com/CoFH/Ensorcellation/tree/1.19.x',
            },
          },
          {
            slug: 'tools-complement',
            title: "Tool's Complement",
            summary: 'Tools and armor for most standard metals.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/tools-complement',
              modrinth: 'https://modrinth.com/mod/tools-complement',
              source: 'https://github.com/CoFH/ToolsComplement/tree/1.19.x',
            },
          },
          {
            slug: 'oh-my-gourd',
            title: 'Oh My Gourd',
            summary: "New carved pumpkin and jack o'lantern variants.",
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/oh-my-gourd',
              modrinth: 'https://modrinth.com/mod/oh-my-gourd',
              source: 'https://github.com/CoFH/OMGourd/tree/1.19.x',
            },
          },
        ],
      },
      {
        title: 'Tweaks',
        mods: [
          {
            slug: 'capable-cauldrons',
            title: 'Capable Cauldrons',
            summary: 'Makes cauldrons work with modded pipes and machines.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/capable-cauldrons',
              modrinth: 'https://modrinth.com/mod/capable-cauldrons',
              source: 'https://github.com/CoFH/CapableCauldrons/tree/1.19.x',
            },
          },
          {
            slug: 'capable-composters',
            title: 'Capable Composters',
            summary: 'Makes composters work with modded pipes and machines.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/capable-composters',
              modrinth: 'https://modrinth.com/mod/capable-composters',
              source: 'https://github.com/CoFH/CapableComposters/tree/1.19.x',
            },
          },
          {
            slug: 'right-click-get-crops',
            title: 'Right Click, Get Crops',
            summary: 'Right-click to harvest and replant crops.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/right-click-get-crops',
              modrinth: 'https://modrinth.com/mod/right-click-get-crops',
              source: 'https://github.com/CoFH/RightClickGetCrops/tree/1.19.x',
            },
          },
          {
            slug: 'no-night-vision-flashing',
            title: 'No Night Vision Flashing',
            summary: 'Night vision fades out instead of flashing.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/no-night-vision-flashing',
              modrinth: 'https://modrinth.com/mod/no-nv-flash',
              source: 'https://github.com/CoFH/NoNVFlash/tree/1.19.x',
            },
          },
          {
            slug: 'uneffectual',
            title: 'Uneffectual',
            summary: 'Hide unwanted effect icons.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/uneffectual',
              modrinth: 'https://modrinth.com/mod/uneffectual',
              source: 'https://github.com/CoFH/Uneffectual/tree/1.19.x',
            },
          },
        ],
      },
    ],
  },
  {
    mc: '1.18',
    label: '1.18.2',
    sections: [
      {
        title: 'Core',
        mods: [
          {
            slug: 'cofh-core',
            title: 'CoFH Core',
            summary: 'Core functionality for all Team CoFH mods.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/cofh-core',
              modrinth: 'https://modrinth.com/mod/cofh-core',
              changelog: 'https://github.com/CoFH/Version/blob/main/cofh_core/changelog.md',
              source: 'https://github.com/CoFH/CoFHCore/tree/1.18.2',
            },
          },
        ],
      },
      {
        title: 'Thermal Series',
        mods: [
          {
            slug: 'thermal-foundation',
            title: 'Thermal Foundation',
            summary: 'Ores, metals and materials shared by the Thermal Series.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-foundation',
              modrinth: 'https://modrinth.com/mod/thermal-foundation',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalFoundation/tree/1.18.2',
            },
          },
          {
            slug: 'thermal-expansion',
            title: 'Thermal Expansion',
            summary: 'The original Thermal mod: machines, dynamos and storage.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-expansion',
              modrinth: 'https://modrinth.com/mod/thermal-expansion',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalExpansion/tree/1.18.2',
            },
          },
          {
            slug: 'thermal-dynamics',
            title: 'Thermal Dynamics',
            summary: 'Ducts for moving energy, fluids and items.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-dynamics',
              modrinth: 'https://modrinth.com/mod/thermal-dynamics',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalDynamics/tree/1.18.2',
            },
          },
          {
            slug: 'thermal-cultivation',
            title: 'Thermal Cultivation',
            summary: 'Crops, farming and food.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-cultivation',
              modrinth: 'https://modrinth.com/mod/thermal-cultivation',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalCultivation/tree/1.18.2',
            },
          },
          {
            slug: 'thermal-innovation',
            title: 'Thermal Innovation',
            summary: 'Powered tools and gadgets.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-innovation',
              modrinth: 'https://modrinth.com/mod/thermal-innovation',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalInnovation/tree/1.18.2',
            },
          },
          {
            slug: 'thermal-locomotion',
            title: 'Thermal Locomotion',
            summary: 'Rails and minecarts.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-locomotion',
              modrinth: 'https://modrinth.com/mod/thermal-locomotion',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalLocomotion/tree/1.18.2',
            },
          },
          {
            slug: 'thermal-integration',
            title: 'Thermal Integration',
            summary: 'Recipes and compatibility for using Thermal with other mods.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-integration',
              modrinth: 'https://modrinth.com/mod/thermal-integration',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalIntegration/tree/1.18.2',
            },
          },
        ],
      },
      {
        title: 'More mods',
        mods: [
          {
            slug: 'redstone-arsenal',
            title: 'Redstone Arsenal',
            summary: 'RF-powered tools, weapons and armor.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/redstone-arsenal',
              modrinth: 'https://modrinth.com/mod/redstone-arsenal',
              changelog: 'https://github.com/CoFH/Version/blob/main/redstone_arsenal/changelog.md',
              source: 'https://github.com/CoFH/RedstoneArsenal/tree/1.18.2',
            },
          },
          {
            slug: 'archers-paradox',
            title: "Archer's Paradox",
            summary: 'Adds a bunch of new arrows.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/archers-paradox',
              modrinth: 'https://modrinth.com/mod/archers-paradox',
              changelog: 'https://github.com/CoFH/Version/blob/main/archers_paradox/changelog.md',
              source: 'https://github.com/CoFH/ArchersParadox/tree/1.18.2',
            },
          },
          {
            slug: 'ensorcellation',
            title: 'Ensorcellation',
            summary: 'Adds a bunch of new enchantments.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/ensorcellation',
              modrinth: 'https://modrinth.com/mod/ensorcellation',
              changelog: 'https://github.com/CoFH/Version/blob/main/ensorcellation/changelog.md',
              source: 'https://github.com/CoFH/Ensorcellation/tree/1.18.2',
            },
          },
          {
            slug: 'tools-complement',
            title: "Tool's Complement",
            summary: 'Tools and armor for most standard metals.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/tools-complement',
              modrinth: 'https://modrinth.com/mod/tools-complement',
              changelog: 'https://github.com/CoFH/Version/blob/main/tools_complement/changelog.md',
              source: 'https://github.com/CoFH/ToolsComplement/tree/1.18.2',
            },
          },
          {
            slug: 'oh-my-gourd',
            title: 'Oh My Gourd',
            summary: "New carved pumpkin and jack o'lantern variants.",
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/oh-my-gourd',
              modrinth: 'https://modrinth.com/mod/oh-my-gourd',
              changelog: 'https://github.com/CoFH/Version/blob/main/omgourd/changelog.md',
              source: 'https://github.com/CoFH/OMGourd/tree/1.18.2',
            },
          },
        ],
      },
      {
        title: 'Tweaks',
        mods: [
          {
            slug: 'capable-cauldrons',
            title: 'Capable Cauldrons',
            summary: 'Makes cauldrons work with modded pipes and machines.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/capable-cauldrons',
              modrinth: 'https://modrinth.com/mod/capable-cauldrons',
              source: 'https://github.com/CoFH/CapableCauldrons/tree/1.18.2',
            },
          },
          {
            slug: 'capable-composters',
            title: 'Capable Composters',
            summary: 'Makes composters work with modded pipes and machines.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/capable-composters',
              modrinth: 'https://modrinth.com/mod/capable-composters',
              source: 'https://github.com/CoFH/CapableComposters/tree/1.18.2',
            },
          },
          {
            slug: 'right-click-get-crops',
            title: 'Right Click, Get Crops',
            summary: 'Right-click to harvest and replant crops.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/right-click-get-crops',
              modrinth: 'https://modrinth.com/mod/right-click-get-crops',
              changelog:
                'https://github.com/CoFH/Version/blob/main/right_click_get_crops/changelog.md',
              source: 'https://github.com/CoFH/RightClickGetCrops/tree/1.18.2',
            },
          },
          {
            slug: 'no-night-vision-flashing',
            title: 'No Night Vision Flashing',
            summary: 'Night vision fades out instead of flashing.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/no-night-vision-flashing',
              modrinth: 'https://modrinth.com/mod/no-nv-flash',
              source: 'https://github.com/CoFH/NoNVFlash/tree/1.18.2',
            },
          },
          {
            slug: 'uneffectual',
            title: 'Uneffectual',
            summary: 'Hide unwanted effect icons.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/uneffectual',
              modrinth: 'https://modrinth.com/mod/uneffectual',
              source: 'https://github.com/CoFH/Uneffectual/tree/1.18.2',
            },
          },
        ],
      },
    ],
  },
  {
    mc: '1.16',
    label: '1.16.5',
    major: true,
    sections: [
      {
        title: 'Core',
        mods: [
          {
            slug: 'cofh-core',
            title: 'CoFH Core',
            summary: 'Core functionality for all Team CoFH mods.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/cofh-core',
              modrinth: 'https://modrinth.com/mod/cofh-core',
              source: 'https://github.com/CoFH/CoFHCore/tree/1.16.5',
            },
          },
        ],
      },
      {
        title: 'Thermal Series',
        mods: [
          {
            slug: 'thermal-foundation',
            title: 'Thermal Foundation',
            summary: 'Ores, metals and materials shared by the Thermal Series.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-foundation',
              modrinth: 'https://modrinth.com/mod/thermal-foundation',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalFoundation/tree/1.16.5',
            },
          },
          {
            slug: 'thermal-expansion',
            title: 'Thermal Expansion',
            summary: 'The original Thermal mod: machines, dynamos and storage.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-expansion',
              modrinth: 'https://modrinth.com/mod/thermal-expansion',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalExpansion/tree/1.16.5',
            },
          },
          {
            slug: 'thermal-cultivation',
            title: 'Thermal Cultivation',
            summary: 'Crops, farming and food.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-cultivation',
              modrinth: 'https://modrinth.com/mod/thermal-cultivation',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalCultivation/tree/1.16.5',
            },
          },
          {
            slug: 'thermal-innovation',
            title: 'Thermal Innovation',
            summary: 'Powered tools and gadgets.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-innovation',
              modrinth: 'https://modrinth.com/mod/thermal-innovation',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalInnovation/tree/1.16.5',
            },
          },
          {
            slug: 'thermal-locomotion',
            title: 'Thermal Locomotion',
            summary: 'Rails and minecarts.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-locomotion',
              modrinth: 'https://modrinth.com/mod/thermal-locomotion',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
              source: 'https://github.com/CoFH/ThermalLocomotion/tree/1.16.5',
            },
          },
        ],
      },
      {
        title: 'More mods',
        mods: [
          {
            slug: 'redstone-arsenal',
            title: 'Redstone Arsenal',
            summary: 'RF-powered tools, weapons and armor.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/redstone-arsenal',
              modrinth: 'https://modrinth.com/mod/redstone-arsenal',
              source: 'https://github.com/CoFH/RedstoneArsenal/tree/1.16.5',
            },
          },
          {
            slug: 'archers-paradox',
            title: "Archer's Paradox",
            summary: 'Adds a bunch of new arrows.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/archers-paradox',
              modrinth: 'https://modrinth.com/mod/archers-paradox',
              source: 'https://github.com/CoFH/ArchersParadox/tree/1.16.5',
            },
          },
          {
            slug: 'ensorcellation',
            title: 'Ensorcellation',
            summary: 'Adds a bunch of new enchantments.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/ensorcellation',
              modrinth: 'https://modrinth.com/mod/ensorcellation',
              source: 'https://github.com/CoFH/Ensorcellation/tree/1.16.5',
            },
          },
          {
            slug: 'tools-complement',
            title: "Tool's Complement",
            summary: 'Tools and armor for most standard metals.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/tools-complement',
              modrinth: 'https://modrinth.com/mod/tools-complement',
              source: 'https://github.com/CoFH/ToolsComplement/tree/1.16.5',
            },
          },
          {
            slug: 'oh-my-gourd',
            title: 'Oh My Gourd',
            summary: "New carved pumpkin and jack o'lantern variants.",
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/oh-my-gourd',
              modrinth: 'https://modrinth.com/mod/oh-my-gourd',
              source: 'https://github.com/CoFH/OMGourd/tree/1.16.5',
            },
          },
        ],
      },
      {
        title: 'Tweaks',
        mods: [
          {
            slug: 'no-night-vision-flashing',
            title: 'No Night Vision Flashing',
            summary: 'Night vision fades out instead of flashing.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/no-night-vision-flashing',
              modrinth: 'https://modrinth.com/mod/no-nv-flash',
              source: 'https://github.com/CoFH/NoNVFlash/tree/1.16.5',
            },
          },
          {
            slug: 'right-click-get-crops',
            title: 'Right Click, Get Crops',
            summary: 'Right-click to harvest and replant crops.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/right-click-get-crops',
              modrinth: 'https://modrinth.com/mod/right-click-get-crops',
              source: 'https://github.com/CoFH/RightClickGetCrops/tree/1.16.5',
            },
          },
        ],
      },
    ],
  },
  {
    mc: '1.15',
    label: '1.15.2',
    sections: [
      {
        title: 'Core',
        mods: [
          {
            slug: 'cofh-core',
            title: 'CoFH Core',
            summary: 'Core functionality for all Team CoFH mods.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/cofh-core',
            },
          },
        ],
      },
      {
        title: 'Thermal Series',
        mods: [
          {
            slug: 'thermal-foundation',
            title: 'Thermal Foundation',
            summary: 'Ores, metals and materials shared by the Thermal Series.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-foundation',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
            },
          },
          {
            slug: 'thermal-expansion',
            title: 'Thermal Expansion',
            summary: 'The original Thermal mod: machines, dynamos and storage.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-expansion',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
            },
          },
          {
            slug: 'thermal-cultivation',
            title: 'Thermal Cultivation',
            summary: 'Crops, farming and food.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-cultivation',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
            },
          },
          {
            slug: 'thermal-innovation',
            title: 'Thermal Innovation',
            summary: 'Powered tools and gadgets.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-innovation',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
            },
          },
          {
            slug: 'thermal-locomotion',
            title: 'Thermal Locomotion',
            summary: 'Rails and minecarts.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-locomotion',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermal/changelog.md',
            },
          },
        ],
      },
      {
        title: 'More mods',
        mods: [
          {
            slug: 'archers-paradox',
            title: "Archer's Paradox",
            summary: 'Adds a bunch of new arrows.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/archers-paradox',
            },
          },
          {
            slug: 'ensorcellation',
            title: 'Ensorcellation',
            summary: 'Adds a bunch of new enchantments.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/ensorcellation',
            },
          },
          {
            slug: 'oh-my-gourd',
            title: 'Oh My Gourd',
            summary: "New carved pumpkin and jack o'lantern variants.",
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/oh-my-gourd',
            },
          },
        ],
      },
    ],
  },
  {
    mc: '1.14',
    label: '1.14.4',
    sections: [
      {
        title: 'Core',
        mods: [
          {
            slug: 'cofh-core',
            title: 'CoFH Core',
            summary: 'Core functionality for all Team CoFH mods.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/cofh-core',
            },
          },
        ],
      },
      {
        title: 'More mods',
        mods: [
          {
            slug: 'ensorcellation',
            title: 'Ensorcellation',
            summary: 'Adds a bunch of new enchantments.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/ensorcellation',
            },
          },
        ],
      },
    ],
  },
  {
    mc: '1.12',
    label: '1.12.2',
    major: true,
    sections: [
      {
        title: 'Core',
        mods: [
          {
            slug: 'redstone-flux',
            title: 'Redstone Flux',
            summary: 'The energy system used by Thermal and many other mods.',
            docs: '/docs/redstone-flux/',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/redstone-flux',
              source: 'https://github.com/CoFH/RedstoneFlux-1.12-Legacy/tree/1.12',
            },
          },
          {
            slug: 'cofh-core',
            title: 'CoFH Core',
            summary: 'Core functionality for all Team CoFH mods.',
            requires: ['redstone-flux'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/cofh-core',
              changelog: 'https://github.com/CoFH/Version/blob/main/cofhcore_changelog.txt',
              source: 'https://github.com/CoFH/CoFHCore-1.12-Legacy/tree/1.12',
            },
          },
          {
            slug: 'codechicken-lib',
            title: 'CodeChicken Lib',
            summary: 'Library used by Thermal Expansion and Thermal Dynamics.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/codechicken-lib-1-8',
              modrinth: 'https://modrinth.com/mod/codechicken-lib',
              source: 'https://github.com/TheCBProject/CodeChickenLib/tree/1.12.x',
            },
          },
          {
            slug: 'cofh-world',
            title: 'CoFH World',
            summary: 'Customizable and powerful world generation.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/cofh-world',
              source: 'https://github.com/CoFH/CoFHWorld/tree/1.12',
            },
          },
        ],
      },
      {
        title: 'Thermal Series',
        mods: [
          {
            slug: 'thermal-foundation',
            title: 'Thermal Foundation',
            summary: 'Ores, metals and materials shared by the Thermal Series.',
            requires: ['cofh-core', 'cofh-world'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-foundation',
              changelog:
                'https://github.com/CoFH/Version/blob/main/thermalfoundation_changelog.txt',
              source: 'https://github.com/CoFH/ThermalFoundation-1.12-Legacy/tree/1.12',
            },
          },
          {
            slug: 'thermal-expansion',
            title: 'Thermal Expansion',
            summary: 'The original Thermal mod: machines, dynamos and storage.',
            requires: ['thermal-foundation', 'codechicken-lib'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-expansion',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermalexpansion_changelog.txt',
              source: 'https://github.com/CoFH/ThermalExpansion-1.12-Legacy/tree/1.12',
            },
          },
          {
            slug: 'thermal-dynamics',
            title: 'Thermal Dynamics',
            summary: 'Ducts for moving energy, fluids and items.',
            requires: ['thermal-foundation', 'codechicken-lib'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-dynamics',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermaldynamics_changelog.txt',
              source: 'https://github.com/CoFH/ThermalDynamics-1.12-Legacy/tree/1.12',
            },
          },
          {
            slug: 'thermal-cultivation',
            title: 'Thermal Cultivation',
            summary: 'Crops, farming and food.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-cultivation',
              changelog:
                'https://github.com/CoFH/Version/blob/main/thermalcultivation_changelog.txt',
              source: 'https://github.com/CoFH/ThermalCultivation-1.12-Legacy/tree/1.12',
            },
          },
          {
            slug: 'thermal-innovation',
            title: 'Thermal Innovation',
            summary: 'Powered tools and gadgets.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-innovation',
              changelog:
                'https://github.com/CoFH/Version/blob/main/thermalinnovation_changelog.txt',
              source: 'https://github.com/CoFH/ThermalInnovation-1.12-Legacy/tree/1.12',
            },
          },
        ],
      },
      {
        title: 'More mods',
        mods: [
          {
            slug: 'redstone-arsenal',
            title: 'Redstone Arsenal',
            summary: 'RF-powered tools, weapons and armor.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/redstone-arsenal',
              changelog: 'https://github.com/CoFH/Version/blob/main/redstonearsenal_changelog.txt',
              source: 'https://github.com/CoFH/RedstoneArsenal-1.12-Legacy/tree/1.12',
            },
          },
          {
            slug: 'vanillaplus-tools',
            title: 'Vanilla+ Tools',
            summary: "Thermal Foundation's extra tools, in vanilla materials.",
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/cofh-vanilla-tools',
              source: 'https://github.com/CoFH/VanillaTools-1.12-Legacy',
            },
          },
          {
            slug: 'vanillaplus-satchels',
            title: 'Vanilla+ Satchels',
            summary: "Thermal Expansion's satchels, in vanilla materials.",
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/cofh-vanilla-satchels',
              source: 'https://github.com/CoFH/VanillaSatchels-1.12-Legacy',
            },
          },
        ],
      },
      {
        title: 'Tweaks',
        mods: [
          {
            slug: 'no-night-vision-flashing',
            title: 'No Night Vision Flashing',
            summary: 'Night vision fades out instead of flashing.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/no-night-vision-flashing',
              source: 'https://github.com/CoFH/NoNVFlash-1.12-Legacy',
            },
          },
        ],
      },
    ],
  },
  {
    mc: '1.11',
    label: '1.11.2',
    sections: [
      {
        title: 'Core',
        mods: [
          {
            slug: 'cofh-core',
            title: 'CoFH Core',
            summary: 'Core functionality for all Team CoFH mods.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/cofh-core',
              changelog: 'https://github.com/CoFH/Version/blob/main/cofhcore_changelog.txt',
              source: 'https://github.com/CoFH/CoFHCore-1.12-Legacy/tree/1.11.2',
            },
          },
          {
            slug: 'codechicken-lib',
            title: 'CodeChicken Lib',
            summary: 'Library used by Thermal Expansion and Thermal Dynamics.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/codechicken-lib-1-8',
              modrinth: 'https://modrinth.com/mod/codechicken-lib',
              source: 'https://github.com/TheCBProject/CodeChickenLib/tree/1.11.2',
            },
          },
        ],
      },
      {
        title: 'Thermal Series',
        mods: [
          {
            slug: 'thermal-foundation',
            title: 'Thermal Foundation',
            summary: 'Ores, metals and materials shared by the Thermal Series.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-foundation',
              changelog:
                'https://github.com/CoFH/Version/blob/main/thermalfoundation_changelog.txt',
              source: 'https://github.com/CoFH/ThermalFoundation-1.12-Legacy/tree/1.11.2',
            },
          },
          {
            slug: 'thermal-expansion',
            title: 'Thermal Expansion',
            summary: 'The original Thermal mod: machines, dynamos and storage.',
            requires: ['thermal-foundation', 'codechicken-lib'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-expansion',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermalexpansion_changelog.txt',
              source: 'https://github.com/CoFH/ThermalExpansion-1.12-Legacy/tree/1.11.2',
            },
          },
          {
            slug: 'thermal-dynamics',
            title: 'Thermal Dynamics',
            summary: 'Ducts for moving energy, fluids and items.',
            requires: ['thermal-foundation', 'codechicken-lib'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-dynamics',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermaldynamics_changelog.txt',
              source: 'https://github.com/CoFH/ThermalDynamics-1.12-Legacy/tree/1.11.2',
            },
          },
        ],
      },
      {
        title: 'More mods',
        mods: [
          {
            slug: 'redstone-arsenal',
            title: 'Redstone Arsenal',
            summary: 'RF-powered tools, weapons and armor.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/redstone-arsenal',
              changelog: 'https://github.com/CoFH/Version/blob/main/redstonearsenal_changelog.txt',
              source: 'https://github.com/CoFH/RedstoneArsenal-1.12-Legacy/tree/1.11.2',
            },
          },
        ],
      },
    ],
  },
  {
    mc: '1.10',
    label: '1.10.2',
    sections: [
      {
        title: 'Core',
        mods: [
          {
            slug: 'cofh-core',
            title: 'CoFH Core',
            summary: 'Core functionality for all Team CoFH mods.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/cofh-core',
              changelog: 'https://github.com/CoFH/Version/blob/main/cofhcore_changelog.txt',
              source: 'https://github.com/CoFH/CoFHCore-1.12-Legacy/tree/1.10.2',
            },
          },
          {
            slug: 'codechicken-lib',
            title: 'CodeChicken Lib',
            summary:
              'Library used by Thermal Expansion, Thermal Dynamics and MineFactory Reloaded.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/codechicken-lib-1-8',
              modrinth: 'https://modrinth.com/mod/codechicken-lib',
              source: 'https://github.com/TheCBProject/CodeChickenLib/tree/1.10.2',
            },
          },
        ],
      },
      {
        title: 'Thermal Series',
        mods: [
          {
            slug: 'thermal-foundation',
            title: 'Thermal Foundation',
            summary: 'Ores, metals and materials shared by the Thermal Series.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-foundation',
              changelog:
                'https://github.com/CoFH/Version/blob/main/thermalfoundation_changelog.txt',
              source: 'https://github.com/CoFH/ThermalFoundation-1.12-Legacy/tree/1.10.2',
            },
          },
          {
            slug: 'thermal-expansion',
            title: 'Thermal Expansion',
            summary: 'The original Thermal mod: machines, dynamos and storage.',
            requires: ['thermal-foundation', 'codechicken-lib'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-expansion',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermalexpansion_changelog.txt',
              source: 'https://github.com/CoFH/ThermalExpansion-1.12-Legacy/tree/1.10.2',
            },
          },
          {
            slug: 'thermal-dynamics',
            title: 'Thermal Dynamics',
            summary: 'Ducts for moving energy, fluids and items.',
            requires: ['thermal-foundation', 'codechicken-lib'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-dynamics',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermaldynamics_changelog.txt',
              source: 'https://github.com/CoFH/ThermalDynamics-1.12-Legacy/tree/1.10.2',
            },
          },
        ],
      },
      {
        title: 'More mods',
        mods: [
          {
            slug: 'redstone-arsenal',
            title: 'Redstone Arsenal',
            summary: 'RF-powered tools, weapons and armor.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/redstone-arsenal',
              changelog: 'https://github.com/CoFH/Version/blob/main/redstonearsenal_changelog.txt',
              source: 'https://github.com/CoFH/RedstoneArsenal-1.12-Legacy/tree/1.10.2',
            },
          },
          {
            slug: 'minefactory-reloaded',
            title: 'MineFactory Reloaded',
            summary: 'Machines that automate farming, mob grinding and more.',
            requires: ['cofh-core', 'codechicken-lib'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/minefactory-reloaded',
              source: 'https://github.com/skyboy/MineFactoryReloaded/tree/1.10.x',
            },
          },
        ],
      },
    ],
  },
  {
    mc: '1.7',
    label: '1.7.10',
    major: true,
    sections: [
      {
        title: 'Core',
        mods: [
          {
            slug: 'cofh-core',
            title: 'CoFH Core',
            summary: 'Core functionality for all Team CoFH mods.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/cofh-core',
              changelog: 'https://github.com/CoFH/Version/blob/main/cofhcore_changelog.txt',
              source: 'https://github.com/CoFH/CoFHCore-1.12-Legacy/tree/1.7.10',
            },
          },
          {
            slug: 'cofh-lib',
            title: 'CoFH Lib',
            summary: 'Library for modders; CoFH Core already includes it.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/cofh-lib',
              source: 'https://github.com/CoFH/CoFHLib-1.7.10-Legacy/tree/1.7.10',
            },
          },
          {
            slug: 'cofh-tweaks',
            title: 'CoFHTweaks',
            summary: 'Various performance improvements.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/cofhtweaks',
              source: 'https://github.com/CoFH/CoFHTweaks-1.7.10-Legacy',
            },
          },
        ],
      },
      {
        title: 'Thermal Series',
        mods: [
          {
            slug: 'thermal-foundation',
            title: 'Thermal Foundation',
            summary: 'Ores, metals and materials shared by the Thermal Series.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-foundation',
              changelog:
                'https://github.com/CoFH/Version/blob/main/thermalfoundation_changelog.txt',
              source: 'https://github.com/CoFH/ThermalFoundation-1.12-Legacy/tree/1.7.10',
            },
          },
          {
            slug: 'thermal-expansion',
            title: 'Thermal Expansion',
            summary: 'The original Thermal mod: machines, dynamos and storage.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-expansion',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermalexpansion_changelog.txt',
              source: 'https://github.com/CoFH/ThermalExpansion-1.12-Legacy/tree/1.7.10',
            },
          },
          {
            slug: 'thermal-dynamics',
            title: 'Thermal Dynamics',
            summary: 'Ducts for moving energy, fluids and items.',
            requires: ['thermal-foundation'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-dynamics',
              changelog: 'https://github.com/CoFH/Version/blob/main/thermaldynamics_changelog.txt',
              source: 'https://github.com/CoFH/ThermalDynamics-1.12-Legacy/tree/1.7.10',
            },
          },
        ],
      },
      {
        title: 'More mods',
        mods: [
          {
            slug: 'redstone-arsenal',
            title: 'Redstone Arsenal',
            summary: 'RF-powered tools, weapons and armor.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/redstone-arsenal',
              changelog: 'https://github.com/CoFH/Version/blob/main/redstonearsenal_changelog.txt',
              source: 'https://github.com/CoFH/RedstoneArsenal-1.12-Legacy/tree/1.7.10',
            },
          },
          {
            slug: 'minefactory-reloaded',
            title: 'MineFactory Reloaded',
            summary: 'Machines that automate farming, mob grinding and more.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/minefactory-reloaded',
              source: 'https://github.com/skyboy/MineFactoryReloaded/tree/1.7.10',
            },
          },
          {
            slug: 'nether-ores',
            title: 'NetherOres',
            summary: 'Nether versions of overworld and modded ores.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/netherores',
              source: 'https://github.com/skyboy/NetherOres',
            },
          },
        ],
      },
      {
        title: 'Tweaks',
        mods: [
          {
            slug: 'tabula-rasa',
            title: 'Tabula Rasa',
            summary: 'Add your own blocks and items with config files.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/tabula-rasa',
              source: 'https://github.com/CoFH/TabulaRasa-1.7.10-Legacy',
            },
          },
          {
            slug: 'cobblehaters',
            title: 'CobbleHaters',
            summary: 'A challenge mod that makes cobblestone impossible to get.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/cobblehaters',
              source: 'https://github.com/skyboy/CobbleHaters',
            },
          },
          {
            slug: 'alternate-scoring',
            title: 'Alternate Scoring',
            summary: 'Scores runs by kills, blocks broken and more.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/alternate-scoring',
              source: 'https://github.com/skyboy/Scoring',
            },
          },
        ],
      },
    ],
  },
  {
    mc: '1.6',
    label: '1.6.4',
    sections: [
      {
        title: 'Core',
        mods: [
          {
            slug: 'cofh-core',
            title: 'CoFH Core',
            summary: 'Core functionality for all Team CoFH mods.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/cofh-core',
            },
          },
          {
            slug: 'powercrystalscore',
            title: 'PowerCrystalsCore',
            summary: 'Core library for MineFactory Reloaded and Nether Ores.',
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/powercrystalscore',
              source: 'https://github.com/skyboy/PowerCrystalsCore',
            },
          },
        ],
      },
      {
        title: 'Mods',
        mods: [
          {
            slug: 'thermal-expansion',
            title: 'Thermal Expansion',
            summary: 'The original Thermal mod: machines, dynamos and storage.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/thermal-expansion',
            },
          },
          {
            slug: 'redstone-arsenal',
            title: 'Redstone Arsenal',
            summary: 'RF-powered tools, weapons and armor.',
            requires: ['cofh-core'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/redstone-arsenal',
              changelog: 'https://github.com/CoFH/Version/blob/main/redstonearsenal_changelog.txt',
            },
          },
          {
            slug: 'minefactory-reloaded',
            title: 'MineFactory Reloaded',
            summary: 'Machines that automate farming, mob grinding and more.',
            requires: ['powercrystalscore'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/minefactory-reloaded',
              source:
                'https://github.com/skyboy/MineFactoryReloaded/tree/d201d1f95abbac737bce8cd39ae3221a70301d50',
            },
          },
          {
            slug: 'nether-ores',
            title: 'NetherOres',
            summary: 'Nether versions of overworld and modded ores.',
            requires: ['powercrystalscore'],
            links: {
              curseforge: 'https://www.curseforge.com/minecraft/mc-mods/netherores',
              source: 'https://github.com/skyboy/NetherOres/tree/1.6.4',
            },
          },
        ],
      },
    ],
  },
]);
