var status = 0;

var zz ="����5Ԫð�յ�"; //������������

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
if (cm.getPlayer().getClan() == 0) {
var lingqu="#r10����#k";
} else if (cm.getPlayer().getClan() == 1) {
var lingqu="#v1002357#(50����)";
} else if (cm.getPlayer().getClan() == 2) {
var lingqu="#v1122000#(50����)";
} else if (cm.getPlayer().getClan() == 3) {
var lingqu="#r����װ��#k#b�һ���";
} else if (cm.getPlayer().getClan() == 4) {
var lingqu="#r����װ��#k#b�һ���";
} else if (cm.getPlayer().getClan() == 5) {
var lingqu="#v2340000#10 ��";
} else if (cm.getPlayer().getClan() == 6) {
var lingqu="#v1142004#(50����)";
} else if (cm.getPlayer().getClan() == 7) {
var lingqu="#r10Ԫ��#k";
} else if (cm.getPlayer().getClan() == 8) {
var lingqu="#r10Ԫ��#k";
} else if (cm.getPlayer().getClan() == 9) {
var lingqu="#v1002926#(100����)#n";
} else if (cm.getPlayer().getClan() == 10) {
var lingqu="#v1002927#(200����)#n";
} else if (cm.getPlayer().getClan() == 11) {
var lingqu="#r10Ԫ��#k";
} else if (cm.getPlayer().getClan() == 12) {
var lingqu="#v1112907#(300����)#n";
} else if (cm.getPlayer().getClan() == 13) {
var lingqu="#v1112907#(400����)#n";
} else if (cm.getPlayer().getClan() == 14) {
var lingqu="#v1112907#(500����)#n";
} else if (cm.getPlayer().getClan() == 15) {
var lingqu="#v1112907#(888����)#n";
} else{
var lingqu="ȫ����ȡ���";
}
var didi =cm.getPlayer().getClan();
var gege = didi+1;

