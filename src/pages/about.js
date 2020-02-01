import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

class ImprintPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <h1>About</h1>

        <h3>Why did I create this?</h3>
        <p>
          Since I'm working as a developer, I made notes about syntax and topics
          I find difficult and about commands I found useful or suspected that I
          will need them again at some point.
        </p>
        <h3>Why did I put this online?</h3>
        <p>
          I had all my notes in *Markdown* files anyway and I sometimes had a
          hard time finding them because they are all somewhere on my computer.
          I used *Spotlight* as my search tool, but want to improve it by having
          them all in one place.
        </p>
        <p>I also hope that other people might find my notes helpful.</p>
        <h3>Information about the content</h3>
        <ul>
          <li>
            I'm gradually adding more of the files I have on my computer,
            cleaning, checking and revising them beforehand (sometimes more,
            sometimes less).
          </li>
          <li>Main future features will be a search and a better look.</li>
          <li>
            Some pages only contain very basic information for the simple tasks
            I mostly used it for or just wanted to remember whereas some pages
            are more elaborate. Other pages contain more in depth discussions
            and theory.
          </li>
        </ul>
      </Layout>
    );
  }
}

export default ImprintPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
