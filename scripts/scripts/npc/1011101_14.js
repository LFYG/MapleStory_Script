var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
Array(1112951, 99), // �����˹�ķ�ŭ	 
Array(1142528, 11), // �����˹������	
Array(1142520, 33), // �����˹�����ȷ�	 
Array(1004143, 33), // ���ų������˹���	 

Array(1082543, 99), // �������Ǵ�˹���� // (������)
Array(1082544, 99), // �����ն�÷˹���� // (������)
Array(1082545, 99), // ������������ // (������)
Array(1082546, 99), // �������������� // (������)
Array(1082547, 99), // ��������̩���� // (������)
Array(1102481, 99), // �������Ǵ�˹���� // (������)
Array(1102482, 99), // �����ն�÷˹���� // (������)
Array(1102483, 99), // ������������ // (������)
Array(1102484, 99), // �������������� // (������)
Array(1102485, 99), // ��������̩���� // (������)
Array(1072743, 99), // �������Ǵ�˹ѥ // (������)
Array(1072744, 99), // �����ն�÷˹ѥ // (������)
Array(1072745, 99), // ��������ѥ // (������)
Array(1072746, 99), // ����������ѥ // (������)
Array(1072747, 99), // ��������̩ѥ // (������)
Array(1132174, 99), // �������Ǵ�˹���� // (������)
Array(1132175, 99), // �����ն�÷˹���� // (������)
Array(1132176, 99), // ������������ // (������)
Array(1132177, 99), // �������������� // (������)
Array(1132178, 99)// ��������̩���� // (������)*/);
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
			text = "�װ��� #r#h ##k ,������ #v4310058# �һ�#e#b����ϵ����װ#n#k��\r\n #r#e#L0#���� #v4310058# ר����ͼ�����Լ����ÿո񣡣�#l\r\n\r\n#b";
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
				cm.warp(401072000);

				return;
			}  else {
			selects = (selection-1);
            
			}
            buynum = 1;
            cm.sendYesNo("����һ�" + buynum + "��#r#i" + itemlist[selects][0] + "##k��\r\n�㽫ʹ�õ�" + (buynum * itemlist[selects][1]) + "��#v4310058#");
        } else if (a == 2) {
            if (cm.haveItem(4310058,buynum * itemlist[selects][1])) {
                cm.gainItem(4310058, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
				cm.worldSpouseMessage(0x20,"[�����̳�]��" + "��� " + cm.getChar().getName() + " �һ��˱���ϵ��װ��,�볬�������һ����");                
				cm.sendOk("�һ��ɹ��ˣ�");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻��#v4310058#��");
                cm.dispose();
            }
        }
    }//mode
}//f