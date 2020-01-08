/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface MetaERC20WrapperInterface extends Interface {
  functions: {
    metaSafeBatchTransferFrom: TypedFunctionDescription<{
      encode([_from, _to, _ids, _amounts, _isGasFee, _data]: [
        string,
        string,
        (BigNumberish)[],
        (BigNumberish)[],
        boolean,
        Arrayish
      ]): string;
    }>;

    metaSafeTransferFrom: TypedFunctionDescription<{
      encode([_from, _to, _id, _amount, _isGasFee, _data]: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        boolean,
        Arrayish
      ]): string;
    }>;

    metaSetApprovalForAll: TypedFunctionDescription<{
      encode([_owner, _operator, _approved, _isGasFee, _data]: [
        string,
        string,
        boolean,
        boolean,
        Arrayish
      ]): string;
    }>;

    safeBatchTransferFrom: TypedFunctionDescription<{
      encode([_from, _to, _ids, _amounts, _data]: [
        string,
        string,
        (BigNumberish)[],
        (BigNumberish)[],
        Arrayish
      ]): string;
    }>;

    safeTransferFrom: TypedFunctionDescription<{
      encode([_from, _to, _id, _amount, _data]: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    setApprovalForAll: TypedFunctionDescription<{
      encode([_operator, _approved]: [string, boolean]): string;
    }>;

    deposit: TypedFunctionDescription<{
      encode([_token, _value]: [string, BigNumberish]): string;
    }>;

    withdraw: TypedFunctionDescription<{
      encode([_token, _to, _value]: [string, string, BigNumberish]): string;
    }>;

    onERC1155Received: TypedFunctionDescription<{
      encode([, _from, _id, _value]: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    onERC1155BatchReceived: TypedFunctionDescription<{
      encode([, _from, _ids, _values]: [
        string,
        string,
        (BigNumberish)[],
        (BigNumberish)[],
        Arrayish
      ]): string;
    }>;
  };

  events: {
    ApprovalForAll: TypedEventDescription<{
      encodeTopics([_owner, _operator, _approved]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    NonceChange: TypedEventDescription<{
      encodeTopics([signer, newNonce]: [string | null, null]): string[];
    }>;

    TokenRegistration: TypedEventDescription<{
      encodeTopics([token_address, token_id]: [null, null]): string[];
    }>;

    TransferBatch: TypedEventDescription<{
      encodeTopics([_operator, _from, _to, _ids, _amounts]: [
        string | null,
        string | null,
        string | null,
        null,
        null
      ]): string[];
    }>;

    TransferSingle: TypedEventDescription<{
      encodeTopics([_operator, _from, _to, _id, _amount]: [
        string | null,
        string | null,
        string | null,
        null,
        null
      ]): string[];
    }>;

    URI: TypedEventDescription<{
      encodeTopics([_uri, _id]: [null, BigNumberish | null]): string[];
    }>;
  };
}

export class MetaERC20Wrapper extends Contract {
  connect(signerOrProvider: Signer | Provider | string): MetaERC20Wrapper;
  attach(addressOrName: string): MetaERC20Wrapper;
  deployed(): Promise<MetaERC20Wrapper>;

  on(event: EventFilter | string, listener: Listener): MetaERC20Wrapper;
  once(event: EventFilter | string, listener: Listener): MetaERC20Wrapper;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): MetaERC20Wrapper;
  removeAllListeners(eventName: EventFilter | string): MetaERC20Wrapper;
  removeListener(eventName: any, listener: Listener): MetaERC20Wrapper;

  interface: MetaERC20WrapperInterface;

  functions: {
    balanceOf(_owner: string, _id: BigNumberish): Promise<BigNumber>;

    balanceOfBatch(
      _owners: (string)[],
      _ids: (BigNumberish)[]
    ): Promise<(BigNumber)[]>;

    getNonce(_signer: string): Promise<BigNumber>;

    isApprovedForAll(_owner: string, _operator: string): Promise<boolean>;

    isValidSignature(
      _signerAddress: string,
      _hash: Arrayish,
      _data: Arrayish,
      _sig: Arrayish
    ): Promise<boolean>;

    getTokenID(_token: string): Promise<BigNumber>;

    getIdAddress(_id: BigNumberish): Promise<string>;

    supportsInterface(interfaceID: Arrayish): Promise<boolean>;

    metaSafeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _isGasFee: boolean,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    metaSafeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _isGasFee: boolean,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    metaSetApprovalForAll(
      _owner: string,
      _operator: string,
      _approved: boolean,
      _isGasFee: boolean,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    deposit(
      _token: string,
      _value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    withdraw(
      _token: string,
      _to: string,
      _value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: string,
      _from: string,
      _id: BigNumberish,
      _value: BigNumberish,
      arg4: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: (BigNumberish)[],
      _values: (BigNumberish)[],
      arg4: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getNTokens(): Promise<BigNumber>;
  };

  filters: {
    ApprovalForAll(
      _owner: string | null,
      _operator: string | null,
      _approved: null
    ): EventFilter;

    NonceChange(signer: string | null, newNonce: null): EventFilter;

    TokenRegistration(token_address: null, token_id: null): EventFilter;

    TransferBatch(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _ids: null,
      _amounts: null
    ): EventFilter;

    TransferSingle(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _id: null,
      _amount: null
    ): EventFilter;

    URI(_uri: null, _id: BigNumberish | null): EventFilter;
  };

  estimate: {
    metaSafeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _isGasFee: boolean,
      _data: Arrayish
    ): Promise<BigNumber>;

    metaSafeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _isGasFee: boolean,
      _data: Arrayish
    ): Promise<BigNumber>;

    metaSetApprovalForAll(
      _owner: string,
      _operator: string,
      _approved: boolean,
      _isGasFee: boolean,
      _data: Arrayish
    ): Promise<BigNumber>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _data: Arrayish
    ): Promise<BigNumber>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean
    ): Promise<BigNumber>;

    deposit(_token: string, _value: BigNumberish): Promise<BigNumber>;

    withdraw(
      _token: string,
      _to: string,
      _value: BigNumberish
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: string,
      _from: string,
      _id: BigNumberish,
      _value: BigNumberish,
      arg4: Arrayish
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: string,
      _from: string,
      _ids: (BigNumberish)[],
      _values: (BigNumberish)[],
      arg4: Arrayish
    ): Promise<BigNumber>;
  };
}
