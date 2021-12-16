import React from "react";

import { Container } from "../components/Container";
import { FeaturedImage } from "../components";

const IndexPage = () => {
    return (
        <React.StrictMode>
            <Container>
                <FeaturedImage />
            </Container>
        </React.StrictMode>
    );
};

export default IndexPage;
