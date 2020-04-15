import React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../store';

import './Gallery.scss';

interface IStateProps {
  urls: string[]
}

type IProps = IStateProps;

function Gallery({ urls }: IProps) {
  return <div className="gallery">
    {
      urls.map(url => <img key={url} src={url} className="item" alt="cat" />)
    }
  </div>;
}

const mapStateToProps = (store: IAppState): IStateProps => ({
  urls: store.gallery.urls
});

export default connect(mapStateToProps)(Gallery);
