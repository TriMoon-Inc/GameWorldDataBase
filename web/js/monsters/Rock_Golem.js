/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Monsters: Rock Golem

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
Monsters.add( new MonsterType("Rock Golem", 1, 2227, 122, 0, 119, 13443, "Sharpness,Piercing", "Bluntness,Crushing", "Morlock's failed attempts at magic turned his closest friends and family members to stone.<br>He spent his whole life surrounded by his victims. Only his apprentice did not fall prey to his wizardry.") );
Monsters.add( new MonsterType("Rock Golem", 2, 2978, 134, 0, 119, 17945, "Sharpness,Piercing", "Bluntness,Crushing", "Morlock's failed attempts at magic turned his closest friends and family members to stone.<br>He spent his whole life surrounded by his victims. Only his apprentice did not fall prey to his wizardry.") );
Monsters.add( new MonsterType("Rock Golem", 3, 3729, 141, 0, 119, 22443, "Sharpness,Piercing", "Bluntness,Crushing", "Morlock's failed attempts at magic turned his closest friends and family members to stone.<br>He spent his whole life surrounded by his victims. Only his apprentice did not fall prey to his wizardry.") );
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
if(gLoadScript)	gLoadScript.SizeLoaded += 2275;
