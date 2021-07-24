// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Block extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Block entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Block entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Block", id.toString(), this);
  }

  static load(id: string): Block | null {
    return store.get("Block", id) as Block | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get number(): BigInt | null {
    let value = this.get("number");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set number(value: BigInt | null) {
    if (value === null) {
      this.unset("number");
    } else {
      this.set("number", Value.fromBigInt(value as BigInt));
    }
  }

  get time(): BigInt | null {
    let value = this.get("time");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set time(value: BigInt | null) {
    if (value === null) {
      this.unset("time");
    } else {
      this.set("time", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Deal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Deal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Deal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Deal", id.toString(), this);
  }

  static load(id: string): Deal | null {
    return store.get("Deal", id) as Deal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    return value.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get seller(): Bytes {
    let value = this.get("seller");
    return value.toBytes();
  }

  set seller(value: Bytes) {
    this.set("seller", Value.fromBytes(value));
  }

  get buyer(): Bytes {
    let value = this.get("buyer");
    return value.toBytes();
  }

  set buyer(value: Bytes) {
    this.set("buyer", Value.fromBytes(value));
  }

  get sellTokenId(): BigInt {
    let value = this.get("sellTokenId");
    return value.toBigInt();
  }

  set sellTokenId(value: BigInt) {
    this.set("sellTokenId", Value.fromBigInt(value));
  }

  get sellToken(): Bytes {
    let value = this.get("sellToken");
    return value.toBytes();
  }

  set sellToken(value: Bytes) {
    this.set("sellToken", Value.fromBytes(value));
  }

  get buyToken(): Bytes {
    let value = this.get("buyToken");
    return value.toBytes();
  }

  set buyToken(value: Bytes) {
    this.set("buyToken", Value.fromBytes(value));
  }

  get sellAmount(): BigInt {
    let value = this.get("sellAmount");
    return value.toBigInt();
  }

  set sellAmount(value: BigInt) {
    this.set("sellAmount", Value.fromBigInt(value));
  }

  get buyAmount(): BigInt {
    let value = this.get("buyAmount");
    return value.toBigInt();
  }

  set buyAmount(value: BigInt) {
    this.set("buyAmount", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get fee(): BigDecimal {
    let value = this.get("fee");
    return value.toBigDecimal();
  }

  set fee(value: BigDecimal) {
    this.set("fee", Value.fromBigDecimal(value));
  }

  get txHash(): Bytes {
    let value = this.get("txHash");
    return value.toBytes();
  }

  set txHash(value: Bytes) {
    this.set("txHash", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTime(): BigInt {
    let value = this.get("blockTime");
    return value.toBigInt();
  }

  set blockTime(value: BigInt) {
    this.set("blockTime", Value.fromBigInt(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }
}

export class Counter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Counter entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Counter entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Counter", id.toString(), this);
  }

  static load(id: string): Counter | null {
    return store.get("Counter", id) as Counter | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get firstBlock(): string {
    let value = this.get("firstBlock");
    return value.toString();
  }

  set firstBlock(value: string) {
    this.set("firstBlock", Value.fromString(value));
  }

  get lastBlock(): string {
    let value = this.get("lastBlock");
    return value.toString();
  }

  set lastBlock(value: string) {
    this.set("lastBlock", Value.fromString(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }
}