export const AtariAssetSchema = {
    $id: 'omikuji/atari-asset',
    title: 'AtariAsset transaction asset for omikuji module',
    type: 'object',
    required: ['name', 'atarisu'],
    properties: {
        name: {
            type: 'array',
            fieldNumber: 1,
            items: {
                dataType: 'string'
            },
        },
        atarisu: {
            dataType: 'uint32', 
            fieldNumber: 2,
        }
    },
};

export type AtariAssetType = {
    name: string[];
    atarisu: number;
};
