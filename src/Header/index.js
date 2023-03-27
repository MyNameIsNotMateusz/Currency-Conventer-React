import "./style.css";

const Header = (props) => {
    return (
        <div className="header">
            <h1>Currency Converter</h1>
            <p className="header__item--secondHeading">
                Check foreign currency exchange rates
            </p>
            <p className="header__item--time">Current Time: {props.date}</p>
        </div>
    );
};

export default Header;
