﻿// define blocks
'use strict';

goog.provide('Blockly.Blocks.MatrixLED_WS2812B');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.FieldInstance');

Blockly.Blocks.MatrixLED_WS2812B_init = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MatrixLED_WS2812B_init)
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(
				new Blockly.FieldInstance('Matrix_WS2812_fieldInstance',
										  Blockly.Msg.MatrixLED_WS2812B_DEFAULT_NAME,
										  true, true, false),
				'MATRIX_NEOPIXEL_NAME')
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/matrix-led-rgb-ws2812/matrix-led-rgb-ws2812.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("Pin_Matrix_init")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MatrixLED_WS2812B_init_Pin);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ledRGB_WS2812B.HUE);
    this.setTooltip('');
    this.setHelpUrl(Blockly.Msg.MatrixLED_WS2812B_URL);
  }
};

Blockly.Blocks.MatrixLED_WS2812B_setPixelColor = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MatrixLED_WS2812B_setPixelColor)
		.appendField(
				new Blockly.FieldInstance('Matrix_WS2812_fieldInstance',
										  Blockly.Msg.MatrixLED_WS2812B_DEFAULT_NAME,
										  true, true, false),
				'MATRIX_NEOPIXEL_NAME')
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/matrix-led-rgb-ws2812/matrix-led-rgb-ws2812.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("Red")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Red);
    this.appendValueInput("Green")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Green);
    this.appendValueInput("Blue")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Blue);
    this.appendValueInput("Pixel_number")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Pixel_Number);
    this.appendValueInput("Brightness")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MatrixLED_WS2812B_Brightness);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ledRGB_WS2812B.HUE);
    this.setTooltip('');
    this.setHelpUrl(Blockly.Msg.MatrixLED_WS2812B_URL);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MATRIX_NEOPIXEL_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Matrix_WS2812_fieldInstance', this)) {
      this.setWarningText(null);
    } else {
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            '%1', Blockly.Msg.NEOPIXEL_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks.MatrixLED_WS2812B_setBrightness = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MatrixLED_WS2812B_setBrightness)
		.appendField(
				new Blockly.FieldInstance('Matrix_WS2812_fieldInstance',
										  Blockly.Msg.MatrixLED_WS2812B_DEFAULT_NAME,
										  true, true, false),
				'MATRIX_NEOPIXEL_NAME')
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/matrix-led-rgb-ws2812/matrix-led-rgb-ws2812.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("Brightness")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MatrixLED_WS2812B_Brightness);		
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ledRGB_WS2812B.HUE);
    this.setTooltip('');
    this.setHelpUrl(Blockly.Msg.MatrixLED_WS2812B_URL);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MATRIX_NEOPIXEL_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Matrix_WS2812_fieldInstance', this)) {
      this.setWarningText(null);
    } else {
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            '%1', Blockly.Msg.NEOPIXEL_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks.MatrixLED_WS2812B_CLEAN = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MatrixLED_WS2812B_clean)
		.appendField(
				new Blockly.FieldInstance('Matrix_WS2812_fieldInstance',
										  Blockly.Msg.MatrixLED_WS2812B_DEFAULT_NAME,
										  true, true, false),
				'MATRIX_NEOPIXEL_NAME')
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/matrix-led-rgb-ws2812/matrix-led-rgb-ws2812.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ledRGB_WS2812B.HUE);
    this.setTooltip('');
    this.setHelpUrl(Blockly.Msg.MatrixLED_WS2812B_URL);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MATRIX_NEOPIXEL_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Matrix_WS2812_fieldInstance', this)) {
      this.setWarningText(null);
    } else {
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            '%1', Blockly.Msg.NEOPIXEL_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks.MatrixLED_WS2812B_draw = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MatrixLED_WS2812B_setBrightness)
		.appendField(
				new Blockly.FieldInstance('Matrix_WS2812_fieldInstance',
										  Blockly.Msg.MatrixLED_WS2812B_DEFAULT_NAME,
										  true, true, false),
				'MATRIX_NEOPIXEL_NAME')
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/matrix-led-rgb-ws2812/matrix-led-rgb-ws2812.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput()
        .appendField('  ')
        .appendField(' 0')
        .appendField('  1')
        .appendField(' 2')
        .appendField('  3')
        .appendField(' 4')
        .appendField('  5')
        .appendField('  6')
        .appendField(' 7');
    this.appendDummyInput()
        .appendField('0 ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel4')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel5')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel6')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel7');
    this.appendDummyInput()
        .appendField('1 ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel8')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel9')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel10')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel11')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel12')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel13')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel14')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel15');
    this.appendDummyInput()
        .appendField('2 ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel16')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel17')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel18')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel19')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel20')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel21')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel22')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel23');
    this.appendDummyInput()
        .appendField('3 ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel24')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel25')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel26')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel27')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel28')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel29')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel30')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel31');
    this.appendDummyInput()
        .appendField('4 ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel32')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel33')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel34')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel35')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel36')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel37')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel38')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel39');
    this.appendDummyInput()
        .appendField('5 ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel40')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel41')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel42')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel43')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel44')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel45')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel46')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel47');
    this.appendDummyInput()
        .appendField('6 ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel48')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel49')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel50')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel51')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel52')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel53')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel54')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel55');
    this.appendDummyInput()
        .appendField('7 ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel56')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel57')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel58')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel59')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel60')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel61')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel62')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel63');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ledRGB_WS2812B.HUE);
    this.setTooltip('');
    this.setHelpUrl(Blockly.Msg.MatrixLED_WS2812B_URL);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MATRIX_NEOPIXEL_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Matrix_WS2812_fieldInstance', this)) {
      this.setWarningText(null);
    } else {
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            '%1', Blockly.Msg.NEOPIXEL_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};