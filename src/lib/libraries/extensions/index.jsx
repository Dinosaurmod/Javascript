/* eslint-disable max-len */
import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import speech2textIconURL from './speech2text/speech.png';
import speech2textInsetIconURL from './speech2text/speech-small.svg'

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import animatedTextIconURL from './penguinmod/extensions/text extension.png';
import animatedTextInsetIconURL from './penguinmod/extensions/text extension small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';

import twIcon from './tw/tw.svg';
import galleryIcon from './gallery/gallery.svg';
import turbowarpIcon from './penguinmod/extensions/turbowarp_icon.svg';

import customExtensionIcon from './custom/custom.svg';
import penguinmodLibraryExtensionIcon from './penguinmod/library.svg';

import turboBuilderIcon from './penguinmod/turbobuilder.png';

import filesExtensionIcon from './penguinmod/extensions/files.png';
import filesOldExtensionIcon from './penguinmod/extensions/files_old.png';
import jgJSONExtensionIcon from './penguinmod/extensions/json.png';
import jgRuntimeExtensionIcon from './penguinmod/extensions/runtime.png';
import jgPrismExtensionIcon from './penguinmod/extensions/prism.png';

import jwProtoExtensionIcon from './penguinmod/extensions/proto.png';
import jwUniteExtensionIcon from './penguinmod/extensions/Unite.png';

import jwStructsExtensionIcon from './penguinmod/extensions/ooplogo.png';

import iygPerlinNoiseExtensionIcon from './penguinmod/extensions/perlinnoisebanner.png';

// thank yo godslayerakp for makin pmCamera :good:
import pmCameraExtensionIcon from './penguinmod/extensions/pmcamera_thumbnail.png';

// cl waw
// import cloudlinkThumb from './penguinmod/extensions/cloudlinkThumb.png';
import cloudlinkIcon from './penguinmod/extensions/cloudlinkIcon.svg';

// thx jeremey
import canvasExtensionBanner from './penguinmod/extensions/CanvasExtensionMenu.png';
import canvasExtensionIcon from './penguinmod/extensions/CanvasSmall.png';

// griffpatch stuff that hopefully we can keep pls plsplspl !!S!
import griffpatchPhysicsThumb from './penguinmod/extensions/griffpatch_physics.png';
import griffpatchPhysicsIcon from './penguinmod/extensions/griffpatch_physicsIcon.svg';

import gp from './penguinmod/extensions/gamepad.svg';
import clippingblending from './penguinmod/extensions/clippingblending.svg';

import pointerlockThumb from './penguinmod/extensions/pointerlock.svg';
import cursorThumb from './penguinmod/extensions/cursor.svg';

// LilyMakesThings 🙏
// import lmsMcUtilsIcon from './penguinmod/extensions/mcutils.png';

// more icons so they arent just red when the extension color is not red
import gsaTempVariablesExtensionIcon from './penguinmod/extensions/tempvariables.png';
import gsaColorUtilExtensionIcon from './penguinmod/extensions/colorutil.png';
import jgIframeExtensionIcon from './penguinmod/extensions/iframe.png';
import jgExtendedAudioExtensionIcon from './penguinmod/extensions/extendedaudio.png';
import jgScratchAuthExtensionIcon from './penguinmod/extensions/scratchauth2.svg';
import jgPermissionExtensionIcon from './penguinmod/extensions/permissions.png';
import silvxrcatOddMessagesExtensionIcon from './penguinmod/extensions/oddmessages.svg';
import jgCloneManagerExtensionIcon from './penguinmod/extensions/clonemanager.png';
import pmInlineBlocksExtensionIcon from './penguinmod/extensions/inlineblocks.png';
import jgPackagerApplicationsExtensionIcon from './penguinmod/extensions/packagedApplications.png';
import jgPackagerApplicationsInsetExtensionIcon from './penguinmod/extensions/packagedApplications_inset.png';

