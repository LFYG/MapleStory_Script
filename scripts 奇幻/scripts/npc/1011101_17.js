var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
Array(1042231, 100),// ��߼����յ�����
Array(1112681, 100),// ��ߵ�׹
Array(1152074, 100),// ��߼����յ¶���
Array(1122174, 100),// ���ָ
Array(1032121, 100), // �߼����յ�����
Array(1082401, 100), // �߼�����׹
Array(1062148, 100), // �߼�����
Array(1072618, 100), // �߼����յ½�ָ

Array(2044003, 500), // ���յ�ͷ������
Array(2044103, 500), // �м����յ�����
Array(2044303, 500), // �м���׹
Array(2044203, 500), // �м���
Array(2043003, 500), // �м����յ½�ָ
Array(2044908, 500), // ���յ�����
Array(2044815, 500), // �ͼ�����
Array(2043203, 500), // �ͼ���
Array(2043103, 500), // �ͼ����յ¶���
Array(2043803, 500), // �ͼ����յ¶���
Array(2044503, 500), // �ͼ���
Array(2044403, 500), // �ͼ����յ¶���
Array(2040303, 500), // �ͼ�
Array(2044703, 500), // �ͼ����յ¶���
Array(2044603, 500)
);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			text = "�װ��� #r#h ##k ,������ #v4310030# �һ�#e#b�˶�����ʤϵ��װ��#n#k��\r\n #r#e#L0#���� #v4310030# ר����ͼ�����Լ����ÿո񣡣�#l\r\n\r\n#b";
			for (var i=1; i<=itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i-1] + ":# ";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			if (selection == 0) {
				cm.dispose();
				cm.openNpc(9900003,109);

				return;
			}  else {
			selects = (selection-1);
            
			}
            buynum = 1;
            cm.sendYesNo("����һ�" + buynum + "��#r#i" + itemlist[selects][0] + "##k��\r\n�㽫ʹ�õ�" + (buynum * itemlist[selects][1]) + "��#v4310030#");
        } else if (a == 2) {
            if (cm.haveItem(4310030,buynum * itemlist[selects][1])) {
                cm.gainItem(4310030, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
				cm.worldSpouseMessage(0x20,"[ƽ���̳�] ��" + "��� " + cm.getChar().getName() + " �һ����˶�����ʤϵ��װ��,�볬�������һ����");                
				cm.sendOk("�һ��ɹ��ˣ�");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻��#v4310030#��");
                cm.dispose();
            }
        }
    }//mode
}//f