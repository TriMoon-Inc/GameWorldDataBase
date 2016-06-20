/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Monsters: Lava Sprite

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
//	MonsterType(sName, nLevel, nHP, nATK, nDef, nMoney, nExp, sStrong, sWeak, sDesc)
//	Monsters.get(sName, nLevel)

/*	Templates for easy adding
Monsters.add( new MonsterType("", 1, 0, 0, 0, 0, 0, "", "", "") );
Monsters.get().addDrop("");
*/
Monsters.add( new MonsterType("Lava Sprite", 1, 242, 0, 0, 0, 0, "", "", "") );
Monsters.add( new MonsterType("Lava Sprite", 2, 323, 0, 0, 0, 0, "", "", "") );
Monsters.add( new MonsterType("Lava Sprite", 3, 404, 0, 0, 0, 0, "", "", "") );
Monsters.get().addDrop("Emerald");
Monsters.get().addDrop("Cursed Orcen Mace of Greater Wind");
Monsters.get().addDrop("Hard Leather Belt");
Monsters.get().addDrop("Red Sprite Wing");
Monsters.get().addDrop("Superior Old Patched Leather Helm");
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	ShowException(e);
}
/***************************************************************************
	For 'Load Scripts dynamicaly with visual representation.'
***************************************************************************/
if(gLoadScript)	gLoadScript.SizeLoaded += 1834;
