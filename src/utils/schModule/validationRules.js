const getValidationRules = (funcName, field) => {
  if (funcName === 'committe') {
    if (field === 'engName') {
      return [
        {required: true, message: 'Name (Eng) should not be blank.'}
      ]
    } else if (field === 'representative') {
      return [
        {required: true, message: 'Representative should not be blank'}
      ]
    }
  }
}

export default getValidationRules;