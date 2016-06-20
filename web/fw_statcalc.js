/*
 (C)2004 TriMoon Inc.
 Author: Tri_Moon <tripple_moon_3m@yahoo.com>
 FreeWorld Stat Calculator.

 This work is licensed under a Creative Commons License !
 See: http://creativecommons.org/licenses/by-nc-nd/2.0/
*/
function stat(){
	this.value = 0;
	this.set =	function(val){
					this.value = val;
				};
	this.inc =	function(num){
					this.value += num;
				};
	this.dec =	function(num){
					this.value -= num;
					if(this.value<0)	this.value=0;
				};
};

function stats(){
	this.Run = new stat();
	this.Turn = new stat();
	this.Jump = new stat();
	this.Swim = new stat();
	this.Climb = new stat();
	this.Strength = new stat();
	this.Attack = new stat();
	this.Defense = new stat();
	this.Avoidance = new stat();
	this.Wisdom = new stat();
	this.Radar = new stat();
	this.HP = new stat();
	this.HP_Delay = new stat();
	this.HP_Inc = new stat();
	this.Mana = new stat();
	this.Mana_Delay = new stat();
	this.Mana_Inc = new stat();
};

function points(){
	this.value = 5+Math.floor( (this.Level.value-1)/2 );
	this.value -= this.Stats.Run.value;
	this.value -= this.Stats.Turn.value;
	this.value -= this.Stats.Jump.value;
	this.value -= this.Stats.Swim.value;
	this.value -= this.Stats.Climb.value;
	this.value -= this.Stats.Strength.value;
	this.value -= this.Stats.Attack.value;
	this.value -= this.Stats.Defense.value;
	this.value -= this.Stats.Avoidance.value;
	this.value -= this.Stats.Wisdom.value;
	this.value -= this.Stats.Radar.value;
	this.value -= this.Stats.HP.value;
	this.value -= this.Stats.HP_Delay.value;
	this.value -= this.Stats.HP_Inc.value;
	this.value -= this.Stats.Mana.value;
	this.value -= this.Stats.Mana_Delay.value;
	this.value -= this.Stats.Mana_Inc.value;

	return (this.value);
}

function Character(){
	this.Race = new stat();
	this.Level = new stat();
	this.Stats = new stats();
	this.StatPoints = points;
	this.Race.set(0);
	this.Level.set(1);
};

function RaceSettings(	aRun, aTurn, aJump,	aSwim, aClimb,
						aStrength, aAttack, aDefense,
						aAvoidance, aWisdom, aRadar,
						aHP, aHP_Delay, aHP_Inc,
						aMana, aMana_Delay, aMana_Inc
	){
	this.initial = new stats();
	this.delta = new stats();
	this.scale = new stats();
	this.cap = new stats();
	for( var loop=0; loop<4; loop++ ){
		var obj;
		switch(loop){
		case 0:
				obj = this.initial;
				break;
		case 1:
				obj = this.delta;
				break;
		case 2:
				obj = this.scale;
				break;
		case 3:
				obj = this.cap;
				break;
		}
		with(obj){
			Run.set( aRun[loop] );
			Turn.set( aTurn[loop] );
			Jump.set( aJump[loop] );
			Swim.set( aSwim[loop] );
			Climb.set( aClimb[loop] );
			Strength.set( aStrength[loop] );
			Attack.set( aAttack[loop] );
			Defense.set( aDefense[loop] );
			Avoidance.set( aAvoidance[loop] );
			Wisdom.set( aWisdom[loop] );
			Radar.set( aRadar[loop] );
			HP.set( aHP[loop] );
			HP_Delay.set( aHP_Delay[loop] );
			HP_Inc.set( aHP_Inc[loop] );
			Mana.set( aMana[loop] );
			Mana_Delay.set( aMana_Delay[loop] );
			Mana_Inc.set( aMana_Inc[loop] );
		}
	}
};

