var status = 0;
var typed=0;
var �Ѷ�;
var Ѫ��;
var Сʱ;
var Level;


function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
       if (cm.getChar().getLevel() < 200) {
	      Level = "xinmo";
	       �Ѷ� = "�͵��Ѷ�";
		   Ѫ�� = "#r9,000,000,000#k ~ #r99,999,999,999#k";
		   ʱ�� = "#b#e2Сʱ#n#k";
} else if (cm.getChar().getLevel() >= 200 && cm.getChar().getLevel() < 240) {
          Level = "xinmo1";
	       �Ѷ� = "�е��Ѷ�";
		   Ѫ�� = "#r100,000,000,000#k ~ #r269,999,999,999#k";
		   ʱ�� = "#b#e1Сʱ30����#n#k";
} else if (cm.getChar().getLevel() >= 240) {
          Level = "xinmo2";
	       �Ѷ� = "�ߵ��Ѷ�";
		   Ѫ�� = "#r300,000,000,000#k ~ #r699,999,999,999#k";
		   ʱ�� = "#b#e1Сʱ#n#k";
}
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
		var word  = "#fUI/UIWindow2.img/UtilDlgEx/list1#\r\n- #e��Ŀǰ�ĵȼ�Ϊ��#b" + cm.getChar().getLevel() + "#k ��  ��ħ�Ѷȣ�#r"+ �Ѷ� +"#k#n\r\n";
		    word += "��                #e#r"+ �Ѷ� +"#b������Ϣ#k#n                ��";
			word += "\r\n    #e- ��ħѪ����#n"+ Ѫ�� +"";
			word += "\r\n    #e- ����ʱ�䣺#n"+ ʱ�� +"\r\n";
			word += "��                                                  ��";
		cm.sendYesNo(word);		
		} else if (status == 1) {
		if (cm.getEventCount("��ħ") > 0) {
cm.sendOk("#e#r���˺Ž����Ѿ�������ø����ˡ�"); 
cm.dispose();
}
else if (cm.getParty() == null) {
cm.sendOk("#e#r�����û��һ�����飬���ǲ��������ȥ�ġ�"); 
cm.dispose();
}
else if(!cm.isLeader()){
cm.sendOk("#e#r��ӳ�������̸����");
cm.dispose();
}
 else if (cm.getMap(101000005).getCharactersSize() > 0) { // Not Party Leader
cm.sendOk("��������ս�˸��������Ե�һ�ᣬ���߻������߳���һ�£�..");
cm.dispose();
}
else if (cm.getParty().getMembers().size() > 1){
cm.sendOk("�Բ��𣬴˴���ս���뵥�ˡ�"); 
cm.dispose();
}else{
var em = cm.getEventManager(Level);
if (em == null) {
cm.sendOk("������,����ϵGM.");
cm.dispose();
}else{
em.startInstance(cm.getParty(), cm.getChar().getMap());
}
cm.dispose();

            }
		}
	}
}