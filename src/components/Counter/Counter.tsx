import React from 'react';
import { Container } from 'react-bootstrap';
import { IAppState } from '../../store';
import * as tickActions from '../../actions/tickActions';
import { connect } from 'react-redux';

import './Counter.scss';

interface IStateProps {
  count: number;
}

interface IDispatchProps {
  tick: () => void,
  start: () => void,
  stop: () => void
}

type IProps = IStateProps & IDispatchProps;

function Counter({ count, tick, start, stop }: IProps) {
  return <Container className="counter d-flex align-items-center justify-content-center p-4">
    <div className="input-group w-25">
      <input type="text" className="form-control" value={count} readOnly />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" onClick={() => tick()}>+</button>
      </div>
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" onClick={() => start()}>Start</button>
      </div>
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" onClick={() => stop()}>Stop</button>
      </div>
    </div>
  </Container>
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

