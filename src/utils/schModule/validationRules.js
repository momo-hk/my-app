export const validationRules = (funcName, field) => {
  if (funcName === 'committe') {
    if (field === 'engName') {
      return [
        {required: true, message: 'Please input English name!'}
      ]
    } else if (field === 'representative') {
      return [
        {required: true, message: 'Please input Repesentative!'}
      ]
    }
  }
}