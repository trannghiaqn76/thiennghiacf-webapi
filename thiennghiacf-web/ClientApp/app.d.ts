type ENVIROMENT = 'local' | 'dev' | 'prod' | 'stag' | 'ci' | 'uat';
interface actionType {
  type: string;
  payload?: string | IMultiParameters;
}

interface actionError {
  type: string;
  payload?: string;
}
interface IResponse<T> {
  code: string;
  message: string;
  data: T;
  errorDescription?: string;
}

interface IParameters {
  [key: string]: string;
}

interface IMultiParameters {
  [key: string]: string | string[] | number | null;
}

interface ITypeParameters<T> {
  [key: string]: T;
}

interface INumberParameters {
  [key: string]: number;
}

interface IPageable {
  page: number;
  size: number;
  sort?: string[];
}

interface IPage {
  isEndPage: boolean;
  number: number;
  size: number;
  sort: any;
  totalElements: number;
  totalPages: number;
}
type IPageData = any;

interface IFormData {
  jsonData: object;
  file: any;
}
