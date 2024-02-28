export const toCapitalize = (text) => {
    const firstLetter = text['0'].toUpperCase();

    return firstLetter + text.substring(1);
}