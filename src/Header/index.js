import styled from "styled-components";

const HeaderWrapper = styled.div`
    text-align: center;
    margin: auto;
    margin-top: 100px;
`;

const SecondHeading = styled.p`
 color: rgba(0, 0, 0, 0.606);
`;

const HeaderTimer = styled.p`
    color: rgba(0, 0, 0, 0.606);
    font-size: small;
    font-weight: 800;
    font-stretch: expanded;
`;

const Header = (props) => {
    return (
        <HeaderWrapper>
            <h1>Currency Converter</h1>
            <SecondHeading>
                Check foreign currency exchange rates
            </SecondHeading>
            <HeaderTimer>Current Time: {props.date}</HeaderTimer>
        </HeaderWrapper>
    );
};

export default Header;
