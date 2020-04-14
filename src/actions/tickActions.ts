export enum TickActionTypes {
  TICK = 'TICK'
}

export interface ITickAction {
  type: TickActionTypes.TICK
}

export type TickActions = ITickAction;

export const tick = (): ITickAction => ({
  type: TickActionTypes.TICK
})
