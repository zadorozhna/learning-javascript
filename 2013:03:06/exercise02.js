var line = new Array();

 line[0] = new Array("1","2","3","4","5","6","7","8","9","10");
 line[1] = new Array("2","4","6","8","10","12","14","16","18","20");
 line[2] = new Array("3","6","9","12","15","18","21","24","27","30");
 line[3] = new Array("4","8","12","16","20","24","28","32","36","40");
 line[4] = new Array("5","10","15","20","25","30","35","40","45","50");
 line[5] = new Array("6","12","18","24","30","36","42","48","54","60");
 line[6] = new Array("7","14","21","28","35","42","49","56","63","70");
 line[7] = new Array("8","16","24","32","40","48","56","64","72","80");
 line[8] = new Array("9","18","27","36","45","54","63","72","81","90");
 line[9] = new Array("10","20","30","40","50","60","70","80","90","100");


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