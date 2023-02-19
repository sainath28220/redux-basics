import { configureStore } from '@reduxjs/toolkit';
import { carsReducer,changeSearchTerm,addCar,removeCar } from './slices/CarsSlice';
import { formReducer,changeName,changeCost} from './slices/FormSlice';

const store = configureStore({
  reducer:{
    cars: carsReducer,
    form: formReducer
  }
});

export { store,changeName,changeCost,changeSearchTerm,addCar,removeCar };





