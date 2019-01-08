var server = require("./server");
var ds = server.dataSources.myDB;
var lbTables = [
   "Worker",
   "AccessToken",
   "ACL",
   "RoleMapping",
   "Role",
   "Address",
   "Contact",
   "TaxPayer",
   "Buyer",
   "Vat",
   "Payment",
   "OrderPosition",
   "Product",
   "Order",
   "Invoice"
];
ds.automigrate(lbTables, function(er) {
   if (er) {
      throw er;
   }
   console.log("Loopback tables [" - lbTables - "] created in ", ds.adapter.name);
   ds.disconnect();
});