// import jgTweeningExtensionIcon from './penguinmod/extensions/tween.png';
import jgsilvxrcatInterfacesExtensionIcon from './penguinmod/extensions/interfaces2.png';

// 3D MAN WTF
import jg3dExtensionIcon from './penguinmod/extensions/3d.png';
import jg3dInsetExtensionIcon from './penguinmod/extensions/3dicon.png';
import jg3dVrExtensionIcon from './penguinmod/extensions/3dVr.png';
import jg3dVrInsetExtensionIcon from './penguinmod/extensions/3dVr_Inset.png';
import fr3dPhysicsExtensionIcon from './penguinmod/extensions/3d_physics.png';
import fr3dPhysicsInsetExtensionIcon from './penguinmod/extensions/3d_physics_icon_sized.png';

// virtal realty
import jgVrExtensionIcon from './penguinmod/extensions/vr_extension.png';

import theshovelCustomStylesIcon from './penguinmod/orgtw/CustomStyles.svg';
import theshovelCanvasEffectsIcon from './penguinmod/extensions/canvas_effects.png';
import theshovelLzCompressIcon from './penguinmod/orgtw/lz-compress2.svg';
import theshovelColorPickerIcon from './penguinmod/orgtw/ColorPicker.svg';

// events
import jgStorageExtensionIcon from './penguinmod/extensions/storage.png';
import jgTimersExtensionIcon from './penguinmod/extensions/multipletimers.png';
import jgAdvancedTextExtensionIcon from './penguinmod/extensions/advancedtext.png';

import jgJavascriptExtensionIcon from './penguinmod/extensions/javascript.png';
import jgPathfindingExtensionIcon from './penguinmod/extensions/pathfinding.png';
import jgAnimationExtensionIcon from './penguinmod/extensions/animation.png';

// category expansions
import pmMotionExpansionExtensionIcon from './penguinmod/extensions/motion_expanded.png';
import pmEventsExpansionExtensionIcon from './penguinmod/extensions/events_expanded.png';
import pmControlsExpansionExtensionIcon from './penguinmod/extensions/controls_expanded.png';
import pmSensingExpansionExtensionIcon from './penguinmod/extensions/sensing_expanded.png';
import pmOperatorsExpansionExtensionIcon from './penguinmod/extensions/operators_expanded.png';

// dinosaurmod icons
import dmDinoBuilderIcon from './dinosaurmod/dinobuilder.png';

// other stuff (not official by penguinmod)
import PenguinmodThumb from './penguinmod/unofficial-icons/penguinmod-icon.svg';

// jg: default icon if you are too lazy to make one and you want me to make one instead lololololololol
// gsa: ololololololo
import defaultExtensionIcon from './penguinmod/extensions/placeholder.png';

const urlParams = new URLSearchParams(location.search);

const IsLocal = String(window.location.href).startsWith(`http://localhost:`);
const IsLiveTests = urlParams.has('livetests');
const IsSecret = urlParams.has('verysecretplsnolook');

