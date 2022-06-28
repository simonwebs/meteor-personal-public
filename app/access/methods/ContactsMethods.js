import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { ContactsCollection } from '../collections/ContactsCollection';

Meteor.methods({
  'contacts.insert'({ name, email, subject, imageUrl, message }) {
    check(name, String);
    check(email, String);
    check(subject, String);
    check(imageUrl, String);
     check(message, String);
    if (!name) {
      throw new Meteor.Error('Name is required.');
    }
    return ContactsCollection.insert({ name, email, imageUrl, subject, message, createdAt: new Date() });
  },
  'contacts.archive'({ contactId }) {
    check(contactId, String);
    ContactsCollection.update({ _id: contactId }, { $set: { archived: true } });
  },
   'contacts.remove'({ contactId }) {
      check(contactId, String);
     
        ContactsCollection.remove(contactId);
    
    }
});
