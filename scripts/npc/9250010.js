var status = 0;
var starTime = "����13ʱ00��00��";    //ע��ʱ�����ڸ�ʽ��ʱ����ֱ���λ����,ǰ���Ϊ��
var endTime = "����11ʱ59��00��"     //ʱ��Ϊ12Сʱ�ƣ�ǰ��������������� 

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
var myDate = new Date();
if(starTime > endTime){
if(myDate.toLocaleTimeString() > starTime || myDate.toLocaleTimeString() < endTime){
if(cm.getBossLog("huodong1") >= 5){
cm.sendOk("�˻ÿ��ֻ��5�λ���,�������Ѿ������ٲμ���");
cm.dispose();
}else{
cm.sendSimple("����ʱ����:#r" + myDate.toLocaleString() + "\r\n#b������������ڿ��Կ�ʼ����.\r\n#d�˴λ��#r" +  endTime + "#d����\r\n\r\n#b #L0#������ͼ#l      #L1#�鿴�����#l");
}
}else{
cm.sendSimple("����,���ڲ��ǻʱ�䡣\r\n�˻��ʼʱ����: #r" + starTime + "\r\n#k�˻����ʱ����:#r " + endTime + "#k\r\n��ǰ������ʱ��Ϊ: #r" + myDate.toLocaleString() + "\r\n   #b#L1#�鿴�������#l");						
}
}else{
if(myDate.toLocaleTimeString() > starTime && myDate.toLocaleTimeString() < endTime){
if(cm.getBossLog("huodong1") >= 5){
cm.sendOk("�˻ÿ��ֻ��5�λ���,�������Ѿ������ٲμ���");
cm.dispose();
}else{							
cm.sendSimple("#d����ʱ����:#r" + myDate.toLocaleString() + "\r\n#b������������ڿ��Կ�ʼ����.\r\n#d�˴λ��#r" +  endTime + "#d����\r\n\r\n#b #L0#������ͼ#l      #L1#�鿴�����#l");
}
}else{
cm.sendSimple("����,���ڲ��ǻʱ�䡣\r\n�˻��ʼʱ����: #r" + starTime + "\r\n#k�˻����ʱ����:#r " + endTime + "#k\r\n��ǰ������ʱ��Ϊ: #r" + myDate.toLocaleString() + "\r\n   #b#L1#�鿴�������#l");
}
}                                
} else if(status == 1){
if (selection == 0){
if(cm.getChar().getReborns > 0 || cm.getLevel() >= 120){
cm.setBossLog("huodong1");
cm.getC().getChannelServer().getMapFactory().getMap(280020000).setOnUserEnter("huodong1_Msg");
cm.warp(280020000,0);
cm.dispose();
}else{
cm.sendOk("�˻ֻ��1ת���ϻ�120�����ϵ�������ʸ�μӡ�");
cm.dispose();
}
}else if(selection == 1){
cm.sendOk("�˻��ÿ��#b" + starTime + "#k��ʼ��#b" + endTime + "#k����! �ʱ����,1ת���ϻ�120�����ϵ���ҿ�ͨ����NPC���ͽ��������ͼ,���Ϊ����.����������,�����ϵ�#r#p2032003#NPC#k,�ȿ������÷��Ľ���.ÿ��ÿ�����Ʋμ�#r5#k��." );
cm.dispose();
}
}
}
}