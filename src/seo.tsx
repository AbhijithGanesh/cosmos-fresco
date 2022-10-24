import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const SearchEngineOptimization = () => {
  const query = graphql`
    query SearchEngine {
      file {
        publicURL
      }
      site {
        siteMetadata {
          description
          siteUrl
          instagram
          title
          twitterUsername
        }
      }
    }
  `;

  let { site, file } = useStaticQuery(query);
  let seo = site.siteMetadata;

  return (
    <>
      <title>{seo.title}</title>
      <meta property="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="og:image" content={file?.publicURL} />
      <meta property="og:description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
    </>
  );
};

export default SearchEngineOptimization;
