import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Anisha Kang's Website`,
    description: `
    Hi! This is Anisha Kang. I enjoy almost all creative activities, be it novel writing, poetry, graphic design and so on. I've been writing since the age of 10 and I guess my storytelling urge transcended into the otherwise non-creative aspects of my life as well. I happen to be an avid reader too, and I'm always on the lookout for new books and new stories to provide me with my next adventure!
    `,
    url: "https://cosmos-fresco.vercel.app/",
    twitterUsername: "@highratedkudi",
    siteUrl: "https://cosmos-fresco.vercel.app/",
    instagram: "highratedkudi",
    crossOrigin: "use-credentials",
    backgroundColor: "#032F39",
    themeColor: "#032F39",
    start_url: "/",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: false,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    `gatsby-plugin-sharp`,
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

export default config;
