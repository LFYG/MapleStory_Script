/*
 Ϧ��������Chinað�յ�
 ���ʱ�䣺2015��4��28�� 16:34:19
 �ű����ܣ����ֽ���
 */

var status = 0;
var eff ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var text = "";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
		cm.sendYesNo("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ��� #r#h ##k ���ã�����ѡ����Ҫ��ȡ�ĵȼ�����: #k\r\n\r\n#b#L0#"+ eff + " [��ͭ] ��ȡ�ȼ�����[30��]#l\r\n#L1#" + eff + " [�׽�] ��ȡ�ȼ�����[70��]#l#k\r\n#b#L2#" + eff + " [�ƽ�] ��ȡ�ȼ�����[100��]#l#k\r\n#b#L3#" + eff + " [����] ��ȡ�ȼ�����[150��]#l#k\r\n#b#L4#" + eff + " [��ʯ] ��ȡ�ȼ�����[200��]#l#k\r\n#b#L5#" + eff + " [����] ��ȡ�ȼ�����[250��]#l#k");

} else if (status == 1) {
        switch (selection) {
case 0:
if(cm.getBossLog("30������",1) < 1 && (cm.getPlayer().getLevel() > 29 && cm.getPlayer().getLevel() < 250) && (cm.getSpace(5)>1 && cm.getSpace(1)>4)){
cm.gainItem(1142445, 1);//����ѫ��
cm.gainItem(1182021, 1);//ͭ����
cm.gainItem(1102563, 1);//10�����ɫͷ
cm.gainItem(1052613, 1);//10�����ɫ��
cm.gainItem(1003864, 1);//10�����ɫ��
cm.gainItem(5072000, 5);//���ʵ�����
cm.gainMeso(+200000);//���20��
cm.setBossLog("30������",1);
cm.sendOk("��ɹ���ȡ����");
cm.worldSpouseMessage(0x20,"[�ȼ�����] ����ϲ��� "+  cm.getChar().getName()  +" �ɹ���ȡ[��ͭ]�ȼ�����[30��]���볬�������һ����");
cm.dispose();
} else {
cm.sendOk("��ĵȼ���������������û���㹻�ı����ռ�\r\n#b(װ����5����λ,������1����λ).\r\n#rע:�ȼ�����ֻ����ȡһ��.");
cm.dispose();
}
            break;
case 1:
if(cm.getBossLog("70������",1) < 1 && (cm.getPlayer().getLevel() > 69 && cm.getPlayer().getLevel() < 250) && (cm.getSpace(5)>1 && cm.getSpace(1)>6)){
cm.gainMeso(+300000);//���30��
cm.gainItem(1102394, 1);//�Ͻ��Ҷ��
cm.gainItem(1082430, 1);//�Ͻ��Ҷ��
cm.gainItem(1052457, 1);//�Ͻ��Ҷ��
cm.gainItem(1003529, 1);//�Ͻ��Ҷñ
cm.gainItem(1072660, 1);//�Ͻ��ҶЬ
cm.gainItem(1142446, 1);//��ʿѫ��
cm.setBossLog("70������",1);
cm.sendOk("��ɹ���ȡ����");
cm.worldSpouseMessage(0x20,"[�ȼ�����] ����ϲ��� "+  cm.getChar().getName()  +" �ɹ���ȡ[�׽�]�ȼ�����[70��]���볬�������һ����");
cm.dispose();
} else {
cm.sendOk("��ĵȼ���������������û���㹻�ı����ռ�\r\n#b(װ����7����λ).\r\n#rע:�ȼ�����ֻ����ȡһ��.");
cm.dispose();
}
            break;
case 2:
if(cm.getBossLog("100������",1) < 1 && (cm.getPlayer().getLevel() > 99 && cm.getPlayer().getLevel() < 250) && cm.getSpace(1)>6){
text+="#b����ȯ#k - #rx2000#k\r\n";
//cm.gainNX(2, 2000);
cm.gainItem(1102441, 1);//ר���Ͻ��Ҷ��
cm.gainItem(1082433, 1);//ר���Ͻ��Ҷ��
cm.gainItem(1052461, 1);//ר���Ͻ��Ҷ��
cm.gainItem(1003552, 1);//ר���Ͻ��Ҷñ
cm.gainItem(1072666, 1);//ר���Ͻ��ҶЬ
cm.gainItem(1142447, 1);//����ѫ��
cm.gainItem(1182022, 1);//������
cm.setBossLog("100������",1);
cm.sendOk("��ɹ���ȡ����");
cm.worldSpouseMessage(0x20,"[�ȼ�����] ����ϲ��� "+  cm.getChar().getName()  +" �ɹ���ȡ[�ƽ�]�ȼ�����[100��]���볬�������һ����");
cm.dispose();
} else {
cm.sendOk("��ĵȼ���������������û���㹻�ı����ռ�\r\n#b(װ����7����λ).\r\n#rע:�ȼ�����ֻ����ȡһ��.");
cm.dispose();
}
            break;
case 3:
if(cm.getBossLog("150������",1) < 1 && (cm.getPlayer().getLevel() > 149 && cm.getPlayer().getLevel() < 250) && (cm.getSpace(1)>6 && cm.getSpace(3)>1)){
text+="#b����ȯ#k - #rx3000#k\r\n";
//cm.gainNX(2, 3000);
cm.gainItem(1113164,1);//��ָ
cm.gainItem(1032242,1);//����
cm.gainItem(1022233,1);//�۾�
cm.gainItem(1122285,1);//����
cm.gainItem(1142448, 1);//��������ѫ��
cm.setBossLog("150������",1);
cm.sendOk("��ɹ���ȡ����");
cm.worldSpouseMessage(0x20,"[�ȼ�����] ����ϲ��� "+  cm.getChar().getName()  +" �ɹ���ȡ[����]�ȼ�����[150��]���볬�������һ����");
cm.dispose();
} else {
cm.sendOk("��ĵȼ���������������û���㹻�ı����ռ�\r\n#b(װ����7����λ).\r\n#rע:�ȼ�����ֻ����ȡһ��.");
cm.dispose();
}
            break;
case 4:
if(cm.getBossLog("200������",1) < 1 && (cm.getPlayer().getLevel() > 199 && cm.getPlayer().getLevel() < 250) && (cm.getSpace(1)>3 && cm.getSpace(3)>1)){
cm.gainItem(1190401,1, 7);//C�ȼ�BOSS����������
cm.gainItem(1672008,1, 7);//��������
cm.gainItem(1662008,1, 7);//�ռ������ܻ�����
cm.gainItem(1182023,1);//�����
cm.setBossLog("200������",1);
cm.sendOk("��ɹ���ȡ����");
cm.worldSpouseMessage(0x20,"[�ȼ�����] ����ϲ��� "+  cm.getChar().getName()  +" �ɹ���ȡ[��ʯ]�ȼ�����[200��]���볬�������һ����");
cm.dispose();
} else {
cm.sendOk("��ĵȼ���������������û���㹻�ı����ռ�\r\n#b(װ����4����λ).\r\n#rע:�ȼ�����ֻ����ȡһ��.");
cm.dispose();
}
            break;
case 5:
if(cm.getBossLog("250������",1) < 1 && (cm.getPlayer().getLevel() > 249) && (cm.getSpace(1)>4 && cm.getSpace(3)>1)){
cm.gainItem(1113056,1);//��Խ��
cm.gainItem(1032201,1);//��Խ��
cm.gainItem(1012414,1);//��Խ��
cm.gainItem(1022195,1);//��Խ��
cm.gainItem(1122259,1);//��Խ��
cm.setBossLog("250������",1);
cm.sendOk("��ɹ���ȡ����");
cm.worldSpouseMessage(0x20,"[�ȼ�����] ����ϲ��� "+  cm.getChar().getName()  +" �ɹ���ȡ[����]�ȼ�����[250��]���볬�������һ����");
cm.dispose();
} else {
cm.sendOk("��ĵȼ���������������û���㹻�ı����ռ�\r\n#b(װ����5����λ).\r\nע:�ȼ�����ֻ����ȡһ��.");
cm.dispose();
}
            break;
        }
		cm.dispose();
    }
}

