
export const getFiltersList = (categoriesData) => {
  const categories = getCategoriesList(categoriesData)
  
  return [
    {
      id: "price",
      text: "Price",
      values: [
        {
          id: "all",
          text: "All",
          isActive: true
        },
        {
          id: "$",
          text: "$"
        },
        {
          id: "$$",
          text: "$$"
        },
        {
          id: "$$$",
          text: "$$$"
        },
        {
          id: "$$$$",
          text: "$$$$",
        }
      ]
    },
    {
      id: "categories",
      text: "Categories",
      minWidth: 193,
      values: categories
    }
  ]
}

const getCategoriesList = (categoriesData) => {
  const categoriesList = categoriesData.map(({ categories }) => {
    const innerCategories = categories.map(({ alias, title }) => {
      return {
        alias,
        title
      }
    })

    return innerCategories
  })

  const flatCategories = categoriesList.flat()
  const categories = flatCategories.filter((item, index, self) => self.findIndex(category => category.alias === item.alias) === index)
  const sortedCategories = categories.sort((previous, current) => (previous.title > current.title) ? 1 : -1)
  return sortedCategories
}