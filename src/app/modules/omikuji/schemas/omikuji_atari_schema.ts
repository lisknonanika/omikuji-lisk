export const CHAIN_STATE_OMIKUJI_ATARI = 'OmikujiAtari';

export const OmikujiAtariSchema = {
    $id: 'omikuji/omikuji-atari',
    type: "object",
    required: ["omikujiAtari"],
    properties: {
        omikujiAtari: {
            type: "array",
            fieldNumber: 1,
            items: {
                dataType: 'string'
            },
        },
    },
};

export type OmikujiAtariType = {
    omikujiAtari: string[]
}