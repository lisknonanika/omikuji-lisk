import { BaseAsset, ApplyAssetContext, ValidateAssetContext, cryptography, codec } from 'lisk-sdk';
import {
	AccountType,
	PullAssetSchema, PullAssetType,
	CHAIN_STATE_OMIKUJI_KEKKA, OmikujiKekkaSchema, OmikujiKekkaType, OmikujiKekkaElementType
 } from '../schemas';
import * as constants from '../constants';

export class PullAsset extends BaseAsset {
    public name = 'pull';
	public id = 0;

    // トランザクション実行時のパラメータ用のスキーマを設定
    public schema = PullAssetSchema;

    public validate({ asset }: ValidateAssetContext<PullAssetType>): void {
        if (!asset.address) throw new Error('アドレスを教えてほしいのじゃー');
		try {
			cryptography.validateBase32Address(asset.address);
		} catch (ex) {
			throw new Error('アドレス間違っとらんか？');
		}
		if (!asset.name) throw new Error('お主、名前がないのじゃ...？');
		if (!asset.jikan) throw new Error('お主、どこの時代から来たのじゃ...？');
    }

    // eslint-disable-next-line @typescript-eslint/require-await
    public async apply({ asset, transaction, stateStore }: ApplyAssetContext<PullAssetType>): Promise<void> {
        // おみくじ
		const id = cryptography.bufferToHex(transaction.id);
		const n1 = parseInt(id.slice(0, 8), 16) % constants.KUJI_NAIYO.length;
		const n2 = parseInt(id.slice(8, 16), 16) % constants.KUJI_NAIYO.length;
		const n3 = parseInt(id.slice(16, 24), 16) % constants.KUJI_NAIYO.length;
		const n4 = parseInt(id.slice(24, 32), 16) % constants.KUJI_NAIYO.length;

		let kekka: string = '';
        const v = n1 + n2 + n3 + n4;	// min:0 max:16
		if (v <= 3) {
			kekka = constants.KUJI_KEKKA[0];
		} else if (v <= 6) {
			kekka = constants.KUJI_KEKKA[1];
		} else if (v <= 8) {
			kekka = constants.KUJI_KEKKA[2];
		} else if (v <= 10) {
			kekka = constants.KUJI_KEKKA[3];
		} else if (v <= 12) {
			kekka = constants.KUJI_KEKKA[4];
		} else if (v <= 14) {
			kekka = constants.KUJI_KEKKA[5];
		} else if (v <= 16) {
			kekka = constants.KUJI_KEKKA[6];
		}

        // 送信者の情報に結果を設定
        const targetAddress = cryptography.getAddressFromLisk32Address(asset.address);
        const targetAccount:{address: Buffer, omikuji: AccountType} = await stateStore.account.getOrDefault(targetAddress);
        targetAccount.omikuji.result = kekka;
		targetAccount.omikuji.detail = [
			`${constants.KUJI_SHURUI[0]}：${constants.KUJI_NAIYO[n1]}`,
			`${constants.KUJI_SHURUI[1]}：${constants.KUJI_NAIYO[n2]}`,
			`${constants.KUJI_SHURUI[2]}：${constants.KUJI_NAIYO[n3]}`,
			`${constants.KUJI_SHURUI[3]}：${constants.KUJI_NAIYO[n4]}`,
		];
        stateStore.account.set(targetAccount.address, targetAccount);

		const omikujiKekkaElem: OmikujiKekkaElementType = {
			address: asset.address,
			name: asset.name,
			result: targetAccount.omikuji.result,
			detail: targetAccount.omikuji.detail,
			tx: id,
			jikan: asset.jikan
		};

		const omikujiKekkaBuffer = await stateStore.chain.get(CHAIN_STATE_OMIKUJI_KEKKA);
		const omikujiKekka: OmikujiKekkaType = omikujiKekkaBuffer? codec.decode(OmikujiKekkaSchema, omikujiKekkaBuffer): {omikujiKekka: []};
		omikujiKekka.omikujiKekka.unshift(omikujiKekkaElem);
		await stateStore.chain.set(CHAIN_STATE_OMIKUJI_KEKKA, codec.encode(OmikujiKekkaSchema, omikujiKekka));
    }
}