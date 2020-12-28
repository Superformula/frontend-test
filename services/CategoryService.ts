import { Category } from '~/models';
import axios from '~/utils/axios';

export interface Categories {
  categories: Category[];
}

export const getAll = async (): Promise<Categories> => {
  const { data } = await axios.get<Categories>('/categories');

  const categories: Category[] = data.categories.reduce((previousValue, currentValue) => {
    const { parent_aliases, alias, title } = currentValue;

    if (parent_aliases.includes('restaurants')) previousValue.push({ alias, title });
    return previousValue;
  }, []);

  return { categories };
};
