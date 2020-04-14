export enum TickActionTypes {
  TICK = 'TICK',
  START = 'START',
  STOP = 'STOP'
}

export interface ITickAction {
  type: TickActionTypes.TICK,
  payload: {}
}

export interface IStartAction {
  type: TickActionTypes.START,
  payload: {}
}

export interface IStopAction {
  type: TickActionTypes.STOP,
  payload: {}
}

export type TickActions = ITickAction | IStartAction | IStopAction;

export const tick = (): ITickAction => ({
  type: TickActionTypes.TICK,
  payload: {}
})

export const start = (): IStartAction => ({
  type: TickActionTypes.START,
  payload: {}
})

export const stop = (): IStopAction => ({
  type: TickActionTypes.STOP,
  payload: {}
})
