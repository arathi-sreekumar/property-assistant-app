import { RootState } from "../store"

export const selectHomeBuyingCost = (state: RootState) => {
  return state.buy.homeCost
}

export const selectDeposit = (state: RootState) => {
  return state.buy.deposit
}

export const selectStampDuty = (state: RootState) => {
  return state.buy.stampDuty
}

export const selectConveyancingFee = (state: RootState) => {
  return state.buy.conveyancingFee
}

export const selectSurveyFee = (state: RootState) => {
  return state.buy.surveyFee
}

export const selectValuationFee = (state: RootState) => {
  return state.buy.valuationFee
}

export const selectTotalCost = (state: RootState) => {
  return state.buy.totalCost
}

export const selectYourCost = (state: RootState) => {
  return state.buy.yourCost
}
