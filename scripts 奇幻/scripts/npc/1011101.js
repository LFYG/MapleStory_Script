/* ����̵� */

var status = 0;
var eff ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var zzz ="#fEffect/CharacterEff/1082565/0/0#";

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
        var selStr = "    #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##k ���:#r "+ MoneyFormat("" + cm.getMeso() +"") +"#k   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0# ���þ�: #r"+ MoneyFormat("" + cm.getNX(2) + "") +"#k\r\n #r#e#L2#"+eff+" ������Ʒ#l #L1#"+eff+" ���д��#l #L6#"+eff+" ����ȡ��#l\r\n #r#e#L3#"+eff+" �ӻ��̵�#l #L5#"+eff+" ��������#l #L4#"+eff+" ����װ��#l#b\r\n #L7#"+eff+" ��ɫ�һ�#l #L8#"+eff+" �Ͻ�һ�#l #L9#"+eff+" ר���һ�#l\r\n #L10#"+eff+" �籩�һ�#l #L11#"+eff+" ���Ƕһ�#l #L12#"+eff+" �����һ�#l\r\n #L13#"+eff+" ���նһ�#l #L14#"+eff+" �����һ�#l #L15#"+eff+" ���ڶһ�#l\r\n #L16#"+eff+" ����ҩˮ#l #L17#"+eff+" �˶��һ�#l #L18#"+eff+" ��Ҿ���#l\r\n #L19#"+eff+" ���öһ�#l #L20#"+eff+" �����һ�#l #L21#"+eff+" �����ֲ�#l    \r\n ";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
            cm.dispose();
            cm.openNpc(9310144, 17); //�������
            break;
	        case 1:
            cm.dispose();
            cm.openNpc(9900003, 14); //���д��
            break;
			case 2:
            cm.dispose();
            cm.openShop(1033003); //������Ʒ
            break;
			case 3:
            cm.dispose();
            cm.openNpc(1011101, 1); //����ӻ�
            break;
			case 4:
            cm.dispose();
            cm.openNpc(1011101, 2); //��Ҹ���
            break;
			case 5:
            cm.dispose();
            cm.openNpc(1011101, 3); //��������
            break;
			case 6:
            cm.dispose();
            cm.openNpc(9030000, 0); //����ȡ��
            break;
			case 7:
            cm.dispose();
            cm.openNpc(1011101, 4); //��ɫ����
            break;
			case 8:
            cm.dispose();
            cm.openNpc(1011101, 8); //�Ͻ�����
            break;
			case 9:
            cm.dispose();
            cm.openNpc(1011101, 9); //�����̵�
            break;
			case 10:
            cm.dispose();
            cm.openNpc(1011101, 10); //�籩�̵�
            break;
			case 11:
            cm.dispose();
            cm.openNpc(1011101, 11); //�����̵�
            break;
			case 12:
            cm.dispose();
            cm.openNpc(1011101, 12); //�����̵�
            break;
			case 13:
            cm.dispose();
            cm.openNpc(1011101, 13); //�����̵�
            break;
			case 14:
            cm.dispose();
            cm.openNpc(1011101, 14); //�����̵�
            break;
			case 15:
            cm.dispose();
            cm.openNpc(9310144, 1); //�����̵�
            break;
			case 16:
            cm.dispose();
            cm.openNpc(9010030, 0); //����ҩˮ
            break;
			case 17:
            cm.dispose();
            cm.openNpc(1011101, 17); //�˶��һ�
            break;
			case 18:
            cm.dispose();
            cm.openNpc(1011101, 18); //��Ҿ���
            break;
			case 19:
            cm.dispose();
            cm.openNpc(9900003, 16); //�����̳�
            break;
			case 20:
            cm.dispose();
            cm.openNpc(1011101, 20); //�����һ�
            break;
			case 21:
            cm.dispose();
            cm.openNpc(1011101, 21); //�����ֲ�
            break;
			}
    }
}


function MoneyFormat(s){
	s=s.replace(/^(\d*)$/,"$1.");
	s=(s).replace(/(\d*\.\d\d)\d*/,"$1");
	s=s.replace(".",",");
	var re=/(\d)(\d{3},)/;
	while(re.test(s)){
		s=s.replace(re,"$1,$2");
	}
	s=s.replace(/,(\d\d)$/,".$1");
	s=s.replace(/^\./,"0.");
	s=s.substr(0,s.length-1);
	return s;
}