const menuItems = [
    {
        name: 'Save Data',
        extensionId: 'https://dinosaurmod.github.io/savedata.js',
        iconURL: 'https://snail-ide.js.org/static/assets/14ea6745b6f8a3c8e3cb4d3392f04573.svg',
        insetIconURL: PenguinmodThumb,
        collaborator: 'Snail IDE (Slighty modified from their extension)',
        customInsetColor: '#00c3ff',
        tags: ['penguinmod','turbowarp'],
        description: "Extremely easy way to save data.",
        featured: true
    },
    {
        name: 'TurboBuilder',
        href: 'https://legacy-turbobuilder.vercel.app',
        extensionId: 'special_turboBuilder',
        iconURL: turboBuilderIcon,
        description: 'Create your own amazing extensions using a scratch-based UI!',
        credits: 'Started by JeremyGamer13, continued by jwklong',
        featured: true,
        disabled: false
    },
    {
        name: 'CreateExt',
        href: 'https://ext-create.vercel.app/',
        extensionId: 'special_ExtCreate',
        iconURL: 'https://snail-ide.js.org/static/assets/2bcc1426567c2ca1179de43c02577d1a.svg',
        description: 'Snail IDE version of TurboBuilder',
        collaborator: 'Started by JeremyGamer13, continued by jwklong, modified by nmsderp',
        featured: true
    },
    {
        name: 'TurboBuilder - Dev Branch',
        href: 'https://dev-turbobuilder.vercel.app/',
        extensionId: 'special_turboBuilderDev',
        iconURL: 'https://studio.penguinmod.com/static/assets/78d464ee4e15000ce44b841ff2f4c518.png',
        description: 'Publicly available developer branch, with the latest features.',
        credits: 'Started by JeremyGamer13, continued by jwklong',
        tags: ['extcreate'],
        featured: true
    },
    {
        name: 'DinoBuilder',
        href: 'https://dinobuilder.vercel.app',
        extensionId: 'special_dinoBuilder',
        iconURL: dmDinoBuilderIcon,
        description: 'Create your own amazing extensions using a TurboBuilder Mod scratch-based UI!',
        credits: 'MrIncredibleMakerZe',
        featured: true,
        disabled: false
    },
    /*{
        // not really an extension, but it's easiest to present it as one
        name: (
            <FormattedMessage
                defaultMessage="Custom Extension"
                description="Name of library item to load a custom extension from a remote source"
                id="tw.customExtension.name"
            />
        ),
        extensionId: '',
        iconURL: customExtensionIcon,
        description: (
            <FormattedMessage
                defaultMessage="Load custom extensions from URLs, files, or JavaScript source code."
                description="Description of library item to load a custom extension from a custom source"
                id="tw.customExtension.description"
            />
        ),
        tags: ['tw'],
        featured: true
    }*/
];

