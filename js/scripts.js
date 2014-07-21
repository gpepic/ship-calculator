$(document).ready(function()  {

  $("form#package").submit(function(event) {
    event.preventDefault();

    var howMany = parseInt($("input#quantity").val());
    var size = parseInt($("#size-box").val());
    var howShip = parseInt($("#shipping").val());
    var finalCost = 0

    var shippingDetails = {quantity: howMany,
                            boxType: size,
                            speed: howShip,
                            costCalculation: function()  {
                              return this.quantity * this.boxType + this.speed;
                              }
                          }

  $("div.result").show();
  $(".total").append(shippingDetails.costCalculation());

  });

});
