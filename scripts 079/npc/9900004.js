importPackage(net.sf.odinms.client);
var status = 0;

var zz ="ð�յ�"; //������������

function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {
if (mode == -1) {
cm.dispose();
} else {
if (mode == 0 && status == 0) {
cm.dispose();
return;
}
if (mode == 1)
status++;
else
status--;

if (status == 0) {

if (cm.getPlayer().getDojoPoints() == 0) {//
cm.sendNext("#d#r"+cm.mxdmz()+"ð�յ�#k,#d���˴����.\r\n\r\n#b------------------#d[��Ҷ�����������]#b------------------\r\n\r\n#b[װ  ��]#b >>>> #v1002140#(ȫ��+2000),#v1372077#,#v1432080#,\r\n#r[������]#b >>>> #v1302070#,#v1012135#,#v1092048#.#b\r\n[��  װ]#b >>>> #v1702305#,#v1702289#,#v1042096#��#v1042081#,#v1062105#,#v1003049#\r\n[��  ��]#b >>>> #v4002002# x 1,#v2000005# x 100,#v4031454# x 30,\r\n              ��� x 50,000.");

} else if (cm.getPlayer().getReborns() == 15) {//
} else{
cm.sendOk("#b���Ѿ���ȡ�������˻��Ѿ�����������.");
cm.dispose();
} 

} else if (status == 1) {
//��װ
cm.gainItem(1702305,1);
cm.gainItem(1702298,1);
cm.gainItem(1702289,1);
cm.gainItem(1042096,1);
cm.gainItem(1042081,1);
cm.gainItem(1003049,1);
cm.gainItem(1062105,1);
//װ��
cm.gainItem(1012135,1);
//��Ʊ
cm.gainItem(4002002,2);
//����
cm.gainItem(2000005,100);
cm.gainItem(4031454,30);//ʥ��
//���
cm.gainNX(50000);
//ѫ��
var xunzhang = 1142000;//ѫ��
var shuxing = 50; //����
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(xunzhang); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(xunzhang)).copy(); // ����һ��Equip��
//var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 60000 * 60 * 24 * 365); //ʱ��
//toDrop.setExpiration(temptime); //��װ��ʱ��
toDrop.setStr(shuxing);
toDrop.setDex(shuxing);
toDrop.setInt(shuxing);
toDrop.setLuk(shuxing);
toDrop.setSpeed(20);
toDrop.setJump(20);					
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);

var xnzhang = 1002140;//�߲�GMñ��
var shxing = 2000; //����
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(xnzhang); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(xnzhang)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 60000 * 60 * 24 * 365); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
toDrop.setStr(shxing);
toDrop.setDex(shxing);
toDrop.setInt(shxing);
toDrop.setLuk(shxing);
toDrop.setSpeed(20);
toDrop.setJump(20);					
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);


var xzhang = 1302070;//����-����
var sxing = 100; //����
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(xzhang); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(xzhang)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 60000 * 60 * 24 * 365); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
toDrop.setStr(sxing);
toDrop.setDex(sxing);
toDrop.setInt(sxing);
toDrop.setLuk(sxing);
toDrop.setSpeed(20);
toDrop.setJump(20);					
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);



var xhang = 1092048;//
var sing = 50; //����
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(xhang); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(xhang)).copy(); // ����һ��Equip��
//var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 60000 * 60 * 24 * 365); //ʱ��
//toDrop.setExpiration(temptime); //��װ��ʱ��
toDrop.setStr(sing);
toDrop.setDex(sing);
toDrop.setInt(sing);
toDrop.setLuk(sing);
toDrop.setSpeed(20);
toDrop.setJump(20);					
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);


cm.getPlayer().setDojoPoints(cm.getPlayer().getDojoPoints() + 1);
cm.getChar().setLevel(10);
cm.sendOk("#r[�������]#n������������.\r\n#k��ʼ���ð��֮�ð�.���ұߵĴ����ſ��Գ�ȥ,��ȥ�����ٽ���.ף��һ·˳��.");
cm.dispose();	
}				
}
}
