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

export class BetPlaced extends ethereum.Event {
  get params(): BetPlaced__Params {
    return new BetPlaced__Params(this);
  }
}

export class BetPlaced__Params {
  _event: BetPlaced;

  constructor(event: BetPlaced) {
    this._event = event;
  }

  get player(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get hasWon(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class Game extends ethereum.SmartContract {
  static bind(address: Address): Game {
    return new Game("Game", address);
  }
}

export class PlaceBetCall extends ethereum.Call {
  get inputs(): PlaceBetCall__Inputs {
    return new PlaceBetCall__Inputs(this);
  }

  get outputs(): PlaceBetCall__Outputs {
    return new PlaceBetCall__Outputs(this);
  }
}

export class PlaceBetCall__Inputs {
  _call: PlaceBetCall;

  constructor(call: PlaceBetCall) {
    this._call = call;
  }
}

export class PlaceBetCall__Outputs {
  _call: PlaceBetCall;

  constructor(call: PlaceBetCall) {
    this._call = call;
  }
}
