import abiJSON from "./Web3RSVP.json";
import { ethers } from "ethers";

function connectContract() {

    const contractAddress = "0xb3825D2f6012A418114f8F9b76cABB0c02E1dB20";
    const contractABI = abiJSON.abi;
    let rsvpContract;
    try {
        const { ethereum } = window;

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            rsvpContract = new ethers.Contract(contractAddress, contractABI, signer); // instantiating new connection to the contract
        } else {
            console.log("Ethereum object doesn't exist!");
        }
    } catch (error) {
        console.log("ERROR:", error);
    }
    return rsvpContract;
}

export default connectContract;