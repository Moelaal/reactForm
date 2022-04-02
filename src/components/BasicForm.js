import useValidate from "../hooks/my-inputs";

const BasicForm = (props) => {
  const {
    value: enetredEmail,
    isValid: valueIsValid,
    changeValueHandler: emailChangeHandler,
    blurValueHandler: emailBlurHandler,
    hasError: emailHasError,
    reset: emailResetValues,
  } = useValidate((value) => value.includes("@"));

  const {
    value: enteredFname,
    isValid: fnameIsValid,
    changeValueHandler: fnameChangeHandler,
    blurValueHandler: fnameBlurHandler,
    reset: fnameResetValues,
    hasError: fnameHasError,
  } = useValidate((value) => value.trim() !== "");

  const {
    value: enteredLname,
    isValid: lnameIsValid,
    changeValueHandler: lnameChangeHandler,
    blurValueHandler: lnameBlurHandler,
    reset: lnameResetValues,
    hasError: lnameHasError,
  } = useValidate((value) => value.trim() !== "");

  let formIsValid = false;

  if (valueIsValid && fnameIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!valueIsValid && !fnameIsValid && !lnameIsValid) {
      return;
    }

    lnameResetValues();
    fnameResetValues();
    emailResetValues();
  };

  const classfNameValid = fnameHasError
    ? "form-control invalid"
    : "form-control";

  const classesLnameValid = lnameHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={classfNameValid}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            onBlur={fnameBlurHandler}
            onChange={fnameChangeHandler}
            value={enteredFname}
          />
          {fnameHasError && (
            <p className="error-text">Please enter a valid name.</p>
          )}
        </div>
        <div className={classesLnameValid}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            onBlur={lnameBlurHandler}
            onChange={lnameChangeHandler}
            value={enteredLname}
          />
          {lnameHasError && (
            <p className="error-text">Please enter a valid name.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          value={enetredEmail}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
