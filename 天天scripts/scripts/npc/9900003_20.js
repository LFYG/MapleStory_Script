/*
 ���ʱ�䣺2015-10-18 01:46:22
 �ű����ܣ�����������
 */
var isopenvip = false;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var npcid = 9000002;

var tiaotiaomaps = Array(
    // Array(100000202,"��������"),//���µڶ���
    // Array(109030001,"��¥�ҳ���"),
    // Array(910360000,"����B1"),
    // Array(910360100,"����B2"),
    // Array(910360200,"����B3"),
    Array(220000006, "��߳�����"),
    Array(109040004, "��ߵ� ��4�׶�"), // Array(109040001,"�ߵص�1�׶�"),
    Array(910130001, "�̿�����"), //ֻ���ڶ��׶� Array(910130000,"�̿�����"),
    Array(910530001, "����ɭ�ֶ��׶�", 750, -2400) // Array(280020000,"��ɽ������")//����ɭ�ֶ��׶�
)


var a = 0;
var selects = 0;
var MapType;

function start() {
    a = -1;
    action(1, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    } else {
        if (mode == 1)
            a++;
        else {
            cm.dispose();
            return;
        }
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            var text = "";
            text += "[#h0#] ������ϲ������˵�ϻ���\"����\"�������Ķ���.���Ǳ����ˣ��ҿ�����һ���ַ�ʽ�����������ȥ�������Ǹо�����ʵ�������棬��������������㵽�ס�\r\n";
            text += "�������" + cm.getBossLog("������") + " �ܹ����" + cm.getBossLog("�ܼ�������", 1) + "\r\n";
            text += "#L0# " + icon + " �������첻��,��ȥ��\"����\"\r\n";
            text += "#L1# " + icon + " 7������һ�1��\r\n";
            cm.sendSimple(text)


        } else if (a == 1) {
            var text = ""
            switch (selection) {
                case 0: //�������
                    if (cm.getLevel() < 120) {
                        cm.sendOk("#k\r\n\r\n120����û�������Ǹо�����ʵ�������棬������������㵽�ף���ĵȼ�" + cm.getLevel());
                    } else {
                        if (cm.getBossLog("������") == 0 || cm.getPlayer().isGM()) {
                            // cm.gainItem(qdwp1, gqdwp1);//��ϯͼ��
                            // cm.gainItem(qdwp1, gqdwp2);//��������
                            cm.worldMessage("���" + cm.getChar().getName() + "��ʼ������������" + cm.getBossLog("�ܼ�������"));

                            //��ת����ͼ
                            temp1 = cm.getBossLog("�ܼ�������");
                            temp1 = temp1 % (tiaotiaomaps.length);
                            cm.worldMessage("���" + cm.getChar().getName() + "��ʼ������������" + temp1);

                            cm.warp(tiaotiaomaps[temp1][0]);

                            if (tiaotiaomaps[temp1][2] != null) {
                                cm.spawnNpc(npcid, tiaotiaomaps[temp1][2], tiaotiaomaps[temp1][3]);
                            }
                            //cm.setBossLog("������");
                            // cm.setBossLog("�ܼ�������", 1);
                            //cm.sendOk("#k \r\n#dǩ���ɹ�#k\r\n���ǩ�����\r\n#i" + qdwp1 + ":# #kx#r " + gqdwp1 + "  #i" + qdwp2 + ":# #kx#r " + gqdwp2 + " ");
                        } else {
                            cm.sendOk("#k #k\r\n\r\n��סһ��ֻ����һ�Ρ�����Լ����������أ�������������Ӳ����ٺ����ģ�");
                        }
                    }
                    cm.dispose();
                    break;
                    //----------------------------------
                case 1: //�һ�
                    if (cm.itemQuantity(4032398) >= 7) {
                        cm.gainItem(4032398, -7);
                        cm.gainMeso(100000000); //�һ��ɹ�
                        cm.sendOk("�һ��ɹ�.��鿴����");
                        cm.dispose();
                    } else {
                        cm.sendOk("��û��8��#v4032398#");
                        cm.dispose();
                    }
                    break;
            }

            cm.dispose();
        } //a
    } //mode
} //f
