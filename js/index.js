
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

function addRoomCount(){
  var roomCount = $('#rooms').val();
  var adultCount = parseInt($('#adults').val());
  var childCount = parseInt($('#children').val());
  var totalGuests = adultCount+childCount;

  if(totalGuests>roomCount*4){
    roomCount = ++roomCount;
    $('#rooms').val(roomCount);
    $('#rooms').trigger('change');
  }
}

function removeRoomCount(){
  var roomCount = $('#rooms').val();
  var adultCount = parseInt($('#adults').val());
  var childCount = parseInt($('#children').val());
  var totalGuests = adultCount+childCount;

  if(roomCount > adultCount){
    roomCount = adultCount;
    $('#rooms').val(roomCount);
    $('#rooms').trigger('change');
  }

}

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

function removeAdult(){
  var adultCount = $('#adults').val();
  $('#adults').val(--adultCount);
  $('#adults').trigger('change');
  removeRoomCount();
}

function addAdult(){
  var adultCount = $('#adults').val();
  $('#adults').val(++adultCount);
  $('#adults').trigger('change');
  addRoomCount();
}

function removeChildren(){
  var childCount = $('#children').val();
  $('#children').val(--childCount);
  $('#children').trigger('change');
  removeRoomCount();
}

function addChild(){
  var childCount = $('#children').val();
  $('#children').val(++childCount);
  $('#children').trigger('change');
  addRoomCount();
}