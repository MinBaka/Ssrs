ServerEvents.recipes(event=>{
    event.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
            "item": "minecraft:cobblestone"
          },
          "cast_consumed": true,
        "cooling_time": 2,
        "fluid": {
          "amount": 250,
          "tag": "minecraft:lava"
        },
        "result": {
          "tag": "forge:netherrack"
        }
      });

      event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
          "item": 'minecraft:iron_nugget'
        },
        "cast_consumed": true,
        "cooling_time": 320,
        "fluid": {
          "amount": 32000,
          "tag": "tconstruct:liquid_soul"
        },
        "result": "minecraft:ghast_tear"
      });
})