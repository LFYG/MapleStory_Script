/* ��������ħ����Ƭ */
var contnum=25;//�һ���Ҫ������
var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {2431893
        if (status >= 0) {
            if (status == 1) {
                im.sendNext("�������Ҫ�һ��Ļ�����ô���´������ң�");
            }
            im.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var selStr = "�����ڳ���#r" + im.getItemQuantity(2431893) + "#k��#b#i2431893:# #t2431893##k\r\n";
        selStr += contnum+"����Ƭ��һ������ħ��";
            selStr += "\r\n#L1#�һ�#r1��#l";
        im.sendSimple(selStr);
    } else if (status == 1) {
        if (im.getItemQuantity(2431893) >= contnum) {
            if (im.canHold(5062009)) {
                im.gainItem(2431893, -contnum);
                im.gainItem(5062009, 1);
                im.sendOk("��ϲ���ɹ��һ�#i" + 5062009 + ":# #b#t" + 5062009 + "##k ��");
            } else {
                im.sendOk("�������1�����ϵĿռ䡣");
            }
        } else {
            im.sendOk("�һ�#i" + 5062009 + ":# #b#t" + 5062009 + "##k��Ҫ#r" + contnum + "��#k#b#t2431893##k\r\n�������ռ�#r" + (contnum - im.getItemQuantity(2431893)) + "#k���Ҳ���Ϊ���һ���");
        }
        im.dispose();
    }
}
