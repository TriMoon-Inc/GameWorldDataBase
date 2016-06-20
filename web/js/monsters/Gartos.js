/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Monsters: Gartos

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
Monsters.add( new MonsterType("Gartos", 1, 56, 13, 0, 19, 343, "Sharpness,Piercing", "Bluntness,Crushing", "Don't get caught swimming in beer by this fella. Deal with him treacherously<br>Burn him at the stake! Pulverize him, or just plain stab the bloody creature!") );
Monsters.add( new MonsterType("Gartos", 2, 75, 14, 0, 19, 451, "Sharpness,Piercing", "Bluntness,Crushing", "Don't get caught swimming in beer by this fella. Deal with him treacherously<br>Burn him at the stake! Pulverize him, or just plain stab the bloody creature!") );
Monsters.add( new MonsterType("Gartos", 3, 94, 15, 0, 17, 562, "Sharpness,Piercing", "Bluntness,Crushing", "Don't get caught swimming in beer by this fella. Deal with him treacherously<br>Burn him at the stake! Pulverize him, or just plain stab the bloody creature!") );
Monsters.get().addDrop("Beer");
Monsters.get().addDrop("Gila Tail");
Monsters.get().addDrop("Greater Bladed Wand");
Monsters.get().addDrop("Greater Powerband Level 1");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 2325;
