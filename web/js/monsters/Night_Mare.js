/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Monsters: Night Mare

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
Monsters.add( new MonsterType("Night Mare", 1, 1877, 0, 0, 0, 0, "", "", "") );
Monsters.add( new MonsterType("Night Mare", 2, 2502, 0, 0, 0, 0, "", "", "") );
Monsters.add( new MonsterType("Night Mare", 3, 3129, 0, 0, 0, 0, "", "", "") );
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1583;
