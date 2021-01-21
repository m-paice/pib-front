export default {
    document: (value: string) => {
        if (/^[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}$/.test(value)) {
            return "pj";
        }

        if (/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/.test(value)) {
            return "pf";
        }

        return false;
    },
};