if (IsLocal || IsLiveTests) {
    const extras = [
        {
            name: 'Clone Communication',
            extensionId: 'jgClones',
            iconURL: jgCloneManagerExtensionIcon,
            tags: ['penguinmod'],
            description: 'Mainly sharing data between clones and the main sprite, but also some other small features. This has been replaced by the TurboWarp Clones+ extension.',
            featured: true
        },
        {
            name: 'an amazing extension',
            extensionId: 'jgBestExtension',
            iconURL: 'https://extensions.penguinmod.com/images/JeremyGamer13/epic.png',
            internetConnectionRequired: true,
            tags: ['penguinmod', 'joke'],
            description: 'this is SUCH A GOOD EXTENSION USE IT NOW',
            featured: true
        },
        {
            name: 'Epic utilities',
            extensionId: 'https://extensions.penguinmod.com/extensions/SharkPool/AprilFools.js',
            iconURL: 'https://extensions.penguinmod.com/images/JeremyGamer13/epicutils.png',
            tags: ['penguinmod', 'joke'],
            description: 'the super good utilities brought to you by todays sponsor sharkpool (the epic utilities)',
            featured: true
        },
        {
            name: 'image blocks',
            extensionId: 'https://extensions.penguinmod.com/extensions/Ashime/funneimageblocks.js',
            iconURL: 'https://extensions.penguinmod.com/images/JeremyGamer13/screenshot1.png',
            tags: ['penguinmod', 'joke'],
            internetConnectionRequired: true,
            description: 'who needs cat blocks when you have penguin block',
            extDeveloper: 'Ashimee, 0znzw, CST1229',
            featured: true
        },
        {
            name: 'fire in the hole',
            extensionId: 'https://extensions.penguinmod.com/extensions/JeremyGamer13/FireInTheHole.js',
            iconURL: 'https://library.penguinmod.com/files/emojis/cluelesssmile.png',
            tags: ['penguinmod', 'joke', 'forbidden'],
            internetConnectionRequired: true,
            description: 'this joke is not funny anymore',
            featured: true
        },
        {
            name: 'Fetch+',
            extensionId: 'https://gabsthecuriouskid.github.io/FirstExtension/extensions/fetchplus.js',
            tags: ['dinosaurmod'],
            iconURL: 'https://extensions.turbowarp.org/images/fetch.svg',
            description: "get and post stuff, i guess.",
            featured: true,
        },
        {
            name: 'JavaScript',
            extensionId: 'jgJavascript',
            iconURL: jgJavascriptExtensionIcon,
            insetIconURL: PenguinmodThumb,
            customInsetColor: '#00c3ff',
            tags: ['penguinmod', 'programminglanguage'],
            description: 'This Extension has been merged into the main toolbox. Run your own custom code written in JavaScript!',
            featured: true
        },
        {
            name: 'Easy Save',
            extensionId: 'jgEasySave',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod'],
            description: 'Save variables, lists and extra info to a file, then load those things back in.',
            featured: true
        },
        {
            name: '(OLD) Motion Expansion',
            extensionId: 'pmMotionExpansion',
            iconURL: pmMotionExpansionExtensionIcon,
            tags: ['penguinmod', 'categoryexpansion'],
            insetIconURL: PenguinmodThumb,
            customInsetColor: '#00c3ff',
            description: "Replaced by the dinosaurmod version. More small motion blocks for movement or collision.",
            featured: true,
            credits: 'Some blocks from NexusKitten'
        },
        {
            name: 'Extra Inputs',
            extensionId: 'https://gabsthecuriouskid.github.io/FirstExtension/extensions/extrainputs.js',
            tags: ['dinosaurmod'],
            iconURL: 'https://gabsthecuriouskid.github.io/FirstExtension/images/ExtraInputsThumbnail.png',
            description: "This Extension has been merged into the main toolbox. Extra Inputs that you can use.",
            featured: true,
            extDeveloper: 'MrIncredibleMakerZe'
        },
        {
            name: 'Unite',
            extensionId: 'jwUnite',
            iconURL: jwUniteExtensionIcon,
            tags: ['penguinmod'],
            description: 'Legacy extension that was eventually merged into the default toolbox.',
            featured: true
        },
        {
            name: 'XML',
            extensionId: 'jwXml',
            iconURL: 'https://studio.penguinmod.com/static/assets/73077ae1577fa8af2e8544e19e447491.png',
            tags: ['penguinmod', 'datamgmt'],
            description: 'Enables the creation and getting of XML data. Not yet able to modify data.',
            extDeveloper: 'jwklong',
            featured: true
        },
        {
            name: 'TurboBuilder Extension',
            extensionId: 'https://gabsthecuriouskid.github.io/FirstExtension/legacy-extensions/turbobuilder.js',
            iconURL: 'https://studio.penguinmod.com/static/assets/93db39f338237e6a51790829ba22a879.png',
            description: 'Not alot of options yet. Create your own amazing extensions!',
            tags: ['dinosaurmod'],
            credits: 'MrIncredibleMaker',
            featured: true,
        },
        {
            name: 'Debugging',
            extensionId: 'jgDebugging',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod'],
            description: 'Log information and run commands. Good for debugging packaged projects or just easily changing things.',
            featured: true
        },
        {
            name: 'PenguinMod Permissions',
            extensionId: 'JgPermissionBlocks',
            iconURL: jgPermissionExtensionIcon,
            tags: ['penguinmod'],
            description: 'Legacy extension, old blocks no longer serve a real purpose. Direct blocks to manage permissions that PenguinMod requires you have to do certain tasks.',
            featured: true
        },
        {
            name: 'Jeremys Dev Tools',
            extensionId: 'jgDev',
            iconURL: defaultExtensionIcon,
            tags: ['penguinmod'],
            description: 'Test extension to see if things are possible.\nDO NOT USE THIS IN PRODUCTION as blocks are subject to change and may corrupt your projects.',
            featured: true
        },
        {
            name: '3D Virtual Reality',
            extensionId: 'jg3dVr',
            iconURL: jg3dVrExtensionIcon,
            tags: ['penguinmod', 'hardware'],
            customInsetColor: '#B200FF',
            insetIconURL: jg3dVrInsetExtensionIcon,
            description: 'In development. May break compatibility. Allow players to really jump into your world!',
            featured: true
        },
        {
            name: 'Advanced Text',
            extensionId: 'jgAdvancedText',
            eventSubmittor: 'eggo',
            iconURL: jgAdvancedTextExtensionIcon,
            tags: ['penguinmod'],
            description: 'In development. Currently not publicly available.',
            featured: true
        },
        {
            name: 'Interfaces',
            extensionId: 'jgInterfaces',
            iconURL: jgsilvxrcatInterfacesExtensionIcon,
            credits: 'silvxrcat',
            tags: ['penguinmod'],
            description: 'In development.',
            featured: true
        },
        {
            name: 'Packager Applications',
            extensionId: 'jgPackagerApplications',
            iconURL: jgPackagerApplicationsExtensionIcon,
            insetIconURL: jgPackagerApplicationsInsetExtensionIcon,
            twDeveloper: 'CubesterYT',
            customInsetColor: '#66B8FF',
            tags: ['penguinmod', 'packager'],
            description: 'In development. Do extra things in packaged applications that you can\'t do in the website!',
            featured: true
        },
        {
            name: 'Inline Blocks',
            extensionId: 'pmInlineBlocks',
            iconURL: pmInlineBlocksExtensionIcon,
            tags: ['penguinmod'],
            description: 'Create quick blocks for simple tasks. Insert them into any circle spot and have them return any value you want.',
            featured: true
        },
        {
            name: (
                <FormattedMessage
                    defaultMessage="Pathfinding"
                    description="Name of Pathfinding extension"
                    id="jgPathfinding.Pathfinding.name"
                />
            ),
            extensionId: 'jgPathfinding',
            tags: ['penguinmod'],
            iconURL: jgPathfindingExtensionIcon,
            description: (
                <FormattedMessage
                    defaultMessage="(Unstable and or laggy; Needs further work) Have sprites navigate around obstacles in your game instead of clipping into them."
                    description="Description of Pathfinding extension"
                    id="jgPathfinding.Pathfinding.description"
                />
            ),
            featured: true
        },
        {
            name: 'Animation',
            extensionId: 'jgAnimation',
            iconURL: jgAnimationExtensionIcon,
            tags: ['penguinmod'],
            description: 'In development. Currently not publicly available.',
            featured: true
        },
        {
            name: 'Virtual Reality',
            extensionId: 'jgVr',
            iconURL: jgVrExtensionIcon,
            tags: ['penguinmod', 'hardware'],
            description: 'In development.',
            credits: 'Vadik1',
            featured: true
        },
    ];
    extras.forEach(ext => {
        menuItems.push(ext);
    });
};

if (IsSecret && IsLiveTests) {
    const secret = [
        {
            name: 'MR BEAST UTILTITIES',
            extensionId: 'https://turbololder.vercel.app/extensions/mrbeastutil.js',
            iconURL: 'https://turbololder.vercel.app/images/Mr_Beast_Utilitities.svg',
            description: 'the best blockes ever',
            extDeveloper: 'JeremyGamer13',
            featured: true
        },
        {
            name: 'Jungle Inferno',
            extensionId: 'https://turbololder.vercel.app/extensions/jungleinferno.js',
            iconURL: 'https://turbololder.vercel.app/images/none.png',
            description: 'a good',
            extDeveloper: 'LilyMakesThings',
            featured: true
        },
        {
            name: 'Fleef',
            extensionId: 'https://gabsthecuriouskid.github.io/FirstExtension/legacy-extensions/fleef.js',
            iconURL: defaultExtensionIcon,
            description: 'this extension refuses to be committed.',
            extDeveloper: 'MrIncredibleMaker',
            featured: true
        },
    ];
    secret.forEach(ext => {
        menuItems.push(ext);
    });
}

export default menuItems;
