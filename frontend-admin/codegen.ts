import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schema.gql",
  generates: {
    "./src/gql/": {
      documents: ["!src/gql/**/*", "src/**/*.{ts,tsx}"],
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
      plugins: [],
      config: {
        avoidOptionals: {
          field: true,
          inputValue: false,
          object: false,
          defaultValue: true,
        },
        inputMaybeValue: "T | undefined",
        enumsAsTypes: true,
      },
    },
  },
};

export default config;
