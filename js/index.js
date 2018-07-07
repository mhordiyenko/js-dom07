const link = document.querySelector('a');
link.textContent = 'MDN';
link.href = 'https://developer.mozilla.org';
const sect = document.querySelector('section');
for(let i=0; i<100; i++){
   const para = document.createElement('p');
para.textContent = 'Some text' + i;
sect.appendChild(para); 
}
const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);

//linkPara.parentNode.removeChild(linkPara);
linkPara.classList.add('selected');