/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Seregor

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/2.0/
*/
/***************************************************************************
						Exception handling.
***************************************************************************/
try{
/***************************************************************************
						Fill Planet Maps.
***************************************************************************/
	/* Templates for easy adding
	Universe.planet("planetname").add( new Map("mapname", 5120,5120) );
	Universe.planet("planetname").add( new Map("mapname", 5120,5120, "img") );
	*/
	
	// Fill Planet
	// Row #1
	Universe.planet("Seregor").add( new Map(null, 5120,5120 ) );
	Universe.planet("Seregor").add( new Map(null, 5120,5120 ) );
	Universe.planet("Seregor").add( new Map(null, 5120,5120 ) );
	Universe.planet("Seregor").add( new Map("Faragor Mountain", 5120,5120, "Seregor_1_4" ) );
	Universe.planet("Seregor").add( new Map("Muirdach", 5120,5120, "Seregor_1_5" ) );
	Universe.planet("Seregor").add( new Map(null, 5120,5120 ) );
	// Row #2
	Universe.planet("Seregor").add( new Map(null, 5120,5120 ) );
	Universe.planet("Seregor").add( new Map("Lord Nevik's Tomb", 5120,5120, "Seregor_2_2") );
	Universe.planet("Seregor").add( new Map("North Haunted Woods", 5120,5120, "Seregor_2_3") );
	Universe.planet("Seregor").add( new Map("Western Orc Woods", 5120,5120, "Seregor_2_4") );
	Universe.planet("Seregor").add( new Map("Northern Orc Woods", 5120,5120, "Seregor_2_5") );
	Universe.planet("Seregor").add( new Map("Belrith", 2560,2560, "Seregor_2_6") );
	// Row #3
	Universe.planet("Seregor").add( new Map("Morlock Keep", 5120,5120, "Seregor_3_1") );
	Universe.planet("Seregor").add( new Map("West Haunted Woods", 5120,5120, "Seregor_3_2") );
	Universe.planet("Seregor").add( new Map("East Haunted Woods", 5120,5120, "Seregor_3_3") );
	Universe.planet("Seregor").add( new Map("Liyon Valley", 5120,5120, "Seregor_3_4") );
	Universe.planet("Seregor").add( new Map("South Orc Woods", 5120,5120, "Seregor_3_5") );
	Universe.planet("Seregor").add( new Map("Eastern Orc Woods", 5120,5120, "Seregor_3_6") );
	// Row #4
	Universe.planet("Seregor").add( new Map("Northern Haddoc Coast", 5120,5120, "Seregor_4_1") );
	Universe.planet("Seregor").add( new Map("Greymoore Meadow", 5120,5120, "Seregor_4_2") );
	Universe.planet("Seregor").add( new Map("Southern Haunted Woods", 5120,5120, "Seregor_4_3") );
	Universe.planet("Seregor").add( new Map("Northern Galen Woods", 5120,5120, "Seregor_4_4") );
	Universe.planet("Seregor").add( new Map("Eastern Galen Woods", 5120,5120, "Seregor_4_5") );
	Universe.planet("Seregor").add( new Map("Alamon Pass", 2560,2560, "Seregor_4_6") );
	// Row #5
	Universe.planet("Seregor").add( new Map("Haddoc Coast", 5120,5120, "Seregor_5_1") );
	Universe.planet("Seregor").add( new Map(null, 5120,5120 ) );
	Universe.planet("Seregor").add( new Map("Western Galen Woods", 5120,5120, "Seregor_5_3") );
	Universe.planet("Seregor").add( new Map("South Galen Woods", 5120,5120, "Seregor_5_4") );
	Universe.planet("Seregor").add( new Map("Timberlin", 5120,5120, "Seregor_5_5") );
	Universe.planet("Seregor").add( new Map("Taleron", 5120,5120, "Seregor_5_6") );
	// Row #6
	Universe.planet("Seregor").add( new Map("Noruth City", 1024,1024, "Noruth_City") );
	Universe.planet("Seregor").add( new Map("Maze", 5120,5120, "Maze") );
	Universe.planet("Seregor").add( new Map("Keep Basement", 1024,1024) );
	/*
		Universe.planet("planetname").makeIMAP("img", aImageMap );
		where aImageMap is:
			Array(new ImageMapArea(), ...)
			Templates for easy adding
				,new ImageMapArea("shape",	Array(shape-coords),	"alt text")
				,new ImageMapArea("shape",	Array(shape-coords),	"alt text",	"Planet|Map")
	*/
/***************************************************************************
						Load Marks
***************************************************************************/
	// Increase numbers for mark files.
	gLoadScript.ToLoad += 17;
	gLoadScript.TotalSize += 71380;
	/*	Virtual marks like City and Villages	*/
	LoadScript('js/marks/Seregor.js',true);
	/*	Load Map Marks	*/
	LoadScript('js/marks/Seregor-Faragor_Mountain.js',true);
	LoadScript('js/marks/Seregor-Muirdach.js',true);
	LoadScript('js/marks/Seregor-Western_Orc_Woods.js',true);
	LoadScript('js/marks/Seregor-Northern_Orc_Woods.js',true);
	LoadScript('js/marks/Seregor-Belrith.js',true);
	LoadScript('js/marks/Seregor-West_Haunted_Woods.js',true);
	LoadScript('js/marks/Seregor-East_Haunted_Woods.js',true);
	LoadScript('js/marks/Seregor-Liyon_Valley.js',true);
	LoadScript('js/marks/Seregor-South_Orc_Woods.js',true);
	LoadScript('js/marks/Seregor-Eastern_Orc_Woods.js',true);
	LoadScript('js/marks/Seregor-Northern_Galen_Woods.js',true);
	LoadScript('js/marks/Seregor-Eastern_Galen_Woods.js',true);
	LoadScript('js/marks/Seregor-Alamon_Pass.js',true);
	LoadScript('js/marks/Seregor-Taleron.js',true);
	LoadScript('js/marks/Seregor-Noruth_City.js',true);
	LoadScript('js/marks/Seregor-Keep_Basement.js',true);
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Seregor").add()\n\n';
	str += e.name + ' in: ';
	if(e.message)		str += e.message;
	if(e.description)	str += e.description;
	oError = new Error(str);
	oError.name = 'ParsingError';
	ShowException(oError);
}
/***************************************************************************
	For 'Load Scripts dynamicaly with visual representation.'
***************************************************************************/
if(gLoadScript)	gLoadScript.SizeLoaded += 5864;
