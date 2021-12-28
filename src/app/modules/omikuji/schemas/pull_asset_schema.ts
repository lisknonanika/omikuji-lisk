export const PullAssetSchema = {
    $id: 'omikuji/pull-asset',
    title: 'PullAsset transaction asset for omikuji module',
    type: 'object',
    required: ['address', 'name', 'jikan'],
    properties: {
        address: {
            dataType: 'string', 
            fieldNumber: 1,
            maxLength: 41
        },
        name: {
            dataType: 'string', 
            fieldNumber: 2,
        },
        jikan: {
            dataType: 'uint32', 
            fieldNumber: 3,
        },
    },
};

export type PullAssetType = {
    address: string;
    name: string;
    jikan: number;
};