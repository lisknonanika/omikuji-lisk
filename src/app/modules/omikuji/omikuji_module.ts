/* eslint-disable class-methods-use-this */
import {
    AfterBlockApplyContext,
    AfterGenesisBlockApplyContext, BaseModule,
    BeforeBlockApplyContext,
    codec, TransactionApplyContext
} from 'lisk-sdk';
import { AtariAsset } from "./assets/atari_asset";
import { PullAsset } from "./assets/pull_asset";
import {
    AccountSchema,
    CHAIN_STATE_OMIKUJI_KEKKA, OmikujiKekkaSchema, OmikujiKekkaType,
    CHAIN_STATE_OMIKUJI_ATARI, OmikujiAtariSchema, OmikujiAtariType
} from "./schemas";

export class OmikujiModule extends BaseModule {
    public actions = {
        omikujiKekka: async () => {
            const res = await this._dataAccess.getChainState(CHAIN_STATE_OMIKUJI_KEKKA);
            const kekka: OmikujiKekkaType = res? codec.decode(OmikujiKekkaSchema, res): {omikujiKekka: []};
            return kekka.omikujiKekka;
        },
        omikujiAtari: async () => {
            const res = await this._dataAccess.getChainState(CHAIN_STATE_OMIKUJI_ATARI);
            const atari: OmikujiAtariType = res? codec.decode(OmikujiAtariSchema, res): {omikujiAtari: []};
            return atari.omikujiAtari;
        },
    };
    public reducers = {};
    public name = 'omikuji';
    public transactionAssets = [new PullAsset(), new AtariAsset()];
    public events = [];
    public id = 3535;

    public accountSchema = AccountSchema;

    public async beforeBlockApply(_input: BeforeBlockApplyContext) {}
    public async afterBlockApply(_input: AfterBlockApplyContext) {}
    public async beforeTransactionApply(_input: TransactionApplyContext) {}
    public async afterTransactionApply(_input: TransactionApplyContext) {}
    public async afterGenesisBlockApply(_input: AfterGenesisBlockApplyContext) {}
}