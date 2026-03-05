ServerEvents.recipes(event=>{
    event.custom({
        "type": "botania:orechid",
        "input": {
          "type": "block",
          "block": "minecraft:netherrack"
        },
        "output": {
          "type": "block",
          "block": "tconstruct:cobalt_ore"
        },
        "weight": 50
      });

      event.custom({
        "type": "botania:orechid",
        "input": {
          "type": "block",
          "block": "minecraft:netherrack"
        },
        "output": {
          "type": "block",
          "block": "minecraft:nether_quartz_ore"
        },
        "weight": 950
      });
})