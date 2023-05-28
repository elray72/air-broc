import axios from 'axios';
import { delay } from '../../common/helpers';

/**
 * POST: api.postData('https://endpoint.com?p1={p1}&p2={p2}&{...params}');
 * @param url
 * @param data
 * @param params
 * @param timeout
 */
export const postData = async (
  url: string,
  { data, ...params }: any,
  timeout = 0,
) => {
  const [response] = await Promise.all([
    axios({
      method: 'POST',
      url,
      data,
      params,
    }),
    delay(timeout),
  ]);

  return response;
};
