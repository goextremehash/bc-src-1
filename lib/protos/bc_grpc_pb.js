// GENERATED CODE -- DO NOT EDIT!

'use strict';

var grpc = require('grpc');
var bc_pb = require('./bc_pb.js');
var core_pb = require('./core_pb.js');

function serialize_bc_BcBlock(arg) {
  if (!(arg instanceof core_pb.BcBlock)) {
    throw new Error('Expected argument of type bc.BcBlock');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_BcBlock(buffer_arg) {
  return core_pb.BcBlock.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_Block(arg) {
  if (!(arg instanceof core_pb.Block)) {
    throw new Error('Expected argument of type bc.Block');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_Block(buffer_arg) {
  return core_pb.Block.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_CurrentWork(arg) {
  if (!(arg instanceof bc_pb.CurrentWork)) {
    throw new Error('Expected argument of type bc.CurrentWork');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_CurrentWork(buffer_arg) {
  return bc_pb.CurrentWork.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetBalanceRequest(arg) {
  if (!(arg instanceof bc_pb.GetBalanceRequest)) {
    throw new Error('Expected argument of type bc.GetBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetBalanceRequest(buffer_arg) {
  return bc_pb.GetBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetBalanceResponse(arg) {
  if (!(arg instanceof bc_pb.GetBalanceResponse)) {
    throw new Error('Expected argument of type bc.GetBalanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetBalanceResponse(buffer_arg) {
  return bc_pb.GetBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetBlake2blRequest(arg) {
  if (!(arg instanceof bc_pb.GetBlake2blRequest)) {
    throw new Error('Expected argument of type bc.GetBlake2blRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetBlake2blRequest(buffer_arg) {
  return bc_pb.GetBlake2blRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetBlake2blResponse(arg) {
  if (!(arg instanceof bc_pb.GetBlake2blResponse)) {
    throw new Error('Expected argument of type bc.GetBlake2blResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetBlake2blResponse(buffer_arg) {
  return bc_pb.GetBlake2blResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetBlockHashRequest(arg) {
  if (!(arg instanceof bc_pb.GetBlockHashRequest)) {
    throw new Error('Expected argument of type bc.GetBlockHashRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetBlockHashRequest(buffer_arg) {
  return bc_pb.GetBlockHashRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetBlockHeightRequest(arg) {
  if (!(arg instanceof bc_pb.GetBlockHeightRequest)) {
    throw new Error('Expected argument of type bc.GetBlockHeightRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetBlockHeightRequest(buffer_arg) {
  return bc_pb.GetBlockHeightRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetBlocksRequest(arg) {
  if (!(arg instanceof bc_pb.GetBlocksRequest)) {
    throw new Error('Expected argument of type bc.GetBlocksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetBlocksRequest(buffer_arg) {
  return bc_pb.GetBlocksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetBlocksResponse(arg) {
  if (!(arg instanceof bc_pb.GetBlocksResponse)) {
    throw new Error('Expected argument of type bc.GetBlocksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetBlocksResponse(buffer_arg) {
  return bc_pb.GetBlocksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetHistoricalOrdersResponse(arg) {
  if (!(arg instanceof bc_pb.GetHistoricalOrdersResponse)) {
    throw new Error('Expected argument of type bc.GetHistoricalOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetHistoricalOrdersResponse(buffer_arg) {
  return bc_pb.GetHistoricalOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetHistoryRequest(arg) {
  if (!(arg instanceof bc_pb.GetHistoryRequest)) {
    throw new Error('Expected argument of type bc.GetHistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetHistoryRequest(buffer_arg) {
  return bc_pb.GetHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetMarkedTxRequest(arg) {
  if (!(arg instanceof bc_pb.GetMarkedTxRequest)) {
    throw new Error('Expected argument of type bc.GetMarkedTxRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetMarkedTxRequest(buffer_arg) {
  return bc_pb.GetMarkedTxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetMarkedTxs(arg) {
  if (!(arg instanceof bc_pb.GetMarkedTxs)) {
    throw new Error('Expected argument of type bc.GetMarkedTxs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetMarkedTxs(buffer_arg) {
  return bc_pb.GetMarkedTxs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetMatchedOrdersResponse(arg) {
  if (!(arg instanceof bc_pb.GetMatchedOrdersResponse)) {
    throw new Error('Expected argument of type bc.GetMatchedOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetMatchedOrdersResponse(buffer_arg) {
  return bc_pb.GetMatchedOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetNrgSupplyResponse(arg) {
  if (!(arg instanceof bc_pb.GetNrgSupplyResponse)) {
    throw new Error('Expected argument of type bc.GetNrgSupplyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetNrgSupplyResponse(buffer_arg) {
  return bc_pb.GetNrgSupplyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetOpenOrdersResponse(arg) {
  if (!(arg instanceof bc_pb.GetOpenOrdersResponse)) {
    throw new Error('Expected argument of type bc.GetOpenOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetOpenOrdersResponse(buffer_arg) {
  return bc_pb.GetOpenOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetOutPointRequest(arg) {
  if (!(arg instanceof bc_pb.GetOutPointRequest)) {
    throw new Error('Expected argument of type bc.GetOutPointRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetOutPointRequest(buffer_arg) {
  return bc_pb.GetOutPointRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetOutPointStatusResponse(arg) {
  if (!(arg instanceof bc_pb.GetOutPointStatusResponse)) {
    throw new Error('Expected argument of type bc.GetOutPointStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetOutPointStatusResponse(buffer_arg) {
  return bc_pb.GetOutPointStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetRawMempoolResponse(arg) {
  if (!(arg instanceof bc_pb.GetRawMempoolResponse)) {
    throw new Error('Expected argument of type bc.GetRawMempoolResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetRawMempoolResponse(buffer_arg) {
  return bc_pb.GetRawMempoolResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetRoveredBlockHashRequest(arg) {
  if (!(arg instanceof bc_pb.GetRoveredBlockHashRequest)) {
    throw new Error('Expected argument of type bc.GetRoveredBlockHashRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetRoveredBlockHashRequest(buffer_arg) {
  return bc_pb.GetRoveredBlockHashRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetRoveredBlockHeightRequest(arg) {
  if (!(arg instanceof bc_pb.GetRoveredBlockHeightRequest)) {
    throw new Error('Expected argument of type bc.GetRoveredBlockHeightRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetRoveredBlockHeightRequest(buffer_arg) {
  return bc_pb.GetRoveredBlockHeightRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetRoveredBlocksRequest(arg) {
  if (!(arg instanceof bc_pb.GetRoveredBlocksRequest)) {
    throw new Error('Expected argument of type bc.GetRoveredBlocksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetRoveredBlocksRequest(buffer_arg) {
  return bc_pb.GetRoveredBlocksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetRoveredBlocksResponse(arg) {
  if (!(arg instanceof bc_pb.GetRoveredBlocksResponse)) {
    throw new Error('Expected argument of type bc.GetRoveredBlocksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetRoveredBlocksResponse(buffer_arg) {
  return bc_pb.GetRoveredBlocksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetSpendableCollateralRequest(arg) {
  if (!(arg instanceof bc_pb.GetSpendableCollateralRequest)) {
    throw new Error('Expected argument of type bc.GetSpendableCollateralRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetSpendableCollateralRequest(buffer_arg) {
  return bc_pb.GetSpendableCollateralRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetSpendableCollateralResponse(arg) {
  if (!(arg instanceof bc_pb.GetSpendableCollateralResponse)) {
    throw new Error('Expected argument of type bc.GetSpendableCollateralResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetSpendableCollateralResponse(buffer_arg) {
  return bc_pb.GetSpendableCollateralResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetTradeStatusResponse(arg) {
  if (!(arg instanceof bc_pb.GetTradeStatusResponse)) {
    throw new Error('Expected argument of type bc.GetTradeStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetTradeStatusResponse(buffer_arg) {
  return bc_pb.GetTradeStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetTxRequest(arg) {
  if (!(arg instanceof bc_pb.GetTxRequest)) {
    throw new Error('Expected argument of type bc.GetTxRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetTxRequest(buffer_arg) {
  return bc_pb.GetTxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetUnlockTakerTxParamsRequest(arg) {
  if (!(arg instanceof bc_pb.GetUnlockTakerTxParamsRequest)) {
    throw new Error('Expected argument of type bc.GetUnlockTakerTxParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetUnlockTakerTxParamsRequest(buffer_arg) {
  return bc_pb.GetUnlockTakerTxParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetUnlockTakerTxParamsResponse(arg) {
  if (!(arg instanceof bc_pb.GetUnlockTakerTxParamsResponse)) {
    throw new Error('Expected argument of type bc.GetUnlockTakerTxParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetUnlockTakerTxParamsResponse(buffer_arg) {
  return bc_pb.GetUnlockTakerTxParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetUtxoLengthRequest(arg) {
  if (!(arg instanceof bc_pb.GetUtxoLengthRequest)) {
    throw new Error('Expected argument of type bc.GetUtxoLengthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetUtxoLengthRequest(buffer_arg) {
  return bc_pb.GetUtxoLengthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_GetUtxoLengthResponse(arg) {
  if (!(arg instanceof bc_pb.GetUtxoLengthResponse)) {
    throw new Error('Expected argument of type bc.GetUtxoLengthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_GetUtxoLengthResponse(buffer_arg) {
  return bc_pb.GetUtxoLengthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_HelpResponse(arg) {
  if (!(arg instanceof bc_pb.HelpResponse)) {
    throw new Error('Expected argument of type bc.HelpResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_HelpResponse(buffer_arg) {
  return bc_pb.HelpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_MarkedTransaction(arg) {
  if (!(arg instanceof core_pb.MarkedTransaction)) {
    throw new Error('Expected argument of type bc.MarkedTransaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_MarkedTransaction(buffer_arg) {
  return core_pb.MarkedTransaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_Null(arg) {
  if (!(arg instanceof core_pb.Null)) {
    throw new Error('Expected argument of type bc.Null');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_Null(buffer_arg) {
  return core_pb.Null.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_RpcTransaction(arg) {
  if (!(arg instanceof bc_pb.RpcTransaction)) {
    throw new Error('Expected argument of type bc.RpcTransaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_RpcTransaction(buffer_arg) {
  return bc_pb.RpcTransaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_RpcTransactionResponse(arg) {
  if (!(arg instanceof bc_pb.RpcTransactionResponse)) {
    throw new Error('Expected argument of type bc.RpcTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_RpcTransactionResponse(buffer_arg) {
  return bc_pb.RpcTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_SettingsResponse(arg) {
  if (!(arg instanceof bc_pb.SettingsResponse)) {
    throw new Error('Expected argument of type bc.SettingsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_SettingsResponse(buffer_arg) {
  return bc_pb.SettingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_StatsResponse(arg) {
  if (!(arg instanceof bc_pb.StatsResponse)) {
    throw new Error('Expected argument of type bc.StatsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_StatsResponse(buffer_arg) {
  return bc_pb.StatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_SyncStatus(arg) {
  if (!(arg instanceof bc_pb.SyncStatus)) {
    throw new Error('Expected argument of type bc.SyncStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_SyncStatus(buffer_arg) {
  return bc_pb.SyncStatus.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_Transaction(arg) {
  if (!(arg instanceof core_pb.Transaction)) {
    throw new Error('Expected argument of type bc.Transaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_Transaction(buffer_arg) {
  return core_pb.Transaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_TransferRequest(arg) {
  if (!(arg instanceof bc_pb.TransferRequest)) {
    throw new Error('Expected argument of type bc.TransferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_TransferRequest(buffer_arg) {
  return bc_pb.TransferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_TransferResponse(arg) {
  if (!(arg instanceof bc_pb.TransferResponse)) {
    throw new Error('Expected argument of type bc.TransferResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_TransferResponse(buffer_arg) {
  return bc_pb.TransferResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_VanityConvertRequest(arg) {
  if (!(arg instanceof bc_pb.VanityConvertRequest)) {
    throw new Error('Expected argument of type bc.VanityConvertRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_VanityConvertRequest(buffer_arg) {
  return bc_pb.VanityConvertRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_VanityConvertResponse(arg) {
  if (!(arg instanceof bc_pb.VanityConvertResponse)) {
    throw new Error('Expected argument of type bc.VanityConvertResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_VanityConvertResponse(buffer_arg) {
  return bc_pb.VanityConvertResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_WalletData(arg) {
  if (!(arg instanceof core_pb.WalletData)) {
    throw new Error('Expected argument of type bc.WalletData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_WalletData(buffer_arg) {
  return core_pb.WalletData.deserializeBinary(new Uint8Array(buffer_arg));
}

var BcService = exports.BcService = {
  getRoveredBlockHash: {
    path: '/bc.Bc/GetRoveredBlockHash',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetRoveredBlockHashRequest,
    responseType: core_pb.Block,
    requestSerialize: serialize_bc_GetRoveredBlockHashRequest,
    requestDeserialize: deserialize_bc_GetRoveredBlockHashRequest,
    responseSerialize: serialize_bc_Block,
    responseDeserialize: deserialize_bc_Block
  },
  getRoveredBlockHeight: {
    path: '/bc.Bc/GetRoveredBlockHeight',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetRoveredBlockHeightRequest,
    responseType: core_pb.Block,
    requestSerialize: serialize_bc_GetRoveredBlockHeightRequest,
    requestDeserialize: deserialize_bc_GetRoveredBlockHeightRequest,
    responseSerialize: serialize_bc_Block,
    responseDeserialize: deserialize_bc_Block
  },
  getRoveredBlocks: {
    path: '/bc.Bc/GetRoveredBlocks',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetRoveredBlocksRequest,
    responseType: bc_pb.GetRoveredBlocksResponse,
    requestSerialize: serialize_bc_GetRoveredBlocksRequest,
    requestDeserialize: deserialize_bc_GetRoveredBlocksRequest,
    responseSerialize: serialize_bc_GetRoveredBlocksResponse,
    responseDeserialize: deserialize_bc_GetRoveredBlocksResponse
  },
  getLatestRoveredBlocks: {
    path: '/bc.Bc/GetLatestRoveredBlocks',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.Null,
    responseType: bc_pb.GetRoveredBlocksResponse,
    requestSerialize: serialize_bc_Null,
    requestDeserialize: deserialize_bc_Null,
    responseSerialize: serialize_bc_GetRoveredBlocksResponse,
    responseDeserialize: deserialize_bc_GetRoveredBlocksResponse
  },
  getNrgSupply: {
    path: '/bc.Bc/GetNrgSupply',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.Null,
    responseType: bc_pb.GetNrgSupplyResponse,
    requestSerialize: serialize_bc_Null,
    requestDeserialize: deserialize_bc_Null,
    responseSerialize: serialize_bc_GetNrgSupplyResponse,
    responseDeserialize: deserialize_bc_GetNrgSupplyResponse
  },
  getBlockHash: {
    path: '/bc.Bc/GetBlockHash',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetBlockHashRequest,
    responseType: core_pb.BcBlock,
    requestSerialize: serialize_bc_GetBlockHashRequest,
    requestDeserialize: deserialize_bc_GetBlockHashRequest,
    responseSerialize: serialize_bc_BcBlock,
    responseDeserialize: deserialize_bc_BcBlock
  },
  getBlockHeight: {
    path: '/bc.Bc/GetBlockHeight',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetBlockHeightRequest,
    responseType: core_pb.BcBlock,
    requestSerialize: serialize_bc_GetBlockHeightRequest,
    requestDeserialize: deserialize_bc_GetBlockHeightRequest,
    responseSerialize: serialize_bc_BcBlock,
    responseDeserialize: deserialize_bc_BcBlock
  },
  getBlocksHeight: {
    path: '/bc.Bc/GetBlocksHeight',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetBlockHeightRequest,
    responseType: bc_pb.GetBlocksResponse,
    requestSerialize: serialize_bc_GetBlockHeightRequest,
    requestDeserialize: deserialize_bc_GetBlockHeightRequest,
    responseSerialize: serialize_bc_GetBlocksResponse,
    responseDeserialize: deserialize_bc_GetBlocksResponse
  },
  getBlocks: {
    path: '/bc.Bc/GetBlocks',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetBlocksRequest,
    responseType: bc_pb.GetBlocksResponse,
    requestSerialize: serialize_bc_GetBlocksRequest,
    requestDeserialize: deserialize_bc_GetBlocksRequest,
    responseSerialize: serialize_bc_GetBlocksResponse,
    responseDeserialize: deserialize_bc_GetBlocksResponse
  },
  getLatestBlock: {
    path: '/bc.Bc/GetLatestBlock',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.Null,
    responseType: core_pb.BcBlock,
    requestSerialize: serialize_bc_Null,
    requestDeserialize: deserialize_bc_Null,
    responseSerialize: serialize_bc_BcBlock,
    responseDeserialize: deserialize_bc_BcBlock
  },
  getTx: {
    path: '/bc.Bc/GetTx',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetTxRequest,
    responseType: core_pb.Transaction,
    requestSerialize: serialize_bc_GetTxRequest,
    requestDeserialize: deserialize_bc_GetTxRequest,
    responseSerialize: serialize_bc_Transaction,
    responseDeserialize: deserialize_bc_Transaction
  },
  getMarkedTx: {
    path: '/bc.Bc/GetMarkedTx',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetMarkedTxRequest,
    responseType: core_pb.MarkedTransaction,
    requestSerialize: serialize_bc_GetMarkedTxRequest,
    requestDeserialize: deserialize_bc_GetMarkedTxRequest,
    responseSerialize: serialize_bc_MarkedTransaction,
    responseDeserialize: deserialize_bc_MarkedTransaction
  },
  getMarkedTxsForMatchedOrder: {
    path: '/bc.Bc/GetMarkedTxsForMatchedOrder',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetOutPointRequest,
    responseType: bc_pb.GetMarkedTxs,
    requestSerialize: serialize_bc_GetOutPointRequest,
    requestDeserialize: deserialize_bc_GetOutPointRequest,
    responseSerialize: serialize_bc_GetMarkedTxs,
    responseDeserialize: deserialize_bc_GetMarkedTxs
  },
  getTradeStatus: {
    path: '/bc.Bc/GetTradeStatus',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetOutPointRequest,
    responseType: bc_pb.GetTradeStatusResponse,
    requestSerialize: serialize_bc_GetOutPointRequest,
    requestDeserialize: deserialize_bc_GetOutPointRequest,
    responseSerialize: serialize_bc_GetTradeStatusResponse,
    responseDeserialize: deserialize_bc_GetTradeStatusResponse
  },
  getOutpointStatus: {
    path: '/bc.Bc/GetOutpointStatus',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetOutPointRequest,
    responseType: bc_pb.GetOutPointStatusResponse,
    requestSerialize: serialize_bc_GetOutPointRequest,
    requestDeserialize: deserialize_bc_GetOutPointRequest,
    responseSerialize: serialize_bc_GetOutPointStatusResponse,
    responseDeserialize: deserialize_bc_GetOutPointStatusResponse
  },
  getTxClaimedBy: {
    path: '/bc.Bc/GetTxClaimedBy',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetOutPointRequest,
    responseType: core_pb.Transaction,
    requestSerialize: serialize_bc_GetOutPointRequest,
    requestDeserialize: deserialize_bc_GetOutPointRequest,
    responseSerialize: serialize_bc_Transaction,
    responseDeserialize: deserialize_bc_Transaction
  },
  getRawMempool: {
    path: '/bc.Bc/GetRawMempool',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.Null,
    responseType: bc_pb.GetRawMempoolResponse,
    requestSerialize: serialize_bc_Null,
    requestDeserialize: deserialize_bc_Null,
    responseSerialize: serialize_bc_GetRawMempoolResponse,
    responseDeserialize: deserialize_bc_GetRawMempoolResponse
  },
  getBlockByTx: {
    path: '/bc.Bc/GetBlockByTx',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetTxRequest,
    responseType: core_pb.BcBlock,
    requestSerialize: serialize_bc_GetTxRequest,
    requestDeserialize: deserialize_bc_GetTxRequest,
    responseSerialize: serialize_bc_BcBlock,
    responseDeserialize: deserialize_bc_BcBlock
  },
  getRoveredBlockForMarkedTx: {
    path: '/bc.Bc/GetRoveredBlockForMarkedTx',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetMarkedTxRequest,
    responseType: core_pb.Block,
    requestSerialize: serialize_bc_GetMarkedTxRequest,
    requestDeserialize: deserialize_bc_GetMarkedTxRequest,
    responseSerialize: serialize_bc_Block,
    responseDeserialize: deserialize_bc_Block
  },
  help: {
    path: '/bc.Bc/Help',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.Null,
    responseType: bc_pb.HelpResponse,
    requestSerialize: serialize_bc_Null,
    requestDeserialize: deserialize_bc_Null,
    responseSerialize: serialize_bc_HelpResponse,
    responseDeserialize: deserialize_bc_HelpResponse
  },
  stats: {
    path: '/bc.Bc/Stats',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.Null,
    responseType: bc_pb.StatsResponse,
    requestSerialize: serialize_bc_Null,
    requestDeserialize: deserialize_bc_Null,
    responseSerialize: serialize_bc_StatsResponse,
    responseDeserialize: deserialize_bc_StatsResponse
  },
  getSettings: {
    path: '/bc.Bc/GetSettings',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.Null,
    responseType: bc_pb.SettingsResponse,
    requestSerialize: serialize_bc_Null,
    requestDeserialize: deserialize_bc_Null,
    responseSerialize: serialize_bc_SettingsResponse,
    responseDeserialize: deserialize_bc_SettingsResponse
  },
  newTx: {
    path: '/bc.Bc/NewTx',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.RpcTransaction,
    responseType: bc_pb.RpcTransactionResponse,
    requestSerialize: serialize_bc_RpcTransaction,
    requestDeserialize: deserialize_bc_RpcTransaction,
    responseSerialize: serialize_bc_RpcTransactionResponse,
    responseDeserialize: deserialize_bc_RpcTransactionResponse
  },
  sendTx: {
    path: '/bc.Bc/SendTx',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.Transaction,
    responseType: bc_pb.RpcTransactionResponse,
    requestSerialize: serialize_bc_Transaction,
    requestDeserialize: deserialize_bc_Transaction,
    responseSerialize: serialize_bc_RpcTransactionResponse,
    responseDeserialize: deserialize_bc_RpcTransactionResponse
  },
  getBalance: {
    path: '/bc.Bc/GetBalance',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetBalanceRequest,
    responseType: bc_pb.GetBalanceResponse,
    requestSerialize: serialize_bc_GetBalanceRequest,
    requestDeserialize: deserialize_bc_GetBalanceRequest,
    responseSerialize: serialize_bc_GetBalanceResponse,
    responseDeserialize: deserialize_bc_GetBalanceResponse
  },
  getWallet: {
    path: '/bc.Bc/GetWallet',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetBalanceRequest,
    responseType: core_pb.WalletData,
    requestSerialize: serialize_bc_GetBalanceRequest,
    requestDeserialize: deserialize_bc_GetBalanceRequest,
    responseSerialize: serialize_bc_WalletData,
    responseDeserialize: deserialize_bc_WalletData
  },
  getSpendableOutpoints: {
    path: '/bc.Bc/GetSpendableOutpoints',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetSpendableCollateralRequest,
    responseType: core_pb.WalletData,
    requestSerialize: serialize_bc_GetSpendableCollateralRequest,
    requestDeserialize: deserialize_bc_GetSpendableCollateralRequest,
    responseSerialize: serialize_bc_WalletData,
    responseDeserialize: deserialize_bc_WalletData
  },
  getSpendableCollateral: {
    path: '/bc.Bc/GetSpendableCollateral',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetSpendableCollateralRequest,
    responseType: bc_pb.GetSpendableCollateralResponse,
    requestSerialize: serialize_bc_GetSpendableCollateralRequest,
    requestDeserialize: deserialize_bc_GetSpendableCollateralRequest,
    responseSerialize: serialize_bc_GetSpendableCollateralResponse,
    responseDeserialize: deserialize_bc_GetSpendableCollateralResponse
  },
  getUnlockTakerTxParams: {
    path: '/bc.Bc/GetUnlockTakerTxParams',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetUnlockTakerTxParamsRequest,
    responseType: bc_pb.GetUnlockTakerTxParamsResponse,
    requestSerialize: serialize_bc_GetUnlockTakerTxParamsRequest,
    requestDeserialize: deserialize_bc_GetUnlockTakerTxParamsRequest,
    responseSerialize: serialize_bc_GetUnlockTakerTxParamsResponse,
    responseDeserialize: deserialize_bc_GetUnlockTakerTxParamsResponse
  },
  getTransfers: {
    path: '/bc.Bc/GetTransfers',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.TransferRequest,
    responseType: bc_pb.TransferResponse,
    requestSerialize: serialize_bc_TransferRequest,
    requestDeserialize: deserialize_bc_TransferRequest,
    responseSerialize: serialize_bc_TransferResponse,
    responseDeserialize: deserialize_bc_TransferResponse
  },
  getOpenOrders: {
    path: '/bc.Bc/GetOpenOrders',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetSpendableCollateralRequest,
    responseType: bc_pb.GetOpenOrdersResponse,
    requestSerialize: serialize_bc_GetSpendableCollateralRequest,
    requestDeserialize: deserialize_bc_GetSpendableCollateralRequest,
    responseSerialize: serialize_bc_GetOpenOrdersResponse,
    responseDeserialize: deserialize_bc_GetOpenOrdersResponse
  },
  getMatchedOrders: {
    path: '/bc.Bc/GetMatchedOrders',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetSpendableCollateralRequest,
    responseType: bc_pb.GetMatchedOrdersResponse,
    requestSerialize: serialize_bc_GetSpendableCollateralRequest,
    requestDeserialize: deserialize_bc_GetSpendableCollateralRequest,
    responseSerialize: serialize_bc_GetMatchedOrdersResponse,
    responseDeserialize: deserialize_bc_GetMatchedOrdersResponse
  },
  getHistoricalOrders: {
    path: '/bc.Bc/GetHistoricalOrders',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetHistoryRequest,
    responseType: bc_pb.GetHistoricalOrdersResponse,
    requestSerialize: serialize_bc_GetHistoryRequest,
    requestDeserialize: deserialize_bc_GetHistoryRequest,
    responseSerialize: serialize_bc_GetHistoricalOrdersResponse,
    responseDeserialize: deserialize_bc_GetHistoricalOrdersResponse
  },
  getUnmatchedOrders: {
    path: '/bc.Bc/GetUnmatchedOrders',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetBalanceRequest,
    responseType: bc_pb.GetOpenOrdersResponse,
    requestSerialize: serialize_bc_GetBalanceRequest,
    requestDeserialize: deserialize_bc_GetBalanceRequest,
    responseSerialize: serialize_bc_GetOpenOrdersResponse,
    responseDeserialize: deserialize_bc_GetOpenOrdersResponse
  },
  getUTXOLength: {
    path: '/bc.Bc/GetUTXOLength',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetUtxoLengthRequest,
    responseType: bc_pb.GetUtxoLengthResponse,
    requestSerialize: serialize_bc_GetUtxoLengthRequest,
    requestDeserialize: deserialize_bc_GetUtxoLengthRequest,
    responseSerialize: serialize_bc_GetUtxoLengthResponse,
    responseDeserialize: deserialize_bc_GetUtxoLengthResponse
  },
  getSTXOLength: {
    path: '/bc.Bc/GetSTXOLength',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetUtxoLengthRequest,
    responseType: bc_pb.GetUtxoLengthResponse,
    requestSerialize: serialize_bc_GetUtxoLengthRequest,
    requestDeserialize: deserialize_bc_GetUtxoLengthRequest,
    responseSerialize: serialize_bc_GetUtxoLengthResponse,
    responseDeserialize: deserialize_bc_GetUtxoLengthResponse
  },
  getBlake2bl: {
    path: '/bc.Bc/GetBlake2bl',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetBlake2blRequest,
    responseType: bc_pb.GetBlake2blResponse,
    requestSerialize: serialize_bc_GetBlake2blRequest,
    requestDeserialize: deserialize_bc_GetBlake2blRequest,
    responseSerialize: serialize_bc_GetBlake2blResponse,
    responseDeserialize: deserialize_bc_GetBlake2blResponse
  },
  getBcAddressViaVanity: {
    path: '/bc.Bc/GetBcAddressViaVanity',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.VanityConvertRequest,
    responseType: bc_pb.VanityConvertResponse,
    requestSerialize: serialize_bc_VanityConvertRequest,
    requestDeserialize: deserialize_bc_VanityConvertRequest,
    responseSerialize: serialize_bc_VanityConvertResponse,
    responseDeserialize: deserialize_bc_VanityConvertResponse
  },
  getCurrentWork: {
    path: '/bc.Bc/GetCurrentWork',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.Null,
    responseType: bc_pb.CurrentWork,
    requestSerialize: serialize_bc_Null,
    requestDeserialize: deserialize_bc_Null,
    responseSerialize: serialize_bc_CurrentWork,
    responseDeserialize: deserialize_bc_CurrentWork
  },
  getSyncStatus: {
    path: '/bc.Bc/GetSyncStatus',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.Null,
    responseType: bc_pb.SyncStatus,
    requestSerialize: serialize_bc_Null,
    requestDeserialize: deserialize_bc_Null,
    responseSerialize: serialize_bc_SyncStatus,
    responseDeserialize: deserialize_bc_SyncStatus
  }
};

exports.BcClient = grpc.makeGenericClientConstructor(BcService);