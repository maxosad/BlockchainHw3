const ethers = require("ethers");
require("dotenv").config();


const abiEhtUsd = require("./abi/37.json");
const abiLinkUsdtEth = require("./abi/bb.json")
const abiUsdtEth = require("./abi/7d.json")

async function main() {
    const ethUsdAddress = "0x37bC7498f4FF12C19678ee8fE19d713b87F6a9e6";
    const linktEthAddress = "0xbba12740DE905707251525477bAD74985DeC46D2";
    const usdtEthAddress = "0x7De0d6fce0C128395C488cb4Df667cdbfb35d7DE";

    const provider = new ethers.providers.WebSocketProvider(
        `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
    );

    

    const contractEthUsdAgregator = new ethers.Contract(ethUsdAddress, abiEhtUsd, provider)
    const contractLinkEthAgregator = new ethers.Contract(linktEthAddress, abiLinkUsdtEth, provider)
    const contractUsdtEthAgregator = new ethers.Contract(usdtEthAddress, abiUsdtEth, provider)
    
    
    contractEthUsdAgregator.on("AnswerUpdated", (current, roundId, updatedAt, event) => {
        let info = {
            current: ethers.utils.formatUnits(current, 8),
            roundId: roundId.toString(),
            updatedAt: updatedAt.toString(),
            data: event
        }
        console.log("ETH / USD")
        console.log(JSON.stringify(info, null, 4));
    });
    
    contractLinkEthAgregator.on("AnswerUpdated", (current, roundId, updatedAt, event) => {
        let info = {
            current: ethers.utils.formatUnits(current, 18),
            roundId: roundId.toString(),
            updatedAt: updatedAt.toString(),
            data: event
        }
        console.log("LINK / ETH ")
        console.log(JSON.stringify(info, null, 4));
    });

    contractUsdtEthAgregator.on("AnswerUpdated", (current, roundId, updatedAt, event) => {
        let info = {
            current: ethers.utils.formatUnits(current, 18),
            roundId: roundId.toString(),
            updatedAt: updatedAt.toString(),
            data: event
        }
        console.log("USDT / ETH")
        console.log(JSON.stringify(info, null, 4));
    });
}

main();
