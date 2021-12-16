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
    console.log(data);
    return (
        <NavElements>
            <Link to="/">
                <img src={data.logo.publicURL} />
            </Link>
        </NavElements>
    );
};