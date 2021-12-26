/* eslint-disable @typescript-eslint/no-empty-function */
import { Application } from 'lisk-sdk';
import { OmikujiModule } from "./modules/omikuji/omikuji_module";

export const registerModules = (app: Application): void => {
    app.registerModule(OmikujiModule);
};
