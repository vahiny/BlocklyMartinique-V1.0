﻿//http://learn.makeblock.com/mbot-an-educational-stem-robot-for-kids-and-beginners/

'use strict';

goog.provide('Blockly.Blocks.mBot_4');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

// define blocks

Blockly.Blocks['mbot_onoff_pin_left_sens'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mBot_4.HUE);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.MBOT_MOTOR_LEFT_SENS_PIN);
	this.setHelpUrl(Blockly.Msg.MBOT_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['mbot_change_pin_left_sens'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mBot_4.HUE);
	this.appendValueInput("STAT", 'Number')
        .setCheck('Number')
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.MBOT_MOTOR_LEFT_SENS_CHANGE);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MBOT_MOTOR_SENS);
    this.setInputsInline(false);
	this.setHelpUrl(Blockly.Msg.MBOT_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['mbot_onoff_pin_left_PWM'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mBot_4.HUE);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MBOT_MOTOR_LEFT_PWM_PIN);
	this.setHelpUrl(Blockly.Msg.MBOT_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['mbot_change_pin_left_PWM'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mBot_4.HUE);
	this.appendValueInput("PWM", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MBOT_MOTOR_LEFT_PWM_CHANGE);
    this.setInputsInline(false);
	this.setHelpUrl(Blockly.Msg.MBOT_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['mbot_onoff_pin_right_sens'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mBot_4.HUE);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.MBOT_MOTOR_RIGHT_SENS_PIN);
	this.setHelpUrl(Blockly.Msg.MBOT_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['mbot_change_pin_right_sens'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mBot_4.HUE);
	this.appendValueInput("STAT", 'Number')
        .setCheck('Number')
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.MBOT_MOTOR_RIGHT_SENS_CHANGE);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MBOT_MOTOR_SENS);
    this.setInputsInline(false);
	this.setHelpUrl(Blockly.Msg.MBOT_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['mbot_onoff_pin_right_PWM'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mBot_4.HUE);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MBOT_MOTOR_RIGHT_PWM_PIN);
	this.setHelpUrl(Blockly.Msg.MBOT_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['mbot_change_pin_right_PWM'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mBot_4.HUE);
	this.appendValueInput("PWM", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MBOT_MOTOR_RIGHT_PWM_CHANGE);
	this.setHelpUrl(Blockly.Msg.MBOT_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['mbot_rgb_onboard'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MBOT_RGB_ONBOARD_INTRO);
    this.appendValueInput("Red")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MBOT_RGB_ONBOARD_RED);
    this.appendValueInput("Green")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MBOT_RGB_ONBOARD_GREEN);
    this.appendValueInput("Blue")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MBOT_RGB_ONBOARD_BLUE);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.MBOT_RGB_ONBOARD_PIXEL_NUMBER)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.MBOT_RGB_ONBOARD_FIELDDROPDOWN), "Pixel_number")
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.mBot_4.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-de-modules-led-rgb-ws2812b-avec-blockly-arduino/');
  }
};

Blockly.Blocks['mbot_buzzer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MBOT_BUZZER_INTRO); // texte pour le message d'intro du bloc
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.MBOT_BUZZER_TONE) //texte pour la variable
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.MBOT_BUZZER_FIELDDROPDOWN_TONE), "tone") // menu déroulant pour la note
		.appendField(Blockly.Msg.MBOT_BUZZER_OCTAVE) //texte pour la variable
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.MBOT_BUZZER_FIELDDROPDOWN_OCTAVE), "octave") // menu déroulant pour la note
      	.appendField(Blockly.Msg.MBOT_BUZZER_DELAY) //texte pour la variable
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.MBOT_BUZZER_FIELDDROPDOWN_DELAY), "delay"); // menu déroulant pour la durée
	this.setInputsInline(false); //bloc en ligne ou vertical
    this.setPreviousStatement(true, null); //téton sur le bloc au-dessus
    this.setNextStatement(true, null); //téton sur le bloc en dessous
    this.setColour(Blockly.Blocks.mBot_4.HUE); //couleur du bloc
    this.setTooltip('Blockly.Msg.MBOT_BUZZER_TOOLTIP'); //message quand on passe la souris
    this.setHelpUrl('Blockly.Msg.MBOT_BUZZER_HELPURL'); //message quand on clique sur le menu déroulant aide
  }
};