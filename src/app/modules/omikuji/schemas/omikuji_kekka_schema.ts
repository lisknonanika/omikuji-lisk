export const CHAIN_STATE_OMIKUJI_KEKKA = 'OmikujiKekka';

export const OmikujiKekkaSchema = {
    $id: 'omikuji/omikuji-kekka',
    type: "object",
    required: ["omikujiKekka"],
    properties: {
        omikujiKekka: {
            type: "array",
            fieldNumber: 1,
            items: {
                type: "object",
                properties: {
                    address: {
                        fieldNumber: 1,
                        dataType: 'string'
                    },
                    name: {
                        fieldNumber: 2,
                        dataType: 'string'
                    },
                    result: {
                        fieldNumber: 3,
                        dataType: 'string'
                    },
                    detail: {
                        fieldNumber: 4,
                        type: 'array',
                        items: {
                            dataType: 'string'
                        },
                    },
                    tx: {
                        fieldNumber: 5,
                        dataType: 'string',
                    },
                    jikan: {
                        fieldNumber: 6,
                        dataType: 'uint32',
                    }
                },
            },
        },
    },
};

export type OmikujiKekkaElementType = {
    address: string,
    name: string,
    result: string,
    detail: string[],
    tx: string,
    jikan: number
}

export type OmikujiKekkaType = {
    omikujiKekka: OmikujiKekkaElementType[]
}