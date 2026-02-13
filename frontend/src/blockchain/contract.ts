import { ethers } from "ethers";
// @ts-ignore
import EHRArtifact from "./artifacts/contracts/EHR.sol/EHR.json";

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const getContract = async () => {
  if (!window.ethereum) {
    throw new Error("MetaMask not detected");
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    EHRArtifact.abi,
    signer
  );

  return contract;
};
