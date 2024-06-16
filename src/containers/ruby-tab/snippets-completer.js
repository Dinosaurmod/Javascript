import BaseCompleter from './base-completer';

import ControlSnippets from './control-snippets.json';

class SnippetsCompleter extends BaseCompleter {
    #completions = [];

    constructor () {
        super();

        const snippetsList = [
            ControlSnippets,
        ];
        snippetsList.forEach(snippets => {
            for (const [caption, item] of Object.entries(snippets)) {
                item.caption = caption;
                item.type = 'snippet';
                this.#completions.push(item);
            }
        });
    }

    getCompletions (editor, session, pos, prefix, callback) {
        callback(null, this.#completions);
    }
}

export default SnippetsCompleter;