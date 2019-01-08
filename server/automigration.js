var server = require("./server");
var ds = server.dataSources.myDB;

ds.automigrate("Invoice", function(er) {
   if (er) {
      throw er;
   }
   console.log('Invoice model migrate');
   // ds.disconnect();
});

ds.automigrate("Order", function(er) {
   if (er) {
      throw er;
   }
   console.log('Order model migrate');
   // ds.disconnect();
});

ds.automigrate("Product", function(er) {
   if (er) {
      throw er;
   }
   console.log('Product model migrate');
   // ds.disconnect();
});

ds.automigrate("OrderPosition", function(er) {
   if (er) {
      throw er;
   }
   console.log('OrderPosition model migrate');
   // ds.disconnect();
});

ds.automigrate("Payment", function(er) {
   if (er) {
      throw er;
   }
   console.log('Payment model migrate');
   // ds.disconnect();
});

ds.automigrate("Vat", function(er) {
   if (er) {
      throw er;
   }
   console.log('Vat model migrate');
   // ds.disconnect();
});

ds.automigrate("Buyer", function(er) {
   if (er) {
      throw er;
   }
   console.log('Buyer model migrate');
   // ds.disconnect();
});

ds.automigrate("TaxPayer", function(er) {
   if (er) {
      throw er;
   }
   console.log('TaxPayer model migrate');
   // ds.disconnect();
});

ds.automigrate("Contact", function(er) {
   if (er) {
      throw er;
   }
   console.log('Contact model migrate');
   // ds.disconnect();
});

ds.automigrate("Address", function(er) {
   if (er) {
      throw er;
   }
   console.log('Address model migrate');
   // ds.disconnect();
});

ds.automigrate("Role", function(er) {
   if (er) {
      throw er;
   }
   console.log('Role model migrate');
   // ds.disconnect();
});

ds.automigrate("RoleMapping", function(er) {
   if (er) {
      throw er;
   }
   console.log('RoleMapping model migrate');
   // ds.disconnect();
});

ds.automigrate("Worker", function(er) {
   if (er) {
      throw er;
   }
   var User = ds.models.Worker;
   var Role = ds.models.Role;
   var RoleMapping = ds.models.RoleMapping;

Role.find({ name: 'admin' }, function(err, results) {
   if (err) { /* handle this! */ }

   if (results.length < 1) {
           User.create([
     {
           email: "admin@admin.com",
          password: "admin", 
          username:"admin",
          realm: null
       }
   ], function(err, users) {
     if (err) throw err;

     Role.create({
       name: "admin"
     }, function(err, role) {
       if (err) throw err;
       role.principals.create({
         principalType: RoleMapping.USER,
         principalId: users[0].id
       }, function(err, principal) {
         if (err) throw err;
       });
     });
   });
   }
});
   console.log('Worker model migrate');
   
   // ds.disconnect();
});

ds.automigrate("ACL", function(er) {
   if (er) {
      throw er;
   }
   console.log('ACL model migrate');
   // ds.disconnect();
});

ds.automigrate("AccessToken", function(er) {
   if (er) {
      throw er;
   }
   console.log('AccessToken model migrate');
   // ds.disconnect();
});
ds.disconnect();