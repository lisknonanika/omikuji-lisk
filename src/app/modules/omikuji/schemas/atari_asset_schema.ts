export const AtariAssetSchema = {
    $id: 'omikuji/atari-asset',
    title: 'AtariAsset transaction asset for omikuji module',
    type: 'object',
    required: ['name'],
    properties: {
        name: {
            type: 'array',
            fieldNumber: 1,
            items: {
                dataType: 'string'
            },
        }
    },
};

export type AtariAssetType = {
    name: string[];
};