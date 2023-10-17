import moment from 'moment';

export const formatInputName = (data: string) => {
    const regexEmoji =
        /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff]|\u200d|\u200c|\u2009|\u2002|\u2003|\u2008|\u200b|\u2000|\u2001)/gi;
    const regexSpace = /\s+/gi;
    return data.replace(regexEmoji, '').replace(regexSpace, ' ');
};

export function readUrlHashParams() {
    const hash = window.location.hash.substring(1);
    if (!hash) return null;

    const params: any = {};
    hash.split('&').forEach((hk) => {
        const temp = hk.split('=');
        const [name, value] = temp;
        params[name] = value;
    });

    return params;
}

export const encodeQueryUrl = (obj: any) => {
    return Object.keys(obj)
        .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
        .join('&');
};

export const decodeQueryUrl = (querystring = window.location.search) => {
    const obj: any = {};
    const params: any = new URLSearchParams(querystring);
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of params) {
        obj[key] = value;
    }

    return obj;
};

// export function getJsonFromUrl(url: string) {
//     // eslint-disable-next-line no-param-reassign
//     if (!url) url = window.location.search;
//     const query = url.substring(1);
//     const result: any = {};
//     query.split('&').forEach((part) => {
//         const item = part.split('=');
//         result[item[0]] = decodeURIComponent(item[1]);
//     });
//     return result;
// }

// export function getPageName() {
//     return localStorage.getItem('page') ?? window.location.pathname.split('/')[1] ?? 'HomePage';
// }

// export const removeEmpty = (obj = {}) => {
//     return (
//         Object.entries(obj)
//             // eslint-disable-next-line @typescript-eslint/no-unused-vars
//             .filter(([_, v]) => v != null && v !== '')
//             .reduce((acc, [k, v]) => ({...acc, [k]: v}), {})
//     );
// };

// export const isValidURL = (str: string) => {
//     const res = str.match(
//         /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/g,
//     );
//     return res !== null;
// };

// export const removeVietnameseTones = (str: string): string => {
//     str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
//     str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
//     str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
//     str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
//     str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
//     str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
//     str = str.replace(/đ/g, 'd');
//     str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
//     str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
//     str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
//     str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
//     str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
//     str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
//     str = str.replace(/Đ/g, 'D');
//     // Some system encode vietnamese combining accent as individual utf-8 characters
//     // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
//     str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
//     str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
//     // Remove extra spaces
//     // Bỏ các khoảng trắng liền nhau
//     str = str.replace(/ + /g, ' ');
//     str = str.trim();
//     // Remove punctuations
//     // Bỏ dấu câu, kí tự đặc biệt
//     // str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, ' ');
//     return str;
// };

// export const getParameterByName = (name: string, url?: string) => {
//     const path = url || window.location.pathname;
//     const pName = name.replace(/[\[\]]/g, '\\$&');
//     const regex = new RegExp(`[?&]${pName}(=([^&#]*)|&|#|$)`);
//     const results = regex.exec(path);

//     if (!results || !results[2]) {
//         return '';
//     }

//     return decodeURIComponent(results[2].replace(/\+/g, ' '));
// };

// export const getQueryString = (params: IParameters | INumberParameters) => {
//     const arr = Object.keys(params || {}).map((key) => `${key}=${params[key]}`);
//     return arr.length ? `?${arr.join('&')}` : '';
// };

// export const getQueryStringWithArray = (params: any , paramName: string): string => {
//     //?paramName=params[0]&paramName=params[1]&paramName=params[2]

//     const arr = params?.map((param) => `${paramName}=${param}`);
//     return arr?.length ? `${arr.join('&')}` : '';
// };

// export const getQueryStringWithArrayComma = (params: string[] | number[], paramName: string): string => {
//     //id_eq=params[0],id_eq=params[1],id_eq=params[2]

//     const arr = params?.map((param) => `${paramName}=${param}`);
//     return arr?.length ? `${arr.join(',')}` : '';
// };

// export const phoneStringToDash = (phoneNum: string): string => {
//     const regexp = /[\*\d]+/g;
//     const sNumber = phoneNum.match(regexp);

//     if (sNumber) {
//         let sDashTelNumber = sNumber.join('').toString();

//         if (sDashTelNumber.length < 3) {
//             sDashTelNumber = sDashTelNumber.replace(/(\d{3})/, '$1');
//         } else if (sDashTelNumber.length > 3 && sDashTelNumber.length < 7) {
//             sDashTelNumber = sDashTelNumber.replace(/(\d{1,3})\-?(\d{1,3})/, '$1-$2');
//         } else {
//             if (sDashTelNumber.substring(0, 4) === '0504') {
//                 sDashTelNumber = sDashTelNumber.replace(/(^02.{0}|^01.{1}|[0-9*]{4})([0-9*]+)([0-9*]{4})/, '$1-$2-$3');
//             }
//             sDashTelNumber = sDashTelNumber.replace(/(^02.{0}|^01.{1}|[0-9*]{3})([0-9*]+)([0-9*]{4})/, '$1-$2-$3');
//         }

//         return sDashTelNumber;
//     }
//     return phoneNum;
// };

// export const shortText = (string: string, number: number) => {
//     return string?.length > number ? string?.slice(0, number).concat('...') : string;
// };

// export const extractContent = (s: string) => {
//     const span = document.createElement('span');
//     span.innerHTML = s;
//     return span.textContent || span.innerText;
// };

// export const groupByKey = (array: any, key: string) => {
//     if (array?.length === 0 || !array) return [] as any;
//     return array.reduce((hash: any, obj: any) => {
//         if (obj[key] === undefined) return hash;
//         return Object.assign(hash, {[obj[key]]: (hash[obj[key]] || []).concat(obj)});
//     }, {});
// };

// export const formatStringTimePickerToMoment = (time: string) => {
//     const timeArr = time?.split(':');
//     return moment(`${timeArr?.length > 0 ? timeArr[0] : '00'}:${timeArr?.length > 0 ? timeArr[1] : '00'}:00`, 'HH:mm:ss');
// };
