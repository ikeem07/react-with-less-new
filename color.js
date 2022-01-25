const path = require('path');
const { generateTheme } = require('antd-theme-generator');

const options = {
	stylesDir: path.join(__dirname, './src/theme'),
	antDir: path.join(__dirname, './node_modules/antd'),
	varFile: path.join(__dirname, './src/theme/vars.less'),
	mainLessFile: path.join(__dirname, './src/theme/index.less'),
	themeVariables: ['@primary-color', '@layout-header-background', '@menu-dark-color'],
	indexFileName: 'index.html',
	outputFilePath: path.join(__dirname, './public/color.less'),
};

generateTheme(options)
	.then((less) => {
		console.log('Theme generated successfully');
	})
	.catch((error) => {
		console.log('Error', error);
	});