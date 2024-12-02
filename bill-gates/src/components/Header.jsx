import React from "react";
import billgates from '../assets/billgates.jpg';

const Header = ({ balance }) => {
    return (
        <header>
            <img src={ billgates } alt="Bill Gates" className="billgatesImg" />
            <h1>Spend Bill Gates' Money</h1>
            <h2>Balance: ${balance.toLocaleString()}</h2>
        </header>
    );
};

export default Header;
