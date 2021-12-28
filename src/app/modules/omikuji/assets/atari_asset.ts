import { BaseAsset, ValidateAssetContext, ApplyAssetContext, codec } from 'lisk-sdk';
import {
	AtariAssetSchema, AtariAssetType,
	CHAIN_STATE_OMIKUJI_ATARI, OmikujiAtariSchema
} from '../schemas';

export class AtariAsset extends BaseAsset {
	public name = 'atari';
	public id = 1;

	public schema = AtariAssetSchema;

	public validate({ asset }: ValidateAssetContext<AtariAssetType>): void {
		if (asset.name.length === 0 || asset.atarisu === 0) throw new Error('当たりが1つもないのじゃー');
		if (asset.name.length > asset.atarisu) throw new Error('当たりが多すぎるとおもうのじゃが...');
	}

	public async apply({ asset, stateStore }: ApplyAssetContext<AtariAssetType>): Promise<void> {
		await stateStore.chain.set(CHAIN_STATE_OMIKUJI_ATARI, codec.encode(OmikujiAtariSchema, {omikujiAtari: asset.name}));
	}
}
