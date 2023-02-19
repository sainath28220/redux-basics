import { useDispatch,useSelector } from 'react-redux'
import { changeName,changeCost,addCar } from '../Store';

const CarForm = () =>{
  const dispatch = useDispatch();
  const { name, cost }= useSelector((state)=>{
    return state.form
  })

  const handleNameChange = (event) =>{
    dispatch(changeName(event.target.value))
  };

  const handleCostChange = (event) =>{
    dispatch(changeCost(parseInt(event.target.value) || 0))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({name,cost}))
  }

  return(
    <div className='car-form panel'>
      <h4 className='subtitle is-3'></h4>
      <form onSubmit={handleSubmit}>
        <div className='field-group'>
          <div className='field'>
            <label className='label'>Name</label>
            <input className='input is-expanded' value={name} onChange={handleNameChange}/>
          </div>
          <div className='field'>
            <label className='label'>Cost</label>
            <input className='input is-expanded' value={cost || ''} onChange={handleCostChange} type='number'/>
          </div>
        </div>
        <div className='field'>
          <button type='submit' className='button is-link'>Add Car</button>
        </div>
      </form>
    </div>
  )
};
export default CarForm;