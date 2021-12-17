import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { H1 } from '../elements';
import { Container, Post, FeaturedImage } from '../components';

const singlePost = ({ data }) => {
    const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed;
    return (
        <Container>
            <FeaturedImage fixed={featureImage} />
            <Post>
                <H1 margin="0 0 2rem 0">{data.mdx.frontmatter.title}</H1>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </Post>
        </Container>
    )

};

export const pageQuery = graphql`
    query SinglePostQuery($id: String!) {
        mdx(id: {eq: $id}) {
            body
            frontmatter {
                date(formatString: "MMMM D, YYYY")
                excerpt
                slug
                title
                featureImage {
                    childImageSharp {
                        fixed {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    }
`;

export default singlePost;