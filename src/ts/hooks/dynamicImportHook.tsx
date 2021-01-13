// Imports
// -------

// Libraries
import React, {useEffect, useState} from 'react';

// Internal
// --------

const DynamicImportHook: any = (name: string) => {
    const [status, setStatus] = useState({ data: {}, loading: true, error: false });

    useEffect(() => {
        if (status.loading) {
            let promise = null;

            switch(name) {
                case 'GetCategories':
                    promise = import(/* webpackChunckName: "GetCategories.json" */ '../../data/GetCategories.json');
                    break;
                case 'GetRestaurant':
                    promise = import(/* webpackChunckName: "GetRestaurant.json" */ '../../data/GetRestaurant.json');
                    break;
                case 'GetRestaurants':
                    promise = import(/* webpackChunckName: "GetRestaurant.json" */ '../../data/GetRestaurants.json');
                    break;
                default:
                    setStatus({...status, loading: false, error: true});
                    return;
            }

            promise
                ?.then(module => module.default)
                .then((data) => {
                    setStatus({...status, data, loading: false});
                });
        }
    }, [status.data, status.loading, status.error, setStatus]);

    return status;
}

// Exports
// -------

export default DynamicImportHook;
