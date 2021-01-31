
	var intro_counter_1 = -1
	var intro_counter_3 = 0
	var fully_loaded = false
	var walk_counter = 0
					fully_loaded = true
	var okbutton = false
	var okbutton_after = false
	var waited = false
   $(document).ready(function(){
			var audio = document.getElementById('audio');

   	$('.okbutton').click(function(){
   		okbutton = true
		if(waited){
			$('.alarm').hide()
			setTimeout(function(){okbutton_after = true},1000)
			intro_000()
		}
   	})
   	$('.wait').waitForImages(true).done(function() {
		setTimeout(function(){
			$('.wait').css({'opacity':'1'})
			waited = true
			if(okbutton){
				$('.alarm').hide()
				setTimeout(function(){okbutton_after = true},1000)
				intro_000()
			}
   		},0)
   	})
	function intro_000(){
		$('.loading_wrap').hide()
		$('.intro_wrap').hide()
		$('.intro_wrap_000').show()
		$('.text_wrap').hide()
		$('.text_wrap_000').show()
					setTimeout(function(){
						intro_0()
					},3000)
	}
	function intro_0(){
		$('.intro_wrap').hide()
		$('.intro_wrap_0').show()
		$('.text_wrap').hide()
		$('.text_wrap_0').show()
					setTimeout(function(){
						intro_1()
					},1000)
	}
	function intro_1(){
		$('.text_wrap').hide()
		$('.text_wrap_1').show()
		$('.intro_wrap').hide()
		$('.intro_wrap_1').show()
		intro_1_loop()
	}
	function intro_1_loop(){
		console.log('intro_1_loop')
			if(intro_counter_1 < 5){
						intro_counter_1++
				$('.intro_wrap_1').find('.img').css({'transform':'translateX('+(-100*intro_counter_1)+'vw)'})
				console.log('-----------------')
					setTimeout(function(){
						intro_1_loop()
					},1000)
			}else{
				intro_2()
			}
	}
	function intro_2(){
		console.log('intro_2')
		$('.text_wrap').hide()
		$('.text_wrap_2').show()
		$('.intro_wrap').hide()
		$('.intro_wrap_2').show()
			setTimeout(function(){
				intro_3()
			},2500)
	}
	function intro_3(){
		console.log('intro_3')
		$('.text_wrap').hide()
		$('.text_wrap_3').show()
		$('.intro_wrap').hide()
		$('.intro_wrap_3').show()
		intro_3_loop()
	}
		var remaincounter = 0
	function intro_3_loop(){
			if(intro_counter_3 == 6){
					if(remaincounter<4){
						remaincounter++
						intro_counter_3 = 6
					}
				}
			if(intro_counter_3 == 13){
				intro_counter_3 = 7
				walk_counter++
			}else{
				$('.intro_wrap_3').find('.img').hide()
				$('.intro_wrap_3').find('.img_'+intro_counter_3).show()
				intro_counter_3++
			}
		if(walk_counter>4){
			intro_4()
		}else{
			loop3 = setTimeout(function(){
				intro_3_loop()
			},80)
		}
	}
	function intro_4(){
		$('.text_wrap').hide()
		$('.text_wrap_4').show()
		$('.intro_wrap').hide()
		$('.intro_wrap_4').show()

			setTimeout(function(){
					// $('.intro_wrap').hide()
					// $('.text_wrap').hide()
					// $('.listbutton_open').show()
					// $('body').css({'pointer-events': 'auto'})

next()
			},2000)

	}
	function next(){
		$('.loading_wrap').hide()
					$('#wrapper').css({'opacity':'1'})
					$('.intro_wrap').hide()
					$('.text_wrap').hide()
					$('.loading').hide()
					$('.listbutton_open').show()
					$('.footprintbutton').show()
					$('body').css({'pointer-events': 'auto'})

	}
	var prev_pos_x
	var lastY
	var currentY
	var moveamountY
	var lastX
	var currentX
	var moveamountX

	var resultY
	var resultX

	var starttime = 0
	var dirction_array = []
	var counter = 0
	var termcounter = 0
	var	movingcounter = 0
	var touching = false
	var speedX = 0
	var speedY = 0
	var timer_num = 0
	var total_margin_left = 0
	var total_margin_top = 0
	timer()
	var startX = 0
	var startY = 0
	var down = false
var currentY
var currentX
var rotation = 90
var touchcounter = 0
var round = 0
var old_round = 0
    	var selected_printtype = 'footprint'
		var rotation_archive = []
		var listscrollcount = 0
var unit = 15
// $('#img').css({'background-size':100/unit+'% auto'})
	var h = window.innerHeight
	var w = window.innerWidth
	$('#img').css({'width':7*w})
	$('#img').css({'height':unit*w*3 })
	$('#img').css({'left':-1*w})
	$('#img').css({'top':-2*unit*w + w})
	$('#img_clone').css({'width':7*w})
	$('#img_clone').css({'height':unit*w*3 })
	$('#img_clone').css({'left':-1*w})
	$('#img_clone').css({'top':-2*unit*w + w})

	$('.dia').css({'width': 5*w})
	$('.dia').css({'height': 5*w})
	$('.dia').css({'left': 1*w})
	$('.interaction_unit').css({'height': unit*w})
	$('.interaction_unit').css({'top': 0*w})
	$('.interaction_unit_1').clone().removeClass('interaction_unit_1').insertAfter(".interaction_unit_1").css({'top': unit*w})
	$('.interaction_unit_1').clone().removeClass('interaction_unit_1').insertAfter(".interaction_unit_1").css({'top': 2*unit*w})
// 15*w

	// 텀이적으
        document.addEventListener('touchmove', function(e) {
            e.preventDefault();
        }, { passive: false });
		function timer() {
			setInterval(function(){
				timer_num++
				if(!touching){
					termcounter++
				}else{
					termcounter = 0
				}
				if(termcounter>1){
					// console.log('notrunning')
				}else{
				}
			}, 100);
		}
		var listshow = false
		var footshow = false
		function showlist(){

		}
		var effectword = [
			['동굴', '구멍', '눈알'],
			['구슬', '반질반질', '영롱'],
			['엿보는', '물방울', '어둠 속 풀숲'],
			['까끌까끌', '스마일', '쾅! 쾅!', '건반', '계단'],
			['보들보들', '쑥쑥 자라나는', '무럭무럭'],
			['파스텔 무지개', '부들부들'],
			['구슬', '반질반질', '영롱'],
			['엿보는', '물방울', '어둠 속 풀숲'],
			['까끌까끌', '스마일', '쾅! 쾅!', '건반', '계단'],
			['보들보들', '쑥쑥 자라나는', '무럭무럭'],
			['파스텔 무지개', '부들부들']
		]
		var wordshow_timeout
		var effectword_show_count = 0
		function effectword_show_loop(count){
			console.log
			console.log(effectword[count][effectword_show_count % effectword[count].length])
			$('.listmessagebox').html(effectword[count][effectword_show_count % effectword[count].length])
			$('.listmessagebox').css({'left':(count%2)*50 + 'vw'})
			$('.listmessagebox').css({'top':(Math.floor(count/2)*50) + 'vw'})
			$('.listmessagebox').removeClass('listmessagebox_pos_1')
			$('.listmessagebox').removeClass('listmessagebox_pos_2')
			$('.listmessagebox').removeClass('listmessagebox_pos_3')
			$('.listmessagebox').addClass('listmessagebox_pos_'+effectword_show_count%3)
			if(listshow && down){
				effectword_show_count++
				wordshow_timeout = setTimeout(function(){
					effectword_show_loop(count)
				},800)
			}else{
				effectword_show_count = 0
			}
		}
	$('body').on('touchstart', function(e) {
  		e.preventDefault();
		down = true
		if(okbutton_after){
	    	audio.play();
	    }
    	if(listshow){
    		if(e.originalEvent.touches[0].clientX>(1-0.225)*w && e.originalEvent.touches[0].clientY<(0.225)*w){
				console.log('hey----')
				$('.list').hide()
				$('.listbutton_close').hide()
				listshow = false
				return false
			}else if(e.originalEvent.touches[0].clientX>0.42*w && e.originalEvent.touches[0].clientX<0.58*w &&
					e.originalEvent.touches[0].clientY>h - 0.16*w){
				if(listscrollcount<2){
					listscrollcount++
					$('.list').css({'margin-top': listscrollcount*-150 + 'vw'})
				}
			}else if(e.originalEvent.touches[0].clientX>0.42*w && e.originalEvent.touches[0].clientX<0.58*w &&
					e.originalEvent.touches[0].clientY<0.16*w){
				if(listscrollcount>0){
					listscrollcount--
					$('.list').css({'margin-top': listscrollcount*-150 + 'vw'})
				}
			}else if(e.originalEvent.touches[0].clientX<0.5*w && 
					e.originalEvent.touches[0].clientY<0.5*w){
				$('.listmessagebox').show()
				var wordcount = listscrollcount*6+1 - 1
				effectword_show_loop(wordcount)
			}else if(e.originalEvent.touches[0].clientX<0.5*w && 
					e.originalEvent.touches[0].clientY>0.5*w && e.originalEvent.touches[0].clientY<1*w){
				$('.listmessagebox').show()
				var wordcount = listscrollcount*6+3 - 1
				effectword_show_loop(wordcount)
			}else if(e.originalEvent.touches[0].clientX<0.5*w && 
					e.originalEvent.touches[0].clientY>1*w && e.originalEvent.touches[0].clientY<1.5*w){
				$('.listmessagebox').show()
				var wordcount = listscrollcount*6+5 - 1
				effectword_show_loop(wordcount)
			}else if(e.originalEvent.touches[0].clientX>0.5*w && 
					e.originalEvent.touches[0].clientY<0.5*w){
				$('.listmessagebox').show()
				var wordcount = listscrollcount*6+2 - 1
				effectword_show_loop(wordcount)
			}else if(e.originalEvent.touches[0].clientX>0.5*w && 
					e.originalEvent.touches[0].clientY>0.5*w && e.originalEvent.touches[0].clientY<1*w){
				$('.listmessagebox').show()
				var wordcount = listscrollcount*6+4 - 1
				effectword_show_loop(wordcount)
			}else if(e.originalEvent.touches[0].clientX>0.5*w && 
					e.originalEvent.touches[0].clientY>1*w && e.originalEvent.touches[0].clientY<1.5*w){
				$('.listmessagebox').show()
				var wordcount = listscrollcount*6+6 - 1
				effectword_show_loop(wordcount)
			}
    	}
		if(e.originalEvent.touches[0].clientX>(1-0.2)*w && e.originalEvent.touches[0].clientY<(0.2)*w && !listshow && !greenroom){
			$('.list').show()
			$('.listbutton_close').show()
			listshow = true
			listscrollcount = 0
					$('.list').css({'margin-top': '0vw'})
			console.log('sad;lfkjasld;kfj;lakdsjfl;k')
		}
    	if(!footshow&&e.originalEvent.touches[0].clientX>(1-0.4)*w &&e.originalEvent.touches[0].clientX<(1-0.2)*w && e.originalEvent.touches[0].clientY<(0.2)*w && !listshow){
			$('.footprintbutton').addClass('footprint_activate')
			footshow=true
			return false
    	}
		if(footshow&&e.originalEvent.touches[0].clientX>(1-0.4)*w &&e.originalEvent.touches[0].clientX<(1-0.2)*w  && e.originalEvent.touches[0].clientY<(0.6)*w && !listshow){
			if(e.originalEvent.touches[0].clientY<(0.2)*w){
					console.log('hey1')
					$('.footprintbutton').css({'opacity':'0'})
					$('.footprintbutton_1').css({'opacity':'1'})
					selected_printtype = 'footprint';
			}else if(e.originalEvent.touches[0].clientY<(0.4)*w){
					console.log('hey2')
					$('.footprintbutton').css({'opacity':'0'})
					$('.footprintbutton_2').css({'opacity':'1'})
					selected_printtype = 'dogprint';
			}else if(e.originalEvent.touches[0].clientY<(0.6)*w){
					console.log('hey3')
					$('.footprintbutton').css({'opacity':'0'})
					$('.footprintbutton_3').css({'opacity':'1'})
					selected_printtype = 'birdprint';
			}
			$('.footprintbutton').removeClass('footprint_activate')
			footshow=false
			return false
    	}
    	if(!listshow){
			touchcounter ++ 
			if(startX!==0){
				speedX = (currentX - startX)/counter
				speedY = (currentY - startY)/counter
				rotation = angle(startX,startY,currentX,currentY)
				if(touchcounter%2 == 0 && resultY<11*w){
				console.log(e.originalEvent.touches[e.originalEvent.touches.length-1].clientX+'px ' + e.originalEvent.touches[e.originalEvent.touches.length-1].clientY +'px')
								$('#wrapper').css({'transform-origin':e.originalEvent.touches[e.originalEvent.touches.length-1].clientX+'px ' + e.originalEvent.touches[e.originalEvent.touches.length-1].clientY +'px'})
								if(Math.floor((rotation-90)/10)*10 > 30){
									rot_val = 30
								}else if(Math.floor((rotation-90)/10)*10 < -30){
									rot_val = -30
								}else{
									rot_val = Math.floor((rotation-90)/10)*10
								}
								if(!greenroom){
									$('#wrapper').css({'transform':'rotate('+rot_val+'deg)'})
								}
							}
				// }
				counter = 0;
				movingcounter = 0
				if(e.originalEvent.touches.length == 0){
					touching = false
				}
		     	total_margin_top = parseInt($('#img').css('marginTop'))
				touching = true
				termcounter = 0
				movingcounter = 0
				startTime = timer_num
			}
			console.log(parseInt($('#img').css('marginTop'),10)>3360)
			console.log(parseInt($('#img').css('marginTop'),10)<4320)
		if(parseInt($('#img').css('marginTop'),10)>3360 && parseInt($('#img').css('marginTop'),10)<4320){
			$('.greenroomlink').show()
		}else{
			$('.greenroomlink').hide()
		}


			startY =  e.originalEvent.touches[e.originalEvent.touches.length-1].clientY;
			startX =  e.originalEvent.touches[e.originalEvent.touches.length-1].clientX;
		}
	function angle(x_1,y_1,x_2,y_2){ return Math.atan2(y_2 - y_1, x_2 - x_1) * 180 / Math.PI;}
	})
	$('body').on('touchmove', function(e) {
  		e.preventDefault();
		if(!listshow){
			counter++
			currentY = e.originalEvent.touches[e.originalEvent.touches.length-1].clientY;
			currentX = e.originalEvent.touches[e.originalEvent.touches.length-1].clientX;
			// round = Math.floor((total_margin_top + (currentY - startY))/(unit*w))
			// if(!old_round == round){$('.footprint').remove()}
			// old_round = round
			if(speedX == 0){
				if(total_margin_top + (currentY-startY)<0){
					resultY =-1*(Math.abs(total_margin_top + (currentY - startY))%(unit*w))
				}else{
					resultY =(Math.abs(total_margin_top + (currentY - startY))%(unit*w))
				}
			}else{
				if(total_margin_top + (currentY-startY)<0){
					resultY =-1*(Math.abs(total_margin_top + (speedY*counter))%(unit*w))
				}else{
					resultY =(Math.abs(total_margin_top + (speedY*counter))%(unit*w ))
				}
			}
			if(!greenroom){
				     $('#img').css({'margin-top':resultY +'px'})
				     $('#img_clone').css({'margin-top':resultY +'px'})
				if(resultY>10*w){
				     $('#img').css({'margin-left':-1*(resultY-10*w) +'px'})
				     $('#img_clone').css({'margin-left':-1*(resultY-10*w) +'px'})
					$('#wrapper').css({'transform':'rotate(0deg)'})
				}else{
				     $('#img').css({'margin-left':'0px'})
				     $('#img_clone').css({'margin-left':'0px'})
				}
			}
		     lastY = currentY;
		     lastX = currentX;
		}
	})
	$(window).on('resize', function(){
		if(window.innerWidth > window.innerHeight){
			alert('이 프로그램은 세로형 모바일 화면에 최적화되어 있습니다.')
		}
	});
	var footprint_amount = 0
	$('body').on('touchend', function(e) {
		$('.listmessagebox').hide()
		clearTimeout(wordshow_timeout)
		down = false
		if(!listshow){
			footprint_amount++
			if(resultY>10*w){
				$('#img').append('<div class="footprint '+selected_printtype+'"  style="transform: translate(-50%, -50%) rotate(45deg); left:'+(lastX - parseInt($('#img').css('marginLeft')) + w)+'px; top:'+( -1*parseInt($('#img').css('top'))-1*parseInt($('#img').css('marginTop'))+lastY) +'px;"></div>')

			}else{
				$('#img').append('<div class="footprint '+selected_printtype+'"  style="transform: translate(-50%, -50%) rotate('+(Math.floor((rotation-90)/10)*10)+'deg); left:'+(lastX - parseInt($('#img').css('marginLeft')) + w)+'px; top:'+( -1*parseInt($('#img').css('top'))-1*parseInt($('#img').css('marginTop'))+lastY) +'px;"></div>')
			}
		}
	})
var animate_counter_1 = 0
animate_elem_1()
	function animate_elem_1(){
		 animate_counter_1 = animate_counter_1+1
		$('.mar_wrapper_1>div').css({'opacity':0})
		$('.mar_wrapper_1>div:nth-child('+ (animate_counter_1 % 20 +1) +')').css({'opacity':1})
		$('.mar_wrapper_2>div').css({'opacity':0})
		$('.mar_wrapper_2>div:nth-child('+ (animate_counter_1 % 11 +1) +')').css({'opacity':1})
		setTimeout(function(){
			animate_elem_1()
		},200)
	}
var animate_counter_2 = 0
animate_elem_2()
	function animate_elem_2(){
		 animate_counter_2 = animate_counter_2+1
		$('.shelf_wrapper>div').css({'opacity':0})
		$('.shelf_wrapper>div:nth-child('+ (animate_counter_2 % 27 +1) +')').css({'opacity':1})
		setTimeout(function(){
			animate_elem_2()
		},80)
	}
})


