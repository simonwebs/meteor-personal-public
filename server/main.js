import { Meteor } from 'meteor/meteor';
import '../app/access/methods/ContactsMethods';
import '../app/access/publications/ContactsPublication';
import { ContactsCollection } from '../app/access/collections/ContactsCollection';
import '../infra/CustomError';


Meteor.startup(() => {
      if (!ContactsCollection.find().count()) {
    ContactsCollection.insert({
  name: 'Simon Agbey',
  imageUrl: '#',
  email: 's.agbey@yahoo.com',
   subject: 'Website',
  message: 'Hello I need some stuff',
   createdAt: new Date(),
  });
}
 
});
