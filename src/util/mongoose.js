export const mutipleMongooesToObject = (mongoosesArr) => {
    return mongoosesArr.map((arr) => arr.toObject());
};
export const mongooesToObject = (arr) => {
    return arr ? arr.toObject() : arr;
};
