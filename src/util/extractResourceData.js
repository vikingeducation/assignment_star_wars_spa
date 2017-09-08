export default (schema, data) => {
	const returnArr = data.map(resource => {
		const retData = {};
		Object.keys(schema).forEach(key => (retData[key] = resource[key]));
		return retData;
	});
	return returnArr.length === 1 ? returnArr[0] : returnArr;
};
