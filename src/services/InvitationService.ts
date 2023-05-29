import * as api from './common/api';
import { InvitationRequest } from '../models';

const apiUrl = import.meta.env.APP_INVITATION_API_URL;

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
