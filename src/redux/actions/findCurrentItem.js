// if you choice one card, the currentItem will go to save for show in the next screen
export const type = 'findCurrentItem';

const findCurrentItem = (id)  => {
    return{
        type,
        payload: id,
    }
};

export default findCurrentItem;