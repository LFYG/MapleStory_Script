status = -1;
var itemList = Array(
Array(2049129, 600, 1, 3),//���������� 50% 
Array(2049116, 600, 1, 3),//ǿ���������
Array(2049118, 600, 1, 3),//�������
Array(2049132, 600, 1, 3),//���˻������30% 
Array(2049133, 600, 1, 3),//���˻������50% 
Array(2049124, 600, 1, 3),//����������
Array(2049137, 600, 1, 3) //�������������� 40%
);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            im.sendOk("����ʹ���𣿡��ҵĶ������и���#b�������λ���ᡢװ�����������#kŶ��");
            im.safeDispose();
        }
        status--;
    }
    if (status == 0) {
        var chance = Math.floor(Math.random() * 600);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = im.gainGachaponItem(itemId, quantity, "�������", notice);
            if (item != -1) {
		im.gainItem(2430067, -1);
                im.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                im.sendOk("����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
            }
            im.safeDispose();
        } else {
            im.sendOk("�������������ʲô��û���õ���");
            im.safeDispose();
        }
    }
}