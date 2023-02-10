// scripts/deploy.js
const { ethers } = require("hardhat");

async function main() {
  // Get the contract owner
  const contractOwner = await ethers.getSigners();
  console.log(`Deploying contract from: ${contractOwner[0].address}`);

  // Hardhat helper to get the ethers contractFactory object
  const Up = await ethers.getContractFactory("Up");

  // Deploy the contract
  console.log("Deploying Up...");
  const token = await Up.deploy();

  await token.deployed();
  console.log(`Up deployed to: ${token.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
