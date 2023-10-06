export const loggedIn =()=>{
    return{
        type:"LOGIN"
    }
}
export const loggedout =()=>{
    return{
        type:"LOGOUT"
    }
}
export const setEmail = (email) => {
  return {
    type: 'SET_EMAIL',
    payload: email,
  };
};