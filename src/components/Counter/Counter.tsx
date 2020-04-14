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
  tick: () => void
}

type IProps = IStateProps & IDispatchProps;

function Counter({ count, tick }: IProps) {
  return <Container className="counter d-flex align-items-center justify-content-center p-4">
    <div className="input-group w-25">
      <input type="text" className="form-control" value={count} />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" onClick={() => tick()}>+</button>
      </div>
    </div>
  </Container>
}

const mapStateToProps = (store: IAppState): IStateProps => ({
  count: store.ticks.count
});

const mapDispatchToProps: IDispatchProps = {
  tick: tickActions.tick
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

