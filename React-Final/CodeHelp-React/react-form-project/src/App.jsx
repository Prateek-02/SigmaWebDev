import './App.css'
import { useForm} from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm();

  async function onSubmit(data){
    await new Promise((resolve) => setTimeout(resolve,5000));
    console.log("submitting the form",data);
  }

  return (
    <form onSubmit = {handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input
          className={errors.firstName ? 'input-error': ''}
         {...register('firstName',
          {
            required:true,
            minLength:{value:3,message:'Min Len atleast 3'},
            maxLength:{value:10,message:'Max Len atmost 10'}
          })}/>
          {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br />
      <div>
        <label>Middle Name: </label>
        <input {...register('middleName')}
        className={errors.middleName ? 'input-error': ''} />
      </div>
      <br />
      <div>
        <label>Last Name: </label>
        <input 
        className={errors.lastName ? 'input-error': ''}
        {...register('lastName',{
           required:true,
           pattern:{
            value: /^[A-za-z]+$/i,
            message:"Last name is not valid"
          }
            
          })} />
          {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
      </div>
      <br />
      <input type="submit" disabled={isSubmitting} 
      value={isSubmitting ? "Submitting" : "Submit"}/>
    </form>
  )
}

export default App
