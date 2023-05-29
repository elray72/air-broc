import * as api from './common/api';
import { InvitationRequest } from '../models';

const apiUrl = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com';

class InvitationService {
  createInvitation = (data: InvitationRequest) => {
    return api
      .postData(
        `${apiUrl}/prod/fake-auth`,
        {
          data,
        },
        100,
      )
      .catch(error => {
        console.error(error);
        return error.response;
      });
  };
}

export default new InvitationService();
