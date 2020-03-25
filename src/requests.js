import axios from 'axios';
import {dictonaryKey,thesaurusKey} from './keys';
import levenshtein from 'fast-levenshtein'

export const getDefinition = async (word) => {
    const {data} = await axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${dictonaryKey}`);

    if (typeof data[0] === 'string') {
        const distances = data.map(responseWord => levenshtein.get(word, responseWord))
        const closest = distances.indexOf(Math.min.apply(null, distances));
        const nextWord = data[closest];
        return await getDefinition(nextWord)
    }

    return data[0].shortdef;
}