var greenroom = false
$(document).ready(function(){

	$('.greenroomlink').click(function(){
		$('.door').addClass('greenroomon')
		$('.greenroomout').show()
		greenroom = true
		setTimeout(function(){
			if($('canvas').length == 0){

						var char_name
					    var Engine = Matter.Engine,
					        Render = Matter.Render,
					        Runner = Matter.Runner,
					        Common = Matter.Common,
					        MouseConstraint = Matter.MouseConstraint,
					        Mouse = Matter.Mouse,
					        World = Matter.World,
					        Vertices = Matter.Vertices,
					        Svg = Matter.Svg,
					        Body = Matter.Body,
					        Bodies = Matter.Bodies;

					    // create engine
					    var engine = Engine.create(),
					        world = engine.world;

					    // create renderer
					    var w = window.innerWidth
					    var h = window.innerHeight
					    var render = Render.create({
					        element: document.body,
					        engine: engine,
					        options: {
					            width: w,
					            height: h,
					            background: 'transparent',
					            showAngleIndicator: false,
					            wireframes: false
					            // showAngleIndicator: true,
						        }
						    });

					    Render.run(render);
						console.log('l;sdakfj')

					    // create runner
					    var runner = Runner.create();
					    Runner.run(runner, engine);

					    // add bodies
						var self = Bodies.circle(
						            Math.floor(Math.random() * 300)+50, 
						            Math.floor(Math.random() * 300)+50, 50, {
						                render: {
						                    lineWidth: 0,
						                    sprite: {
						                        texture: 'img/face.png',
						                        xScale: 0.75,
						                        yScale: 0.75
						                    }
										}
									});
						var friend = Bodies.circle(
						            Math.floor(Math.random() * 300)+50, 
						            Math.floor(Math.random() * 300)+50, 50, {
						                render: {
						                    lineWidth: 0,
						                    sprite: {
						                        texture: 'img/face.png',
						                        xScale: 0.75,
						                        yScale: 0.75
						                    },
										}
									});
						var color = Bodies.circle(
						                    Math.floor(Math.random() * 300)+50, 
						                    Math.floor(Math.random() * 300)+50, 50, {
						                	render: {
						                    lineWidth: 0,
						                    sprite: {
						                        texture: 'img/face.png',
						                        xScale: 0.75,
						                        yScale: 0.75
						                    },
										}
						            });

					    render.mouse = mouse;
					    $('#loading').hide();

					    var fuck = Vertices.fromPath('136.06 0 68.04 0 68.04 64.06 0.01 64.06 0.01 96.09 0 96.1 0 97.01 204.09 97.01 204.09 64.06 136.06 64.06 136.06 0')
					    var tri1 = Vertices.fromPath('16.7,5 162.3,5 89.1,48.6 ')
					    var tri2 = Vertices.fromPath('71.1,9.1 10.3,116.7 132,116.7')
					    var skewed_red = Vertices.fromPath('270.7,0 91,0 179.7,83.5 359.4,83.5')
					    var skew_cir = Vertices.fromPath('26.2,0 15.1,0 5.5,13 0,35.4 0,61.3 5.5,83.7 15.1,96.6 26.2,96.6 35.8,83.7 41.4,61.3 41.4,35.4 35.8,13')
					   	var offset = h*1.5
					   	var blue_sec = 1.2
					   	var red_sec = 0.6
					   	var yellow_sec = 0
						var obj_red = [
						        ['rec', 1,   1, 4.1,    3,  1, red_sec],
						        ['rec', 6,   1,   6,  2.1,  1, red_sec],
						        ['cir',    1,  13, 2.6 , 1, red_sec],
						        ['svg',3,  6, tri1 ,   1, red_sec],
						        ['svg',9,  5, tri2 ,   1, red_sec],
						        ['svg',13.8,14, skewed_red ,1, red_sec],
						        // ['svg',15,  16, fuck ,   1, red_sec],


						        ['cir', 1,   9, 3.2,    1, red_sec],
						        ['rec',10,   9, 2.2,    2,  1, red_sec],
						        ['cir', 7,  14,         2,  1, red_sec],
						        ['rec',17,   8,   3,    2,  1, red_sec],
						        ['rec',19,   4,   1,    3,  1, red_sec]
						    ]
						var obj_yellow = [
						        ['rec', 1,   4, 6.4,    1,          2, yellow_sec],
						        ['rec', 1,  10,   4,    5.5,        2, yellow_sec],
						        ['cir', 13.8,   1,   1,   2, yellow_sec],
						        ['cir', 15,     1,   1,   2, yellow_sec],
						        ['cir', 12,     2.2,   1.8,   2, yellow_sec],
						        ['cir', 14,     2.2,   1.8,   2, yellow_sec],

						        // from here are additional
						        ['cir', 10.5,   8.2,    3,     2, yellow_sec],
						        ['rec', 14,      7,     1.2, 2.5,   2, yellow_sec],
						        ['cir', 15.8,   7.5,    2,     2, yellow_sec],
						        ['rec', 12,     10.2,   4, 2.5,     2, yellow_sec],
						        ['rec', 10,     13.8,   1.5, 2.2,   2, yellow_sec],
						        ['cir', 12.2,   13.2,   2.5,   2, yellow_sec],
						        ['rec', 14.5,   15.2,   2.2, 2.2,   2, yellow_sec]
						    ]
						var obj_blue = [
						        // blue
						        ['cir', 1,     1,   3,      0, blue_sec],
						        ['cir', 1,     7,   1.2,    0, blue_sec],
						        ['cir', 2.4,     7,   1.2,   0, blue_sec],
						        ['cir', 3.8,     7,   1.2,   0, blue_sec],
						        ['cir', 5.2,     7,   1.2,   0, blue_sec],
						        ['cir', 2,     10,   2,   0, blue_sec],


						        ['rec', 9,   4, 3,    3,                0, blue_sec],
						        ['cir', 16.5,2.5, 3.5,          0, blue_sec],
						        ['cir', 12,   8,    3,               0, blue_sec],

						        ['rec', 15,   7, 3.2,    5.2,           0, blue_sec],
						        ['rec', 12, 15,     2,    3,            0, blue_sec],
						        ['rec', 15, 15, 3.6,   0.5,             0, blue_sec],
						        ['rec', 0, 15.5, 6.2,   2.5,            0, blue_sec]
						    ]
					var blue_fric = 0.075
					var red_fric = 0.05
					var yellow_fric = 0.025
					// var res = 8
				    var render_setting = [
				        // blue
				        {friction: 1, frictionAir: blue_fric, render: {fillStyle: '#0d3388',
				                    lineWidth: 0,
				         strokeStyle: '#0d3388'}},
				        // red
				        {friction: 1, frictionAir: red_fric,  render: {fillStyle: '#e60013',
				                    lineWidth: 0,
				         strokeStyle: '#e60013'}},
				        // yellow
				        {friction: 1, frictionAir: yellow_fric, render: {fillStyle: '#fff100',
				                    lineWidth: 0,
				         strokeStyle: '#fff100'}}
				    ]
		            adding(obj_yellow)
		            init_adding_1()
		            setTimeout(function(){detectcollision()}, 2000);
					// setTimeout(function(){adding()}, 3000);
					function adding(array){
					    for (var i = array.length - 1; i >= 0; i--) {
					        if(array[i][0] === 'svg'){
					                World.add(world, Bodies.fromVertices(Math.floor(Math.random() * 300)+50,Math.floor(Math.random() * 300)+50, array[i][3], render_setting[array[i][4]]));
					        }
					        if(array[i][0] === 'rec'){
					            World.add(world, Bodies.rectangle(Math.floor(Math.random() * 300)+50,Math.floor(Math.random() * 300)+50, array[i][3]*25, array[i][4]*25, render_setting[array[i][5]]));
					        }
					        if(array[i][0] === 'cir'){
					            World.add(world, Bodies.circle(Math.floor(Math.random() * 300)+50,Math.floor(Math.random() * 300)+50, array[i][3]/2*25, render_setting[array[i][4]]));
					        }
					    }
					}


					function init_adding_1(){
					    World.add(world, [
					        self,
					        color,
					        Bodies.rectangle(w/2, 0-25, w, 50, { isStatic: true }),
					        Bodies.rectangle(w/2, h+25, w, 50, { isStatic: true }),
					        Bodies.rectangle(w+25, h/2, 50, h, { isStatic: true }),
					        Bodies.rectangle(0-25, h/2, 50, h, { isStatic: true })
					    ]);
					}

					    // add mouse control
					    var mouse = Mouse.create(render.canvas),
					        mouseConstraint = MouseConstraint.create(engine, {
					            mouse: mouse,
					            constraint: {
					                stiffness: 0.2,
					                render: {
					                    visible: false
					                }
					            }
					        });

					    World.add(world, mouseConstraint);

					// 
					self_face()
					function self_face(){
						setInterval(function() {
						    let pos = self.position;
						    $('.face_wrapper').css({left:pos.x})
						    $('.face_wrapper').css({top:pos.y})
						}, 10);
					}
					function friend_face(){
						setInterval(function() {
						    let pos = friend.position;
						    $('.face_wrapper_friend').css({left:pos.x})
						    $('.face_wrapper_friend').css({top:pos.y})
						}, 10);

					}


					var collision_counter = 0
					var link  = [[self, color]]
					function detectcollision(){
					    if( Matter.Detector.collisions(link , engine).length>0){
					      	collision_counter++
							Body.setPosition(color, { x:Math.floor(Math.random() * 300)+50, y: Math.floor(Math.random() * 300)+50}); 
					      	if(collision_counter==1){
								adding(obj_blue)

					      	}
					      	if(collision_counter==2){
								adding(obj_red)
					            World.add(world,friend);
					      	}
					        setTimeout(function(){detectcollision()}, 500);
					    }else{
					        setTimeout(function(){detectcollision()}, 50)
					    }
					}
					$('body').append('<div class="greenroomout"></div>')
					$('.greenroomout').click(function(){
							$('.door').removeClass('greenroomon')
								greenroom = false
							$('canvas').hide()
							$('.greenroomout').hide()
							$('canvas').css({'pointer-events':'none'})
					})
			}else{
				greenroom = true
				$('canvas').show()
				$('canvas').css({'pointer-events':'auto'})
				$('.greenroomout').click(function(){
							$('.door').removeClass('greenroomon')
							greenroom = false
							$('canvas').hide()
							$('.greenroomout').hide()
							$('canvas').css({'pointer-events':'none'})
					})
				}
		},1000)
	})
})