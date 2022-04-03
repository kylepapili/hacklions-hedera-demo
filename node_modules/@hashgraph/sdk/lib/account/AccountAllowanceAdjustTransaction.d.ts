/**
 * @namespace proto
 * @typedef {import("@hashgraph/proto").ITransaction} proto.ITransaction
 * @typedef {import("@hashgraph/proto").ISignedTransaction} proto.ISignedTransaction
 * @typedef {import("@hashgraph/proto").TransactionBody} proto.TransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionBody} proto.ITransactionBody
 * @typedef {import("@hashgraph/proto").ITransactionResponse} proto.ITransactionResponse
 * @typedef {import("@hashgraph/proto").ICryptoAdjustAllowanceTransactionBody} proto.ICryptoAdjustAllowanceTransactionBody
 * @typedef {import("@hashgraph/proto").IAccountID} proto.IAccountID
 */
/**
 * @typedef {import("../channel/Channel.js").default} Channel
 * @typedef {import("../client/Client.js").default<*, *>} Client
 * @typedef {import("../transaction/TransactionId.js").default} TransactionId
 * @typedef {import("bignumber.js").default} BigNumber
 * @typedef {import("../long.js").LongObject} LongObject
 */
/**
 * Change properties for the given account.
 */
export default class AccountAllowanceAdjustTransaction extends Transaction {
    /**
     * @internal
     * @param {proto.ITransaction[]} transactions
     * @param {proto.ISignedTransaction[]} signedTransactions
     * @param {TransactionId[]} transactionIds
     * @param {AccountId[]} nodeIds
     * @param {proto.ITransactionBody[]} bodies
     * @returns {AccountAllowanceAdjustTransaction}
     */
    static _fromProtobuf(transactions: proto.ITransaction[], signedTransactions: proto.ISignedTransaction[], transactionIds: TransactionId[], nodeIds: AccountId[], bodies: proto.ITransactionBody[]): AccountAllowanceAdjustTransaction;
    /**
     * @param {object} [props]
     * @param {HbarAllowance[]} [props.hbarAllowances]
     * @param {TokenAllowance[]} [props.tokenAllowances]
     * @param {TokenNftAllowance[]} [props.nftAllowances]
     */
    constructor(props?: {
        hbarAllowances?: HbarAllowance[] | undefined;
        tokenAllowances?: TokenAllowance[] | undefined;
        nftAllowances?: TokenNftAllowance[] | undefined;
    } | undefined);
    /**
     * @private
     * @type {HbarAllowance[]}
     */
    private _hbarAllowances;
    /**
     * @private
     * @type {TokenAllowance[]}
     */
    private _tokenAllowances;
    /**
     * @private
     * @type {TokenNftAllowance[]}
     */
    private _nftAllowances;
    /**
     * @returns {HbarAllowance[]}
     */
    get hbarAllowances(): HbarAllowance[];
    /**
     * @deprecated
     * @param {AccountId | string} spenderAccountId
     * @param {number | string | Long | LongObject | BigNumber | Hbar} amount
     * @returns {AccountAllowanceAdjustTransaction}
     */
    addHbarAllowance(spenderAccountId: AccountId | string, amount: number | string | Long | LongObject | BigNumber | Hbar): AccountAllowanceAdjustTransaction;
    /**
     * @param {AccountId | string | null} ownerAccountId
     * @param {AccountId | string} spenderAccountId
     * @param {Hbar} amount
     * @returns {AccountAllowanceAdjustTransaction}
     */
    _adjustHbarAllowance(ownerAccountId: AccountId | string | null, spenderAccountId: AccountId | string, amount: Hbar): AccountAllowanceAdjustTransaction;
    /**
     * @param {AccountId | string} ownerAccountId
     * @param {AccountId | string} spenderAccountId
     * @param {number | string | Long | LongObject | BigNumber | Hbar} amount
     * @returns {AccountAllowanceAdjustTransaction}
     */
    grantHbarAllowance(ownerAccountId: AccountId | string, spenderAccountId: AccountId | string, amount: number | string | Long | LongObject | BigNumber | Hbar): AccountAllowanceAdjustTransaction;
    /**
     * @param {AccountId | string} ownerAccountId
     * @param {AccountId | string} spenderAccountId
     * @param {number | string | Long | LongObject | BigNumber | Hbar} amount
     * @returns {AccountAllowanceAdjustTransaction}
     */
    revokeHbarAllowance(ownerAccountId: AccountId | string, spenderAccountId: AccountId | string, amount: number | string | Long | LongObject | BigNumber | Hbar): AccountAllowanceAdjustTransaction;
    /**
     * @returns {TokenAllowance[]}
     */
    get tokenAllowances(): TokenAllowance[];
    /**
     * @param {TokenId | string} tokenId
     * @param {AccountId | string} spenderAccountId
     * @param {Long | number} amount
     * @returns {AccountAllowanceAdjustTransaction}
     */
    addTokenAllowance(tokenId: TokenId | string, spenderAccountId: AccountId | string, amount: Long | number): AccountAllowanceAdjustTransaction;
    /**
     * @param {TokenId | string} tokenId
     * @param {AccountId | string | null} ownerAccountId
     * @param {AccountId | string} spenderAccountId
     * @param {Long | number} amount
     * @returns {AccountAllowanceAdjustTransaction}
     */
    _adjustTokenAllowance(tokenId: TokenId | string, ownerAccountId: AccountId | string | null, spenderAccountId: AccountId | string, amount: Long | number): AccountAllowanceAdjustTransaction;
    /**
     * @param {TokenId | string} tokenId
     * @param {AccountId | string} ownerAccountId
     * @param {AccountId | string} spenderAccountId
     * @param {Long | number} amount
     * @returns {AccountAllowanceAdjustTransaction}
     */
    grantTokenAllowance(tokenId: TokenId | string, ownerAccountId: AccountId | string, spenderAccountId: AccountId | string, amount: Long | number): AccountAllowanceAdjustTransaction;
    /**
     * @param {TokenId | string} tokenId
     * @param {AccountId | string} ownerAccountId
     * @param {AccountId | string} spenderAccountId
     * @param {Long | number} amount
     * @returns {AccountAllowanceAdjustTransaction}
     */
    revokeTokenAllowance(tokenId: TokenId | string, ownerAccountId: AccountId | string, spenderAccountId: AccountId | string, amount: Long | number): AccountAllowanceAdjustTransaction;
    /**
     * @deprecated
     * @param {NftId | string} nftId
     * @param {AccountId | string} spenderAccountId
     * @returns {AccountAllowanceAdjustTransaction}
     */
    addTokenNftAllowance(nftId: NftId | string, spenderAccountId: AccountId | string): AccountAllowanceAdjustTransaction;
    /**
     * @param {NftId} nftId
     * @param {AccountId | string | null} ownerAccountId
     * @param {AccountId | string} spenderAccountId
     * @returns {AccountAllowanceAdjustTransaction}
     */
    _adjustTokenNftAllowance(nftId: NftId, ownerAccountId: AccountId | string | null, spenderAccountId: AccountId | string): AccountAllowanceAdjustTransaction;
    /**
     * @param {NftId | string} nftId
     * @param {AccountId | string} ownerAccountId
     * @param {AccountId | string} spenderAccountId
     * @returns {AccountAllowanceAdjustTransaction}
     */
    grantTokenNftAllowance(nftId: NftId | string, ownerAccountId: AccountId | string, spenderAccountId: AccountId | string): AccountAllowanceAdjustTransaction;
    /**
     * @param {NftId | string} nftId
     * @param {AccountId | string} ownerAccountId
     * @param {AccountId | string} spenderAccountId
     * @returns {AccountAllowanceAdjustTransaction}
     */
    revokeTokenNftAllowance(nftId: NftId | string, ownerAccountId: AccountId | string, spenderAccountId: AccountId | string): AccountAllowanceAdjustTransaction;
    /**
     * @deprecated - use `grantTokenNftAllowanceAllSerials()` instead
     * @param {TokenId | string} tokenId
     * @param {AccountId | string} spenderAccountId
     * @returns {AccountAllowanceAdjustTransaction}
     */
    addAllTokenNftAllowance(tokenId: TokenId | string, spenderAccountId: AccountId | string): AccountAllowanceAdjustTransaction;
    /**
     * @param {TokenId | string} tokenId
     * @param {AccountId | string} ownerAccountId
     * @param {AccountId | string} spenderAccountId
     * @returns {AccountAllowanceAdjustTransaction}
     */
    grantTokenNftAllowanceAllSerials(tokenId: TokenId | string, ownerAccountId: AccountId | string, spenderAccountId: AccountId | string): AccountAllowanceAdjustTransaction;
    /**
     * @param {TokenId | string} tokenId
     * @param {AccountId | string} ownerAccountId
     * @param {AccountId | string} spenderAccountId
     * @returns {AccountAllowanceAdjustTransaction}
     */
    revokeTokenNftAllowanceAllSerials(tokenId: TokenId | string, ownerAccountId: AccountId | string, spenderAccountId: AccountId | string): AccountAllowanceAdjustTransaction;
    /**
     * @param {TokenId | string} tokenId
     * @param {AccountId | string | null} ownerAccountId
     * @param {AccountId | string} spenderAccountId
     * @param {boolean} allSerials
     * @returns {AccountAllowanceAdjustTransaction}
     */
    _adjustTokenNftAllowanceAllSerials(tokenId: TokenId | string, ownerAccountId: AccountId | string | null, spenderAccountId: AccountId | string, allSerials: boolean): AccountAllowanceAdjustTransaction;
}
export namespace proto {
    type ITransaction = import("@hashgraph/proto").ITransaction;
    type ISignedTransaction = import("@hashgraph/proto").ISignedTransaction;
    type TransactionBody = import("@hashgraph/proto").TransactionBody;
    type ITransactionBody = import("@hashgraph/proto").ITransactionBody;
    type ITransactionResponse = import("@hashgraph/proto").ITransactionResponse;
    type ICryptoAdjustAllowanceTransactionBody = import("@hashgraph/proto").ICryptoAdjustAllowanceTransactionBody;
    type IAccountID = import("@hashgraph/proto").IAccountID;
}
export type Channel = import("../channel/Channel.js").default;
export type Client = import("../client/Client.js").default<any, any>;
export type TransactionId = import("../transaction/TransactionId.js").default;
export type BigNumber = import("bignumber.js").default;
export type LongObject = import("../long.js").LongObject;
import Transaction from "../transaction/Transaction.js";
import HbarAllowance from "./HbarAllowance.js";
import AccountId from "./AccountId.js";
import Long from "long";
import Hbar from "../Hbar.js";
import TokenAllowance from "./TokenAllowance.js";
import TokenId from "../token/TokenId.js";
import NftId from "../token/NftId.js";
import TokenNftAllowance from "./TokenNftAllowance.js";
