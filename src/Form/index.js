import "./style.css";

const Form = (props) => {
    return (
        <>
            <form>
                <label>Amount</label>
                <input />
                <label>From</label>
                <select>
                    <option>USD - US Dollar</option>
                    <option>EUR - Euro</option>
                    <option>GBP - British Pound</option>
                    <option>PLN - Polish Zloty</option>
                </select>
                <label>To</label>
                <select>
                    <option>USD - US Dollar</option>
                    <option>EUR - Euro</option>
                    <option>GBP - British Pound</option>
                    <option>PLN - Polish Zloty</option>
                </select>
                <button>See the result</button>
            </form>
        </>
    )
};

export default Form;