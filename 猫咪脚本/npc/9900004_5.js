var status = 0;

var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //�ʹ�
var epp1 = "#fEffect/CharacterEff/1082312/2/0#"; //�ʹ�1
var axx = "#fEffect/CharacterEff/1051294/0/0#";  //����
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //��ϵ
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //���� 
var epp3 = "#fEffect/CharacterEff/1112908/0/1#";  //�ʹ�3
var axx1 = "#fEffect/CharacterEff/1062114/1/0#";  //����
var zs = "#fEffect/CharacterEff/1112946/2/0#";  //שʯ��
var zs1 = "#fEffect/CharacterEff/1112946/1/1#";  //שʯ��
var dxxx = "#fEffect/CharacterEff/1102232/2/0#"; //��ϵ
var tz = "#fEffect/CharacterEff/1082565/2/0#";  //������
var tz1 = "#fEffect/CharacterEff/1082565/4/0#";  //���ӷ�
var tz5 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";

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
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.")
            cm.dispose();
        } 
    else if (status == 0) {
        var selStr = "                \r\n"+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+"\r\n                #L1##e#r"+tz1+"����̵�"+tz1+"#l\r\n              #L2##e#b"+tz1+"�����̵�"+tz1+"#l\r\n              #L3##e#d"+tz1+"��Ϸ�̵�"+tz1+"#l\r\n              #L5##e#d"+tz1+"���̳�"+tz1+"#l\r\n\r\n       #e#d"+tz+"�г���4������NPCҲ���̵�Ŷ��"+tz+"\r\n\r\n"+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+"\r\n"//���ۼƳ�ֵ���Ϊ��#r" + rmb + "#kԪ
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
            cm.dispose();
            cm.openNpc(9900003, 15);
            break;
		case 5:
            cm.dispose();
            cm.openNpc(9310144, 3);
            break;
		case 2:
            cm.dispose();
            cm.openNpc(9900003,16);
            break;
		case 4:
            cm.dispose();
            cm.openNpc(9900004, 3);
            break;
		case 225:
            cm.dispose();
            cm.gainItem(2430505, 1);// 
	        cm.sendOk("�ѻ����֮���������,���ϲ����ڳ��ִ��ֻ��һѪ�����\r\n�����ظ���ȡ,��������");
		    break;
        case 3:
            cm.dispose();
            cm.openNpc(9900003,1);
            break;
		}
    }
}
