import Pagarme from "pagarme/browser";

const key = "ek_test_QIX05dzgcbJvOxgUNOm08ARVXTD61A";

export const paymentPagarme = (
    values: {
        card_holder_name: string;
        card_expiration_date: string;
        card_number: string;
        card_cvv: string;
    },
    callback,
    callbackErrors?,
) => {
    const cardValidations = Pagarme.validate({ card: values });

    if (!cardValidations.card.card_holder_name) return callbackErrors("Oops, nome do cartão incorreto");
    if (!cardValidations.card.card_expiration_date) return callbackErrors("Oops, data expiração do cartão incorreto");
    if (!cardValidations.card.card_number) return callbackErrors("Oops, número de cartão incorreto");
    if (!cardValidations.card.card_cvv) return callbackErrors("Oops, código do cartão incorreto");

    return Pagarme.client
        .connect({ encryption_key: key })
        .then((client) => client.security.encrypt(values))
        .then((card_hash) => callback(card_hash));
};
