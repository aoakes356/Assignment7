import { _ } from 'meteor/underscore';
import { Friend } from '../../api/stuff/stuff.js';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const friendSeeds = [
  { first: 'Alfredo', last: 'Sauce', address: 'a', phone: 'a', email: 'a' },
  { first: 'Frodo', last: 'Baggins', address: 'The Shire', phone: 'a', email: 'a' },
  { first: 'Harry', last: 'Potter', address: 'Under the stairs', phone: 'a', email: 'a' },
  { first: "I'm out of ideas", last: 'a', address: 'a', phone: 'a', email: 'a' },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Friend.find().count() === 0) {
  _.each(friendSeeds, function seedFriends(friend) {
    Friend.insert(friend);
  });
}
