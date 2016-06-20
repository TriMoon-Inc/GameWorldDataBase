/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Monsters: Wild Pony

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
Monsters.add( new MonsterType("Wild Pony", 1, 293, 19, 0, 28, 1777, "Sharpness", "Crushing", "This little charger's temper was inflicted upon him by the King of the Void.") );
Monsters.add( new MonsterType("Wild Pony", 2, 391, 21, 0, 28, 2350, "Sharpness", "Crushing", "This little charger's temper was inflicted upon him by the King of the Void.") );
Monsters.add( new MonsterType("Wild Pony", 3, 489, 22, 0, 28, 2935, "Sharpness", "Crushing", "This little charger's temper was inflicted upon him by the King of the Void.") );
Monsters.get().addDrop("Horse Hide");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1909;
