// var Example = Example || {};

// Example.gyro = function() {
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
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
            background: '#0f0f13',
            showAngleIndicator: false,
            wireframes: false
            // showAngleIndicator: true,
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

        // var monkey = Bodies.circle(10, 10, 10, 10,{
        //         render: {
        //             sprite: {
        //                 texture: 'monkey_emoji.png',
        //                 xScale: 0.03,
        //                 yScale: 0.03
        //             }
        // }
        // });

    // add bodies
    var stack = Composites.stack(20, 20, 10, 5, 0, 0, function(x, y) {
        var sides = Math.round(Common.random(1, 8));

        sides = (sides === 3) ? 4 : sides;
        var chamfer = null;
        if (sides > 2 && Common.random() > 0.7) {
            chamfer = {
                radius: 10
            };
        }



var image_array = ['albert-a.png','albert-l.png','albert-b.png','albert-e.png','albert-r.png','albert-t.png']
var rand
        rand = image_array[Math.floor(Math.random() * image_array.length)];
        switch (Math.round(Common.random(0, 1))) {
        case 0:
            if (Common.random() < 0.8) {
        rand = image_array[Math.floor(Math.random() * image_array.length)];
                return Bodies.circle(x, y, Common.random(30, 60), { chamfer: chamfer,
                render: {
                    sprite: {
                        texture: rand,
                        xScale: 0.045,
                        yScale: 0.045
                    }
                }});
            } else {
        rand = image_array[Math.floor(Math.random() * image_array.length)];
                return Bodies.circle(x, y, Common.random(25, 30), { chamfer: chamfer,
                render: {
                    sprite: {
                        texture: rand,
                        xScale: 0.03,
                        yScale: 0.03
                    }
                }});
            }

        case 1:
            return Bodies.circle(x, y, Common.random(25, 30), { chamfer: chamfer,
                render: {
                    sprite: {
                        texture: rand,
                        xScale: 0.03,
                        yScale: 0.03
                    }
                }});
        }
    });

                // Bodies.circle(x, y, Common.random(25, 30), { chamfer: chamfer,
                // render: {
                //     sprite: {
                //         texture: rand,
                //         xScale: 0.03,
                //         yScale: 0.03
                //     }
                // }})


// var addCircle = function () {
//  return 

// };


var ball = Bodies.circle(w/2, w/2, Common.random(25, 30), {
                render: {
                    sprite: {
                        texture: 'img1.jpeg',
                        xScale: 0.3,
                        yScale: 0.3
                    }
                }});
    World.add(world, [
        ball,
        stack,
        Bodies.rectangle(w/2, 0-25, w, 50, { isStatic: true }),
        Bodies.rectangle(w/2, h+25, w, 50, { isStatic: true }),
        Bodies.rectangle(w+25, h/2, 50, h, { isStatic: true }),
        Bodies.rectangle(0-25, h/2, 50, h, { isStatic: true })
    ]);

    // add gyro control
    var updateGravity = function(event) {
        var orientation = typeof window.orientation !== 'undefined' ? window.orientation : 0,
            gravity = engine.world.gravity;

        if (orientation === 0) {
            gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
            gravity.y = Common.clamp(event.beta, -90, 90) / 90;
        } else if (orientation === 180) {
            gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
            gravity.y = Common.clamp(-event.beta, -90, 90) / 90;
        } else if (orientation === 90) {
            gravity.x = Common.clamp(event.beta, -90, 90) / 90;
            gravity.y = Common.clamp(-event.gamma, -90, 90) / 90;
        } else if (orientation === -90) {
            gravity.x = Common.clamp(-event.beta, -90, 90) / 90;
            gravity.y = Common.clamp(event.gamma, -90, 90) / 90;
        }
    };

    window.addEventListener('deviceorientation', updateGravity);

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

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene


    // context for MatterTools.Demo
    // return {
    //     engine: engine,
    //     runner: runner,
    //     render: render,
    //     canvas: render.canvas,
    //     stop: function() {
    //         Matter.Render.stop(render);
    //         Matter.Runner.stop(runner);
    //         window.removeEventListener('deviceorientation', updateGravity);
    //     }
    // };
// };