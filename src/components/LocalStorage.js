function storeData(dataName, dataItems) {
    localStorage.setItem(dataName, JSON.stringify(dataItems));
}
// get Data
function getData(dataName) {
  if (localStorage.getItem(dataName)) {
    const data = JSON.parse(localStorage.getItem(dataName), []);
    return data;
  } else {
    console.log('empty data');
  }
}

function clearData(dataName) {
  if (localStorage.getItem(dataName)) {
    // if found sets the ds to an empty array
    localStorage.removeItem(dataName);
    console.log('data cleared');
  } else {
    console.log('empty data');
  }
}

const localstorageFunctions = {
  storeData,
  getData,
  clearData
}

export default localstorageFunctions;
