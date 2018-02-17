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





Blockly.Arduino.papara_moteur_pas_a_pas = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION');
  var speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
  var nombre_pas = Blockly.Arduino.valueToCode(this, 'NOMBRE_PAS', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_j'] = "int j;\n";
  Blockly.Arduino.setups_["setup_motor"] ="pinMode(4,OUTPUT);//M1dirpin\n"+
  "pinMode(5,OUTPUT);//M1steppin\n"+
  "pinMode(6,OUTPUT);//M2steppin\n"+
  "pinMode(7,OUTPUT);//M2dirpin\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward()\n"+
"{\n"+
     "digitalWrite(5,LOW);\n"+
	 "digitalWrite(6,LOW);\n"+
     "delayMicroseconds("+speed+");\n"+
     "digitalWrite(5,HIGH);\n"+
    "digitalWrite(6,HIGH);\n"+
    "delayMicroseconds(1000);\n"+
"}\n";

if(nombre_pas==="1"){code = "digitalWrite(4,LOW);\n"+
	 "digitalWrite(7,HIGH);\n"+
	 "digitalWrite(5,LOW);\n"+
	 "digitalWrite(6,LOW);\n"+
     "delayMicroseconds("+speed+");\n"+
     "digitalWrite(5,HIGH);\n"+
    "digitalWrite(6,HIGH);\n"+
   "delayMicroseconds(1000);\n";
    
  } else {
	  code = "digitalWrite(4,LOW);\n"+
	 "digitalWrite(7,HIGH);\n"+
	 "delay(100);\n"+
	 "for(j=0;j<="+nombre_pas+";j++){\n"+
	 "forward();\n"+
	 "}\n";
    
  }


	
  } else if (dropdown_direction==="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left()\n"+
"{\n"+
     //"digitalWrite(5,LOW);\n"+
	 "digitalWrite(6,LOW);\n"+
     "delayMicroseconds("+speed+");\n"+
     //"digitalWrite(5,HIGH);\n"+
    "digitalWrite(6,HIGH);\n"+
    "delayMicroseconds(1000);\n"+
	 
	 
	 
"}\n";


if(nombre_pas==="1"){code =
"digitalWrite(4,HIGH);\n"+
	 "digitalWrite(7,HIGH);\n"+
	"left();\n"+



	 "\n";
  } else {
	  code =  "digitalWrite(4,HIGH);\n"+
	 "digitalWrite(7,HIGH);\n"+
	 "delay(100);\n"+
	 "for(j=0;j<="+nombre_pas+";j++){\n"+
	 "left();\n"+
	 "}\n";
    
  }
    
	
  } else if (dropdown_direction==="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right()\n"+
  "{\n"+
  "digitalWrite(5,LOW);\n"+
	 //"digitalWrite(6,LOW);\n"+
     "delayMicroseconds("+speed+");\n"+
     "digitalWrite(5,HIGH);\n"+
    //"digitalWrite(6,HIGH);\n"+
    "delayMicroseconds(1000);\n"+
     
"}\n";

if(nombre_pas==="1"){
	code = "digitalWrite(4,LOW);\n"+
	 "digitalWrite(7,LOW);\n"+
	 "right();\n"+
	
	
	 "\n";
    
  } else {
	  code=
	  "digitalWrite(4,LOW);\n"+
	 "digitalWrite(7,LOW);\n"+
	 "delay(100);\n"+
	 "for(j=0;j<="+nombre_pas+";j++){\n"+
	 "right();\n"+
	
	 "}\n";
  }


    
	 
  } else if (dropdown_direction==="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward()\n"+
   "{\n"+
     "digitalWrite(5,LOW);\n"+
	 "digitalWrite(6,LOW);\n"+
     "delayMicroseconds("+speed+");\n"+
     "digitalWrite(5,HIGH);\n"+
    "digitalWrite(6,HIGH);\n"+
    "delayMicroseconds(1000);\n"+
"}\n";

if(nombre_pas==="1"){code ="digitalWrite(4,HIGH);\n"+
	 "digitalWrite(7,LOW);\n"+
	 "digitalWrite(5,LOW);\n"+
	 "digitalWrite(6,LOW);\n"+
     "delayMicroseconds("+speed+");\n"+
     "digitalWrite(5,HIGH);\n"+
    "digitalWrite(6,HIGH);\n"+
    "delayMicroseconds(1000);\n";
	"\n";
    
  } else {
	  code="digitalWrite(4,HIGH);\n"+
	 "digitalWrite(7,LOW);\n"+
	 "delay(100);\n"+
	 "for(j=0;j<="+nombre_pas+";j++){\n"+
	 "backward();\n"+
	 "}\n";
  }
  
  }else if(dropdown_direction==="rotation_right"){
    Blockly.Arduino.definitions_['define_rotation_right'] = "void rotation_right()\n"+
"{\n"+
     "digitalWrite(5,LOW);\n"+
	 "digitalWrite(6,LOW);\n"+
     "delayMicroseconds("+speed+");\n"+
     "digitalWrite(5,HIGH);\n"+
    "digitalWrite(6,HIGH);\n"+
    "delayMicroseconds(1000);\n"+
"}\n";

if(nombre_pas==="1"){code = "digitalWrite(4,LOW);\n"+
	 "digitalWrite(7,LOW);\n"+
	 "digitalWrite(5,LOW);\n"+
	 "digitalWrite(6,LOW);\n"+
     "delayMicroseconds("+speed+");\n"+
     "digitalWrite(5,HIGH);\n"+
    "digitalWrite(6,HIGH);\n"+
   "delayMicroseconds(1000);\n";
    
  } else {
	  code = "digitalWrite(4,LOW);\n"+
	 "digitalWrite(7,LOW);\n"+
	 "delay(100);\n"+
	 "for(j=0;j<="+nombre_pas+";j++){\n"+
	 "rotation_right();\n"+
	 "}\n";
    
  }
    
	 }else if(dropdown_direction==="rotation_left"){
    Blockly.Arduino.definitions_['define_rotation_left'] = "void rotation_left()\n"+
"{\n"+
     "digitalWrite(5,LOW);\n"+
	 "digitalWrite(6,LOW);\n"+
     "delayMicroseconds("+speed+");\n"+
     "digitalWrite(5,HIGH);\n"+
    "digitalWrite(6,HIGH);\n"+
    "delayMicroseconds(1000);\n"+
"}\n";

if(nombre_pas==="1"){code = "digitalWrite(4,HIGH);\n"+
	 "digitalWrite(7,HIGH);\n"+
	 "digitalWrite(5,LOW);\n"+
	 "digitalWrite(6,LOW);\n"+
     "delayMicroseconds("+speed+");\n"+
     "digitalWrite(5,HIGH);\n"+
    "digitalWrite(6,HIGH);\n"+
   "delayMicroseconds(1000);\n";
    
  } else {
	  code = "digitalWrite(4,HIGH);\n"+
	 "digitalWrite(7,HIGH);\n"+
	 "delay(100);\n"+
	 "for(j=0;j<="+nombre_pas+";j++){\n"+
	 "rotation_left();\n"+
	 "}\n";
    
  }
	 
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
"}\n";
    code="stop();\n";
  }
  return code;
};

Blockly.Arduino.robot_papara_moteur_pas_a_pas_fin_de_programme = function() {
	Blockly.Arduino.definitions_['var_fin'] = 'int fin'+';\n';
	Blockly.Arduino.setups_['setup_input_'] = 'fin=0 ;';
  var code = 'while((fin) == (0)){}'+ '\n';
			
  return code;
};

