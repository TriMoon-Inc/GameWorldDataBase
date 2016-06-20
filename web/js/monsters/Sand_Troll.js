/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Monsters: Sand Troll

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
Monsters.add( new MonsterType("Sand Troll", 1, 3, 0, 0, 8, 16, null, null, "A creature made of sand.") );
Monsters.add( new MonsterType("Sand Troll", 2, 4, 0, 0, 8, 17, null, null, "A creature made of sand.") );
Monsters.add( new MonsterType("Sand Troll", 3, 5, 0, 0, 8, 21, null, null, "A creature made of sand.") );
Monsters.get().addDrop("Bucket of Sand");
Monsters.get().addDrop("Sand Troll Bones");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1749;
