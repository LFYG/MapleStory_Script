var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
					Array(5062000, 900),//����ħ����3ë
					Array(5062002, 1800),//�߼�����ħ����6ë
					Array(5062009, 2100),//��������ħ����7ë
					Array(5062500, 2400),//��ʦ��������ħ����8ë
					//Array(5062001, 1500),//��������ħ��
					//Array(5062010, 2400),//�ռ�����ħ��
					Array(5064000, 3000),//��������
					Array(2340000, 3000),//��������
					Array(5064003, 6000),//�������	
					Array(5050000, 1500),//ϴ������
					Array(2501000, 3000),//AP��ʼ��
					Array(2500000, 3000),//SP��ʼ��
					Array(5220040, 200),//ð�յ�ת��ȯ	
					Array(5062400, 30000),//��������
					Array(4021016, 3000),//��߼�
					Array(5067000, 1500),//Ǳ����
					//Array(5110000, 1280),//�����ɿ���
                    Array(5380000, 1880),//����ʯ
					Array(5570000, 3000),//����70%
					Array(5050001, 3000),//1ת
					Array(5050002, 3000),//2ת
					Array(5050003, 5000),//3ת
					Array(5050004, 5000),//4ת
					Array(5156000, 3600),//������ҩ
					Array(4033999, 9000),//��֮��
					Array(2048300, 2700),//����Ǳ�ܸ���ӡ�½���ȯ	
					Array(2048301, 3000),//���Ǳ�ܸ���ӡ�½���ȯ	
					Array(5520001, 5000),//�׽���������
					Array(5520000, 3500),//��������
					Array(5121032, 50),//���õ��
					Array(5150040, 980),//�ʼ�����
					Array(5152053, 980),//�ʼ�����
					Array(5151036, 980),//���ܸ߼�Ⱦ����	
                    Array(5150052, 980),//���ܸ߼�������
					Array(5152057, 980),//���ܸ߼����ο�	
					Array(5249000, 300),//���ܳ���ʳ��	
					
					Array(5062800, 3000),//ϴ����
					Array(5072000, 3000),
					Array(5073000, 3000),
					Array(5074000, 3000),
					Array(5076000, 3000),
					Array(5390000, 3000),
					Array(5390001, 3000),
					Array(5390002, 3000),
					Array(5390003, 3000),
					Array(5390004, 3000),
					Array(5390005, 3000),
					Array(5390006, 30000),
					Array(5390007, 30000),
					Array(5390008, 30000),
					Array(5079001, 3000),
					Array(5079002, 3000),
					Array(5390010, 30000),
					Array(5390018, 30000),
					Array(5080001, 6000)//���
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
			text = "�װ��� #r#h ##k ���ã�����ͼƬ������Ʒ��\r\n#b";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i] + ":# ";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("������������������Ҫ���������\r\n\r\n#r1����Ҫ" + itemlist[selects][1] + "���", 1, 0, 999999);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("���빺��" + buynum + "��#r#i" + itemlist[selects][0] + "##k��\r\n�㽫ʹ�õ�" + (buynum * itemlist[selects][1]) + "���");
        } else if (a == 3) {
            if (cm.getChar().getCSPoints(1) >= buynum * itemlist[selects][1]) {
                cm.getChar().modifyCSPoints(1, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
  				cm.worldSpouseMessage(0x20,"[����̳�] ��" + "��� " + cm.getChar().getName() + " �õ�����˵���ħ��,�볬�������һ����");             
				cm.sendOk("����ɹ��ˣ�");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻�ĵ��");
                cm.dispose();
            }
        }
    }//mode
}//f