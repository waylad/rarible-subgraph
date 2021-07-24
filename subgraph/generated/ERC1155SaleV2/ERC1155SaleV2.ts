// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Buy extends ethereum.Event {
  get params(): Buy__Params {
    return new Buy__Params(this);
  }
}

export class Buy__Params {
  _event: Buy;

  constructor(event: Buy) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get buyer(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class CloseOrder extends ethereum.Event {
  get params(): CloseOrder__Params {
    return new CloseOrder__Params(this);
  }
}

export class CloseOrder__Params {
  _event: CloseOrder;

  constructor(event: CloseOrder) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get nonce(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ERC1155SaleV2 extends ethereum.SmartContract {
  static bind(address: Address): ERC1155SaleV2 {
    return new ERC1155SaleV2("ERC1155SaleV2", address);
  }

  beneficiary(): Address {
    let result = super.call("beneficiary", "beneficiary():(address)", []);

    return result[0].toAddress();
  }

  try_beneficiary(): ethereum.CallResult<Address> {
    let result = super.tryCall("beneficiary", "beneficiary():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  buyerFee(): BigInt {
    let result = super.call("buyerFee", "buyerFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_buyerFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("buyerFee", "buyerFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isOwner(): boolean {
    let result = super.call("isOwner", "isOwner():(bool)", []);

    return result[0].toBoolean();
  }

  try_isOwner(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOwner", "isOwner():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  nonceHolder(): Address {
    let result = super.call("nonceHolder", "nonceHolder():(address)", []);

    return result[0].toAddress();
  }

  try_nonceHolder(): ethereum.CallResult<Address> {
    let result = super.tryCall("nonceHolder", "nonceHolder():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  transferProxy(): Address {
    let result = super.call("transferProxy", "transferProxy():(address)", []);

    return result[0].toAddress();
  }

  try_transferProxy(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "transferProxy",
      "transferProxy():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _transferProxy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _nonceHolder(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get beneficiary(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BuyCall extends ethereum.Call {
  get inputs(): BuyCall__Inputs {
    return new BuyCall__Inputs(this);
  }

  get outputs(): BuyCall__Outputs {
    return new BuyCall__Outputs(this);
  }
}

export class BuyCall__Inputs {
  _call: BuyCall;

  constructor(call: BuyCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get owner(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get selling(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get buying(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get sellerFee(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get signature(): BuyCallSignatureStruct {
    return this._call.inputValues[7].value.toTuple() as BuyCallSignatureStruct;
  }
}

export class BuyCall__Outputs {
  _call: BuyCall;

  constructor(call: BuyCall) {
    this._call = call;
  }
}

export class BuyCallSignatureStruct extends ethereum.Tuple {
  get v(): i32 {
    return this[0].toI32();
  }

  get r(): Bytes {
    return this[1].toBytes();
  }

  get s(): Bytes {
    return this[2].toBytes();
  }
}

export class CancelCall extends ethereum.Call {
  get inputs(): CancelCall__Inputs {
    return new CancelCall__Inputs(this);
  }

  get outputs(): CancelCall__Outputs {
    return new CancelCall__Outputs(this);
  }
}

export class CancelCall__Inputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CancelCall__Outputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetBeneficiaryCall extends ethereum.Call {
  get inputs(): SetBeneficiaryCall__Inputs {
    return new SetBeneficiaryCall__Inputs(this);
  }

  get outputs(): SetBeneficiaryCall__Outputs {
    return new SetBeneficiaryCall__Outputs(this);
  }
}

export class SetBeneficiaryCall__Inputs {
  _call: SetBeneficiaryCall;

  constructor(call: SetBeneficiaryCall) {
    this._call = call;
  }

  get _beneficiary(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetBeneficiaryCall__Outputs {
  _call: SetBeneficiaryCall;

  constructor(call: SetBeneficiaryCall) {
    this._call = call;
  }
}

export class SetBuyerFeeCall extends ethereum.Call {
  get inputs(): SetBuyerFeeCall__Inputs {
    return new SetBuyerFeeCall__Inputs(this);
  }

  get outputs(): SetBuyerFeeCall__Outputs {
    return new SetBuyerFeeCall__Outputs(this);
  }
}

export class SetBuyerFeeCall__Inputs {
  _call: SetBuyerFeeCall;

  constructor(call: SetBuyerFeeCall) {
    this._call = call;
  }

  get _buyerFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetBuyerFeeCall__Outputs {
  _call: SetBuyerFeeCall;

  constructor(call: SetBuyerFeeCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}