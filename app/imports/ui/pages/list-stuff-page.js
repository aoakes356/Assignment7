import { Template } from 'meteor/templating';
import { Friend } from '../../api/stuff/stuff.js';

Template.List_Stuff_Page.helpers({

  /**
   * @returns {*} All of the Friend documents.
   */
  friendList() {
    return Friend.find();
  },
});
