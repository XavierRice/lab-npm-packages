const _ = require("lodash");
const simpleArray = require("./data/simple-array.json");
const yogaClasses = require("./data/yoga.json");
const members = require("./data/members.json");
const newMember = require("./data/new-member");
const membersNoAge = require("./data/members-without-ages.json")
/**
 * Return the number of keys in an object
 * @param {Object} obj -
 * @return {number} The number of keys in the object
 */
function numberOfKeys(obj) {

return _.keys(obj).length

}
//console.log(numberOfKeys(yogaClasses))
/**
 * Remove the falsy values in a numbers array and return the sum
 * @param {numbers[]} array - An array of numbers that can also contain some falsy values
 * @return {number} The sum of the numbers in an array
 */
function sumNumbers(array) {

  let correctArray = _.compact(array)
  return _.sum(correctArray)
}
//console.log(sumNumbers(simpleArray))
/**
 * Convert a two-dimensional array of new member data (each inner array having two values: the first being the key, the second being the value) into an object
 * @param {Array[]} member -
 * @return {number} The sum of the numbers in an array
 */
function newMemberArrayToObject(member) {

 return  _.fromPairs(member);
  
}

/**
 * Return an array of objects that grouped by instructors from the classes array of objects
 * @param {Object[]} collection - an array of yoga class objects
 * @return {Object[]} - the reshaped collection where the classes are grouped by instructor name
 */
function groupClassByInstructor(collection) {

 return _.groupBy(collection,"instructor" );
}

/**
 * Remove the age key from the members array of object
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects, each one without the age field
 */
function omitAgeFromMembers(collection) {

  return _.map(collection, (members) => _.omit(members, "age"));
}

/**
 * Return the count of the number of classes a particular instructor teaches
 * @param {Object[]} collection - An array of yoga class objects
 * @param {String} instructorName - The name of the instructor
 * @return {number} The sum of the numbers in an array
 */
function countClassesByInstructor(collection, instructorName) {
//(instructor != undefined) ? _.countBy(collection, instructor) : "There is no instructor by that name."
const filteredCollection = _.filter(collection, {'instructor': instructorName}).length;
 return (filteredCollection > 0) ? filteredCollection : "There is no instructor by that name.";

}

/**
 * Remove inactive members from the members array
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects with only active members
 */
function removeInactiveMembers(collection) {

let filteredMembers = _.filter(collection, (members) => members.currentMember)
return filteredMembers;
}

/**
 * Get a list of unique class titles and their price
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that have a unique title and a price
 */
function getUniqueClasses(collection) {

  let NewClassInfo = _.map(_.uniqBy(collection, "title"), ({title, priceInCents }) => ({title, priceInCents}));
  return NewClassInfo
}

/**
 * Get a list of classes organized by title, then by level.
 * The titles should be in ascending order, the levels should be in descending order
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that are organized by title then by level. The array should only have the title, instructor, and level fields
 */
function orderClassesByTitleAndLevel(collection) {
  let reorganizedClasses = _.map(
    _.orderBy(collection, ['title', 'level'], ['asc', 'desc']),
    ({ title, instructor, level }) => ({ title, instructor, level })
  );
 
   return reorganizedClasses;
}

module.exports = {
  numberOfKeys,
  sumNumbers,
  newMemberArrayToObject,
  groupClassByInstructor,
  omitAgeFromMembers,
  countClassesByInstructor,
  removeInactiveMembers,
  getUniqueClasses,
  orderClassesByTitleAndLevel,
};
