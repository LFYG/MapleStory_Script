status = -1;
var itemList = Array(
    //��Ʒ���� ����  ����
Array(2431139,1,1),//����
Array(1003172,1,1),//ʨ��ս��ͷ��
Array(1003173,1,1),//��β��ʦñ��
Array(1003174,1,1),//ӥ���ڱ���ñ
Array(1003175,1,1),//��ѻ֮��׷����ñ
Array(1003176,1,1),//��ݴ���ñ
Array(1052314,1,1),//ʨ��ս�����Ӽ�
Array(1052315,1,1),//��β��ʦ����
Array(1052316,1,1),//ӥ���ڱ���
Array(1052317,1,1),//��ѻ֮��׷���߿���
Array(1052318,1,1),//��ݴ�������
Array(1072485,1,1),//ʨ��ս��Ь
Array(1072486,1,1),//��β��ʦЬ
Array(1072487,1,1),//ӥ���ڱ�Ь
Array(1072488,1,1),//��ѻ֮��׷����Ь
Array(1072489,1,1),//��ݴ���Ь
Array(1082295,1,1),//ʨ��ս������
Array(1082296,1,1),//��β��ʦ����
Array(1082297,1,1),//ӥ���ڱ�����
Array(1082298,1,1),//��ѻ֮��׷��������
Array(1082299,1,1)//��ݴ�������
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
        var  CounJl=0;
       for (var i = itemList.length - 1; i >= 0; i--) {
           CounJl+= itemList[i][1];
        }

        var chance = Math.floor(Math.random() * CounJl);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
                break;
            }
             chance = chance - itemList[i][1];
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            //var notice = finalitem[finalchance][3];
            item = im.gainGachaponItem(itemId, quantity, "������", 3);
            if (item != -1) {
		im.gainItem(2431139, -1);
                im.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                im.sendOk("����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
            }
            im.safeDispose();
        } else {
            im.sendOk("һ�Ű���Ʈ��,ʲô�¶�û�з�����!!");
            im.safeDispose();
        }
    }
}
