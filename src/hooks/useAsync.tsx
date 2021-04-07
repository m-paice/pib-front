import React, { useState, useCallback } from "react";

export type Method<T> = (...params: any[]) => Promise<T>;

export function useAsync<T> (asyncFunction: Method<T>, ...initialParams: any[]) {
    
    const [status, setStatus] = useState("idle");
    const [value, setValue] = useState<T>({} as T);
    const [error, setError] = useState(null);

    const execute = useCallback((...execParams: any[]) => {
        setStatus("pending");
        setValue({} as T);
        setError(null);

        const params = execParams.length ? execParams : initialParams

        return asyncFunction(...params)
            .then((response) => {
                setValue(response);
                setStatus("success");
            })
            .catch((error) => {
                setError(error);
                setStatus("error");
            });
    }, []);

    return { execute, status, value, error };
};
