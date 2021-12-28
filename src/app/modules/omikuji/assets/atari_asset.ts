import { BaseAsset, ValidateAssetContext } from 'lisk-sdk';
import { AtariAssetSchema, AtariAssetType } from '../schemas';
export class AtariAsset extends BaseAsset {
	public name = 'atari';
	public id = 1;

	public schema = AtariAssetSchema;

	public validate({ asset }: ValidateAssetContext<AtariAssetType>): void {
		if (asset.name.length === 0 || asset.atarisu === 0) throw new Error('当たりが1つもないのじゃー');
		if (asset.name.length > asset.atarisu) throw new Error('当たりが多すぎるとおもうのじゃが...');
	}

	public async apply(): Promise<void> {}
}
