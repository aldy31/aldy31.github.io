const { ethers } = require("ethers");

async function main() {
    const provider = new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/6cfb5cf540454e55b63410fcb5467f01"); // Ganti dengan endpoint RPC Ethereum Anda
    const contractAddress = "0xFbBeb7Fc1bb842A13E874d767ebda5Cf91CD4499"; // Ganti dengan alamat kontrak cerdas Anda
    const contractABI = [  {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_projectTax",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "actionType",
            "type": "string"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "executor",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          }
        ],
        "name": "Action",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "backProject",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "balance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_taxPct",
            "type": "uint256"
          }
        ],
        "name": "changeTax",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "imageURL",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "cost",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "expiresAt",
            "type": "uint256"
          }
        ],
        "name": "createProject",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "deleteProject",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "getBackers",
        "outputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "contribution",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "refunded",
                "type": "bool"
              }
            ],
            "internalType": "struct Genesis.backerStruct[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "getProject",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "title",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "description",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "imageURL",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "cost",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "raised",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "expiresAt",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "backers",
                "type": "uint256"
              },
              {
                "internalType": "enum Genesis.statusEnum",
                "name": "status",
                "type": "uint8"
              }
            ],
            "internalType": "struct Genesis.projectStruct",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getProjects",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "title",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "description",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "imageURL",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "cost",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "raised",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "expiresAt",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "backers",
                "type": "uint256"
              },
              {
                "internalType": "enum Genesis.statusEnum",
                "name": "status",
                "type": "uint8"
              }
            ],
            "internalType": "struct Genesis.projectStruct[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "payOutProject",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "projectCount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "projectExist",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "projectTax",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "requestRefund",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "stats",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "totalProjects",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalBacking",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalDonations",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "imageURL",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "expiresAt",
            "type": "uint256"
          }
        ],
        "name": "updateProject",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ];
    const contract = new ethers.Contract(contractAddress, contractABI, provider);

    contract.on(" ProjectCreated", (actionType, id, title,  owner, timestamp) => {
        console.log("Jenis Aksi", actionType);
        console.log("Project ID:", id);
        console.log("Judul Proyek:", title);
        console.log("Pemilik:", owner);
        console.log("Waktu Dibuat:", new Date(timestamp * 1000).toLocaleString());
    });
    
    contract.on("Action", (id, actionType, executor, timestamp) => {
        console.log("ID Proyek yang Diperbarui:", id);
        console.log("Jenis Aksi:", actionType);
        console.log("Pembaruan Oleh:", executor);
        console.log("Waktu Diperbarui:", new Date(timestamp * 1000).toLocaleString());
    });
    
}

main();
