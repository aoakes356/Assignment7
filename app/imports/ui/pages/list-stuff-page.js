import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Template } from 'meteor/templating';
import { Friend } from '../../api/stuff/stuff.js';

Template.List_Stuff_Page.helpers({

  /**
   * @returns {*} All of the Friend documents.
   */
  friendList() {
    /** const id = Meteor.userId();
     * return Friend.find({ user: id });
     * This would be good but it's not mentioned in the functionality section.
    */
    return Friend.find();
  },
});