function CalcVal(sStat){
	var val = 0.00;
	var intval, fracval, string;

	val = 	eval('Races[Char.Race.value].initial.' +sStat+ '.value')
			* Math.pow(10, eval('Races[Char.Race.value].scale.' +sStat+ '.value') );
	val +=	(	eval('Char.Stats.' +sStat+ '.value')
				* eval('Races[Char.Race.value].delta.' +sStat+ '.value')
				* Math.pow(10, eval('Races[Char.Race.value].scale.' +sStat+ '.value') )
			);
	val +=	(	(Char.Level.value - 1)
				* eval('Races[Char.Race.value].delta.' +sStat+ '.value')
				* Math.pow(10, eval('Races[Char.Race.value].scale.' +sStat+ '.value') )
			);
	val = Math.floor(val);
	val /= Math.pow(10, eval('Races[Char.Race.value].scale.' +sStat+ '.value') );
	string = val.toFixed( eval('Races[Char.Race.value].scale.' +sStat+ '.value') );
	if( eval('Races[Char.Race.value].cap.' +sStat+ '.value') != null ){
		if( eval('Races[Char.Race.value].delta.' +sStat+ '.value') > 0 ){
			if( string > eval('Races[Char.Race.value].cap.' +sStat+ '.value') )
				string = eval('Races[Char.Race.value].cap.' +sStat+ '.value')+'!';
		}else{
			if( string < eval('Races[Char.Race.value].cap.' +sStat+ '.value') )
				string = eval('Races[Char.Race.value].cap.' +sStat+ '.value')+'!';
		}
	}
	return (string);
};

function update(){
	var tmpStatPoints;

	document.getElementById("race").focus();
	switch(document.getElementById("race").value){
	case "HumanMale":
		Char.Race.set(0);
		break;
	case "HumanFemale":
		Char.Race.set(1);
		break;
	case "TridareanMale":
		Char.Race.set(2);
		break;
	case "TridareanFemale":
		Char.Race.set(3);
		break;
	case "PaladroneMale":
		Char.Race.set(4);
		break;
	case "PaladroneFemale":
		Char.Race.set(5);
		break;
	case "Altrog":
		Char.Race.set(6);
		break;
	}
	with(document){
		// Show assignments.
		getElementById("level").innerHTML			= Char.Level.value;

		tmpStatPoints = Char.StatPoints();
		getElementById("stat_points").innerHTML		= tmpStatPoints + " points";
		if( tmpStatPoints < 0 )
			document.getElementById("stat_points").style.color = "Red";
		else if( tmpStatPoints == 0 )
			document.getElementById("stat_points").style.color = "Yellow";
		else
			document.getElementById("stat_points").style.color = "Lime";

		getElementById("stat_run").innerHTML		= Char.Stats.Run.value;
		getElementById("stat_turn").innerHTML		= Char.Stats.Turn.value;
		getElementById("stat_jump").innerHTML		= Char.Stats.Jump.value;
		getElementById("stat_swim").innerHTML		= Char.Stats.Swim.value;
		getElementById("stat_climb").innerHTML		= Char.Stats.Climb.value;
		getElementById("stat_str").innerHTML		= Char.Stats.Strength.value;
		getElementById("stat_atk").innerHTML		= Char.Stats.Attack.value;
		getElementById("stat_def").innerHTML		= Char.Stats.Defense.value;
		getElementById("stat_avoid").innerHTML		= Char.Stats.Avoidance.value;
		getElementById("stat_wis").innerHTML		= Char.Stats.Wisdom.value;
		getElementById("stat_radar").innerHTML		= Char.Stats.Radar.value;
		getElementById("stat_hp").innerHTML			= Char.Stats.HP.value;
		getElementById("stat_hp_delay").innerHTML	= Char.Stats.HP_Delay.value;
		getElementById("stat_hp_inc").innerHTML		= Char.Stats.HP_Inc.value;
		getElementById("stat_mana").innerHTML		= Char.Stats.Mana.value;
		getElementById("stat_mana_delay").innerHTML	= Char.Stats.Mana_Delay.value;
		getElementById("stat_mana_inc").innerHTML	= Char.Stats.Mana_Inc.value;
		// Show values.
		getElementById("stat_run_val").innerHTML		= 	CalcVal("Run");
		getElementById("stat_turn_val").innerHTML		= 	CalcVal("Turn");
		getElementById("stat_jump_val").innerHTML		= 	CalcVal("Jump");
		getElementById("stat_swim_val").innerHTML		= 	CalcVal("Swim");
		getElementById("stat_climb_val").innerHTML		= 	CalcVal("Climb");
		getElementById("stat_str_val").innerHTML		= 	CalcVal("Strength");
		getElementById("stat_atk_val").innerHTML		= 	CalcVal("Attack");
		getElementById("stat_def_val").innerHTML		= 	CalcVal("Defense");
		getElementById("stat_avoid_val").innerHTML		= 	CalcVal("Avoidance");
		getElementById("stat_wis_val").innerHTML		= 	CalcVal("Wisdom");
		getElementById("stat_radar_val").innerHTML		= 	CalcVal("Radar");
		getElementById("stat_hp_val").innerHTML			= 	CalcVal("HP");
		getElementById("stat_hp_delay_val").innerHTML	= 	CalcVal("HP_Delay");
		getElementById("stat_hp_inc_val").innerHTML		= 	CalcVal("HP_Inc");
		getElementById("stat_mana_val").innerHTML		= 	CalcVal("Mana");
		getElementById("stat_mana_delay_val").innerHTML	= 	CalcVal("Mana_Delay");
		getElementById("stat_mana_inc_val").innerHTML	= 	CalcVal("Mana_Inc");
	}
	document.getElementById("QuickLink").href	= "?"
								+ "Race=" + Char.Race.value + "&"
								+ "Level=" + Char.Level.value + "&"
								+ "Run=" + Char.Stats.Run.value + "&"
								+ "Jump=" + Char.Stats.Jump.value + "&"
								+ "Turn=" + Char.Stats.Turn.value + "&"
								+ "Swim=" + Char.Stats.Swim.value + "&"
								+ "Climb=" + Char.Stats.Climb.value + "&"
								+ "Strength=" + Char.Stats.Strength.value + "&"
								+ "Attack=" + Char.Stats.Attack.value + "&"
								+ "Defense=" + Char.Stats.Defense.value + "&"
								+ "Avoidance=" + Char.Stats.Avoidance.value + "&"
								+ "Wisdom=" + Char.Stats.Wisdom.value + "&"
								+ "Radar=" + Char.Stats.Radar.value + "&"
								+ "HP=" + Char.Stats.HP.value + "&"
								+ "HP_Delay=" + Char.Stats.HP_Delay.value + "&"
								+ "HP_Inc=" + Char.Stats.HP_Inc.value + "&"
								+ "Mana=" + Char.Stats.Mana.value + "&"
								+ "Mana_Delay=" + Char.Stats.Mana_Delay.value + "&"
								+ "Mana_Inc=" + Char.Stats.Mana_Inc.value
	;
};
function Increment(sStat){
	if( sStat == 'Level' ){
		eval('Char.'+sStat+'.inc(1)');
	}else{
		eval('Char.Stats.'+sStat+'.inc(1)');
	}
	update();
};
function Decrement(sStat){
	if( sStat == 'Level' ){
		eval('Char.'+sStat+'.dec(1)');
	}else{
		eval('Char.Stats.'+sStat+'.dec(1)');
	}
	update();
};

