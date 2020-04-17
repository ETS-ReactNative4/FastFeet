export function getRecipientsRequest(page, name) {
  return {
    type: '@recipients/GET_REQUEST',
    payload: { page, name },
  };
}

export function getRecipientsSuccess(recipients) {
  return {
    type: '@recipients/GET_SUCCESS',
    payload: { recipients },
  };
}

export function getRecipientsFailure() {
  return {
    type: '@recipients/GET_FAILURE',
  };
}
export function updateRecipientsRequest(data) {
  return {
    type: '@recipients/UPDATE_REQUEST',
    payload: { data },
  };
}

export function updateRecipientsSuccess() {
  return {
    type: '@recipients/UPDATE_SUCCESS',
  };
}

export function updateRecipientsFailure() {
  return {
    type: '@recipients/UPDATE_FAILURE',
  };
}
