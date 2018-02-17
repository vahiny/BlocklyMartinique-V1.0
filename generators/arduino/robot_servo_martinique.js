//http://www.education.pf/itereva/colpapara/index.php/fr/disciplines-2/technologie/robot/configuration-robot-a-servomoteurs

/**
 * ROBOT OPEN SOURCE
 * Fichier STL pour impression 3D 
 * Fichier Sketchup pour modification de la maquette
 *
 * configuration du robot:
 * détecteur grove : suiveur de ligne et interrupteur
 * capteur grove ultrason
 * actionneurs : diode grove et 2 servomoteurs réglables

 */


/**
 * @fileoverview Helper functions for generating seeeduino grove blocks.
 * @author Jerome Maumet
 */



goog.provide('Blockly.Arduino.robot_fenua');

goog.require('Blockly.Arduino');



  
Blockly.Arduino.robot_papara_led = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_grove_led_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};

Blockly.Arduino.robot_papara_button = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.robot_papara_buzzer = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_piezo_buzzer_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};



Blockly.Arduino.robot_papara_line_finder = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.robot_papara_infrarouge_reception = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  
  Blockly.Arduino.includes_['define_infrarouge'] = '#include <IRremote.h>\n';
  Blockly.Arduino.definitions_['var_infrarouge'+dropdown_pin] = 'IRrecv recepteurInfraRouge('+dropdown_pin+');\n';
  Blockly.Arduino.definitions_['var_infrarouge'] = 'decode_results messageRecu;\n';
 
  Blockly.Arduino.setups_['setup_input_'] = 'recepteurInfraRouge.enableIRIn();';
  var code = 'recepteurInfraRouge.decode(&messageRecu)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.robot_papara_valeur_infrarouge = function() {

  var code = 'messageRecu.value';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.robot_papara_infrarouge_signal_suivant = function() {

  var code = 'recepteurInfraRouge.resume();\n';
			
			
  return code;
};

Blockly.Arduino.robot_papara_ultrasonic_ranger = function() {
  var dropdown_MODETELEVERSEMENT = this.getFieldValue('MODE');
   var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_unit = this.getFieldValue('UNIT');
  
  Blockly.Arduino.includes_['define_ultrasonic'] = '#include <Ultrasonic.h>\n';
Blockly.Arduino.definitions_['var_ultrasonic'+dropdown_pin] = 'Ultrasonic ultrasonic_'+dropdown_pin+'('+dropdown_pin+');\n';
 

var code = "";
  if(dropdown_MODETELEVERSEMENT=="Codebender"){
	    code="ultrasonic_"+dropdown_pin+".MeasureInCentimeters()";
  
  
  } else if (dropdown_MODETELEVERSEMENT=="IDEArduino") {
  code="ultrasonic_"+dropdown_pin+".mesurer()";
    }

return [code, Blockly.Arduino.ORDER_ATOMIC];
 
};




Blockly.Arduino.robot_papara_sharp = function() {
	var dropdown_ChoixSharp= this.getFieldValue('ChoixSharp');
  var dropdown_pin = this.getFieldValue('PIN');
  
  
  var code = "";
  if(dropdown_ChoixSharp=="oa41SK"){
  code = "(2400/(("+"analogRead(" + dropdown_pin + ")"+"-0.1)+0.5))";
  
  } else if (dropdown_ChoixSharp=="oa21YK") {
  code =  "(8479.4/(1+1.167*("+"analogRead(" + dropdown_pin + ")))"+"-5)";
    }

return [code, Blockly.Arduino.ORDER_ATOMIC];
 
};

  




