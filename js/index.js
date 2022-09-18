//Function when room is changed
function onRoomChange(roomNumber){
  var count = $('#rooms').val();
  if(count==1){
    $('#removeRoom').addClass('disabled');
    $('#removeRoom').attr("disabled", true);
  }
  if(count < 5){
    $('#addRoom').removeClass('disabled');
    $('#addRoom').attr("disabled", false);
  }
  if(count>1){
    $('#removeRoom').removeClass('disabled');
    $('#removeRoom').attr("disabled", false);
  }
  if(count == 5){
    $('#addRoom').addClass('disabled');
    $('#addRoom').attr("disabled", true);
  }
}

//Function to modify room count on basis of totdal guests.
function addRoomCount(){
  var roomCount = $('#rooms').val();
  var adultCount = parseInt($('#adults').val());
  var childCount = parseInt($('#children').val());
  var totalGuests = adultCount+childCount;

  if(totalGuests>roomCount*4){
    increaseRoom();
  }
}

//Function to modify rooms on basis of adults
function removeRoomCount(){
  var roomCount = $('#rooms').val();
  var adultCount = parseInt($('#adults').val());

  if(roomCount > adultCount){
    roomCount = adultCount;
    $('#rooms').val(roomCount);
    $('#rooms').trigger('change');
  }
}

//Function is called when adult count changes
function onAdultsChange(adultCount){
  var count = $('#adults').val();
  if(count==1){
    $('#removeAdult').addClass('disabled');
    $('#removeAdult').attr("disabled", true);
  }
  if(count>1){
    $('#removeAdult').removeClass('disabled');
    $('#removeAdult').attr("disabled", false);
  }
  
}

//Function is called when child count changes
function onChildrenChange(childrenCount){
  var count = $('#children').val();
  if(count==0){
    $('#removeChild').addClass('disabled');
    $('#removeChild').attr("disabled", true);
  }
  if(count>0){
    $('#removeChild').removeClass('disabled');
    $('#removeChild').attr("disabled", false);
  }
}

//Function to reduce room count
function decreaseRoom(){
  var count = $('#rooms').val();
  count = --count;
  $('#rooms').val(count);
  $('#rooms').trigger('change');

  var adultCount = parseInt($('#adults').val());
  var childCount = parseInt($('#children').val());
  var totalGuests = adultCount+childCount;

  if(totalGuests > count*4)
  {
    if(count*4 >= adultCount){
      childCount = totalGuests - count*4;
      $('#children').val(childCount);
      $('#children').trigger('change');
    }
    else
    {
      adult = 4*count;
      $('#adults').val(adult);
      $('#children').val(0);

      $('#adults').trigger('change');
      $('#children').trigger('change');
    }
  }
}

//Function to increase room count
function increaseRoom(){
  var count = $('#rooms').val();
  count = ++count;
  $('#rooms').val(count);
  $('#rooms').trigger('change');

  var adultCount = parseInt($('#adults').val());
  if(adultCount < count){
    $('#adults').val(++adultCount);
    $('#adults').trigger('change');
  }

}

//Function to reduce adults count
function removeAdult(){
  var adultCount = $('#adults').val();
  $('#adults').val(--adultCount);
  $('#adults').trigger('change');
  removeRoomCount();
}

//Function to increase adult count
function addAdult(){
  var adultCount = $('#adults').val();
  $('#adults').val(++adultCount);
  $('#adults').trigger('change');
  addRoomCount();
}

//Function to reduce children count
function removeChildren(){
  var childCount = $('#children').val();
  $('#children').val(--childCount);
  $('#children').trigger('change');
  removeRoomCount();
}

//Function to increase children count
function addChild(){
  var childCount = $('#children').val();
  $('#children').val(++childCount);
  $('#children').trigger('change');
  addRoomCount();
}