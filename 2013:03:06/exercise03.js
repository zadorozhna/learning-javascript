var line = new Array();

 line[0] = new Array("1","0","0","0","0","0","0","0","0","0");
 line[1] = new Array("0","1","0","0","0","0","0","0","0","0");
 line[2] = new Array("0","0","1","0","0","0","0","0","0","0");
 line[3] = new Array("0","0","0","1","0","0","0","0","0","0");
 line[4] = new Array("0","0","0","0","1","0","0","0","0","0");
 line[5] = new Array("0","0","0","0","0","1","0","0","0","0");
 line[6] = new Array("0","0","0","0","0","0","1","0","0","0");
 line[7] = new Array("0","0","0","0","0","0","0","1","0","0");
 line[8] = new Array("0","0","0","0","0","0","0","0","1","0");
 line[9] = new Array("0","0","0","0","0","0","0","0","0","1");


var i;
var j;

document.write('<table cellpadding=8>');

for (i=0; i<line.length; i++){
	document.write('<tr>');
    for (j=0; j<line[i].length-1; j++){
    	document.write('<td>');
        document.write(line[i][j]);
        document.write(",");
        document.write('</td>');
    }
  document.write('<td>');
    document.write(line[i][j]);
    document.write('</td>');
    document.write('</tr>');
    document.write('<br>');
}
document.write('</table>');
