import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@schemas";
import { msTheme } from "@src/app/theme";
import { StudioNavbar } from "@src/components/StudioNavbar";
import { Config } from "sanity";
import { deskTool } from "sanity/desk";


export const config: Config ={
    name: 'default',
    title: 'GW BUY',
    projectId: '9bfhlmgb',
    dataset: 'production',
    basePath: '/studio',

    plugins: [deskTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
    theme: msTheme,

    studio: {
      components: {
        navbar: StudioNavbar,
      },
    },
  };
