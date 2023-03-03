const { ethers } = require("hardhat");

async function main() {
    const coinFile = await ethers.getContractFactory("CoinFile");
    const contract = await coinFile.attach("0xfa43e75f9375823518B6C654eC6807CA0805c985");
    const owner = await contract.owner();
    let balance = await contract.balanceOf(owner);
    // Now you can call functions of the contract
    console.log(`The token balance is: ${balance}.`);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });