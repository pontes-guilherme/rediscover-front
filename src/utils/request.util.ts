import {QueryBuilderRequest} from "@/models/Base/FetchRequest.interface";

export const objectToQueryString = (object: Object): string => {
  return Object.keys(object).map(key => {
    // @ts-ignore
    return `${key}=${encodeURIComponent(object[key])}`;
  }).join('&');
}

export const objectToFilterQuery = (object: Object): string => {
  return Object.keys(object).map(key => {
    // @ts-ignore
    return `filter[${key}]=${encodeURIComponent(object[key])}`;
  }).join('&');
}

export const prepareQueryBuilderRequest = (url: string, params: QueryBuilderRequest) => {
  const {
    filters,
    sort,
    includes,
    page,
    ...others
  } = params;

  if (filters && Object.keys(filters).length > 0) {
    url += `${objectToFilterQuery(filters)}&`;
  }

  if (sort && Object.keys(sort).length > 0) {
    url += `sort=${sort.sortOrder === 'desc' ? '-' : ''}${sort.sortBy}&`;
  }

  if (includes && includes.length > 0) {
    url += `include=${includes.join(',')}&`;
  }

  if (page && Object.keys(page).length > 0) {
    url += `page=${page.page}&per_page=${page.per_page}&`;
  }

  if (others && Object.keys(others).length > 0) {
    url += `${objectToQueryString(others)}`;
  }

  return url;
}
