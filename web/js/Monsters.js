/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Monsters

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/2.0/
*/
/***************************************************************************
						Exception handling.
***************************************************************************/
try{
/***************************************************************************
						Fill MonsterTypes
***************************************************************************/
	// Increase numbers for map+mark files.
	gLoadScript.ToLoad += 22;
	gLoadScript.TotalSize += 43535;
	// Create Items Array.
	Monsters = new Monster();
	// Load Next files.
	LoadScript('js/monsters/Armoured_Ghoul.js',true);
	LoadScript('js/monsters/Bile_Lilem.js',true);
	LoadScript('js/monsters/Bunny.js',true);
	LoadScript('js/monsters/Cow.js',true);
	LoadScript('js/monsters/Chicken.js',true);
	LoadScript('js/monsters/Gartos.js',true);
	LoadScript('js/monsters/Giant_Tarantula.js',true);
	LoadScript('js/monsters/Huge_Wolf_Spider.js',true);
	LoadScript('js/monsters/Lava_Sprite.js',true);
	LoadScript('js/monsters/Mortack.js',true);
	LoadScript('js/monsters/Mountain_Bunny.js',true);
	LoadScript('js/monsters/Mud_Troll.js',true);
	LoadScript('js/monsters/Night_Mare.js',true);
	LoadScript('js/monsters/Rock_Golem.js',true);
	LoadScript('js/monsters/Sand_Golem.js',true);
	LoadScript('js/monsters/Sand_Troll.js',true);
	LoadScript('js/monsters/Taralac.js',true);
	LoadScript('js/monsters/Water_Spider.js',true);
	LoadScript('js/monsters/Water_Sprite.js',true);
	LoadScript('js/monsters/Wild_Horse.js',true);
	LoadScript('js/monsters/Wild_Pony.js',true);
	LoadScript('js/monsters/Worker_Wasp.js',true);
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	ShowException(e);
}
/***************************************************************************
						Load Next file.
***************************************************************************/
LoadScript('js/MarkTypes.js');
/***************************************************************************
	For 'Load Scripts dynamicaly with visual representation.'
***************************************************************************/
if(gLoadScript)	gLoadScript.SizeLoaded += 2463;
