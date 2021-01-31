// var Example = Example || {};

Matter.use(
    'matter-wrap'
);
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composite = Matter.Composite,
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
    var stack = Composites.stack(10, 20, 10, 5, 0, 0, function(x, y) {
        return Bodies.circle(x, y, Common.random(10, 20), { 
            friction: 0.00001, 
            restitution: 0.5, 
            density: 0.001,
                render: {
                    sprite: {
                        texture: '../img/b.png',
                        xScale: 0.025,
                        yScale: 0.025
                    }
                } 
        });
    });
    
    World.add(world, stack);
    
    World.add(world, [
        Bodies.rectangle(w/2, 0-25, w, 50, { isStatic: true }),
        Bodies.rectangle(w/2, h+25, w, 50, { isStatic: true }),
        Bodies.rectangle(w+25, h/2, 50, h, { isStatic: true }),
        Bodies.rectangle(0-25, h/2, 50, h, { isStatic: true }),

        Bodies.rectangle(100, 150, 300, 20, { isStatic: true, angle: Math.PI * 0.15 }),
        Bodies.rectangle(300, 300, 300, 20, { isStatic: true, angle: -Math.PI * 0.15 }),
        Bodies.rectangle(100, 450, 300, 20, { isStatic: true, angle: Math.PI * 0.1 })
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
    Render.lookAt(render, Composite.allBodies(world));

    // wrapping using matter-wrap plugin
    for (var i = 0; i < stack.bodies.length; i += 1) {
        stack.bodies[i].plugin.wrap = {
            min: { x: render.bounds.min.x, y: render.bounds.min.y },
            max: { x: render.bounds.max.x, y: render.bounds.max.y }
        };
    }

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