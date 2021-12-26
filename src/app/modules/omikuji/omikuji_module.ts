/* eslint-disable class-methods-use-this */
import {
    AfterBlockApplyContext,
    AfterGenesisBlockApplyContext, BaseModule,
    BeforeBlockApplyContext, TransactionApplyContext
} from 'lisk-sdk';
import { PullAsset } from "./assets/pull_asset";
import { AccountSchema } from "./schemas";

export class OmikujiModule extends BaseModule {
    public actions = {};
    public reducers = {};
    public name = 'omikuji';
    public transactionAssets = [new PullAsset()];
    public events = [];
    public id = 3535;

    public accountSchema = AccountSchema;

    public async beforeBlockApply(_input: BeforeBlockApplyContext) {}
    public async afterBlockApply(_input: AfterBlockApplyContext) {}
    public async beforeTransactionApply(_input: TransactionApplyContext) {}
    public async afterTransactionApply(_input: TransactionApplyContext) {}
    public async afterGenesisBlockApply(_input: AfterGenesisBlockApplyContext) {}
}