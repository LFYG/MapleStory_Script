var itemList = Array(
    //��Ʒ���� ����  ����
    Array(4001784, 5, 1), //��ң�50W
    Array(4001714, 10, 1), // 100W
    Array(4001785, 45, 1) //500W
);



function action(mode, type, selection) {
    var em = cm.getEventManager("ZChaosPQ3");
    if (em == null) {
        cm.sendOk("���Ժ����ԡ�");
        cm.dispose();
        return;
    }
    switch (cm.getPlayer().getMapId()) {
        case 261000021:
            cm.dispose();
            cm.openNpc(2112003, 1);
            return;
        case 926110000:
            cm.sendOk("��Ӧ�ó��Ե����������#b�ļ���#k�е����ݡ�ֱ���ҵ����Խ���ʵ���ҵ���ڡ�");
            break;
        case 926110001:
            cm.sendOk("���������еĹ���һ�֧����ġ�");
            break;
        case 926110100:
            cm.sendOk("��Щ�ձ���й©�����Ǳ����#b���ɵ�Һ��#k�����ձ���ߣ�һ��ʱ�䲻��#b���ɵ�Һ��#k�����ձ��ڣ��ձ����Һ�����ʧ�⡣��ץ���ˣ�");
            break;
        case 926110400:
            cm.sendOk("��ʲôʱ��׼���ã�����Ҫȥ�����ҵİ��顣");
            break;
        case 926110401:
            if (!cm.haveMonster(9300139)) {
                //cm.gainPlayerEnergy(10);
                cm.gainItem(5062009, 3);
                cm.worldSpouseMessage(0x20, "[�ճ��] ��ϲ��� " + cm.getChar().getName() + " �������޺����л�� 3����������ħ�� ��");


                var CounJl = 0;
                for (var i = itemList.length - 1; i >= 0; i--) {
                    CounJl += itemList[i][1];
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
                    cm.gainItem(itemId, quantity);
                }
                cm.setEventCount("����");
                cm.setPartyEventCount("����1");
                cm.warp(910000000);
                cm.dispose();
            } else {
                cm.sendOk("��ȷ�ϵ�ͼ�Ϸ񻹴��ڹ���!");
            }
            break;
    }
    cm.dispose();
}
