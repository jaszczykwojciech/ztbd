// module.exports = function(app) {

//     var User = app.models.Worker;
//     var Role = app.models.Role;
//     var RoleMapping = app.models.RoleMapping;

// Role.find({ name: 'admin' }, function(err, results) {
//     if (err) { /* handle this! */ }

//     if (results.length < 1) {
//             User.create([
//       {
//             email: "admin@admin.com",
//            password: "admin", 
//            username:"admin",
//            realm: null
//         }
//     ], function(err, users) {
//       if (err) throw err;

//       Role.create({
//         name: "admin"
//       }, function(err, role) {
//         if (err) throw err;
//         role.principals.create({
//           principalType: RoleMapping.USER,
//           principalId: users[0].id
//         }, function(err, principal) {
//           if (err) throw err;
//         });
//       });
//     });
//     }
// });

  

//   };
