$("select").selecter();
$("input[type='checkbox']").iCheck();
$("input[type='radio']").iCheck();
var num=0;
$(document).ready(function(){
	$(".icheckbox").on("ifChanged",function(){
		num=$(".icheckbox.checked").length;

		//console.log(num);
	});
	$(".icheckbox").on("ifChecked",function(){
		if(num>=3){
	    	$(".icheckbox").iCheck('disable');
			$(".icheckbox.checked").iCheck('enable');
			$(this).iCheck('enable');
	    }
	    $("#numQuest").html(num+1);
	});
	$(".icheckbox").on("ifUnchecked",function(){
		$(".icheckbox").iCheck('enable');
		$("#numQuest").html(num-1);
	});
	//Đăng nhập
	$('.toggle-account').click(function(){
		$(this).toggleClass('glyphicon-log-in');
		$('.form-account form').animate({
			height: "toggle",
			'padding-top': 'toggle',
			'padding-bottom': 'toggle',
			opacity: "toggle"
		  }, 400);
	});
	$('#account').click(function(){
		$('.form-account').slideToggle();
	});
	$(document).click(function(event){
		if(!$(event.target).closest('.account').length)
			$('.form-account').slideUp();
	});
})

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var hoursSpan = clock.querySelector('#hours');
  var minutesSpan = clock.querySelector('#minutes');
  var secondsSpan = clock.querySelector('#seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
	function setEndTime(newTime){
	  endtime=newTime;
	}
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
