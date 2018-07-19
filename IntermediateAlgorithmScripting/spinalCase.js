function spinalCase(str) {
  str = str.replace(/_|-/g,' ');
  str = str.replace( /([a-z])([A-Z])/g, "$1 $2");
  str = str.replace(/ /g, '-');
  str = str.toLowerCase();

  return str;
}
