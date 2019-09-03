export const UPDATE_NAMEINPUT = 'UPDATE_NAMEINPUT';
export const updateName = name => ({
  type: UPDATE_NAMEINPUT,
  payload: name
});

export const UPDATE_NUMBERINPUT = 'UPDATE_NUMBERINPUT';
export const updateNumber = number => ({
  type: UPDATE_NUMBERINPUT,
  payload: number
});
