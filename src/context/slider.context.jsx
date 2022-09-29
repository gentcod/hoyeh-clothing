import { createContext, useReducer, useEffect } from "react";

import { createAction } from "../utilities/reducer/reducer.utilities";

export const SliderContext = createContext({
   sliderData: [],
});

const SLIDER_ACTION_TYPE = {
   ADD_TO_SLIDER: 'ADD_TO_SLIDER',
};

const INITIAL_STATE = {
   
};

const sliderReducer = (state, action) => {
   const {type, payload} = action;

   switch(type) {
      case SLIDER_ACTION_TYPE.ADD_TO_SLIDER:
         return {
            ...state,
            ...payload,
         }

      default: 
         throw new Error (`Could not fetch data of ${type}`)
   }
};

export const SliderProvider = ({children}) => {

   const [{sliderData}, dispatch] = useReducer(sliderReducer, INITIAL_STATE);

   useEffect(()=> {
      dispatch(createAction(SLIDER_ACTION_TYPE.ADD_TO_SLIDER, INITIAL_STATE.sliderData))
   }, [sliderData])

   const value = { sliderData}

   return (
      <SliderProvider value={value}>{children}</SliderProvider>
   )
};