//Format phone numbers in a spreadsheet with google apps script
//Include a "+" prefix and remove any spaces, regardless of their country codes

function formatPhoneNumbers() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    // Change the range to target Column E (5th column), starting from row 2 to avoid headers
    var range = sheet.getRange(2, 5, sheet.getLastRow() - 1, 1);
    var phoneNumbers = range.getValues();
  
    var formattedNumbers = phoneNumbers.map(function(row) {
      var phoneNumber = row[0].toString().trim();
      phoneNumber = phoneNumber.replace(/\s+/g, '');
      if (phoneNumber.startsWith('00')) {
        phoneNumber = '+' + phoneNumber.substring(2);
      }
      if (!phoneNumber.startsWith('+')) {
        phoneNumber = '+' + phoneNumber;
      }
      return [phoneNumber];
    });
  
    range.setValues(formattedNumbers);
  }