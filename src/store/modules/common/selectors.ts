interface Record {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}

interface IById {
    [key: string]: object;
}

type StateTreeById = IById;
type StateTreeAllId = string[];

interface StateTree {
    byId: StateTreeById;
    allId: StateTreeAllId;
}

// create tree byId
export const createTreeById = (data: Record[]) => {
    return data.reduce((acc: IById, cur) => {
        acc[cur.id] = cur;

        return acc;
    }, {});
};

export const createTreeAllId = (data: Record[]) => data.map((item) => item.id);

// insert element byId
export const insertElementById = (state: StateTreeById, data: Record) => ({
    ...state,
    [data.id]: data,
});

// insert element allId
export const insertElementAllId = (state: StateTreeAllId, data: Record) => [...state, data.id];

// get element byId
export const getElementById = (state: StateTreeById, elementId: string) => state[elementId];

// get element allId
export const getElementAllId = (state: StateTreeAllId, elementId: string) => state.find((index) => index === elementId);

export function getElements<T>(state: StateTree): T[] {
    // @ts-ignore
    return state.allId.map((item) => state.byId[item]);
}

// update element
export const updateElementById = (state: StateTreeById, data: Record) => ({
    ...state,
    [data.id]: data,
});

// delete element byId
export const deleteElementById = (state: StateTreeById, elementId: string) => delete state[elementId];

// delete element allId
export const deleteElementAllId = (state: StateTreeAllId, elementId: string) => {
    const positionElement = state.findIndex((index) => index === elementId);
    return state.splice(positionElement, 1);
};
