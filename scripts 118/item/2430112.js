/* ����ħ����Ƭ */

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

                if (im.getItemQuantity(2430112) <= 1) {

        im.sendOk("�Ѽ���#r2��#k#b#t2430112##k�����Ի��#b#i2049401:##t2049401##k���Ѽ���#r5��#k���Ի��#b#i2049400:##t2049400##k��");
        im.dispose();

                } else if (im.getItemQuantity(2430112) <= 2) {

        im.sendSimple("������ӵ�У�#r " + im.getItemQuantity(2430112) + " #k����\r\n�Ѽ���#r2��#k#b#t2430112##k�����Ի��#b#i2049401:##t2049401##k���Ѽ���#r5��#k���Ի��#b#i2049400:##t2049400##k��\r\n��Ҫ�һ�ʲô�أ�\r\n#L0#һ��#b#i2049401:##t2049401##k#l\r\n#L2#�����Ի�#l");

                } else if (im.getItemQuantity(2430112) >= 3) {

        im.sendSimple("������ӵ�У�#r " + im.getItemQuantity(2430112) + " #k����\r\n�Ѽ���#r2��#k#b#t2430112##k�����Ի��#b#i2049401:##t2049401##k���Ѽ���#r5��#k���Ի��#b#i2049400:##t2049400##k��\r\n��Ҫ�һ�ʲô�أ�\r\n#L0#һ��#b#i2049401:##t2049401##k#l\r\n#L1#һ��#b#i2049400:##t2049400##k#l\r\n#L2#�����Ի�#l");

 }
        } else if (status == 1) {
            switch (selection) {
            case 0:

              if (im.getSpace(3) >= 1) {

                im.gainItem(2049401,1);
                im.gainItem(2430112,-2);
                im.dispose();

                } else {
                im.sendOK("��� #e#r������ #n#kû�пճ�һ��λ��.");

                }
                break;
            case 1:
                im.gainItem(2049400,1);
                im.gainItem(2430112,-5);
                break;
            case 2:
                im.dispose();
                break;
         }

    }
}