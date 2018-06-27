var log = console.log;

function matrixPrint(m) {
for(var i=0;i<m.length;i++)
log(m[i]);
}

function strset(s, i, c) {
return s.substr(0, i) + c + s.substr(i+1);
}

function findPath(m, x, y) { //x, y 表示現在位子 findPath->遞迴
log("=========================");
log("x="+x+" y="+y);
matrixPrint(m);
if (x>=6||y>=8) return false;
if (m[x][y] == '*') return false; //牆壁
if (m[x][y] == '+') return false; //走完，不希望再被走一次
if (m[x][y] == ' ') m[x] = strset(m[x], y, '.'); //還沒走
if (m[x][y] == '.' && (x==5||y==7)) //目標(出口)走到(5,7)就結束 代表現在走
return true;
if (y<7&&m[x][y+1]==' ') //向右 
if (findPath(m, x, y+1)) return true;
if (x<5&&m[x+1][y]==' ') //向下
if (findPath(m, x+1, y)) return true;
if (y>0&&m[x][y-1]==' ') //向左
if (findPath(m, x, y-1)) return true;
if (x>0&&m[x-1][y]==' ') //向上 
if (findPath(m, x-1, y)) return true;
m[x][y]='+'; //假如四個方向都走不通，放'+'告訴他不要再走這
return false;
}

var m =["********",
"** * ***",
" ***",
"* ******",
"* **",
"***** **"];

findPath(m, 2, 0); //從(2,0)出發
log("=========================");
matrixPrint(m);