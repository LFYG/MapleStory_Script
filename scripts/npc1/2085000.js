var status = 0;
var itemId = new Array(2047000, 2047002, 2047100, 2047102, 2047200, 2047201, 2047202, 2047203);
var set = 0;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        cm.dispose();
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {
        cm.sendSimple("Ҫ����Ҳ�������Ϸɾͺ��ˡ��������Է��и���Ȥ�Ļ�������ȥ������ľ����������峤��\r\n#b#L0#���������顣");
    } else if (status == 1) {
        var selStr = "Ҫ��ǿ�������;öȵ�װ������Ҫ�����顣����Ҫʲô��";
        for (var i = 0; i < itemId.length; i++) {
            selStr += "\r\n#b#L" + i + "#��ȡ#t" + itemId[i] + "#��#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 2) {
        if (cm.haveItem(4001545, 10)) {
            cm.gainItem(4001545, -10);
            cm.gainItem(itemId[selection], 1);
            cm.sendOk("��ϲ��ɹ���ȡ#b#t" + itemId[selection] + "##k���������Ҫ�Ļ��������Ұɣ�");
        } else {
            cm.sendNext("Ҫ����ȡ#b#t" + itemId[selection] + "##k����Ҫ10��#b#t4001545##k����Ҫ������Ļ�����ȥ����#b#o8300007##k���Ѽ�#b#t4001545##k��");
        }
        cm.dispose();
    }
}