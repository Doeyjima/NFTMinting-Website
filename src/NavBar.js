import React from 'react';

const Navbar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (eindow.ethereum) {
            const accounts = await window.etherum.request({
                method: "eth_requestAccounts",

            })
            setAccounts(accounts);


        }
    }

    return (
        <div>
            <div> Twitter</div>
            <div> Discord</div>
            <div> Opensea</div>

            <div>Mint</div>
            <div>RoadMap</div>
            <div>About</div>

            {isConnected ? (
                <p>Connected</p>
            ) : (
                <button onClick={connectAccount}>Connect</button>
            )
            }


        </div>
    )
}
export default Navbar;