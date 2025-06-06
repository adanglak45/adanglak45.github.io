$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 700, 100, 10);
    createPlatform(300, 600, 100, 10);
    createPlatform(350, 350, 10, 100);
    createPlatform(350, 350, 100, 10);
    createPlatform(450, 350, 100, 10);
    createPlatform(550, 350, 10, 100);
    createPlatform(150, 500, 100, 10);
    createPlatform(350, 450, 100, 10);
    createPlatform(700, 200, 100, 10);
    createPlatform(650, 500, 100, 10);
    createPlatform(900, 300, 100, 10);
    createPlatform(600, 600, 100, 10);
    createPlatform(500, 600, 100, 10);
    createPlatform(400, 500, 100, 10);
    createPlatform(300, 400, 100, 10);
    createPlatform(800, 600, 100, 10);
    createPlatform(1100, 200, 100, 10);
    createPlatform(1200, 200, 10, 100);
    createPlatform(1100, 300, 100, 10);
    createPlatform(1000, 300, 100, 10);
    createPlatform(800, 400, 100, 10);
    createPlatform(1300, 500, 100, 10);
    createPlatform(1300, 550, 10, 150);
    createPlatform(1200, 700, 100, 10);
    createPlatform(1200, 550, 100, 10);
    createPlatform(1100, 550, 100, 10);
    createPlatform(1000, 550, 100, 10);


    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
