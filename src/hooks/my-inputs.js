import { useState} from 'react';

const useValidate = (validateInput) => {
  const [ enteredValue, setEnteredValue] = useState("");
  const [isTouched,setIsTouched] = useState(false);

  const valueIsValid = validateInput(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const changeValueHandler = (e) =>{
      setEnteredValue(e.target.value);
  }

  const blurValueHandler = (e) =>{
      setIsTouched(true)
  }

  const reset = () =>{
    setEnteredValue('');
    setIsTouched(false)
    }



  return {
      value:enteredValue,
      isValid:valueIsValid,
      hasError,
      changeValueHandler,
      blurValueHandler,
      reset

  }
}

export default useValidate