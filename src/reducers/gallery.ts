import { Reducer } from 'redux';
import { GalleryActions, GalleryActionTypes } from '../actions/galleryActions';

export interface IGalleryState {
  urls: string[]
}

const initialState: IGalleryState = {
  urls: []
}

export const galleryReducer: Reducer<IGalleryState, GalleryActions> =
  (state = initialState, action) => {
    switch (action.type) {
      case GalleryActionTypes.GET_IMAGE_URL_SUCCESS: {
        return {
          ...state,
          urls: [
            ...state.urls,
            action.payload.url
          ]
        }
      }
      default: {
        return state;
      }
    }
  }
