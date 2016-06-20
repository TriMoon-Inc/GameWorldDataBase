/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Monsters: Mountain Bunny

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
Monsters.add( new MonsterType("Mountain Bunny", 1, 3, 0, 0, 0, 0, null, null, "") );
Monsters.add( new MonsterType("Mountain Bunny", 2, 0, 0, 0, 0, 0, null, null, "") );
Monsters.add( new MonsterType("Mountain Bunny", 3, 6, 0, 0, 0, 0, null, null, "") );
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1565;
