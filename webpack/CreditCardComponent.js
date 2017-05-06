/***
 * Excerpted from "Rails, Angular, Postgres, and Bootstrap, Second Edition",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/dcbang2 for more book information.
***/
var reflectMetadata = require("reflect-metadata");
var ng = {
  core:   require("@angular/core"),
  http:   require("@angular/http"),
};

var CreditCardComponent = ng.core.Component({
  selector: "shine-credit-card",
  template: require("./CreditCardComponent.html")
}).Class({
  constructor: [
    function() {
    }
  ]
});

module.exports = CreditCardComponent;
