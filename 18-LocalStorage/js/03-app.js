//Eliminar y Actualizar elementos del LocalStorage   
localStorage.removeItem('nombre'); //Elimina el elemento con el nombre que le pasemos

//Actualizar elementos del LocalStorage
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
//Para agregarle nuevo mes
mesesArray.push('Abril');
console.log(mesesArray);
//Ya que esta actulizado los datos utilizamos setItem
localStorage.setItem('meses', JSON.stringify(mesesArray));



localStorage.clear(); //Elimina todos los datos del LocalStorage