// On the contact us page, ask the user for the following details(5 marks):
// Company Name
// Phone number
// Location
// Booking dates -- i should choose date from a calendar 
// 1) Display this information with the filled in details. I.e grab the user input then 

var contact={
    companyname:"bosco",
    phonenumber:+254757497424,
    location:"Meru",
    bookingdates:"calendar",

}
console.log(contact)












var myObject = {
    name: "Adalab",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};
myObject.func();

