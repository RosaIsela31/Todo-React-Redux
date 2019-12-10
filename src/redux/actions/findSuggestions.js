// If you put one letter, for example a, te suggestions will show you amazon 
export const type = 'findSuggestions';

const findSuggestions = (text)  => {
    return{
        type,
        payload: text,
    }
};

export default findSuggestions;