Blockly.Arduino.robot_papara_servomoteurs= function() {
  var dropdown_direction = this.getFieldValue('DIRECTION');
  var value_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
  var value_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);

	Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
	Blockly.Arduino.definitions_['var_servo' + value_pin1] = 'Servo servo_droit'+';\n';
	Blockly.Arduino.definitions_['var_servo' + value_pin2] = 'Servo servo_gauche'+';\n';
  
  
  var code = "";
  if(dropdown_direction=="avance"){
    Blockly.Arduino.definitions_['define_avance'] = "void avance()\n"+
"{\n"+
	"servo_droit.attach(" + value_pin1 + ");\n"+
	"servo_gauche.attach(" + value_pin2 + ");\n"+
	"servo_droit.write(" + 0 + ");\n"+
	"servo_gauche.write(" + 180 + ");\n"+
"}\n";
    code="avance();\n";
	

	
  } else if (dropdown_direction=="tourne à droite") {
    Blockly.Arduino.definitions_['define_droite'] = "void droite()\n"+
"{\n"+
	"servo_droit.attach(" + value_pin1 + ");\n"+
	"servo_gauche.attach(" + value_pin2 + ");\n"+
    "servo_droit.write(" + 0 + ");\n"+
	"servo_gauche.write(" + 90 + ");\n"+
"}\n";
    code="droite();\n";
	
	
  } else if (dropdown_direction=="tourne à gauche") {
    Blockly.Arduino.definitions_['define_gauche'] = "void gauche()\n"+
"{\n"+
	"servo_droit.attach(" + value_pin1 + ");\n"+
	"servo_gauche.attach(" + value_pin2 + ");\n"+
     "servo_droit.write(" + 90 + ");\n"+
	"servo_gauche.write(" + 180 + ");\n"+
"}\n";
    code="gauche();\n";
	
	
  } else if (dropdown_direction=="recule"){
    Blockly.Arduino.definitions_['define_recule'] = "void recule()\n"+
"{\n"+
	"servo_droit.attach(" + value_pin1 + ");\n"+
	"servo_gauche.attach(" + value_pin2 + ");\n"+
     "servo_droit.write(" + 180 + ");\n"+
	"servo_gauche.write(" + 0 + ");\n"+
"}\n";
    code="recule();\n";
	
	  } else if (dropdown_direction=="rotation à droite") {
    Blockly.Arduino.definitions_['define_rotationadroite'] = "void rotation_a_droite()\n"+
"{\n"+
	"servo_droit.attach(" + value_pin1 + ");\n"+
	"servo_gauche.attach(" + value_pin2 + ");\n"+
    "servo_droit.write(" + 0 + ");\n"+
	"servo_gauche.write(" + 0 + ");\n"+
"}\n";
    code="rotation_a_droite();\n";
	
	} else if (dropdown_direction=="rotation à gauche") {
    Blockly.Arduino.definitions_['define_rotationagauche'] = "void rotation_a_gauche()\n"+
"{\n"+
	"servo_droit.attach(" + value_pin1 + ");\n"+
	"servo_gauche.attach(" + value_pin2 + ");\n"+
    "servo_droit.write(" + 180 + ");\n"+
	"servo_gauche.write(" + 180 + ");\n"+
"}\n";
    code="rotation_a_gauche();\n";
	
	
  } else if (dropdown_direction=="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
	"servo_droit.detach();\n"+
	"servo_gauche.detach();\n"+
"}\n"
    code="stop();\n";  } 
  
  return code;
};


Blockly.Arduino.robot_papara_delay = function() {
  var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'delay(' + delay_time + ');\n';
  return code;
};


Blockly.Arduino.boucle_infinie = function () {
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
	var loop = Blockly.Arduino.statementToCode(this, 'LOOP');
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
    }
    var code = //'{\n' +
            branch;// + '\n}\n';
    var setup_key = Blockly.Arduino.variableDB_.getDistinctName('base_setup', Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.setups_[setup_key] = code;
    return [loop, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.robot_papara_fin_de_programme = function() {
	Blockly.Arduino.definitions_['var_fin'] = 'int fin'+';\n';
	Blockly.Arduino.setups_['setup_input_'] = 'fin=0 ;';
  var code = 'servo_droit.detach();'+'\n'+
			'servo_gauche.detach();' + '\n'+
			'while((fin) == (0)){}'+ '\n';
			
  return code;
};
