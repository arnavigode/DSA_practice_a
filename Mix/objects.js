const myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
  };

  function showProps(obj, objName) {
    let result = '';
    for (let i in obj) {
      // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
      if (obj.hasOwnProperty(i)) {
        result += `${objName}.${i} = ${obj[i]}\n`;
      }
    }
    console.log(result);
  }
  showProps(myCar, 'myCar')