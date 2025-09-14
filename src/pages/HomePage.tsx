import { useAuth0 } from "@auth0/auth0-react";
import PageLayout from "../components/PageLayout";
import { Container, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";


const HomePage: React.FC = () => {

    const { isAuthenticated } = useAuth0();


    return (
        <>
            <PageLayout>
                <Container>
                    <Col>
                        <h1>Welcome!</h1>
                    </Col>

                    {!isAuthenticated &&
                        <>
                            <p>Log in to get started!</p>
                            <LoginButton />
                        </>
                    }

                    {isAuthenticated &&
                        <>
                            <h3>Let's get started!</h3>
                            <Col>
                                <Link to='/tasks'>
                                    <Button>View Tasks</Button>
                                </Link>
                            </Col>
                            <LogoutButton />
                        </>
                    }
                </Container>
            </PageLayout>
        </>
    );
};

export default HomePage;