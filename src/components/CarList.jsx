import { useDispatch,useSelector } from 'react-redux'
import { removeCar } from '../Store'

const CarList = () =>{
  const dispatch = useDispatch();
  const cars = useSelector(({ cars: {data,searchTerm} }) => {
    return data.filter((car)=>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
  });
  return(
    <div className="car-list">
      {cars.map(car=>{
        return(
          <div key={car.id} className='panel'>
            <p>{car.name}- ${car.cost}</p>
            <button className="buttons is-danger" onClick={()=>dispatch(removeCar(car.id))}>Delete</button>
          </div>
        )})}
        <hr />
    </div>
  )
};
export default CarList;