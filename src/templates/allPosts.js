import React from 'react';
import { graphql } from 'gatsby';
import {
    Container,
    Content,
    ContentCard,
    FeaturedImage,
    Pagination
} from '../components';
import { H1, P } from '../elements';

const allPosts = ({ pageContext, data }) => {
    const { currentPage, numPages } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? "/" : `${currentPage - 1}`;
    const nextPage = `/${currentPage + 1}`;
    console.log("data", data)
    const posts = data.allMdx.edges;

    return (
        <Container>
            <FeaturedImage />
            <Content>
                <H1 textAlign="center" margin="0 0 1rem 0">
                    The title of the following post!
                </H1>
                <P color="dark2" textAlign="center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </P>
                {posts.map(post => (
                    <ContentCard
                        key={post.node.frontmatter.slug}
                        date={post.node.frontmatter.date}
                        title={post.node.frontmatter.title}
                        excerpt={post.node.frontmatter.excerpt}
                        slug={post.node.frontmatter.slug}
                    />
                ))}
            </Content>
            <Pagination
                isFirst={isFirst}
                isLast={isLast}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </Container>
    )
}

export const pageQuery = graphql`
    query allPostQuery($skip: Int!, $limit: Int!) {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, 
            skip: $skip, 
            limit: $limit
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "MMMM D, YYYY")
                        slug
                    }
                }
            }
  }
}
`;

export default allPosts;