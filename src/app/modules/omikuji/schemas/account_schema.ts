export const AccountSchema = {
    type: 'object',
    properties: {
        result: {
            fieldNumber: 1,
            dataType: 'string'
        },
        detail: {
            fieldNumber: 2,
            type: 'array',
            items: {
                dataType: 'string'
            },
            minItems: 4,
            maxItems: 4,
        }
    },
    default: {
        result: '',
        detail: ['', '', '', '']
    },
};

export type AccountType = {
    result: string;
    detail: string[];
};