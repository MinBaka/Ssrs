ServerEvents.recipes(event=>{
    event.custom({
        "type": "create:filling",
        "ingredients": [
          {
            "item": "minecraft:cobblestone"
          },
          {
            "amount": 250,
            "fluidTag": "minecraft:lava"
          }
        ],
        "results": [
          {
            "item": "minecraft:netherrack"
          }
        ]
      });
    
    event.custom({
      "type": "create:crushing",
      "ingredients": [
        {
          "item": "minecraft:netherrack"
        }
      ],
      "processingTime": 150,
      "results": [
        {
          "chance": 0.5,
          "item": "minecraft:netherrack"
        },
        {
          "chance": 0.75,
          "item": "minecraft:quartz"
        }
      ]
    });

    event.custom({
      "type": "create:haunting",
      "ingredients": [
        {
          "item": "minecraft:skeleton_skull"
        }
      ],
      "results": [
        {
          "item": "minecraft:wither_skeleton_skull"
        }
      ]
    });
})