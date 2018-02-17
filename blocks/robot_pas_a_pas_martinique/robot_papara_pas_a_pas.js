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







Blockly.Blocks['papara_moteur_pas_a_pas'] = {
  init: function() {
    this.setColour("#8ec31f");
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_MOTOR_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PAPARA_MOTEUR_PAS_A_PAS_TEXT1)
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robot_pas_a_pas_martinique/shield_moteur_pas_a_pas.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GROVE_INOUT_MOTOR_CHOICE), "DIRECTION");
    this.appendValueInput("SPEED", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("signal tempo état haut");
		this.appendValueInput("NOMBRE_PAS", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("nombre de pas");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_INOUT_MOTOR_TOOLTIP);
  } 
};


Blockly.Blocks.robot_papara_moteur_pas_a_pas_fin_de_programme = {
  init: function () {
        this.setColour("#FF8C00");
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



Blockly.Blocks.robot_papara_fin_de_programme_moteur_pas_a_pas= {
  init: function () {
        this.setColour("#FF8C00");
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
