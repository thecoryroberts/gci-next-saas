import { defineConfig } from "tinacms";


export default defineConfig({
  branch: "master",
  clientId: "7977646a-10d9-4ab5-84e4-0fcdc777030e", // Get this from tina.io
  token: "7ec905095c9289621062d8756299a4efced7a471", // Get this from tina.io

  build: {
    outputFolder: "pages/admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/posts/${document._sys.filename}`,
        },
      },
    ],
  },

});
