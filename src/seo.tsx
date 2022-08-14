import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SearchEngineOptimization = () => {
  const query = graphql`
    query SearchEngine {
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

  let { site } = useStaticQuery(query);
  let { seo } = site.site.siteMetadata;

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      <meta property="title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="description" content={seo.description} />
    </Helmet>
  );
};

export default SearchEngineOptimization;