importPackage(net.sf.odinms.client);
var status = 0;
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//����1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//����2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt+"//����Բ
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt2+"//����New
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
var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";					
}else if(cm.getChar().getVip() == 2){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";					
}else if(cm.getChar().getVip() == 3){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";
}else if(cm.getChar().getVip() == 4){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";	
}else if(cm.getChar().getVip() == 5){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";					
}else{
var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";					
}
var textz = "#r"+cm.mxdmz()+"ð�յ�#k.�����������״��\r\n#b��Ա�ȼ�:#r"+vipstr+"  #bʣ��Ԫ��:#r" + cm.getChar().getzb() + "#k#b ��  \r\n#bת��:#r" + cm.getChar().getReborns() + "#k#b ��  #b����:#r" + cm.getChar().getRw15() + "#k#b �� �ȼ���#r" + cm.getChar().getLevel() + "#b��\r\n ";

textz += "#L1#"+ttt+" ҩˮ�ӻ��̵� >>>> [�弶�ر�] #l\r\n ";

textz += "#L2#"+ttt+" ���������̵� >>>> [���˱���] #l\r\n ";

textz += "#L3#"+ttt+" װ�������̵� >>>> [ǿ�ߵ���] #l\r\n ";

//textz += "#L4#"+ttt+" ����10% �̵� #l\r\n";

textz += "#L5#"+ttt+" �弶�����̵� >>>> [�弶�ر�]#l\r\n ";

textz += "#L6#"+ttt+" ȫ������̵� >>>> [���ֱر�]#l\r\n\r\n ";

//textz += "#L7#"+ttt+" ����ʳƷ�̵� #l ";

//textz += "#L8#"+ttt2+" ��������ϵͳ #l\r\n\r\n";

//textz += "#b#L33#"+ttt3+"ʹ�� <<���Ⱥ���>> [VIP������Ȩ��]#l\r\n ";

textz += "#b#L12#"+ttt3+"����һ���������� #r[��Ҫ2,000���]#b"+ttt4+"#l\r\n ";

//textz += "#b#L13#"+ttt3+"3Сʱ˫�����鿨#r[��Ҫ5,000���]#b"+ttt4+"#l\r\n ";

textz += "#b#L44#"+ttt3+"�������̳�ϵͳ#r [ȫ�� 092 ��װ]"+ttt4+"#l";


