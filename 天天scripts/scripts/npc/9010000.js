var status = -1;
var items = new Array(2290246, 2290247, 2290244, 2290131, 2290135, 2290129);
var selector;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
if(cm.getMapId() == 910000000){
cm.dispose();
cm.openNpc(9010000,2);
} else {
        cm.sendSimple("���á���ð�յ����е�������ӿ�����\r\n\r\n#b#L0# �����Ի�.#l\r\n#L1# ���Խ����޷�ʹ�õ����ֲ�.#l");
    } else if (status == 1) {
        if (selection == 0) {
            cm.sendOk("��һֱŬ���Ÿ���Ҵ�����õķ���������������ˣ��������Ұɡ�");
            cm.dispose();
        } else if (selection == 1) {
            selStr = "���� #b#h0##k, ���º��޷�ʹ�õ����ֲᣬ���Ի�Ϊ��ʹ�õ����ֲᡣ��������ʲô���ֲ��أ�\r\n#b";
            for (var i = 0; i < items.length; i++) {
                selStr += "\r\n#L" + items[i] + "# #t" + items[i] + "##l";
            }
            cm.sendSimple(selStr);
        }
}
    } else if (status == 2) {
        cm.sendOk("�����ܹٷ������Ѹ�Ϊ20,�������޷�ʹ��,�붪��.");
        cm.dispose();
    }
}
