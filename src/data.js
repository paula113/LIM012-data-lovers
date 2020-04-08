import data from './data/atletas/atletas.js';

export const filterAtletasForYear = (arr, num) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (Object.prototype.hasOwnProperty.call(arr[i], 'disciplinas')) {
      const arrayDisciplinas = arr[i].disciplinas;
      for (let j = 0; j < arrayDisciplinas.length; j += 1) {
        if (arrayDisciplinas[j]['año'] === num) {
          newArr.push(arr[i]);
        }
      }
    }
  }
  return newArr;
};


export const filterAtletasForTemporada = (arr, temp) => {
  const newArr = [];
  arr.forEach((element) => {
    if (Object.prototype.hasOwnProperty.call(element, 'disciplinas')) {
      element.disciplinas.forEach((x) => {
        if (x.temporada === temp) {
          newArr.push(element.sport);
        }
      });
    }
  });
  return newArr;
};

export const reducingRepeatingVals = (arr) => {
  const shortArr = arr.reduce((acc, currentValue) => {
    if (acc.indexOf(currentValue) === -1) {
      acc.push(currentValue);
    }
    return acc;
  }, []);
  return shortArr;
};

export const createStringLiteral = (arr, key) => {
  let strTemplate = '';
  for (let i = 0; i < arr.length; i += 1) {
    strTemplate += `<div id="listDiv"class="sportContainer">
                         <p class="sportTitle">${arr[i][key]}</p>
                   </div>`;
  }
  return strTemplate;
};

export const compare = (a, b) => {


  });
 };


export const displayAllData = (arry) => {
  const newArr = [];
  arry.forEach((element) => {
    if (Object.prototype.hasOwnProperty.call(element, 'disciplinas')) {
      element.disciplinas.forEach((objeto) => {
        newArr.push(objeto);
      });
    }
  });
  return newArr;
};


export default data.js;
