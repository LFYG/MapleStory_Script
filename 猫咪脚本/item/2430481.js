/* �߼�����ħ����Ƭ */

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        im.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        im.sendOk("�Ѽ���#r30��#k#b#t2430481##k�����Ի��#b#i2049400:##t2049400##k���Ѽ���#r100��#k���Ի��#b#i2049701:##t2049701##k��");
        im.dispose();
    }
}