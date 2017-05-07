/***
 * Excerpted from "Rails, Angular, Postgres, and Bootstrap, Second Edition",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/dcbang2 for more book information.
***/
var ng = {
  core:   require("@angular/core"),
  http:   require("@angular/http"),
};

var CreditCardComponent = ng.core.Component({
  selector: "shine-credit-card",
  template: require("./CreditCardComponent.html"),
  inputs: [
    "cardholder_id"
  ]
}).Class({
  constructor: [
    ng.http.Http,
    function(http) {
      this.cardholder_id = null;
      this.credit_card_info = null;
      this.http = http;
    }
  ],
  ngOnChanges: function(changes) {
    if (changes.cardholder_id) {
      if (changes.cardholder_id.currentValue) {
        this.cardholder_id = changes.cardholder_id.currentValue;
        this.fetchCreditCardInfo();
      }
      else {
        this.cardholder_id = null;
        this.credit_card_info = null;
      }
    }
  },
  fetchCreditCardInfo: function() {
    var self = this;
    self.http.get("/credit_card_info/" + self.cardholder_id).
      subscribe(
        function(response) {
          self.credit_card_info = response.json().credit_card_info;
        },
        function(response) {
          window.alert(response);
        }
    );
  }
});

module.exports = CreditCardComponent;
