var status = 0;
var typed=0;
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var Hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����

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
			cm.sendYesNo("=======================#r�Ͷ���#bר��#k=====================\r\n��������Ѱ�ң������ڷ����ˡ�������ѩ�ˡ���צ����������Сѩ�ˣ����ܹ������Ҵ�������������������ߵ�#b���������#k�������ޣ�\r\n#r#e��ûʱ��#k#n��13��00-23��00\r\n#r#e��������#k#n����һ��̬��#bСѩ�� #r4500#k Hp \r\n�����������ڶ���̬��#b��ŭ��ѩ�� #r7500#k Hp \r\n����������������̬��#b�޴��ѩ�� #r12000#k Hp \r\n#r#e���˵��#k#n�������ǿ��Ա��Ų���Ŷ��\r\n#r#e������ʾ#n#k���ڻ�ɱѩ�˵Ĺ����У�ѩ����#e�����κμ�����������˺���#n������ÿ����ͨ������ֻ���½�ѩ��10��Ѫ����");					
		} else if (status == 1) {
		if (cm.checkPartyEventCount("ʥ��ѩ��",2)){
		if (Hour <13 | Hour > 23 ){
cm.sendOk("ʱ��û��,�Ͷ��ڸ�����û��û�򿪡�\r\n#r����ʱ��Ϊ��13��00-23��00 #k"); 
cm.dispose();
}
else if (cm.getEventCount("ʥ��ѩ��") > 2) {
cm.sendOk("#e#rÿ��ֻ�ܽ�2��ʥ������"); 
cm.dispose();
}
else if (cm.getParty() == null) {
cm.sendOk("#e#r�����û��һ������,���ǲ��������ȥ��."); 
cm.dispose();
}
else if(!cm.isLeader()){
cm.sendOk("#e#r��ӳ�������̸��.");
cm.dispose();
}
 else if (cm.getMap(209000015).getCharactersSize() > 0) { // Not Party Leader
cm.sendOk("��������ս�˸��������Ե�һ�ᣬ���߻������߳���һ�£�..");
cm.dispose();
}
else if (cm.getParty().getMembers().size() < 1){
cm.sendOk("������ #r1#k ����Ա"); 
cm.dispose();
}else{
var em = cm.getEventManager("sdj");
if (em == null) {
cm.sendOk("������,����ϵGM.");
cm.dispose();
}else{
var party = cm.getParty().getMembers();//��ȡ���������ɫ��Ϣ
var mapId = cm.getPlayer().getMapId();
var next = true;
em.startInstance(cm.getParty(),cm.getChar().getMap());
cm.worldMessage(0x20,"��ʥ��������" + " : " + "��� " + cm.getChar().getName() + " �����Ķ��ѽ������Ͷ��ڸ�����");

}
cm.worldMessage(0x20,"��ʥ��������" + " : " + "��� " + cm.getChar().getName() + " �����Ķ��ѽ������Ͷ��ڸ�����");
cm.setPartyEventCount("ʥ��ѩ��");
cm.dispose(); 
            }
		  }else{
		  cm.sendOk("�������Ѿ����������Ķ�Ա�ˡ�");
		  cm.dispose();
		  }
		}
	}
}
