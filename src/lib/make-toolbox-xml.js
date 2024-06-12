import LazyScratchBlocks from './tw-lazy-scratch-blocks';

const categorySeparator = '<sep gap="36"/>';

const blockSeparator = '<sep gap="36"/>'; // At default scale, about 28px

const translate = (id, english) => {
    if (LazyScratchBlocks.isLoaded()) {
        const ScratchBlocks = LazyScratchBlocks.get();
        return ScratchBlocks.ScratchMsgs.translate(id, english);
    }
    return english;
};

/* eslint-disable no-unused-vars */
const motion = function (isInitialSetup, isStage, targetId) {
    return `
    <category name="%{BKY_CATEGORY_MOTION}" id="motion" colour="#FF0000" secondaryColour="#000000">
        <label text="Work in Progress></label>
        ${categorySeparator}
    </category>
    `;
};

const xmlEscape = function (unsafe) {
    return unsafe.replace(/[<>&'"]/g, c => {
        switch (c) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case '\'': return '&apos;';
        case '"': return '&quot;';
        }
    });
};

const variables = function (isInitialSetup, isStage, targetId) {
    return `
    <category name="%{BKY_CATEGORY_VARIABLES}" id="variables" colour="#FF8C1A" secondaryColour="#DB6E00">
        <block type="data_setvariableto"></block>
        <block type="data_changevariableby"></block>
        <block type="data_variable"></block>
    </category>
    `;
};

/*
custom="VARIABLE"
custom="LIST">
*/

const lists = function (isInitialSetup, isStage, targetId) {
    return `
    <category name="Lists" id="lists" colour="#FF661A" secondaryColour="#FF5500">
        <block type="data_listcontents"></block>
        <block type="data_addtolist"></block>
        <block type="data_deleteoflist"></block>
        <block type="data_arraylist"></block>
        <block type="data_insertatlist"></block>
        <block type="data_replaceitemoflist"></block>
    </category>
    `;
};

const myBlocks = function () {
    return `
    <category
        name="%{BKY_CATEGORY_MYBLOCKS}"
        id="myBlocks"
        colour="#FF6680"
        secondaryColour="#FF4D6A"
        custom="PROCEDURE">
    </category>
    `;
};

const liveTests = function () {
    return `
    <category name="Live Tests" id="liveTests" colour="#FF0000" secondaryColour="#FF0000">
        <block type="procedures_call">
            <mutation proccode="tw:debugger;" argumentids="[]" warp="false" returns="null" edited="true" optype="null"></mutation>
        </block>
        ${blockSeparator}
        <block type="looks_setVertTransform">
            <value name="PERCENT">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="looks_setHorizTransform">
            <value name="PERCENT">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="control_fieldbutton"></block>
        <block type="operators_expandablejoininputs"></block>
        <block type="motion_mutatorCheckboxTest"></block>
    </category>
    `;
};

/* eslint-enable no-unused-vars */

const xmlOpen = '<xml style="display: none">';
const xmlClose = '</xml>';

/**
 * @param {!boolean} isInitialSetup - Whether the toolbox is for initial setup. If the mode is "initial setup",
 * blocks with localized default parameters (e.g. ask and wait) should not be loaded. (LLK/scratch-gui#5445)
 * @param {?boolean} isStage - Whether the toolbox is for a stage-type target. This is always set to true
 * when isInitialSetup is true.
 * @param {?string} targetId - The current editing target
 * @param {?Array.<object>} categoriesXML - optional array of `{id,xml}` for categories. This can include both core
 * and other extensions: core extensions will be placed in the normal Scratch order; others will go at the bottom.
 * @property {string} id - the extension / category ID.
 * @property {string} xml - the `<category>...</category>` XML for this extension / category.
 * @param {?string} costumeName - The name of the default selected costume dropdown.
 * @param {?string} backdropName - The name of the default selected backdrop dropdown.
 * @param {?string} soundName -  The name of the default selected sound dropdown.
 * @param {?boolean} isLiveTest - whether or not we should display the live tests categpory
 * @returns {string} - a ScratchBlocks-style XML document for the contents of the toolbox.
 */
const makeToolboxXML = function (isInitialSetup, isStage = true, targetId, categoriesXML = [],
    costumeName = '', backdropName = '', soundName = '', isLiveTest = false) {
    isStage = isInitialSetup || isStage;
    const gap = [categorySeparator];

    costumeName = xmlEscape(costumeName);
    backdropName = xmlEscape(backdropName);
    soundName = xmlEscape(soundName);

    categoriesXML = categoriesXML.slice();
    const moveCategory = categoryId => {
        const index = categoriesXML.findIndex(categoryInfo => categoryInfo.id === categoryId);
        if (index >= 0) {
            // remove the category from categoriesXML and return its XML
            const [categoryInfo] = categoriesXML.splice(index, 1);
            return categoryInfo.xml;
        }
        // return `undefined`
    };
    const motionXML = moveCategory('motion') || motion(isInitialSetup, isStage, targetId);
    const variablesXML = moveCategory('data') || variables(isInitialSetup, isStage, targetId);
    const listsXML = moveCategory('lists') || lists(isInitialSetup, isStage, targetId);
    const myBlocksXML = moveCategory('procedures') || myBlocks(isInitialSetup, isStage, targetId);
    const liveTestsXML = moveCategory('liveTests') || liveTests(isLiveTest);

    const everything = [
        xmlOpen,
        motionXML, gap,
        variablesXML, gap,
        listsXML, gap,
        myBlocksXML, gap,
        isLiveTest ? [liveTestsXML, gap] : ''
    ];

    for (const extensionCategory of categoriesXML) {
        everything.push(gap, extensionCategory.xml);
    }

    everything.push(xmlClose);
    return everything.join('\n');
};

export default makeToolboxXML;
