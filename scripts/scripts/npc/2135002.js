/*
 Ϧ��������Chinað�յ�
 ���ʱ�䣺2015��4��28�� 16:34:19
 �ű����ܣ�����ϵͳ
 */

var status = 0;
var eff ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var zzz ="#fEffect/CharacterEff/1082565/0/0#";
var qqq ="#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";

//function start() {
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
        var selStr = "   #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##k ���:#r "+ MoneyFormat("" + cm.getPlayer().getCSPoints(1) + "") +"    #k#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0# ���þ�: #r"+ MoneyFormat("" + cm.getNX(2) + "") +"#k\r\n#L0##b"+eff +" �����̳ǳ���#l#L1#"+eff+"#b ���ù���"+ "#l#b#L2#" + eff + " ��ҹ���#r#l\r\n#b#L7#" + eff + " �����#l#L8#" +eff+" ѩ������#l#L1##b"+eff+" ��Ч��ָ#l\r\n#L5##r" +eff +" ��������#l#L17##b" +eff+ " �������#l#L10#" + eff + "#b �̳�����#l\r\n#L11#" + eff + " ��Ʒ����#l\r\n#L13#" + eff + "#b ��Ʒ����#l#L15##d" + eff + "����Ʒ��Ʒ#r[ǿ��]#l\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(3000021, 1); //�̳ǵ���
            break;
	    case 1:
            cm.dispose();
            cm.openNpc(3000021, 2); //��ָ
            break;
        case 4:
            cm.dispose();
            cm.openNpc(3000021, 3); //�����װ
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9900002, 4); //��������
            break;
        case 6:
            cm.dispose();
            cm.openNpc(9900002, 9); //��������
            break;
        case 7:
            cm.dispose();
            cm.openNpc(9900002, 10); //ϴ�����
            break;
        case 8:
            cm.dispose();
            cm.openNpc(9900002, 24); //����̵�
            break;
        case 9:
            cm.dispose();
            cm.openNpc(9900002, 25); //����̵�
            break;
	case 10:
            cm.dispose();
            cm.openNpc(9900002, 9); //����
            break;
	case 11:
            cm.dispose();
            cm.openNpc(9900002, 1301); //һ��Ǳ��
            break;
	case 12:
            cm.dispose();
            cm.openNpc(9900002, 28); //140��װ��
            break;
	case 13:
            cm.dispose();
            cm.openNpc(9900002, 29); //150��װ��
            break;
	case 14:
            cm.dispose();
            cm.openNpc(9900002, 31); //����װ��
            break;
	case 15:
            cm.dispose();
            cm.openNpc(9900002, 32); //�߼���Ʒ
            break;			
	case 16:
            cm.dispose();
            cm.openNpc(9900002, 34); //��Ч��ָ
            break;
	case 18:
            cm.dispose();
            cm.openNpc(9000111); //���
            break;	
	case 17:
            cm.dispose();
            cm.openNpc(9900002, 35); //����̵�
            break;
    case 19:
            cm.dispose();
            cm.openNpc(9900002, 36); //�����̵�
            break;		
    case 20:
            cm.dispose();
            cm.openNpc(9900002, 88); //У԰��
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
