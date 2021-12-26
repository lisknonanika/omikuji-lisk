export const PullAssetSchema = {
    $id: 'omikuji/pull-asset',
    title: 'PullAsset transaction asset for omikuji module',
    type: 'object',
    required: ['address', 'name'],
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
        itazura: {
            dataType: 'uint32', 
            fieldNumber: 3,
        },
    },
};

export type PullAssetType = {
    address: string;
    name: string;
    itazura: number;
};