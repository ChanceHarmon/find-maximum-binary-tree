'use strict'
//Chance-- First Function records all values of nodes in a new array
let treeValues = [];
const pushNodeVals = () => {
  if (node.left === null || node.right === null || node.left === true || node.right === true) {
    pushNodeVals.push(treeValues);
  }
};

//Chance-- Second Function compares values of that new array to each other stating at 

const compareTreeValues = (treeValues) => {
  if (treeValues[0] > treeValues[1]) {
    treeValues.pop(treeValues[1]){
      if (treeValues[1] > treeValues[0]) {
        treeValues.pop(treeValues[0])
      } else (treeValues[0] && treeValues[1] !== true) {
        return treeValues[0];
      }
    }
  }
}