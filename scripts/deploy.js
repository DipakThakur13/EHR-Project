import hre from "hardhat";

async function main() {
  const EHR = await hre.ethers.getContractFactory("EHR");
  const ehr = await EHR.deploy();

  await ehr.waitForDeployment();

  console.log("=====================================");
  console.log("EHR Contract deployed successfully!");
  console.log("Contract Address:", await ehr.getAddress());
  console.log("=====================================");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
