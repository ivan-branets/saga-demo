export enum GalleryActionTypes {
  GET_IMAGE_URL_SUCCESS = 'GET_IMAGE_URL_SUCCESS',
  GET_IMAGE_URL_FAILURE = 'GET_IMAGE_URL_FAILURE',
}

export interface IGetImageUrlSuccessAction {
  type: GalleryActionTypes.GET_IMAGE_URL_SUCCESS,
  payload: {
    url: string
  }
}

export interface IGetImageUrlFailureAction {
  type: GalleryActionTypes.GET_IMAGE_URL_FAILURE,
  payload: {
    error: Error
  }
}

export type GalleryActions = IGetImageUrlSuccessAction | IGetImageUrlFailureAction;

export const getImageUrlSuccess = (url: string): IGetImageUrlSuccessAction => ({
  type: GalleryActionTypes.GET_IMAGE_URL_SUCCESS,
  payload: {
    url
  }
})

export const getImageUrlFailure = (error: Error): IGetImageUrlFailureAction => ({
  type: GalleryActionTypes.GET_IMAGE_URL_FAILURE,
  payload: {
    error
  }
})