function init(){
	var search = location.search.substring(1).split('&');
//	alert(search+"\n"+search.length);
	if(location.search.length > 1){
		for( var loop = 0; loop<search.length; loop++ ){
			var cmd, arg, val;
			cmd = search[loop].split('=');
			arg = cmd[0];
			val = cmd[1];
//			alert( arg +" -> "+ val);
			switch(arg){
			case "Race":
						document.getElementById("race").options[val].selected = true;
			case "Level":
						eval( "Char." + arg + ".set(" + val + ")" );
						break;
			default:
						eval( "Char.Stats." + arg + ".set(" + val + ")" );
						break;
			}
		}
	}
	update();

	var oOutput;
	bDebug = true;

	// Fetch Output element..
	oOutput = document.getElementById("Output");
	// Append Browser test and notices.
	if(bDebug && gTestBrowser){
		var oDOM;
		oDOM = document.createElement("div");
		oDOM.id = "TestBrowser";
		oDOM.innerHTML = gTestBrowser;
		oOutput.appendChild( oDOM );
	};
};

var HumanMale = new RaceSettings(
	Array(  2.60,	 0.01,	2,  6.00),	// Run
	Array(  3.00,	 0.01,	2,  null),	// Turn
	Array(  7.00,	 0.01,	2, 10.00),	// Jump
	Array(  2.00,	-0.01,	2,  null),	// Swim
	Array(  2.00,	-0.01,	2,  null),	// Climb
	Array(  7.00,	 0.95,	2,  null),	// Strength
	Array(  1.50,	 0.40,	2,  null),	// Attack
	Array(  1.00,	 0.40,	2,  null),	// Defense
	Array(  0.00,	 0.15,	2, 75.00),	// Avoidance
	Array(  0.00,	 1.00,	2,  null),	// Wisdom
	Array(150.00,	 6,	0,  null),	// Radar
	Array(  6.0,	 4.75,	1,  null),	// HP
	Array( 10.00,	-0.03,	2,  0.50),	// HP_Delay
	Array(  2.00,	 0.40,	2,  null),	// HP_Inc
	Array( 25.00,	15.00,	1,  null),	// Mana
	Array( 20.00,	-0.03,	2,  null),	// Mana_Delay
	Array(  5.00,	 1.00,	2,  null)	// Mana_Inc
);
var HumanFemale = new RaceSettings(
	Array(  2.60,	 0.01,	2,  6.00),	// Run
	Array(  3.00,	 0.01,	2,  null),	// Turn
	Array(  7.00,	 0.01,	2, 10.00),	// Jump
	Array(  2.00,	-0.01,	2,  null),	// Swim
	Array(  2.00,	-0.01,	2,  null),	// Climb
	Array(  7.00,	 0.95,	2,  null),	// Strength
	Array(  1.38,	 0.40,	2,  null),	// Attack
	Array(  1.25,	 0.40,	2,  null),	// Defense
	Array(  0.00,	 0.15,	2, 75.00),	// Avoidance
	Array(  0.00,	 1.00,	2,  null),	// Wisdom
	Array(150.00,	 6,	0,  null),	// Radar
	Array(  6.0,	 4.75,	1,  null),	// HP
	Array( 10.00,	-0.03,	2,  0.50),	// HP_Delay
	Array(  2.00,	 0.40,	2,  null),	// HP_Inc
	Array( 25.00,	15.00,	1,  null),	// Mana
	Array( 20.00,	-0.03,	2,  null),	// Mana_Delay
	Array(  5.00,	 1.00,	2,  null)	// Mana_Inc
);
var TridareanMale = new RaceSettings(
	Array(  2.60,	 0.01,	2,  6.00),	// Run
	Array(  3.00,	 0.01,	2,  null),	// Turn
	Array(  7.00,	 0.01,	2, 10.00),	// Jump
	Array(  2.00,	-0.01,	2,  null),	// Swim
	Array(  2.00,	-0.01,	2,  null),	// Climb
	Array(  7.50,	 1.00,	2,  null),	// Strength
	Array(  1.38,	 0.70,	2,  null),	// Attack
	Array(  1.25,	 0.70,	2,  null),	// Defense
	Array(  0.00,	 0.10,	2, 75.00),	// Avoidance
	Array(  0.00,	 0.50,	2,  null),	// Wisdom
	Array(150.00,	 5,	0,  null),	// Radar
	Array(  6.00,	 4.88,	1,  null),	// HP
	Array( 10.00,	-0.03,	2,  0.50),	// HP_Delay
	Array(  2.00,	 0.40,	2,  null),	// HP_Inc
	Array( 10.00,	 5.00,	1,  null),	// Mana
	Array( 22.00,	-0.03,	2,  null),	// Mana_Delay
	Array(  2.50,	 0.50,	2,  null)	// Mana_Inc
);
var TridareanFemale = new RaceSettings(
	Array(  2.60,	 0.01,	2,  6.00),	// Run
	Array(  3.00,	 0.01,	2,  null),	// Turn
	Array(  7.00,	 0.01,	2, 10.00),	// Jump
	Array(  2.00,	-0.01,	2,  null),	// Swim
	Array(  2.00,	-0.01,	2,  null),	// Climb
	Array(  7.50,	 1.00,	2,  null),	// Strength
	Array(  1.50,	 0.70,	2,  null),	// Attack
	Array(  1.00,	 0.70,	2,  null),	// Defense
	Array(  0.00,	 0.10,	2, 75.00),	// Avoidance
	Array(  0.00,	 0.50,	2,  null),	// Wisdom
	Array(150.00,	 5,	0,  null),	// Radar
	Array(  6.00,	 4.88,	1,  null),	// HP
	Array( 10.00,	-0.03,	2,  0.50),	// HP_Delay
	Array(  2.00,	 0.40,	2,  null),	// HP_Inc
	Array( 10.00,	 5.00,	1,  null),	// Mana
	Array( 22.00,	-0.03,	2,  null),	// Mana_Delay
	Array(  4.00,	 0.50,	2,  null)	// Mana_Inc
);
var PaladroneMale = new RaceSettings(
	Array(  2.60,	 0.01,	2,  6.00),	// Run
	Array(  3.00,	 0.01,	2,  null),	// Turn
	Array(  7.00,	 0.01,	2, 10.00),	// Jump
	Array(  2.00,	-0.01,	2,  null),	// Swim
	Array(  2.00,	-0.01,	2,  null),	// Climb
	Array(  6.50,	 0.90,	2,  null),	// Strength
	Array(  1.38,	 0.40,	2,  null),	// Attack
	Array(  1.25,	 0.25,	2,  null),	// Defense
	Array(  0.00,	 0.20,	2, 75.00),	// Avoidance
	Array(  5.00,	 1.50,	2,  null),	// Wisdom
	Array(150.00,	 6,	0,  null),	// Radar
	Array(  6.0,	 4.50,	1,  null),	// HP
	Array(  9.00,	-0.03,	2,  0.50),	// HP_Delay
	Array(  2.00,	 0.70,	2,  null),	// HP_Inc
	Array( 35.0,	20.00,	1,  null),	// Mana
	Array( 19.00,	-0.03,	2,  null),	// Mana_Delay
	Array(  7.00,	 1.50,	2,  null)	// Mana_Inc
);
var PaladroneFemale = new RaceSettings(
	Array(  2.60,	 0.01,	2,  6.00),	// Run
	Array(  3.00,	 0.01,	2,  null),	// Turn
	Array(  7.00,	 0.01,	2, 10.00),	// Jump
	Array(  2.00,	-0.01,	2,  null),	// Swim
	Array(  2.00,	-0.01,	2,  null),	// Climb
	Array(  6.50,	 0.90,	2,  null),	// Strength
	Array(  1.38,	 0.40,	2,  null),	// Attack
	Array(  1.25,	 0.25,	2,  null),	// Defense
	Array(  0.00,	 0.20,	2, 75.00),	// Avoidance
	Array(  5.00,	 1.50,	2,  null),	// Wisdom
	Array(150.00,	 6,	0,  null),	// Radar
	Array(  6.0,	 4.50,	1,  null),	// HP
	Array(  9.00,	-0.03,	2,  0.50),	// HP_Delay
	Array(  2.00,	 0.70,	2,  null),	// HP_Inc
	Array( 35.0,	20.00,	1,  null),	// Mana
	Array( 19.00,	-0.03,	2,  null),	// Mana_Delay
	Array(  7.00,	 1.50,	2,  null)	// Mana_Inc
);
var Altrog = new RaceSettings(
	Array(  3.00,	 0.012,	2,  6.00),	// Run
	Array(  3.00,	 0.01,	2,  null),	// Turn
	Array(  7.20,	 0.012,	2, 10.00),	// Jump
	Array(  2.00,	-0.01,	2,  null),	// Swim
	Array(  2.00,	-0.01,	2,  null),	// Climb
	Array(  7.00,	 0.92,	2,  null),	// Strength
	Array(  1.38,	 0.40,	2,  null),	// Attack
	Array(  1.25,	 0.25,	2,  null),	// Defense
	Array(  0.00,	 0.20,	2, 75.00),	// Avoidance
	Array(  0.00,	 0.75,	2,  null),	// Wisdom
	Array(150.00,	 4,	0,  null),	// Radar
	Array(  6.00,	 4.75,	1,  null),	// HP
	Array( 10.00,	-0.03,	2,  0.50),	// HP_Delay
	Array(  2.00,	 0.50,	2,  null),	// HP_Inc
	Array( 20.0,	10.0,	1,  null),	// Mana
	Array( 21.00,	-0.03,	2,  null),	// Mana_Delay
	Array(  4.00,	 0.75,	2,  null)	// Mana_Inc
);

var Races = new Array(HumanMale, HumanFemale, TridareanMale, TridareanFemale, PaladroneMale, PaladroneFemale, Altrog);
var Char = new Character();
