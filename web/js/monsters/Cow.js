/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Monsters: Cow

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
Monsters.add( new MonsterType("Cow", 1, 56, 0, 0, 18, 335, "Earth,Bluntness", "Energy,Sharpness", "Moove along, nothing to see here. Just a little milkin' going on.") );
Monsters.add( new MonsterType("Cow", 2, 0, 0, 0, 0, 0, "Earth,Bluntness", "Energy,Sharpness", "Moove along, nothing to see here. Just a little milkin' going on.") );
Monsters.add( new MonsterType("Cow", 3, 96, 0, 0, 18, 562, "Earth,Bluntness", "Energy,Sharpness", "Moove along, nothing to see here. Just a little milkin' going on.") );
Monsters.get().addDrop("Cowhide");
Monsters.get().addDrop("Raw Beef (Un-Prepared)");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1929;
