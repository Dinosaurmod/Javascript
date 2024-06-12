export default function (Generator) {
    Generator.control_wait = function (block) {
        const delay = Generator.valueToCode(block, 'DELAY', Generator.ORDER_NONE) || 0;
        return `await new Promise(resolve => setTimeout(resolve, ${delay} * 1000))\n`;
    };
    return Generator;
}