cm.sendSimple (textz);    
				
}else if (status == 1) {

var viplevel = cm.getChar().getVip();
if(selection == 1){
cm.openShop( 603);
cm.dispose();

}else if(selection == 2){
cm.openShop( 201);
cm.dispose();

}else if(selection == 3){
cm.openNpc( 2112013);

}else if(selection == 4){
cm.openShop( 10009);
cm.dispose();

}else if(selection == 44){
cm.openNpc( 9310060);


}else if(selection == 5){
cm.openShop( 223);
cm.dispose();

}else if(selection == 6){
cm.openShop( 5004);
cm.dispose();

}else if(selection == 7){
cm.openShop( 904);
cm.dispose();

}else if (selection == 8) {
cm.openNpc(9330092);




}else if (selection == 11) {
cm.sendSimple("#b\r\n#L28#"+ttt+" ����110��սʿװ��[#r10����#b]#l  \r\n#L29#"+ttt+" ����110������װ��[#r10����#b]#l  \r\n#L30#"+ttt+" ����110������װ��[#r10����#b]#l  \r\n#L31#"+ttt+" ����110����ʦװ��[#r10����#b]#l");

}else if (selection == 12) {
if (cm.getPlayer().getNX() >= 2000) {
cm.gainNX(-2000);         
cm.gainItem(4031454, 1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose();
} else {
cm.sendOk("#b��û���㹻�ĵ������ϵ�ͷ���ֵ."); 
cm.dispose();
}


} else if (selection == 13) {
if (cm.getPlayer().getNX() >= 5000 ) {
if(cm.haveItem(5211047,1,true,false)){
cm.sendOk("#b�����˫��������������ɣ�");
cm.dispose();
}else{
cm.gainNX(-5000);     
cm.gainItem(5211047, 1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose();
}
} else {
cm.sendOk("#b��û���㹻�ĵ������ϵ�ͷ���ֵ."); 
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
toDrop.setStr(5000);
toDrop.setDex(5000);
toDrop.setInt(5000);
toDrop.setLuk(5000);
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
if (cm.getPlayer().getNX() >= 10000 ) {
cm.gainNX(-10000);
cm.gainItem(2040807,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻�ĵ������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 17) { 
if (cm.getPlayer().getNX() >= 10000 ) { 
cm.gainNX(-10000); 
cm.gainItem(2044703,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻�ĵ������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 18) { 
if (cm.getPlayer().getNX() >= 10000 ) { 
cm.gainNX(-10000); 
cm.gainItem(2044303,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻�ĵ������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 19) { 
if (cm.getPlayer().getNX() >= 10000 ) { 
cm.gainNX(-10000); 
cm.gainItem(2044003,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻�ĵ������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 20) { 
if (cm.getPlayer().getNX() >= 10000 ) { 
cm.gainNX(-10000); 
cm.gainItem(2043003,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻�ĵ������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 21) { 
if (cm.getPlayer().getNX() >= 10000 ) { 
cm.gainNX(-10000); 
cm.gainItem(2044403,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻�ĵ������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 22) { 
if (cm.getPlayer().getNX() >= 10000 ) { 
cm.gainNX(-10000); 
cm.gainItem(2043703,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻�ĵ������ϵ�ͷ���ֵ."); 
cm.dispose();   
}



}else if  (selection == 23) { 
if (cm.getPlayer().getNX() >= 10000 ) { 
cm.gainNX(-10000); 
cm.gainItem(2043803,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻�ĵ������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 24) { 
if (cm.getPlayer().getNX() >= 10000 ) { 
cm.gainNX(-10000); 
cm.gainItem(2040303,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻�ĵ������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 25) { 
if (cm.getPlayer().getNX() >= 10000 ) { 
cm.gainNX(-10000); 
cm.gainItem(2040710,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻�ĵ������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 26) { 
if (cm.getPlayer().getNX() >= 10000 ) { 
cm.gainNX(-10000); 
cm.gainItem(2043303,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻�ĵ������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 27) { 
if (cm.getPlayer().getNX() >= 10000 ) { 
cm.gainNX(-10000); 
cm.gainItem(2044503,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻�ĵ������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 28) { 
if (cm.getPlayer().getNX() >= 100000 ) { 
cm.gainNX(-100000); 
cm.gainItem(1002551,1); 
cm.gainItem(1052075,1);
cm.gainItem(1072273,1);
cm.gainItem(1082168,1);
cm.gainItem(1402036,1);
cm.gainItem(1432038,1);
cm.gainItem(1032030,1);
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻�ĵ������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 29) { 
if (cm.getPlayer().getNX() >= 100000 ) { 
cm.gainNX(-100000); 
cm.gainItem(1002550,1); 
cm.gainItem(1052072,1);
cm.gainItem(1072272,1);
cm.gainItem(1082167,1);
cm.gainItem(1092049,1);
cm.gainItem(1332050,1);
cm.gainItem(1472052,1);
cm.gainItem(1032030,1);
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻�ĵ������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 33) { 
cm.openNpc(2040040);


}else if  (selection == 31) { 
if (cm.getPlayer().getNX() >= 100000 ) { 
cm.gainNX(-100000); 
cm.gainItem(1002773,1); 
cm.gainItem(1052076,1);
cm.gainItem(1082164,1);
cm.gainItem(1072268,1);
cm.gainItem(1382037,1);
cm.gainItem(1032030,1);
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻�ĵ������ϵ�ͷ���ֵ."); 
cm.dispose();   
}









					
}
}
}

