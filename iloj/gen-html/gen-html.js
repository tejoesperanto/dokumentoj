const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');
const MarkdownIt = require('markdown-it')({
	html: true
})
	.use(require('markdown-it-front-matter'), fm => {
		mdFm = yaml.safeLoad(fm);
	});

const doc = process.argv[2];
if (!doc) {
	console.error('eraro: mankas <dokumento>');
	process.exit(1);
}
const docCssSafe = doc
	.replace(/\//g, '@')
	.replace(/\s/g, '_');

const rootdir = path.join(__dirname, '../../')
const docdir = path.join(rootdir, 'dok/');
const gendir = path.join(rootdir, 'gen/');

// Find markdown input
const mdPath = path.join(docdir, doc + '.md');
const mdData = fs.readFileSync(mdPath, 'utf8');

// Load css if exists
let cssData = null;
const cssPath = path.join(docdir, doc + '.css');
if (fs.existsSync(cssPath)) {
	cssData = fs.readFileSync(cssPath, 'utf8');
}

// Generate html output
let mdFm = null; // overwritten by markdown-it-front-matter
const mdHtml = MarkdownIt.render(mdData);
let htmlData = '';
if (cssData) {
	htmlData += `<style>\n${cssData}\n</style>\n`;
}
htmlData += `<div id="dok-${docCssSafe}">${mdHtml}</div>`;
const htmlPath = path.join(gendir, doc + '.html');
fs.writeFileSync(htmlPath, htmlData);

// Generate full html output
const fullHtmlData = 
	`<!doctype html>
	<html lang="eo">
		<head>
			<meta charset="utf-8">
			<title>${mdFm.title}</title>
		</head>
		<body>\n${htmlData}\n</body>
	</html>
	`;
const fullHtmlPath = path.join(gendir, doc + '.full.html');
fs.writeFileSync(fullHtmlPath, fullHtmlData);
