import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const IndexPage = ( {data} ) => (
  <div>
    <Header />
    <About />
    <Resume />
    <Portfolio data={data} />
    <Testimonials />
    <Footer />
  </div>
);

export default IndexPage;

export const query = graphql`
  query SitePortfolios {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date(formatString:"MMMM DD, YYYY")
            specialty
          }
          html
        }
      }
    }
  }
`
