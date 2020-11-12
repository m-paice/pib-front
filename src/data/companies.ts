export default [
    {
        id: 1,
        name: "ELETRICA LEATI",
        cnpj: "00.018.948/0001-74",
        email: "ELETRICA_LEATI@gmail.com",
        type: "Construção",
        address: [
            {
                zipcode: "17884-121",
                street: "Av. Nações Unidas",
                number: "8-98",
                neighborhood: "centro",
                city: "Bauru",
                uf: "SP",
                main: true,
            },
        ],
        phoneNumbers: [
            {
                ddd: "14",
                number: "99855-9845",
                main: true,
            },
        ],
        bank: {
            name: "NU Pagamentos S.A",
            agency: "000-1",
            account: "884511121",
            digit: "8",
        },
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        name: "CASA DAS LIXAS",
        cnpj: "00.154.135/0001-01",
        email: "CASA_DAS_LIXAS@gmail.com",
        type: "Utilitários",
        address: [
            {
                zipcode: "17021-898",
                street: "Av. Rodrigues Alves",
                number: "2-99",
                neighborhood: "centro",
                city: "Bauru",
                uf: "SP",
                main: true,
            },
        ],
        phoneNumbers: [
            {
                ddd: "14",
                number: "95548-9811",
                main: true,
            },
        ],
        bank: {
            name: "Itaú Pagamentos",
            agency: "3417",
            account: "111158744001",
            digit: "3",
        },
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];
