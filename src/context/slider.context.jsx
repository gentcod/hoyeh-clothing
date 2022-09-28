import { createContext, useReducer } from "react";

export const SliderContext = createContext({
   sliderData: [],
});

const SLIDER_ACTION_TYPE = {
   ADD_TO_SLIDER: 'ADD_TO_SLIDER',
};

const INITIAL_STATE = {
   sliderData: [
      {
         "id": 0,
         "imageSrc": "../../hoyeh clothing/img/1.jpg"
      },
   
      {
         "id": 0,
         "imageSrc": "../../hoyeh clothing/img/2.jpg"
      },
   
      {
         "id": 0,
         "imageSrc": "../../hoyeh clothing/img/3.jpg"
      },
   
      {
         "id": 0,
         "imageSrc": "../../hoyeh clothing/img/4.jpg"
      },
   
      {
         "id": 0,
         "imageSrc": "../../hoyeh clothing/img/5.jpg"
      }
   ],
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

   const [sliderData] = useReducer(sliderReducer, INITIAL_STATE);

   const value = { sliderData}

   return (
      <SliderProvider value={value}>{children}</SliderProvider>
   )
};