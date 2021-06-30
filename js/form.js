//Business Logic
function Contact(first, last,movie,delivery) {
    this.firstName = first;
    this.lastName = last;
    this.movie = movie;
    this.delivery = delivery;
    this.addresses = [];
}

function Address(town,area,county){
    this.town = town;
    this.area = area;
    this.county = county;
}

Contact.prototype.fullDetails = function(){
   return "Hi " + this.firstName + " " + this.lastName + " you have picked" + this.movie;
}

Address.prototype.fullAddress = function(){
   this.town + ", " + this.city + ", " + this.county
};





// UI
$(document).ready(function () {
    $("form#order-up").submit(function (event) {
        event.preventDefault();

        var inputtedFirstName = $("input#first-name").val();
        var inputtedLastName = $("input#second-name").val();
        var inputtedMovie = $('select#movie-type').val();
        var yourDel = $('#delivery-method').val();
        var newContact = new Contact(inputtedFirstName, inputtedLastName,inputtedMovie,yourDel);
        console.log(newContact)

        $('h2#names').text(newContact.firstName + " " + newContact.lastName)
        $('ul#movie-name').text(newContact.movie)

        $(".new-address").each(function () {
            var inputtedTown = $(this).find("input.new-street").val();
            var inputtedArea = $(this).find("input.new-city").val();
            var inputtedCounty = $(this).find("input.new-county").val();
            var newAddress = new Address(inputtedTown, inputtedArea, inputtedCounty)
            newContact.addresses.push(newAddress)
            console.log(newAddress)
        });
        newContact.addresses.forEach(function(address){ 

        $('ul#addresses').append("<li>" + address.fullAddress() + "</li>")

        });


        if(yourDel == "delivered"){
            alert("please note that delivery price depends on the area and vary in price")
        }else if(yourDel == "pick up"){
            alert("Organise to come pick up your delivery")
        }
        
    });

});    