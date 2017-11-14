game.resources = [
	/**
	 * Graphics.
	 */
	// our level tileset
	{name: "area01_level_tiles",  type:"image",	src: "data/img/map/area01_level_tiles.png"},
	{name: "spritesheet_ground",  type:"image",	src: "data/img/map/spritesheet_ground.png"},
	{name: "spritesheet_tiles",   type:"image",	src: "data/img/map/spritesheet_tiles.png"},
	// the main player spritesheet
	{name: "gripe_run_right",     type:"image",	src: "data/img/sprite/gripe_run_right.png"},
	// the parallax background
	{name: "area01_bkg0",         type:"image",	src: "data/img/area01_bkg0.png"},
	{name: "area01_bkg1",         type:"image",	src: "data/img/area01_bkg1.png"},
	{name: "colored_grass",       type:"image",	src: "data/img/colored_grass.png"},
	{name: "colored_desert",       type:"image",	src: "data/img/colored_desert.png"},
	// the spinning coin spritesheet
	{name: "spinning_coin_gold",  type:"image",	src: "data/img/sprite/spinning_coin_gold.png"},
	// our enemty entity
	{name: "wheelie_right",       type:"image",	src: "data/img/sprite/wheelie_right.png"},
	// game font
    { name: "PressStart2P",       type:"image", src: "data/fnt/PressStart2P.png" },
    { name: "PressStart2P",       type:"binary", src: "data/fnt/PressStart2P.fnt"},
    // title screen
	{name: "title_screen",        type:"image",	src: "data/img/gui/title_screen.png"},

	/*
	 * Maps.
 	 */
	{name: "area01",              type: "tmx",	src: "data/map/area01.tmx"},
	{name: "area02",              type: "tmx",	src: "data/map/area02.tmx"},
	{name: "newmap01",            type: "tmx",	src: "data/map/newmap01.tmx"},
	{name: "newmap02",            type: "tmx",	src: "data/map/newmap02.tmx"},

	/*
	 * Background music.
	 */
	{name: "DST-XYAura", type: "audio", src: "data/bgm/"},

	/*
	 * Sound effects.
	 */
	{name: "cling", type: "audio", src: "data/sfx/"},
	{name: "stomp", type: "audio", src: "data/sfx/"},
	{name: "jump",  type: "audio", src: "data/sfx/"}
];