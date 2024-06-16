/* global Opal */
import {defineMessages} from 'react-intl';
import _ from 'lodash';
import log from '../log';
import Blockly from 'scratch-blocks';
import RubyParser from '../ruby-parser';
import Variable from 'scratch-vm/src/engine/variable';

import Primitive from './primitive';
import {RubyToBlocksConverterError} from './errors';

import ControlConverter from './control';

const messages = defineMessages({
    couldNotConvertPremitive: {
        defaultMessage: '"{ SOURCE }" could not be converted the block.',
        description: 'Error message for converting ruby to block when find the premitive',
        id: 'gui.smalruby3.rubyToBlocksConverter.couldNotConvertPremitive'
    },
    wrongInstruction: {
        defaultMessage: '"{ SOURCE }" is the wrong instruction.',
        description: 'Error message for converting ruby to block when find the wrong instruction',
        id: 'gui.smalruby3.rubyToBlocksConverter.wrongInstruction'
    }
});

/* eslint-disable no-invalid-this */
const ColorRegexp = /^#[0-9a-fA-F]{6}$/;

// from scratch-vm/src/serialization/sb3.js
const CORE_EXTENSIONS = [
    'argument',
    'colour',
    'control',
    'data',
    'event',
    'looks',
    'math',
    'motion',
    'operator',
    'procedures',
    'sensing',
    'sound'
];

// from scratch-vm/src/serialization/sb3.js
const getExtensionIdForOpcode = function (opcode) {
    const index = opcode.indexOf('_');
    const prefix = opcode.substring(0, index);
    if (CORE_EXTENSIONS.indexOf(prefix) === -1) {
        if (prefix !== '') return prefix;
    }
    return null;
};