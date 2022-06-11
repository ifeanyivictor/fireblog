// using this method to shorten our description in the home page
export const excerpt = (str, count)=> {
    if (str.length > count) {
        str = str.substring(0, count) + "...";
    }
    return str
}