// Imports
// -------

// Libraries
import { useMemo } from 'react';
import { useQuery} from '@apollo/client';
// Hooks
import dynamicImportHook from '../hooks/dynamicImportHook';
// Types
import {DocumentNode} from '@apollo/client';

// Internal
// --------

const requestData = (query: DocumentNode, { formatData = (data: object) => data, variables = {} }) => {
    let result: { loading: boolean, error: boolean, data: object};

    if (process.env.USE_MOCK_DATA === 'true') {
        const name = query.definitions[0].name.value;
        result = dynamicImportHook(name);
    } else {
        result = useQuery(query, {
            notifyOnNetworkStatusChange: true,
            variables
        });
    }

    return useMemo(() => {
        if (result.loading) return { isLoading: true };
        if (result.error) return { hasError: true };
        return formatData(result.data);
    }, [result.data, result.loading, result.error]);
};

// Exports
// -------

export default requestData;
