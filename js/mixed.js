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

    // add bodies
    var stack = Composites.stack(20, 20, 10, 5, 0, 0, function(x, y) {
        var sides = Math.round(Common.random(1, 8));

        // triangles can be a little unstable, so avoid until fixed
        sides = (sides === 3) ? 4 : sides;

        // round the edges of some bodies
        var chamfer = null;
        if (sides > 2 && Common.random() > 0.7) {
            chamfer = {
                radius: 10
            };
        }

        switch (Math.round(Common.random(0, 1))) {
        case 0:
            if (Common.random() < 0.8) {
                return Bodies.rectangle(x, y, Common.random(25, 50), Common.random(25, 50), {
                // chamfer: chamfer, 
                render: {
                    sprite: {
                        texture: 'b.png',
                        xScale: 0.025,
                        yScale: 0.025
                    }
                }
             });
            } else {
                return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(25, 30), { 
                // chamfer: chamfer  
                render: {
                    sprite: {
                        texture: 'b.png',
                        xScale: 0.025,
                        yScale: 0.025
                    }
                }
            });
            }
        case 1:
            return Bodies.polygon(x, y, sides, Common.random(25, 50), { 
                // chamfer: chamfer  
                render: {
                    sprite: {
                        texture: 'b.png',
                        xScale: 0.025,
                        yScale: 0.025
                    }
                }
            });
        }
    });

    World.add(world, stack);

    World.add(world, [
        // walls
        Bodies.rectangle(w/2, 0-25, w, 50, { isStatic: true }),
        Bodies.rectangle(w/2, h+25, w, 50, { isStatic: true }),
        Bodies.rectangle(w+25, h/2, 50, h, { isStatic: true }),
        Bodies.rectangle(0-25, h/2, 50, h, { isStatic: true })
    ]);

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
    //     }
    // };