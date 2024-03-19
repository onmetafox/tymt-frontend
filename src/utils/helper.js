export const replaceStr = (str) => {
    return str.split(' ').map((word, index) => (
        word === 'tymt' ? <strong className="italic" key={index}>tymt&trade;&nbsp;</strong> : word +" "
    ));
}