cm.sendNext(""+cm.mxdmz()+"ð�յ�,����������ȡ.#k\r\n\r\n   #b��ǰת������:#r" + cm.getChar().getReborns() + "#k#b ��\r\n\r\n����ǰ�ķ�����������ȡ��#r"+gege+"#k#b�׶�����:"+lingqu+"\r\n");



} else if (status == 1) {
if (cm.getPlayer().getClan() == 0 &&cm.getPlayer().getReborns() >= 10) {
cm.gainNX(100000);
cm.sendOk("#b��ϲ���Ѿ��ɹ���ȡ��#r10����#k.");
cm.setClan(1);
cm.dispose();




} else if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(1)).isFull()){
cm.sendOk("�뱣֤װ����λ�пո�������.");
cm.dispose();  
} else if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(2)).isFull()){
cm.sendOk("�뱣֤װ����λ�пո�������.");
cm.dispose(); 
} else if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(3)).isFull()){
cm.sendOk("�뱣֤װ����λ�пո�������.");
cm.dispose(); 
} else if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(4)).isFull()){
cm.sendOk("�뱣֤װ����λ�пո�������.");
cm.dispose(); 




} else if (cm.getPlayer().getClan() == 1&&cm.getPlayer().getReborns() >= 15) {
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();	
var type = ii.getInventoryType(1002357);	
var toDrop = ii.randomizeStats(ii.getEquipById(1002357)).copy();
toDrop.setStr(50);
toDrop.setDex(50);
toDrop.setInt(50);
toDrop.setLuk(50);
toDrop.setLocked(1);	
cm.getPlayer().getInventory(type).addItem(toDrop);
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
cm.setClan(2);
cm.sendOk("#b��ϲ���Ѿ��ɹ���ȡ��#v1002357#(50����).");
cm.dispose();




} else if (cm.getPlayer().getClan() == 2&&cm.getPlayer().getReborns() >= 20) {
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();	
var type = ii.getInventoryType(1122000);	
var toDrop = ii.randomizeStats(ii.getEquipById(1122000)).copy();
toDrop.setStr(50);
toDrop.setDex(50);
toDrop.setInt(50);
toDrop.setLuk(50);
toDrop.setLocked(1);	
cm.getPlayer().getInventory(type).addItem(toDrop);
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
cm.setClan(3);
cm.sendOk("#b��ϲ���Ѿ��ɹ���ȡ��#v1122000#(50����).");
cm.dispose();





} else if (cm.getPlayer().getClan() == 3&&cm.getPlayer().getReborns() >= 30) {
cm.gainItem(4031579,1);
cm.sendOk("#b��ϲ���Ѿ��ɹ���ȡ��#r����װ���һ���#k.");
cm.setClan(4);
cm.dispose();



} else if (cm.getPlayer().getClan() == 4&&cm.getPlayer().getReborns() >= 40) {
cm.gainItem(4031579,1);
cm.sendOk("#b��ϲ���Ѿ��ɹ���ȡ��#r����װ���һ���#k.");
cm.setClan(5);
cm.dispose();



} else if (cm.getPlayer().getClan() == 5&&cm.getPlayer().getReborns() >= 50) {
cm.gainItem(2340000,10);
cm.sendOk("#b��ϲ���Ѿ��ɹ���ȡ��#v2340000#10��.");
cm.setClan(6);
cm.dispose();



} else if (cm.getPlayer().getClan() == 6&&cm.getPlayer().getReborns() >= 60) {
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();	
var type = ii.getInventoryType(1142004);	
var toDrop = ii.randomizeStats(ii.getEquipById(1142004)).copy();
toDrop.setStr(50);
toDrop.setDex(50);
toDrop.setInt(50);
toDrop.setLuk(50);
toDrop.setLocked(1);	
cm.getPlayer().getInventory(type).addItem(toDrop);
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
cm.setClan(7);
cm.sendOk("#b��ϲ���Ѿ��ɹ���ȡ��#v1142004#(50����).");
cm.dispose();






} else if (cm.getPlayer().getClan() == 9&&cm.getPlayer().getReborns() >= 100) {
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();	
var type = ii.getInventoryType(1002926);	
var toDrop = ii.randomizeStats(ii.getEquipById(1002926)).copy();
toDrop.setLuk(100);
toDrop.setInt(100);
toDrop.setDex(100);
toDrop.setStr(100);
toDrop.setHp(100);
toDrop.setMp(100);
toDrop.setAcc(100);
toDrop.setAvoid(100);
toDrop.setSpeed(100);
toDrop.setJump(100);
toDrop.setLocked(1);	
cm.getPlayer().getInventory(type).addItem(toDrop);
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
cm.setClan(10);
cm.sendOk("#b��ϲ���Ѿ��ɹ���ȡ��#v1002926#(100����).");
cm.dispose();



} else if (cm.getPlayer().getClan() == 10&&cm.getPlayer().getReborns() >= 200) {
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();	
var type = ii.getInventoryType(1002927);	
var toDrop = ii.randomizeStats(ii.getEquipById(1002927)).copy();
toDrop.setLuk(200);
toDrop.setInt(200);
toDrop.setDex(200);
toDrop.setStr(200);
toDrop.setHp(200);
toDrop.setMp(200);
toDrop.setAcc(200);
toDrop.setAvoid(200);
toDrop.setSpeed(200);
toDrop.setJump(200);
toDrop.setLocked(1);	
cm.getPlayer().getInventory(type).addItem(toDrop);
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
cm.setClan(11);
cm.sendOk("#b��ϲ���Ѿ��ɹ���ȡ��#v1002927#(200����).");
cm.dispose();




} else if (cm.getPlayer().getClan() == 11&&cm.getPlayer().getReborns() >= 300) {
cm.gainzb(10);
cm.setClan(12);
cm.sendOk("#b��ϲ���Ѿ��ɹ���ȡ��#v2040506#10��.");
cm.dispose();



} else if (cm.getPlayer().getClan() == 12&&cm.getPlayer().getReborns() >= 500) {
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();	
var type = ii.getInventoryType(1112907);	
var toDrop = ii.randomizeStats(ii.getEquipById(1112907)).copy();
toDrop.setLuk(300);
toDrop.setInt(300);
toDrop.setDex(300);
toDrop.setStr(300);
toDrop.setHp(300);
toDrop.setMp(300);
toDrop.setAcc(300);
toDrop.setAvoid(300);
toDrop.setSpeed(300);
toDrop.setJump(300);
toDrop.setLocked(1);	
cm.getPlayer().getInventory(type).addItem(toDrop);
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
cm.setClan(13);
cm.sendOk("#b��ϲ���Ѿ��ɹ���ȡ��#v1112907#(300����).");
cm.dispose();





} else if (cm.getPlayer().getClan() == 13&&cm.getPlayer().getReborns() >= 600) {
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();	
var type = ii.getInventoryType(1112907);	
var toDrop = ii.randomizeStats(ii.getEquipById(1112907)).copy();
toDrop.setLuk(400);
toDrop.setInt(400);
toDrop.setDex(400);
toDrop.setStr(400);
toDrop.setHp(400);
toDrop.setMp(400);
toDrop.setAcc(400);
toDrop.setAvoid(400);
toDrop.setSpeed(400);
toDrop.setJump(400);
toDrop.setLocked(1);	
cm.getPlayer().getInventory(type).addItem(toDrop);
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
cm.setClan(14);
cm.sendOk("#b��ϲ���Ѿ��ɹ���ȡ��#v1112907#(400����).");
cm.dispose();




} else if (cm.getPlayer().getClan() == 14&&cm.getPlayer().getReborns() >= 700) {
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();	
var type = ii.getInventoryType(1112907);	
var toDrop = ii.randomizeStats(ii.getEquipById(1112907)).copy();
toDrop.setLuk(500);
toDrop.setInt(500);
toDrop.setDex(500);
toDrop.setStr(500);
toDrop.setHp(500);
toDrop.setMp(500);
toDrop.setAcc(500);
toDrop.setAvoid(500);
toDrop.setSpeed(500);
toDrop.setJump(500);
toDrop.setLocked(1);	
cm.getPlayer().getInventory(type).addItem(toDrop);
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
cm.setClan(15);
cm.sendOk("#b��ϲ���Ѿ��ɹ���ȡ��#v1112907#(400����).");
cm.dispose();




} else if (cm.getPlayer().getClan() == 15&&cm.getPlayer().getReborns() >= 888) {
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();	
var type = ii.getInventoryType(1112907);	
var toDrop = ii.randomizeStats(ii.getEquipById(1112907)).copy();
toDrop.setLuk(888);
toDrop.setInt(888);
toDrop.setDex(888);
toDrop.setStr(888);
toDrop.setHp(888);
toDrop.setMp(888);
toDrop.setAcc(888);
toDrop.setAvoid(888);
toDrop.setSpeed(888);
toDrop.setJump(888);
toDrop.setLocked(1);	
cm.getPlayer().getInventory(type).addItem(toDrop);
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
cm.setClan(16);
cm.sendOk("#b��ϲ���Ѿ��ɹ���ȡ��#v1112907#(888����).");
cm.dispose();




} else if (cm.getPlayer().getClan() == 7&&cm.getPlayer().getReborns() >= 70) {
cm.setzb(+10);
cm.sendOk("#b��ϲ���Ѿ��ɹ���ȡ��#r10Ԫ��#k.");
cm.setClan(8);
cm.dispose();



} else if (cm.getPlayer().getClan() == 8&&cm.getPlayer().getReborns() >= 88) {
cm.setzb(+10); 
cm.sendOk("#b��ϲ���Ѿ��ɹ���ȡ��#r10Ԫ��#k.");
cm.setClan(9);
cm.dispose();


} else{
cm.sendOk("#b��������,������ȡ.");
cm.dispose();




}
}
}
}