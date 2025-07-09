const textValues = {
    value1: 'Learning',
    value2: 'Published 21 Dec 2023',
    value3: 'HTML & CSS foundation',
    value4: 'These languages are the backdone every website, defining structure, content, and presentation.'
}

const textFonts = {
    text1: '18px',
    text2: '17px', 
    text3: '19px',
    text4: '20px',
    text5: '22px',
    text6: '25px',
    text7: '14px',
    textDefault: '16px'
}

const $color = {
    color1: 'hsl(47, 88%, 63%)',
    color2: 'hsl(0, 0%, 100%)',
    color3: 'hsl(0, 0%, 42%)',
    color4: 'hsl(0, 0%, 7%)'
}

const $authorName = {
    name: 'Greeg',
    lastName: 'Hooper'
}

const $container = document.createElement('div');
document.body.appendChild($container);

$container.classList.add('container');
$container.style.maxWidth = '1200px';
$container.style.padding = '0 15px';
$container.style.margin = '0 auto';

const $inner = document.createElement('div');
$container.appendChild($inner);
$inner.classList.add('inner');

$inner.style.position = 'relative';
$inner.style.display = 'flex';
$inner.style.margin = '120px auto';
$inner.style.alignItems = 'center';
$inner.style.justifyContent = 'center';

const $card = document.createElement('div');
$inner.appendChild($card);
$card.classList.add('card');
    
$card.style.width = '320px';
$card.style.height = '500px';
$card.style.borderRadius = '20px';
$card.style.backgroundColor = `${$color.color2}`;
$card.style.boxShadow = '10px 10px 0px rgba(0, 0, 0, 20)';
$card.style.border = `2px solid ${$color.color4}`;

const $textInner = document.createElement('div');
$card.appendChild($textInner);
$textInner.classList.add('text');

$textInner.style.width = '300px';
$textInner.style.padding = '0 20px';

const $img = document.createElement('img');
$textInner.appendChild($img);

$img.src = './img/illustration-article.svg';
$img.style.width = '280px';
$img.style.borderRadius = '10px';
$img.style.margin = '20px 0'
$img.style.display = 'flex';
$img.style.alignItems = 'center';
$img.style.justifyContent = 'center';

const $subtitle = document.createElement('p');
$textInner.appendChild($subtitle);

$subtitle.textContent = `${textValues.value1}`;
$subtitle.style.color = `${$color.color4}`;
$subtitle.style.fontWeight = 'bold';
$subtitle.style.fontSize = `${textFonts.textDefault}`;
$subtitle.style.width = '100px';
$subtitle.style.height = '26px';

$subtitle.style.display = 'flex';
$subtitle.style.alignItems = 'center';
$subtitle.style.justifyContent = 'center';

$subtitle.style.backgroundColor = `${$color.color1}`;

const now = new Date();

const $subtitle2 = document.createElement('p');
$textInner.appendChild($subtitle2);

$subtitle2.textContent = `${Date()}`;
$subtitle2.style.fontSize = `${textFonts.text7}`;
$subtitle2.style.color = `${$color.color4}`;
$subtitle2.style.fontWeight = '400';

const $title = document.createElement('p')
$textInner.appendChild($title);

$title.textContent = `${textValues.value3}`;
$title.style.fontSize = `${textFonts.text5}`;
$title.style.color = `${$color.color4}`;
$title.style.fontWeight = 'bold';

const $description = document.createElement('p');
$textInner.appendChild($description);

$description.textContent = `${textValues.value4}`;
$description.style.fontSize = `${textFonts.text7}`;
$description.style.color = `${$color.color3}`
$description.style.fontWeight = '400';
$description.style.lineHeight = '22px';
$description.style.width = '300px';

const $authorBox = document.createElement('div');
$textInner.appendChild($authorBox);
$authorBox.style.marginTop = '-5px';
$authorBox.style.width = '200px';
$authorBox.style.display = 'flex';
$authorBox.style.alignItems = 'center';
$authorBox.style.gap = '10px';

const $author = document.createElement('img');
$authorBox.appendChild($author);

$author.src = './img/avatar/image-avatar.webp';
$author.style.width = '25px';

const $nameLastName = document.createElement('p');
$authorBox.appendChild($nameLastName);

$nameLastName.textContent = `${$authorName.name} ${$authorName.lastName}`;
$nameLastName.style.fontSize = `${textFonts.textDefault}`;
$nameLastName.style.fontWeight = '800';