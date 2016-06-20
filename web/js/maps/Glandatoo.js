/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Glandatoo

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
	// Templates for easy adding
	//Universe.planet("planetname").add( new Map("mapname", 5120,5120, null) );
	//Universe.planet("planetname").add( new Map("mapname", 5120,5120, "img") );
	
	// Fill Planet
	// Row #1
	Universe.planet("Glandatoo").add( new Map("Northern Dunes Of Tourment", 2560,2560, "Glandatoo_1_1" ) );
	Universe.planet("Glandatoo").add( new Map("Northern FireFlats", 5120,5120, "Glandatoo_1_2" ) );
	Universe.planet("Glandatoo").add( new Map("Abala's Oasis", 2560,2560, "Glandatoo_1_3" ) );
	// Row #2
	Universe.planet("Glandatoo").add( new Map("Devils Mouth", 5120,5120, "Glandatoo_2_1" ) );
	Universe.planet("Glandatoo").add( new Map("Fire Flats", 2560,2560, "Glandatoo_2_2" ) );
	Universe.planet("Glandatoo").add( new Map("Lilaci City", 5120,5120, "Glandatoo_2_3" ) );
	// Row #3
	Universe.planet("Glandatoo").add( new Map("Southern Dunes Of Tourment", 2560,2560, "Glandatoo_3_1" ) );
	Universe.planet("Glandatoo").add( new Map("Southern Fire Flats", 2560,2560, "Glandatoo_3_2" ) );
	Universe.planet("Glandatoo").add( new Map("Miners Heaven", 2560,2560, "Glandatoo_3_3" ) );
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
	gLoadScript.ToLoad += 7;
	gLoadScript.TotalSize += 27402;
	/*	Virtual marks like City and Villages	*/
	LoadScript('js/marks/Glandatoo.js',true);
	/*	Load Map Marks	*/
	LoadScript('js/marks/Glandatoo-Northern_Dunes_Of_Tourment.js',true);
	LoadScript('js/marks/Glandatoo-Northern_FireFlats.js',true);
	LoadScript('js/marks/Glandatoo-Devils_Mouth.js',true);
	LoadScript('js/marks/Glandatoo-Fire_Flats.js',true);
	LoadScript('js/marks/Glandatoo-Lilaci_City.js',true);
	LoadScript('js/marks/Glandatoo-Southern_Dunes_Of_Tourment.js',true);
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Glandatoo").add()\n\n';
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
if(gLoadScript)	gLoadScript.SizeLoaded += 3424;
