/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Monsters: Chicken

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
Monsters.add( new MonsterType("Chicken", 1, 8, 0, 0, 5, 43, "Sharpness", "Crushing", "Fry this little guy up for a tasty treat.") );
Monsters.add( new MonsterType("Chicken", 2, 11, 0, 0, 5, 69, "Sharpness", "Crushing", "Fry this little guy up for a tasty treat.") );
Monsters.add( new MonsterType("Chicken", 3, 14, 0, 0, 5, 85, "Sharpness", "Crushing", "Fry this little guy up for a tasty treat.") );
Monsters.get().addDrop("Eggs (Un-Prepared)");
Monsters.get().addDrop("Raw Chicken (Un-Prepared)");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1842;
