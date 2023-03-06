const colorScheme = [
    ['#e1dcd9','#8f8681','#a67f78','#32435f'],
    ['#d1dddb','#85b8cb','#1d6a96','#283b42'],
    ['#ffd954','#e3b660','#f2ab39','#69491a'],
    ['#d1ede1','#7bc5ae','#028c6a','#003e19'],
    ['#d5d2c1','#bd8e62','#a46843','#370d00'],
    ['#ffc2c3','#fe7773','#e81e25','#0e0301'],
    ['#ece4e2','#fcd3d1','#fcdff3','#fe929f'],
    ['#d3b7d8','#a13e97','#632a7e','#280e3b'],
    ['#e3a6a1','#bc5f6a','#19b3b1','#034b61'],
    ['#bdbdbf','#5580a0','#cc8a4d','#32435f'],
    ['#b2a59f','#023459','#1e646e','#002c2f'],
    ['#b98d72','#ae4951','#57233a','#161b1f'],
    ['#a6c2ce','#9c8f96','#ebc57c','#6b799e'],
    ['#97baa4','#499360','#295651','#232941'],
    ['#dcc1b0','#869dab','#847072','#3d313f'],
    ['#e5edf8','#e29e93','#edbc7a','#0384bd'],
    ['#91d4c2','#45bb89','#3d82ab','#003853'],
    ['#1e94a0','#004e6d','#fec0c1','#dc2543'],
    ['#ffa289','#6a92cc','#706fab','#50293c'],
    ['#dbdbe5','#a5b7c1','#535d55','#514644'],
    ['#eb8f90','#ffb471','#adbed2','#12406a'],
    ['#6c838b','#bb7748','#9e6d70','#7f726a'],
    ['#d7cbbd','#c1893f','#af8f90','#69454f'],
    ['#82bbb5','#ca88db','#d1825b','#cca142'],
    ['#bed3d4','#e8caa4','#a1b872','#e5d67b']
]; 
const btn = document.getElementById('btn');
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const color3 = document.querySelector("#color3");
const color4 = document.querySelector("#color4");

btn.addEventListener('click', function() {
    //get random number between 0-1
    const randomNumer = getRandomNumber();
    document.getElementById('scheme1').style.backgroundColor = colorScheme[randomNumer][0];
    document.getElementById('scheme2').style.backgroundColor = colorScheme[randomNumer][1];
    document.getElementById('scheme3').style.backgroundColor = colorScheme[randomNumer][2];
    document.getElementById('scheme4').style.backgroundColor = colorScheme[randomNumer][3];
    color1.textContent = colorScheme[randomNumer][0];
    color2.textContent = colorScheme[randomNumer][1];
    color3.textContent = colorScheme[randomNumer][2];
    color4.textContent = colorScheme[randomNumer][3];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colorScheme.length);
}