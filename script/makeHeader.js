const as_HEADER_HTML = [
    '<h1><a href="index.html">五十音表</a></h1>',
    '<nav class="navigator">'+
        '<ul>'+
            '<li><a href="hiraKana.html">平󠄁假字</a></li>'+
            '<li><a href="kataKana.html">片假字</a></li>'+
            '<li><a href="otherKana.html">補遺󠄁</a></li>'+
        '</ul>'+
    '</nav>'
];

const s_LINK_HTML =
'<link rel="stylesheet" href="style/style.css">';

let elementHeader =
document
.getElementById('header');

for (let i = 0; i < as_HEADER_HTML.length; i++) {
    elementHeader
    .insertAdjacentHTML(
        'beforeEnd',
        as_HEADER_HTML[i]
    );
}

document
.getElementsByTagName('head')[0]
.insertAdjacentHTML(
    'beforeEnd',
    s_LINK_HTML
);
