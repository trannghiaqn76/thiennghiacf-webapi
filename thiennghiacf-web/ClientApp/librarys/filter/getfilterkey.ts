import moment, { isDate } from "moment";

export type UrlFilterOperator = 'eq' | 'gt' | 'gte' | 'lt' | 'lte' | 'contains' | 'containss' | 'null';

export const getFilterKey = (fieldName: string, operator: UrlFilterOperator = 'eq') => {
  return fieldName + '_' + operator;
};

export const searchParamsToObject = (query?: string, ...includesKeys: string[]): Record<string, string | string[]> => {
    const currentUrlParams = query
      ? new URLSearchParams(query)
      : new URLSearchParams(location.search);
    
    const searchParamsEntries = currentUrlParams.entries();
    const search = Array.from(searchParamsEntries);
  
    return search.reduce(
      (currentResult, item) => {
        const key = item[0];
        const value = item[1];
  
        if (!includesKeys.length || includesKeys.includes(key)) {
  
          const prevValue = currentResult[key];
          if (prevValue) {
            if (Array.isArray(prevValue)) {
              return {
                ...currentResult,
                [key]: [...prevValue, value]
              };
            }
  
            return {
              ...currentResult,
              [key]: [prevValue, value]
            };
          }
  
          return { ...currentResult, [key]: value };
        }
  
        return currentResult;
      },
      {},
    );
  };

  export const objectToSearchParams = (obj = {}, initSearch?: string) => {
    const newSearch = new URLSearchParams(initSearch);
  
    for (const key of Object.keys(obj)) {
      if (obj[key]) {
        let value = obj[key];
        if (isDate(value) || moment.isMoment(value)) {
          value = value.toISOString();
        }
        if (Array.isArray(value)) {
          value.forEach(o => {
            newSearch.append(key, <string>o);
          });
        } else {
          newSearch.set(key, <string> value);
        }
      } else {
        newSearch.delete(key);
      }
    }
  
    return newSearch;
  };