importPackage(net.sf.odinms.client);
var status = 0;
var zz =" 5Ԫð�յ�"; //������������
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//����1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//����2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//����Բ
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//����New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";//"+ttt5+"//����!
var ttt6 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//������Ա
var temp = "#fEtc/pachinko/controller/base/1#";
var temp2 = "#fEtc/SpeedAnimationQuiz/BeijingOlympic/AniQuiz/5/ani/1#";
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
if(cm.getChar().getVip() <= 0){
var vipstr = "��ͨ���";					
}else if(cm.getChar().getVip() == 1){
var vipstr = ""+ttt6+" 5Ԫ��Ա��";					
}else if(cm.getChar().getVip() == 2){
var vipstr = ""+ttt6+" 5Ԫ��Ա��";					
}else if(cm.getChar().getVip() == 3){
var vipstr = ""+ttt6+" 5Ԫ��Ա��";
}else if(cm.getChar().getVip() == 4){
var vipstr = ""+ttt6+" 5Ԫ��Ա��";	
}else if(cm.getChar().getVip() == 5){
var vipstr = ""+ttt6+" 5Ԫ��Ա��";					
}else{
var vipstr = ""+ttt6+" 5Ԫ��Ա��";					
}
if (cm.getPlayer().getnld() >= 0) {
var text = "\r\n	#L19#"+ttt+"���ٽ���ת�� >>>> [���ٷ���]"+ttt2+"#l\r\n	#L8#"+ttt+"���̵�ϵͳ >>>> [������ҩ]"+ttt2+"#l\r\n";

text +="	#L1900##r"+ttt+"��������װ�� >>>> [���ٷ���]"+ttt2+"#l\r\n	#L1901##r"+ttt+"��������װ�� >>>> [���ٷ���]"+ttt2+"#l\r\n	#L1900002#"+ttt+"�򿪻�Աϵͳ >>>> [��Ա����]"+ttt2+"#l";

if (cm.getPlayer().getRw13() == 0) {

text +="\r\n\r\n   #L10##d"+ttt3+"��ȡ����������(#r��Ŀǰ�����������ȡ#k)"+ttt3+"#l ";

} else{

text +="\r\n\r\n   #L9##d"+ttt3+"��ȡ����������(��Ŀǰ��#r" + cm.getChar().getRw13() + "#k#d��)"+ttt3+"#l ";

}

text +="\r\n   #L19033##b"+ttt3+"ÿ����ȡ�ƽ�����2��#r[��ת��2��]"+ttt3+"#l ";

cm.sendSimple("#r"+cm.mxdmz()+"ð�յ�#k,����ϵͳ.\r\n	#L1##b"+ttt+"���������г� >>>> [���ٷ���]"+ttt2+"#l\r\n	#L20#"+ttt+"���ٽ���תְ >>>> [���ٷ���]"+ttt2+"#l"+
text);

}
} else if (status == 1) {
if (selection == 1) {
if (cm.getPlayer().getMapId() >=910000000 && cm.getPlayer().getMapId() <=910000022) {
cm.sendOk("���Ѿ��������г��м���.");
cm.dispose();
}else{
cm.warp(910000000,0);
cm.sendOk("�ɹ�����.");
cm.dispose();
}	
}			
if (selection == 2) {
cm.openShop( 603); 
cm.dispose();   
}
if (selection == 18) {
cm.openNpc(9310059); 
}
if (selection == 19) {
cm.openNpc(9201023); 
}
if (selection == 1900) {
cm.openNpc(1063004); 
}
if (selection == 19034) {
cm.openNpc(9900001); 
}
if (selection == 1900001) {
cm.openNpc(9100000); 
}
if (selection == 1900002) {
cm.openNpc(2040036); 
}
if (selection == 1901) {
cm.openNpc(1063005); 
}
if (selection == 1902) {
cm.openNpc(2040037);
}
if (selection == 19033) {
if(cm.getPlayer().getReborns() >= 2 && cm.getBossLog("ZhuZhu")< 1) { 
cm.gainItem(4032226, 2); 
cm.setBossLog("ZhuZhu"); 
cm.getPlayer().dropMessage(1, "�ɹ�!");
cm.dispose(); 
}else{
cm.getPlayer().dropMessage(1, "����������������ת������δ��2��.");
cm.dispose(); 
}
}
if (selection == 23) {
cm.openNpc(2040031); 
}
if (selection == 20) {
cm.openNpc(9310057); 
}
if (selection == 22) {
cm.openShop(5001); 
}
if (selection == 21) {
if (cm.getPlayer().getNX() >=5000) {  
cm.gainNX(-5000); 
cm.openNpc(2002000); 
}else{
cm.getPlayer().dropMessage(1, "����Ҫ5,000���.");
cm.dispose(); 
}
}

if (selection == 4) {
cm.openNpc(2040049);   
}
if (selection == 9) {
var zengjia=cm.getChar().getRw13();
cm.gainrw15(+zengjia);
cm.setRw13(0);
cm.getPlayer().dropMessage(1, "�ɹ���ȡ"+zengjia+"��������.");
cm.dispose(); 
}
if (selection == 10) {
cm.getPlayer().dropMessage(1, "Ŀǰ��û����������������ȡ.");
cm.dispose();
}
if (selection == 11) {
cm.openNpc(1300001);   
}
if (selection == 8) {
cm.openNpc(9010001);
}
if (selection == 5) {
cm.openNpc(1022100);   
}
if (selection == 6) {
if(cm.getzb() >= 5){
if(cm.haveItem(1122017,1,true,false)){
cm.sendOk("���Ѿ���һ�������׹�ˣ�");
cm.dispose();
}else{
cm.setzb(-5);
var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
toDrop.setStr(100);
toDrop.setDex(100);
toDrop.setInt(100);
toDrop.setLuk(100);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().saveToDB(true);
cm.sendOk("�ɹ�����5Ԫ������ 6 СʱȨ�����׹��");
cm.dispose();
}
}else{
cm.sendOk("��û���㹻��Ԫ����");
cm.dispose();
}
}
if (selection == 7) {
cm.openNpc(9310022);   
}
if (selection == 3) {
cm.sendYesNo("�ù��ܿ����л�#b�����������;#k,�������ı��#b�������ֱ�ӽ��������г�#k,�Ƿ������");
}
} else if (status == 2) {
cm.setRw11(1);
cm.sendOk("�ɹ����#bֱ�ӽ��������г�#k,����ı�,����#b����С��#k,��������.");
cm.dispose();
}
}
}
