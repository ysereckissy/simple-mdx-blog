import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import { NavElements } from '../elements';


export const Nav = () => {
    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: {eq: "logo.svg"}) {
                publicURL
            }
        }
        
    `);
    return (
        <NavElements>
            <Link to="/">
                <img src={data.logo.publicURL} alt="Home" />
            </Link>
        </NavElements>
    );
};