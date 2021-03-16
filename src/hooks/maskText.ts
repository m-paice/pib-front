import { mask, unMask } from "remask";

export const maskTextDocument = (value) => {
    return mask(unMask(value), ["999.999.999-99", "99.999.999/9999-99"]);
};
