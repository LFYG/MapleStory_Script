importPackage(net.sf.odinms.client);
var status = 0;
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//����1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//����2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//����Բ
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//����New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";//"+ttt5+"//����!
var ttt6 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//������Ա

//////////////////////////////////////////////////////////
function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {
if (mode == -1) {
cm.dispose();
} else {
if (status >= 0 && mode == 0) {
cm.dispose();
return;
}
if (mode == 1)
status++;
else
status--;
if (status == 0) {
if(cm.getChar().getVip() <= 0){
var vipstr = "��ͨ���";					
}else if(cm.getChar().getVip() == 1){
var vipstr = "��5Ԫ��Ա��";					
}else if(cm.getChar().getVip() == 2){
var vipstr = "��5Ԫ��Ա��";					
}else if(cm.getChar().getVip() == 3){
var vipstr = "��5Ԫ��Ա��";
}else if(cm.getChar().getVip() == 4){
var vipstr = "��5Ԫ��Ա��";	
}else if(cm.getChar().getVip() == 5){
var vipstr = "��5Ԫ��Ա��";					
}else{
var vipstr = "��5Ԫ��Ա��";					
}
var textz = ""+cm.mxdmz()+"ð�յ�,�鿴��������.\r\n#rע#k��80ת��70תʱ����ȡ10Ԫ������ȥ�򼸸�Bossȥ��Ԫ�����Ϳ�����#r5Ԫ��Ա�ڣ�#k\r\n#rע#k����Npc�޷���ȡ����������ֻ�ܲ鿴.�������ۼ�.\r\n   #b��ǰת������:#r" + cm.getChar().getReborns() + "#k#b ��\r\n"+ttt+"#b����[#r1 0ת#b] >>>> ����ȡ[#r10����#b]#l\r\n"+ttt+"#b����[#r2 0ת#b] >>>> ����ȡ[#r+50����ͷ��#b]#l\r\n"+ttt+"#b����[#r3 0ת#b] >>>> ����ȡ[#r+5 0��������#b]#l\r\n"+ttt+"#b����[#r4 0ת#b] >>>> ����ȡ[#r����һ���#b]#l\r\n"+ttt+"#b����[#r5 0ת#b] >>>> ����ȡ[#rף������10��#b]#l\r\n"+ttt+"#b����[#r6 0ת#b] >>>> ����ȡ[#r+50ѫ��һö#b]#l\r\n"+ttt+"#b����[#r7 0ת#b] >>>> ����ȡ[#r10��Ԫ��#b]#l\r\n"+ttt+"#b����[#r8 0ת#b] >>>> ����ȡ[#r10��Ԫ��#b]#l\r\n"+ttt+"#b����[#r100ת#b] >>>> ����ȡ[#r+100������ñ#b]#l\r\n"+ttt+"#b����[#r200ת#b] >>>> ����ȡ[#r+200�İ�ʨñ#b]#l\r\n"+ttt+"#b����[#r300ת#b] >>>> ����ȡ[#r100%�س�10��#b]#l\r\n"+ttt+"#b����[#r500ת#b] >>>> ����ȡ[#r+300��ָһ��#b]#l\r\n"+ttt+"#b����[#r600ת#b] >>>> ����ȡ[#r+400��ָһ��#b]#l\r\n"+ttt+"#b����[#r700ת#b] >>>> ����ȡ[#r+500��ָһ��#b]#l\r\n"+ttt+"#b����[#r888ת#b] >>>> ����ȡ[#r+888��ָһ��#b]#l\r\n#L6#ǰȥ��ȡ��������#l"

cm.sendSimple (textz);    
				
}else if (status == 1) {

var viplevel = cm.getChar().getVip();

if (selection == 1) {
if(cm.getChar().getVip() >= 1){
cm.warp(910000016);
cm.dispose();
}else{
cm.sendOk("#b�����ǡ�5Ԫ��Ա��,�޷�����˵�ͼ");
cm.dispose();
} 

}else if (selection == 2) {
if(cm.getChar().getVip() >= 1){
cm.warp(910000016);
cm.dispose();
}else{
cm.sendOk("#b�����ǡ�5Ԫ��Ա��,�޷�����˵�ͼ");
cm.dispose();
} 


}else if (selection == 5) {
if(cm.getChar().getVip() >= 2){
cm.openShop (5003);
cm.dispose();
}else{
cm.sendOk("#b�㲻�ǡ�5Ԫ��Ա�ڣ�����ʲô��������...");
cm.dispose();
} 


}else if (selection == 4) {
if(cm.getChar().getVip() >= 2){
cm.sendSimple ("\r\n		#L6#"+ttt+"#d����ʦװ��#l\r\n		#d#L7#"+ttt+"����սʿװ��#l\r\n		#L8#"+ttt+"������װ��#l\r\n		#L9#"+ttt+"�������װ��#l");
}else{
cm.sendOk("#b�㲻�ǡ�5Ԫ��Ա�ڣ�����ʲô��������...");
cm.dispose();
}

}else if (selection == 3) {
if(cm.getChar().getVip() >= 1){
cm.openNpc( 2002000);
}else{
cm.sendOk("#b�㲻�ǡ�5Ԫ��Ա�٣�����ʲô��������...");
cm.dispose();
}



























}else if(selection == 2){
cm.openShop( 201);
cm.dispose();

}else if(selection == 3){
cm.openShop( 10008);
cm.dispose();

}else if(selection == 4){
cm.openShop( 10009);
cm.dispose();

}else if(selection == 5){
cm.openShop( 223);
cm.dispose();

}else if(selection == 6){
cm.openNpc (9100000);


}else if(selection == 7){
cm.openShop( 904);
cm.dispose();

}else if (selection == 8) {
if (cm.getMeso() >= 500000000) {
cm.gainMeso(-500000000);                
cm.gainItem(4031454, 1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose();
} else {
cm.sendOk("#bǮ������,ͯЬ."); 
cm.dispose();
}

}else if (selection == 9) {
if(cm.getzb() >= 5){
if(cm.haveItem(4001129,1,true,false)){
cm.sendOk("#b���Ѿ���һ��PK˫���˺����ˣ�");
cm.dispose();
}else{
cm.setzb(-5);          
cm.gainItem(4001129, 1); 
cm.sendOk("#b��ϲ��ɹ�ʹ��5Ԫ������һ��PK˫���˺���."); 
cm.dispose();
}
} else {
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();
}

}else if (selection == 10) {
if(cm.getzb() >= 10){
if(cm.haveItem(4001129,1,true,false)){
cm.sendOk("#b���Ѿ���һ��PK�ı��˺����ˣ�");
cm.dispose();
}else{
cm.setzb(-10);          
cm.gainItem(4001129, 1); 
cm.sendOk("#b��ϲ��ɹ�ʹ��10Ԫ������һ��PK�ı��˺���."); 
cm.dispose();
}
} else {
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();
}

}else if (selection == 11) {
if(cm.getzb() >= 10){
cm.setzb(-10);          
cm.gainItem(4001129, 5); 
cm.sendOk("#b��ϲ��ɹ�ʹ��10Ԫ����������ľ����Ʊ."); 
cm.dispose();
} else {
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();
}

}else if (selection == 12) {
if(cm.getzb() >= 10){
cm.setzb(-10);          
cm.gainItem(4031454, 10); 
cm.sendOk("#b��ϲ��ɹ�ʹ��10Ԫ������ʮ��ʥ��."); 
cm.dispose();
} else {
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();
}

} else if (selection == 14) { 
if (cm.getzb() >= 50) {
if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("#b���Ѿ���һ�������׹�ˣ�");
cm.dispose();
}else{
cm.setzb(-50);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 *3 *60); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
toDrop.setStr(200);
toDrop.setDex(200);
toDrop.setInt(200);
toDrop.setLuk(200);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
cm.sendOk("#b�ɹ�����50Ԫ������ 60��,����+200Ȩ�����׹��");
cm.dispose();
}
} else {  
cm.sendOk("#b���Ԫ������50�� �޷����� 60��,����+200Ȩ�����׹!");
cm.dispose();
}


}else if  (selection == 13) { 
cm.sendSimple("#b\r\n#L16#"+ttt+" �������׹������� #l  #L17#"+ttt+" ����ȭ�׹������� #l\r\n#L18#"+ttt+" ����սǹ�������� #l  #L19#"+ttt+" ����˫�ֽ������� #l\r\n#L20#"+ttt+" �����ֽ������� #l  #L21#"+ttt+" ����ì���������� #l\r\n#L22#"+ttt+" �������ħ������ #l  #L23#"+ttt+" ������ħ������ #l\r\n#L24#"+ttt+" ��������������� #l  #L25#"+ttt+" ����Ь����Ծ���� #l\r\n#L26#"+ttt+" ����̽��������� #l  #L27#"+ttt+" ���򹭼��������� #l");
}
}else if  (selection == 16) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2040807,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 17) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2044703,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 18) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2044303,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 19) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2044003,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 20) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2043003,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 21) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2044403,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 22) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2043703,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}



}else if  (selection == 23) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2043803,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 24) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2040303,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 25) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2040710,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 26) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2043303,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 27) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2044503,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

} else if (selection == 6) {
cm.openNpc (9100000);
cm.dispose();

} else if (selection == 7) {
cm.openShop (2000);
cm.dispose();

} else if (selection == 8) {
cm.openShop (2002);
cm.dispose();

} else if (selection == 9) {
cm.openShop (2003);
cm.dispose();










}
}
}