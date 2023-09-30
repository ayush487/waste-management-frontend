const backendApiURL = "http://localhost:8080";

export const sendLoginRequest = async (
  basicToken,
  loginFunction,
  navigate,
  setLoggingIn,
  setError
) => {
  setLoggingIn(true);
  fetch(`${backendApiURL}/login`, {
    method: "POST",
    headers: {
      Authorization: basicToken,
    },
  })
    .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        throw new Error('Wrong Username or Password')
      }
    })
    .then((data) => {
      console.log(data);
      setError(null)
      loginFunction(basicToken, data)
      setLoggingIn(false);
      navigate("/")
    })
    .catch(error => {
      setError(error.message)
      setLoggingIn(false)
    })
};

export const sendSignupRequest = (
  signupData,
  naviateFunction,
  setSigningUp,
  setError
) => {
  setSigningUp(true);
  fetch(`${backendApiURL}/signup`, {
    method: "post",
    body: JSON.stringify(signupData),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json()
  }).then(data => {
    if(data.errorCount) {
      console.log('Signup Error')
      setError(data.message[0])
    } else {
      console.log('Signup Success')
      setError(null)
      naviateFunction("/login")
    }
    setSigningUp(false)
  });
};
