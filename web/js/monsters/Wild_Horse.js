/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Monsters: Wild Horse

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
Monsters.add( new MonsterType("Wild Horse", 1, 490, 0, 0, 27, 2956, "Earth,Wind,Bluntness", "Poison,Piercing,Crushing", "Bucking Bronco doesn't begin to describe this steed's demeanor. A stampede of cattle couldn't stop his attack, can you?") );
Monsters.add( new MonsterType("Wild Horse", 2, 654, 30, 0, 27, 3929, "Earth,Wind,Bluntness", "Poison,Piercing,Crushing", "Bucking Bronco doesn't begin to describe this steed's demeanor. A stampede of cattle couldn't stop his attack, can you?") );
Monsters.add( new MonsterType("Wild Horse", 3, 818, 44, 0, 27, 4903, "Earth,Wind,Bluntness", "Poison,Piercing,Crushing", "Bucking Bronco doesn't begin to describe this steed's demeanor. A stampede of cattle couldn't stop his attack, can you?") );
Monsters.get().addDrop("Horse Hide");
Monsters.get().addDrop("Lightning Wand Charge");
Monsters.get().addDrop("Piercing Wand Charge");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 2221;
