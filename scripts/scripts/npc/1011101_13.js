var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
Array(1132246, 99),// ��߼����յ�����
Array(1122267, 99),// ��߼����յµ�׹
Array(1032223, 99),// ��߼����յ¶���
Array(1113075, 99),// ��߼����յ½�ָ
Array(1132245, 55), // �߼����յ�����
Array(1122266, 55), // �߼����յµ�׹
Array(1032222, 55), // �߼����յ¶���
Array(1113074, 55), // �߼����յ½�ָ
Array(3010699, 44), // ���յ�ͷ������
Array(1132244, 44), // �м����յ�����
Array(1122265, 44), // �м����յµ�׹
Array(1032221, 44), // �м����յ¶���
Array(1113073, 44), // �м����յ½�ָ
Array(3010698, 44), // ���յ�����
Array(1132243, 33), // �ͼ����յ�����
Array(1122264, 33), // �ͼ����յµ�׹
Array(1032220, 33), // �ͼ����յ¶���
Array(1113072, 33)  // �ͼ����յ½�ָ
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
			text = "�װ��� #r#h ##k ,������ #v4310097# �һ�#e#b���յ�������װ#n#k��\r\n #r#e#L0#���� #v4310097# ר����ͼ�����Լ����ÿո񣡣�#l\r\n\r\n#b";
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
				cm.warp(863000100);

				return;
			}  else {
			selects = (selection-1);
            
			}
            buynum = 1;
            cm.sendYesNo("����һ�" + buynum + "��#r#i" + itemlist[selects][0] + "##k��\r\n�㽫ʹ�õ�" + (buynum * itemlist[selects][1]) + "��#v4310097#");
        } else if (a == 2) {
            if (cm.haveItem(4310097,buynum * itemlist[selects][1])) {
                cm.gainItem(4310097, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
				cm.worldSpouseMessage(0x20,"[�����̳�]��" + "��� " + cm.getChar().getName() + " �һ��˱��յ�ϵ������,�볬�������һ����");                
				cm.sendOk("�һ��ɹ��ˣ�");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻��#v4310097#��");
                cm.dispose();
            }
        }
    }//mode
}//f