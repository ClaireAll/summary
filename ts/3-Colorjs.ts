import Color from 'color';

const color = Color("#e7eaf3");
console.log(color.rgb().array());
console.log(color.fade(0.25).hexa());
console.log(color.fade(0.25).rgb().array());
console.log(color.rgb().array());