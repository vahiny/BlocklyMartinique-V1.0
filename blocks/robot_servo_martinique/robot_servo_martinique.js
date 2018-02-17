//http://www.education.pf/itereva/colpapara/index.php/fr/disciplines-2/technologie/ressources-robotique-pour-les-enseignants

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


goog.provide('Blockly.Blocks.robot_fenua');

goog.require('Blockly.Blocks');




Blockly.Blocks['robot_papara_led'] = {
  init: function() {
    this.setColour("#FF6E6E");
	this.setHelpUrl(Blockly.Msg.TEXT_ROBOT_PAPARA_SERVOMOTEURS_HELPURL);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOT_PAPARA_LED_TEXT1)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF), "STAT");
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOT_PAPARA_LED_TEXT2)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/grove/400px-LED1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOT_PAPARA_LED_TEXT3);		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_INOUT_LED_TOOLTIP); 
  }
};

Blockly.Blocks['robot_papara_buzzer'] = {
  init: function() {
    this.setColour("#FF6E6E");
	this.setHelpUrl(Blockly.Msg.TEXT_ROBOT_PAPARA_SERVOMOTEURS_HELPURL);
		this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOT_PAPARA_BUZZER_TEXT1)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF), "STAT");
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOT_PAPARA_BUZZER_TEXT2)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/grove/400px-Buzzer1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOT_PAPARA_LED_TEXT3);	
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_INOUT_BUZZER_TOOLTIP);
  }
};



Blockly.Blocks['robot_papara_button'] = {
  init: function() {
    this.setColour("#13EF79");
    this.setHelpUrl(Blockly.Msg.TEXT_ROBOT_PAPARA_SERVOMOTEURS_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOT_PAPARA_BOUTON_POUSSOIR_TEXT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/grove/400px-Button1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.appendField(Blockly.Msg.ROBOT_PAPARA_LED_TEXT3)
		.appendField(new Blockly.FieldTextInput('6', Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_BUTTON_TOOLTIP);
  }
};



Blockly.Blocks['robot_papara_line_finder'] = {
  init: function() {
    this.setColour("#13EF79");
	this.setHelpUrl(Blockly.Msg.TEXT_ROBOT_PAPARA_SERVOMOTEURS_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOT_PAPARA_DETECTEUR_LIGNE_TEXT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/grove/400px-Grovelinefinder1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	    .appendField(Blockly.Msg.ROBOT_PAPARA_LED_TEXT3)
        .appendField(new Blockly.FieldTextInput('2',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_LINE_TOOLTIP);
  }
};

Blockly.Blocks['robot_papara_infrarouge_reception'] = {
  init: function() {
    this.setColour("#8000FF");
	this.setHelpUrl(Blockly.Msg.TEXT_ROBOT_PAPARA_SERVOMOTEURS_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOT_PAPARA_INFRAROUGE_TEXT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robot_servo_martinique/infrarouge.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	    .appendField(Blockly.Msg.ROBOT_PAPARA_LED_TEXT3)
        .appendField(new Blockly.FieldTextInput('7',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_LINE_TOOLTIP);
  }
};

Blockly.Blocks['robot_papara_valeur_infrarouge'] = {
  init: function() {
	   
    this.setColour("#8000FF");
	this.setHelpUrl(Blockly.Msg.TEXT_ROBOT_PAPARA_SERVOMOTEURS_HELPURL);
    this.appendDummyInput("")
        .appendField("valeur signal infrarouge")
         this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_LINE_TOOLTIP);
  }
};



Blockly.Blocks.robot_papara_infrarouge_signal_suivant= {
  init: function () {
        this.setColour("#8000FF");
		this.setHelpUrl(Blockly.Msg.TEXT_ROBOT_PAPARA_SERVOMOTEURS_HELPURL);
	this.appendDummyInput()
             .appendField(Blockly.Msg.ROBOT_PAPARA_INFRAROUGE_TEXT2)
			 .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robot_servo_martinique/infrarouge.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_INOUT_RELAY_TOOLTIP);
  }
};



Blockly.Blocks['robot_papara_ultrasonic_ranger'] = {
	init: function() {
    this.setColour("#1BEFE7");
	this.setHelpUrl(Blockly.Msg.TEXT_ROBOT_PAPARA_SERVOMOTEURS_HELPURL);
    this.appendDummyInput()
	    .appendField(Blockly.Msg.ROBOT_PAPARA_ULTRASON_TEXTE1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/grove/200px-Twig_-_Ultrasonic_Ranger2.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.ROBOT_PAPARA_ULTRASON_TEXTE2)
        .appendField(new Blockly.FieldTextInput('8',  Blockly.Arduino.pinDigitalValidator), 'PIN')
		this.appendDummyInput("")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.ROBOTS_PAPARA_Codebender, "Codebender" ],
					[ Blockly.Msg.ROBOTS_PAPARA_IDEArduino, "IDEArduino" ]
						]),
				"MODE");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_ULTRASONIC_TOOLTIP);
  }
};

