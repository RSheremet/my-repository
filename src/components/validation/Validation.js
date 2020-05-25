export const fieldRequired = value => {
    if (value) return undefined;
    return "Введите пожалуйста текст";
};

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `maximum size is ${maxLength} symbols`;
    return undefined;
};