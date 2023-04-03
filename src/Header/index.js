import { HeaderWrapper, SecondHeading, HeaderTimer } from "./styled";

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
