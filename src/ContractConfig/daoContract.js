export const DAO_CONTRACT_ADDRESS =
  "0x76176Bdcf8bEe2654b89406fA726B96a3929f9ae";

export const DAO_CONTRACT_ABI = [
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "address",
      },
    ],
    name: "userVoteForProposal",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_memberAddress",
        type: "address",
      },
      {
        name: "_lat",
        type: "int256",
      },
      {
        name: "_long",
        type: "int256",
      },
    ],
    name: "addDaoMember",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_proposalId",
        type: "uint256",
      },
      {
        name: "_vote",
        type: "bool",
      },
    ],
    name: "voteOnProposal",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_proposalId",
        type: "uint256",
      },
    ],
    name: "returnProposalById",
    outputs: [
      {
        components: [
          {
            name: "proposalId",
            type: "uint256",
          },
          {
            name: "userAddress",
            type: "address",
          },
          {
            name: "proposalString",
            type: "string",
          },
          {
            name: "claimAmount",
            type: "uint256",
          },
          {
            name: "yesVotes",
            type: "uint256",
          },
          {
            name: "noVotes",
            type: "uint256",
          },
          {
            name: "voting",
            type: "bool",
          },
          {
            name: "passed",
            type: "bool",
          },
          {
            name: "endTime",
            type: "uint256",
          },
        ],
        name: "",
        type: "tuple",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_proposalId",
        type: "uint256",
      },
    ],
    name: "settleOutcome",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "daoInsureTokenAddress",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_proposalString",
        type: "string",
      },
    ],
    name: "createProposal",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_memberAddress",
        type: "address",
      },
    ],
    name: "removeDaoMember",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "proposalsMapping",
    outputs: [
      {
        name: "proposalId",
        type: "uint256",
      },
      {
        name: "userAddress",
        type: "address",
      },
      {
        name: "proposalString",
        type: "string",
      },
      {
        name: "claimAmount",
        type: "uint256",
      },
      {
        name: "yesVotes",
        type: "uint256",
      },
      {
        name: "noVotes",
        type: "uint256",
      },
      {
        name: "voting",
        type: "bool",
      },
      {
        name: "passed",
        type: "bool",
      },
      {
        name: "endTime",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "superAppContractAddress",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "arr",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "userVotedFor",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_tokenAddress",
        type: "address",
      },
      {
        name: "_superApp",
        type: "address",
      },
    ],
    name: "setAddresses",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "proposalIdNumber",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
    ],
    name: "daoMemberMapping",
    outputs: [
      {
        name: "memberAddress",
        type: "address",
      },
      {
        name: "lat",
        type: "int256",
      },
      {
        name: "long",
        type: "int256",
      },
      {
        name: "votes",
        type: "uint256",
      },
      {
        name: "proposals",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_proposalId",
        type: "uint256",
      },
    ],
    name: "claimProposal",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_contract",
        type: "address",
      },
      {
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "countVotes",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "daoMemberCount",
    outputs: [
      {
        name: "",
        type: "int256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_add",
        type: "address",
      },
    ],
    name: "returnUserClaims",
    outputs: [
      {
        name: "",
        type: "uint256[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_adr",
        type: "address",
      },
    ],
    name: "isUserADaoMember",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_proposalId",
        type: "uint256",
      },
    ],
    name: "endProposalVoting",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_add",
        type: "address",
      },
    ],
    name: "returnUserVotes",
    outputs: [
      {
        name: "",
        type: "uint256[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];