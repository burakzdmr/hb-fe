import { gql } from "@apollo/client";


export const fetchItemsQuery = gql`
query fetchItems($name: String!) {
  fetchItems(name: $name) {
    brand
      changepercent
      color
      createddate
      id
      imageurl
      name
      oldprice
      price
  }
}
`;


export const getFiltersQuery = gql`
{
  getFilters{
   count
    name
    type
  }
  }
`

export const getData = gql`
query fetchData($name: String!,$brand: String!,$color: String!,$page: String!)
{
fetchData(name : $name, brand :$brand, color : $color, page : $page)  
{
  filters{count,name,type}
  paginatedItemList{
      brand
      changepercent
      color
      createddate
      id
      imageurl
      name
      oldprice
      price
  }
  pageCount
}
}

`;