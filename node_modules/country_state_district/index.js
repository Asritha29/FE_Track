class CountryStateDistrict {
  getAllCountries = () => {
    return require('./country.json');
  }

  getAllStates = () => {
    return require('./state.json');
  }

  getStatesByCountryId = (id) => {
    let states = indexBy(this.getAllStates(), 'country_id');
    return states[id];
  }

  getAllDistricts = () => {
    return require('./city.json');
  }

  getDistrictsByStateId = (id) => {
    let district = indexBy(this.getAllDistricts(), 'state_id');
    return district[id];
  }
}

module.exports = { CountryStateDistrict }

let indexBy = (array_val, key) => {
  let returnVal = {};
  array_val.forEach(item => {
    if(returnVal[item[key]]) {
      returnVal[item[key]].push(item)
    } else {
      returnVal[item[key]] = [item]
    }
  })
  return returnVal;
}
