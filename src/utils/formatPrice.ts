export default (value: number | string) => {
    if (typeof value === "string") {
        return Number(value).toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    }

    return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};
