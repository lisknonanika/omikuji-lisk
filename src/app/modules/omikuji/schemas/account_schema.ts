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
        },
        tx: {
            fieldNumber: 3,
            dataType: 'string',
        },
        history: {
            fieldNumber: 4,
            type: 'array',
            items: {
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
                    },
                    tx: {
                        fieldNumber: 3,
                        dataType: 'string',
                    }
                }
            },
        }
    },
    default: {
        result: '',
        detail: ['', '', '', ''],
        tx: '',
        history: []
    },
};

export type AccountType = {
    result: string;
    detail: string[];
    tx: string;
    history: {result: string, detail: string[], tx: string}[];
};