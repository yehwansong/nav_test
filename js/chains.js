var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Body = Matter.Body,
        Composite = Matter.Composite,
        Composites = Matter.Composites,
        Constraint = Matter.Constraint,
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
            wireframes: false,
            showVelocity: true
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    var group = Body.nextGroup(true);
    











    
    var ropeA = Composites.stack(20, 0, 10, 1, 10, 10, function(x, y) {
        return Bodies.circle(x, y, 20, { 
            collisionFilter: { 
            group: group
        }, 
                render: {
                    sprite: {
                        texture: 'b.png',
                        xScale: 0.025,
                        yScale: 0.025
                    }
                } });
    });
    
    Composites.chain(ropeA, 0.5, 0, -0.5, 0, { stiffness: 0.8, length: 2, render: { type: 'line' } });
    Composite.add(ropeA, Constraint.create({ 
        bodyB: ropeA.bodies[0],
        pointB: { x: -20, y: 0 },
        pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
        stiffness: 0.5
    }));
    
    












    var ropeB = Composites.stack(150, 0, 10, 1, 10, 10, function(x, y) {
        return Bodies.circle(x, y, 20, { 
            collisionFilter: { 
            group: group
        }, 
                render: {
                    sprite: {
                        texture: 'b.png',
                        xScale: 0.025,
                        yScale: 0.025
                    }
                } });
    });
    
    Composites.chain(ropeB, 0.5, 0, -0.5, 0, { stiffness: 0.8, length: 2, render: { type: 'line' } });
    Composite.add(ropeB, Constraint.create({ 
        bodyB: ropeB.bodies[0],
        pointB: { x: -20, y: 0 },
        pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
        stiffness: 0.5
    }));
    
    












    var ropeC = Composites.stack(300, 0, 10, 1, 10, 10, function(x, y) {
        return Bodies.circle(x, y, 20, { 
            collisionFilter: { 
            group: group
        }, 
                render: {
                    sprite: {
                        texture: 'b.png',
                        xScale: 0.025,
                        yScale: 0.025
                    }
                } });
    });
    
    Composites.chain(ropeC, 0.5, 0, -0.5, 0, { stiffness: 0.8, length: 2, render: { type: 'line' } });
    Composite.add(ropeC, Constraint.create({ 
        bodyB: ropeC.bodies[0],
        pointB: { x: -20, y: 0 },
        pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
        stiffness: 0.5
    }));
    
    











 
    
    group = Body.nextGroup(true);
    World.add(world, [
        ropeA,
        ropeB,
        ropeC,
    ]);
setTimeout(function(){
    World.add(world, [
        // walls
        Bodies.rectangle(w/2, 0-25, w, 50, { isStatic: true }),
        Bodies.rectangle(w/2, h+25, w, 50, { isStatic: true }),
        Bodies.rectangle(w+25, h/2, 50, h, { isStatic: true }),
        Bodies.rectangle(0-25, h/2, 50, h, { isStatic: true })
    ]);
}, 3000);
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
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 700, y: 600 }
    });

    // context for MatterTools.Demo
