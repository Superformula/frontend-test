// Imports
// -------

// Libraries
import React, {useCallback, useState} from 'react';
// Components
import DropDownMenu from '../DropDownMenu';
// GraphQL
import getCategoriesQuery from "../../graphql/yelp/queries/getCategories";
// Hooks
import requestData from "../../hooks/requestData";
// Utils
import formatCategories from "../../utils/formatCategories";

// Internal
// --------

export interface CategoriesDropDownProps {
    children: Array<string>
}

const CategoriesDropDown: React.FC<CategoriesDropDownProps> = ({ children, setCategories, categorySelected, categorySelectedCallback }) => {
    //
    // State

    const [categoriesMenuSelected, setCategoriesMenuSelected] = useState(false);

    //
    // Callback

    const categoryMenuSelectedCallback = useCallback(() => {
        setCategoriesMenuSelected(!categoriesMenuSelected);
    }, [categoriesMenuSelected, setCategoriesMenuSelected]);

    //
    // Render

    const categoriesData = requestData(getCategoriesQuery, { formatData: formatCategories });
    if (!categoriesData.isLoading && !categoriesData.hasError) {
        setTimeout(() => setCategories(categoriesData), 0);
    }

    return (
        <DropDownMenu text="Categories" selected={ categoriesMenuSelected } onClick={ categoryMenuSelectedCallback } dimensions={{ width: 244, height: 32 }} option={ categorySelected } setOption={ categorySelectedCallback }>
            { children }
        </DropDownMenu>
    );
}

// Exports
// -------

export default CategoriesDropDown;