// Blockly.Blocks['robot_papara_ultrasonic_ranger'] = {
  //init: function() {
	//this.setHelpUrl(Blockly.Msg.TEXT_ROBOT_PAPARA_SERVOMOTEURS_HELPURL);
    //this.setColour("#1BEFE7");
    //this.setHelpUrl(Blockly.Msg.TEXT_ROBOT_PAPARA_SERVOMOTEURS_HELPURL);
    //this.appendDummyInput()
	//.appendField(Blockly.Msg.ROBOT_PAPARA_ULTRASON_TEXTE1)
        
     //   .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/grove/200px-Twig_-_Ultrasonic_Ranger2.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		
		
	//	.appendField(
	//			new Blockly.FieldDropdown([
	//					[ Blockly.Msg.ROBOTS_PAPARA_Codebender, "Codebender" ],
	//					[ Blockly.Msg.ROBOTS_PAPARA_IDEArduino, "IDEArduino" ]
	//					]),
	//			"MODE");
				
				
	//this.appendValueInput("PIN1", 'Number')
    //    .setCheck('Number')
     //   .setAlign(Blockly.ALIGN_RIGHT)
		
     //   .appendField(Blockly.Msg.ROBOT_PAPARA_ULTRASON_TEXTE2);
		
		
	//	this.setOutput(true, null);		
    // this.setTooltip(Blockly.Msg.GROVE_INOUT_ULTRASONIC_TOOLTIP);

 // }
//};

Blockly.Blocks['robot_papara_sharp'] = {
	init: function() {
    this.setColour("#1BEFE7");
	this.setHelpUrl(Blockly.Msg.TEXT_ROBOT_PAPARA_SERVOMOTEURS_HELPURL);
    this.appendDummyInput()
	    .appendField(Blockly.Msg.ROBOT_PAPARA_ULTRASON_TEXTE1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robot_servo_martinique/sharp.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.ROBOT_PAPARA_SHARP_TEXTE1)
        .appendField(new Blockly.FieldTextInput('1',  Blockly.Arduino.pinDigitalValidator), 'PIN')
    this.setOutput(true, 'Number');
	this.appendDummyInput("")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField("modèle")
		.appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.ROBOT_PAPARA_SHARP_TEXTE2, "oa41SK" ],
					[ Blockly.Msg.ROBOT_PAPARA_SHARP_TEXTE3, "oa21YK" ]
						]),
				"ChoixSharp")
    this.setTooltip(Blockly.Msg.GROVE_INOUT_ULTRASONIC_TOOLTIP);
  }
};





Blockly.Blocks.robot_papara_servomoteurs = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.TEXT_ROBOT_PAPARA_SERVOMOTEURS_HELPURL);
    this.setColour("#FF6E6E");
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ROBOT_SERVOMOTEURS)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robot_servo_martinique/robot.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.ROBOTS_PAPARA_STOP, "stop" ],
						[ Blockly.Msg.ROBOTS_PAPARA_AVANCE, "avance" ],
						[ Blockly.Msg.ROBOTS_PAPARA_RIGHT, "tourne à droite" ],
						[ Blockly.Msg.ROBOTS_PAPARA_LEFT, "tourne à gauche" ],
						[ Blockly.Msg.ROBOTS_PAPARA_BACKWARD, "recule" ],
						[ Blockly.Msg.ROBOTS_PAPARA_DROITESURPLACE, "rotation à droite" ],
						[ Blockly.Msg.ROBOTS_PAPARA_GAUCHESURPLACE, "rotation à gauche" ]
						]),
				"DIRECTION");
				
	this.appendValueInput("PIN1", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_ROBOT_PAPARA_SERVO_DROIT);
		
	this.appendValueInput("PIN2", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_ROBOT_PAPARA_SERVO_GAUCHE); 			
				
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FN_TOOLTIP);

  }
};



Blockly.Blocks.robot_papara_delay = {
  init: function() {
    this.setColour("#00CED1");
    this.setHelpUrl(Blockly.Msg.TEXT_ROBOT_PAPARA_SERVOMOTEURS_HELPURL);
    this.appendValueInput("DELAY_TIME", 'Number')
        .appendField(Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME)
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP);
  }
};

Blockly.Blocks.boucle_infinie = {
  init: function () {
        this.setColour("#DF0174");
		this.appendDummyInput()
			.appendField(Blockly.Msg.ARDUINO_ROBOT_PAPARA_BOUCLE_INFINIE);
		this.appendStatementInput('LOOP');
		this.setInputsInline(false);
        this.setTooltip("Définis le 'setup()' et le 'loop()'");
		this.contextMenu = false;
    },
	/** @return {!boolean} True if the block instance is in the workspace. */ 
	getArduinoLoopsInstance: function() {
    return true;
	}
};

Blockly.Blocks.robot_papara_fin_de_programme= {
  init: function () {
        this.setColour("#323232");
		this.setHelpUrl(Blockly.Msg.TEXT_ROBOT_PAPARA_SERVOMOTEURS_HELPURL);
    this.appendDummyInput()
	this.appendDummyInput()
             .appendField(Blockly.Msg.ROBOT_PAPARA_FIN_DE_PROGRAMME);
	this.appendDummyInput()
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_INOUT_RELAY_TOOLTIP);
  }
};

  



