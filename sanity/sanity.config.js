import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas/schema";

export default defineConfig({
  name: "reviews-site",
  title: "Nirjan's Reviews",
  projectId: "69oav2ia",
  dataset: "production",
  plugins: [deskTool(), codeInput(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
