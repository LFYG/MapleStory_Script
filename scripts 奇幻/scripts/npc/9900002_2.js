/* ����̵� */

var status = 0;
var eff ="#fUI/Basic/BtHide3/mouseOver/0#";
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
        var selStr = "��ã���ӭ����Chinað�յ�,���Ǹ����̳���Ʒ������\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##k���:#r "+ MoneyFormat("" + cm.getPlayer().getCSPoints(1) + "") +" #k#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#���þ�: #r"+ MoneyFormat("" + cm.getNX(2) + "") +"#k\r\n        #L18##r#e����ֵ��ƣ�#n#k\r\n\r\n#L4##b" + eff + "�Ƽ����ϡ��#r[��װ,��ʱ����]#l #L1#1 #L2#1 #L3#1 #L4#1 #L5#1 #L6#1 #L7#1 #L8#1 #L9#1 #L10#1 #L11#1 #L12#1 #L13#1 #L14#1  #L15#1  #L16#1  #L17#1  #L18#1  #L19#1  #L20#1\r\n ";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9900002, 11); //˫������
            break;
	    case 1:
            cm.dispose();
            cm.openNpc(9900002, 42); //��ָ
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9900002, 6); //�����װ
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
            cm.openNpc(9900002, 1301); //�����̵�
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
	//case 16:
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
