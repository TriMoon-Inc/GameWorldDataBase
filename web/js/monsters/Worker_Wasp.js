/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Monsters: Worker Wasp

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
Monsters.add( new MonsterType("Worker Wasp", 1, 133, 0, 0, 0, 0, "", "", "") );
Monsters.add( new MonsterType("Worker Wasp", 2, 178, 0, 0, 0, 0, "", "", "") );
Monsters.add( new MonsterType("Worker Wasp", 3, 223, 0, 0, 0, 0, "", "", "") );
Monsters.get().addDrop("&frac34; Leather Helm");
Monsters.get().addDrop("Branch Breaker");
Monsters.get().addDrop("Gem of the Rat");
Monsters.get().addDrop("Greater Tarnished Halbert");
Monsters.get().addDrop("Hilt");
Monsters.get().addDrop("Old Leather Belt");
Monsters.get().addDrop("Small Leather Armband");
Monsters.get().addDrop("Wasp Eye");
Monsters.get().addDrop("Wasp Scale");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1978;
