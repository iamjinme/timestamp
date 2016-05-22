'use strict';

function Timestamp() {
  
  this.isNumeric = function(value) {
    return !isNaN(value);
  };
  
  this.isDate = function(value) {
    var date = new Date(value);
    return (date.toString() !== 'Invalid Date');
  }

  this.formatDate = function(date) {
    var month = ["January", "February", "March",
                  "April", "May", "June",
                  "July", "August", "September",
                  "October", "November", "December"
    ];
    return month[date.getMonth()] + ' ' + (date.getDate() + 1) + ", " + date.getFullYear();
  }
  
  this.getTimestamp = function(date) {
    var natural = null;
    var unix = null;
    if (this.isNumeric(date)) {
      unix = parseInt(date);
      natural = this.formatDate(new Date(date * 1000));
    } else if (this.isDate(date)) {
      natural = this.formatDate(new Date(date + " 00:00:00 GMT"));
      unix = Date.parse(natural) / 1000;
    }
    return JSON.stringify({ "unix": unix, "natural": natural });
  }

};

module.exports = Timestamp;
