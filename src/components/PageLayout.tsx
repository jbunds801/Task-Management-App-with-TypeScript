import { Row, Col, Container } from "react-bootstrap";
import NavBar from "./NavBar";

type PageLayoutProps = {
    children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {

    return (
        <>
            <Container>
                <Row>
                    <NavBar />
                </Row>
                <Col>
                    {children}
                </Col>
            </Container>
        </>
    );
};

export default PageLayout;