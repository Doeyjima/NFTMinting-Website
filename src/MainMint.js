import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import NftNAME from '.NftNAME.json';

const NftNAMEAddress = '0xbf6748d330D16FB26A4F8B69965B8Ac350294b81';

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                NftNAMEAddress,
                NftNAME.abi,
                signer
            );
            try {
                const reponse = await contract.mint(BigNumber.from(mintAmount));
                console.log('response', reponse);
            } catch (err) {
                console.log("error", err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);

    };
    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    };
    return (
        <div>
            <h1>NftNAME</h1>
            <p>Example Text</p>
            {isConnected ? (
                <div>
                    <div>
                        <button onClick={handleDecrement}>- </button>
                        <input type="number" value={mintAmount}> </input>
                        <button onClick={handleIncrement}>+ </button>
                    </div>
                    <button onClick={handleMint}>Mint</button>
                </div>
            ) : (
                <p>You are not connected</p>
            )
            }

        </div>
    );
};

export default MainMint;