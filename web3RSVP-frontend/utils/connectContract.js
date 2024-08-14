import abiJSON from "./Web3RSVP.json";
import { ethers } from "ethers";

function connectContract() {
    const contractAddress = "0x76dE4f5e49b3CDb9D03A123D0D171E16B7C0C54B";
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