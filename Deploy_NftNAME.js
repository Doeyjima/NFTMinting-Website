
const hre = require("hardhat");

async function main() {

  const NftNAME = await hre.ethers.getContractFactory("NftNAME");
  const nftName = await NftNAME.deploy();

  await nftName.deployed();

  console.log("NftNAME deployed to:", nftName.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
