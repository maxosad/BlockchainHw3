npm init -y

npm install ethers dotenv

put your key in .env

node listener.js


ETH / USD
{
    "current": "1545.54182432",
    "roundId": "36212",
    "updatedAt": "1667501723",
    "data": {
        "blockNumber": 15891411,
        "blockHash": "0xbe1948a72807ff5cbc02d4c35f53b44158552c5847dc64f5a94410be8475f94c",
        "transactionIndex": 123,
        "removed": false,
        "address": "0x37bC7498f4FF12C19678ee8fE19d713b87F6a9e6",
        "data": "0x0000000000000000000000000000000000000000000000000000000063640e9b",
        "topics": [
            "0x0559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5f",
            "0x00000000000000000000000000000000000000000000000000000023fc25ab20",
            "0x0000000000000000000000000000000000000000000000000000000000008d74"
        ],
        "transactionHash": "0x14d49fb7792251b811ea245fdd9a491d41ded25d52b8ae177c7525088fdf94e9",
        "logIndex": 274,
        "event": "AnswerUpdated",
        "eventSignature": "AnswerUpdated(int256,uint256,uint256)",
        "args": [
            {
                "type": "BigNumber",
                "hex": "0x23fc25ab20"
            },
            {
                "type": "BigNumber",
                "hex": "0x8d74"
            },
            {
                "type": "BigNumber",
                "hex": "0x63640e9b"
            }
        ]
    }
}