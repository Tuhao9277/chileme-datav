import request from '../utils/request';

const icode = '13926EAFCAA16CC3';

export function wordcloud(): Promise<any> {
  return request({
    url: '/screen/wordcloud',
    method: 'get',
    params: { icode },
  });
}

export function mapScatter(): Promise<any> {
  return request({
    url: '/screen/map/scatter',
    method: 'get',
    params: { icode },
  });
}

export async function screenData(): Promise<any> {
  return request({
    url: '/screen/data',
    method: 'get',
    params: { icode },
  });
}
