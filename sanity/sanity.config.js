import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas/schema";
import { DeployAction } from "./actions/deployAction";

export default defineConfig({
  name: "reviews-site",
  title: "Nirjan's Reviews",
  projectId: "69oav2ia",
  dataset: "production",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  document: {
    actions: [DeployAction],
  },
});
