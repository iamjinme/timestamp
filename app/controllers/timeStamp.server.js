'use strict';

function Timestamp() {
  
  this.isNumeric = function(value) {
    return !isNaN(value);
  };
  
  this.isDate = function(value) {
    return (new Date(value).toString() !== "Invalid date");
  }

  this.formatDate = function(date) {
  
  }
  
  this.getTimestamp = function(date) {
    var natural = null;
    var unix = null;
    if (this.isNumeric(date)) {
      unix = parseInt(date);
      natural = new Date(date * 1000);
    } else if (this.isDate(date)) {
      natural = new Date(date + " 00:00:00 GMT");
      unix = Date.parse(natural) / 1000;
    }
    return JSON.stringify({ "unix": unix, "natural": natural });
  }

};

module.exports = Timestamp;
