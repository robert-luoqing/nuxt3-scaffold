import { v4 as uuidv4 } from 'uuid';
import { replace } from 'lodash';

export const uuidUtil = {
  generateUUID: () => {
    return uuidv4();
  },
  generateUUIDWithoutDash: () => {
    const uuid = uuidv4();
    return replace(uuid, /-/g, '');
  }
};
