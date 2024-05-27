export const ModuleMain = [
  {
    type: "constructor",
    inputs: [
      {
        name: "PriceFeed",
        type: "address",
        internalType: "address",
      },
      {
        name: "subscriptionId",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "gasLane",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "interval",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "callbackGasLimit",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "vrfCoordinatorV2",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "DAILY_REVIEWS_LIMIT",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint32",
        internalType: "uint32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "addNewUserToSystem",
    inputs: [
      {
        name: "roleType",
        type: "uint8",
        internalType: "enum LibTypeDef.RoleType",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "cancelReservation",
    inputs: [
      {
        name: "provider",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "checkUpkeep",
    inputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "upkeepNeeded",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "performData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "contributeRegistration",
    inputs: [
      {
        name: "provider",
        type: "address",
        internalType: "address",
      },
      {
        name: "initiator",
        type: "address",
        internalType: "address",
      },
      {
        name: "patient",
        type: "address",
        internalType: "address",
      },
      {
        name: "amountInWei",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "contributionLottery",
    inputs: [
      {
        name: "randomWords",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "donation",
    inputs: [
      {
        name: "index",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "user",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "finishAppointment",
    inputs: [
      {
        name: "provider",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "getProviderAverageScore",
    inputs: [
      {
        name: "provider",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getReservationInfo",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getUserToContract",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "performUpkeep",
    inputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "rawFulfillRandomWords",
    inputs: [
      {
        name: "requestId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "randomWords",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "registerFundRequest",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address",
      },
      {
        name: "contractAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "amountInUsd",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "requestReservation",
    inputs: [
      {
        name: "provider",
        type: "address",
        internalType: "address",
      },
      {
        name: "appointTimeSinceEpoch",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "requestReview",
    inputs: [
      {
        name: "provider",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "requestId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "startAppointment",
    inputs: [
      {
        name: "provider",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "updateProviderScore",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address",
      },
      {
        name: "provider",
        type: "address",
        internalType: "address",
      },
      {
        name: "score",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawFund",
    inputs: [
      {
        name: "index",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "event",
    name: "ModuleContribution__ContributionAlreadyRegistered",
    inputs: [
      {
        name: "provider",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "initiator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "patient",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amountInWei",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ModuleContribution__ContributionRegistered",
    inputs: [
      {
        name: "provider",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "initiator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "patient",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amountInWei",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ModuleContribution__LotteryCompleted",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "ModuleContribution__UpkeepPerformed",
    inputs: [
      {
        name: "requestId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "numWords",
        type: "uint32",
        indexed: false,
        internalType: "uint32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ModuleJudge__JudgeLotteryDone",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "provider",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "delayTime",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ModuleJudge__ProviderScoreUpdated",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "provider",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "score",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ModuleReservation__AppointmentFinished",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "provider",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amountInWei",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ModuleReservation__AppointmentStarted",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "provider",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amountInWei",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ModuleReservation__ReservationCanceled",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "provider",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amountInWei",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ModuleReservation__ReservationRequested",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "provider",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "appointTimeSinceEpoch",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "System__DonationLimitReached",
    inputs: [
      {
        name: "index",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amountInWei",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "System__FundWithdrawn",
    inputs: [
      {
        name: "index",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amountInWei",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "System__NewDonation",
    inputs: [
      {
        name: "index",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "user",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amountInWei",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "System__NewFundRegistered",
    inputs: [
      {
        name: "fundInfoIndex",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "user",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amountInUsd",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "roundId",
        type: "uint80",
        indexed: true,
        internalType: "uint80",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "System__NewUserAdded",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "roleType",
        type: "uint8",
        indexed: true,
        internalType: "uint8",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "System__NewUserContractAdded",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "contractAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "roleType",
        type: "uint8",
        indexed: true,
        internalType: "uint8",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "ModuleContribution__UpkeepNotNeeded",
    inputs: [],
  },
  {
    type: "error",
    name: "ModuleReservation__NoReservation",
    inputs: [],
  },
  {
    type: "error",
    name: "ModuleReservation__TransferFail",
    inputs: [],
  },
  {
    type: "error",
    name: "OnlyCoordinatorCanFulfill",
    inputs: [
      {
        name: "have",
        type: "address",
        internalType: "address",
      },
      {
        name: "want",
        type: "address",
        internalType: "address",
      },
    ],
  },
] as const;
