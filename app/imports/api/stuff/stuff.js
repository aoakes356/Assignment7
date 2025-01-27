import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');
export const Friend = new Mongo.Collection('Friend');

/**
 * Create the schema for Stuff
 */
export const StuffSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: 'Bicycle',
    },
  },
  quantity: {
    label: 'Quantity',
    type: Number,
    optional: false,
    autoform: {
      group: 'Stuff',
      placeholder: '3',
    },
  },
});

export const FriendSchema = new SimpleSchema({
  first: {
    label: 'First',
    type: String,
    optional: false,
    max: 25,
    autoform: {
      placeholder: 'John',
    },
  },
  last: {
    label: 'Last',
    type: String,
    optional: false,
    max: 25,
    autoform: {
      placeholder: 'Smith',
    },
  },
  address: {
    label: 'Address',
    type: String,
    optional: false,
    max: 25,
    autoform: {
      placeholder: '123 Main st. City, State Zip',
    },
  },
  phone: {
    label: 'Phone',
    type: String,
    optional: false,
    max: 25,
    autoform: {
      placeholder: 'Smith',
    },
  },
  email: {
    label: 'Email',
    type: String,
    optional: false,
    max: 25,
    autoform: {
      placeholder: 'first.last@wsu.edu',
    },
  },
});
Stuff.attachSchema(StuffSchema);
Friend.attachSchema(FriendSchema);
