import React, { FunctionComponent, useState } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import { IAppState } from '../../store';
import * as tickActions from '../../actions/tickActions';

import './Counter.scss';

enum PlayButtonTypes {
  PLAY = 'PLAY',
  STOP = 'STOP'
}

interface IStateProps {
  count: number;
}

interface IDispatchProps {
  tick: () => void,
  start: () => void,
  stop: () => void
}

type IProps = IStateProps & IDispatchProps;

const Counter: FunctionComponent<IProps> = ({ count, tick, start, stop }: IProps) => {
  const [playButtonType, setPlayButtonType] = useState(PlayButtonTypes.PLAY);

  return <Container className="counter d-flex align-items-center justify-content-center p-4">
    <div className="input-group w-25">
      <input type="text" className="form-control" value={count} readOnly />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" onClick={() => tick()}>
          <FontAwesomeIcon
            icon={faPlus}
          />
        </button>
      </div>
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            if (playButtonType === PlayButtonTypes.PLAY) {
              start();
              setPlayButtonType(PlayButtonTypes.STOP);
            } else {
              stop();
              setPlayButtonType(PlayButtonTypes.PLAY);
            }
          }}
        >
          <FontAwesomeIcon
            icon={playButtonType === PlayButtonTypes.PLAY ? faPlay : faStop}
          />
        </button>
      </div>
    </div>
  </Container>;
}

const mapStateToProps = (store: IAppState): IStateProps => ({
  count: store.ticks.count
});

const mapDispatchToProps: IDispatchProps = {
  tick: tickActions.tick,
  start: tickActions.start,
  stop: tickActions.stop
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

