var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
Array(1352202, 6000), //Ӣ�۸���
Array(1352212, 6000), //ʥ�︱��
Array(1352222, 6000), //���︱��
Array(1352503, 6000), //��������
Array(1352932, 6000), //ս����
Array(1352232, 6000), //�𶾸���
Array(1352242, 6000), //���׸���
Array(1352252, 6000), //���̸���
Array(1352403, 6000), //ҹ�⸱��
Array(1352813, 6000), //��֮����
Array(1352942, 6000),  //������
Array(1352952, 6000),  //���鸱��
Array(1352003, 6000),  //˫����
Array(1352262, 6000),  //���丱��
Array(1352272, 6000),  //������
Array(1352962, 6000),  //������
Array(1352103, 6000),  //��Ӱ����
Array(1352292, 6000),  //��ʿ����
Array(1353004, 6000),  //�������
Array(1352303, 6000),  //��������
Array(1352604, 6000),  //��ʹ����
Array(1352703, 6000),  //��е����
Array(1352902, 6000),  //�ӳ�����
Array(1352912, 6000),  //��������
Array(1352922, 6000),  //���ڸ���
Array(1099004, 6000),  //���ָ���
Array(1099009, 6000),  //������
Array(1353103, 6000),  //���¸���
Array(1352972, 6000),  //��ʿ�Ÿ���
Array(1098003, 6000),  //�׹�����
Array(1352282, 6000),  //��������
Array(1342008, 200),  //˫������
Array(1190001, 2000),  //��������
Array(1190101, 2000),  //��ʹ����
Array(1190201, 2000)  //�������

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
			text = "�װ��� #r#h ##k ���ã�����ͼƬ������Ʒ��\r\n#bע�⣺���Լ������ո�\r\n";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i] + ":# ";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("������������������Ҫ���������\r\n\r\n#r1����Ҫ" + (itemlist[selects][1]*500) + "��#b��Ϸ��#k", 1, 0, 999999);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("���빺��" + buynum + "��#r#i" + itemlist[selects][0] + "##k��\r\n�㽫ʹ�õ�" + (buynum * itemlist[selects][1]*500) + "��Ϸ�ҡ�");
        } else if (a == 3) {
            if (cm.getPlayer().getMeso() >= buynum * itemlist[selects][1]*500&&cm.getPlayer().getMeso() >=3000000) {
                cm.gainMeso(-buynum * itemlist[selects][1]*500);
                cm.gainItem(itemlist[selects][0], buynum);
				cm.worldSpouseMessage(0x20,"[ƽ���̳�]��" + "��� " + cm.getChar().getName() + " �ý�ҹ�������Ʒ,�볬�������һ����");                
				cm.sendOk("����ɹ��ˣ�");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻����Ϸ�ҡ����߿ո񲻹�");
                cm.dispose();
            }
        }
    }//mode
}//f