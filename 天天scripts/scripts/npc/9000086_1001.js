var status = 0;
var dsa = "";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {

        dsa += "#r ���������T��#i4251202##r   �����̵�   #i4251202# #r��T�������� \r\n\r\n#r";

        var selStr = dsa + "#r" + cm.getVipname() + " #r#h # #k���ã�\r\n��ѡ������Ҫ�Ľ�����̵�:\r\n#r#L0#�����ӻ��̵�#l  #L1#��������̵�#l   #L2#����߼��̵�#l   \r\n#d#L3#˫�����̵�#l  #L4#�ֵ���Ӱ�̵�#l   #L5#��ħ�����̵�#l\r\n#b#L6#ð�ռ�  �̵�#l  #L7#�����ֲ��̵�#l   #L8#������  �̵�#l  \r\n#L9#��Ӱ˫���̵�#l  #L10#���Ĵ����̵�#l   #L11#����ս���̵�#l  \r\n\r\n#k  �����Ƕһ��̵���ڣ�#b\r\n#L20#��  Ҷ  �̵�#l  #L21#��Ҷ��  �̵�#l   #L22#�������̵�#l  \r\n#L23#�����  �̵�#l  #L24#��˵��  �̵�#l   #L25#8 ������̵�#l  \r\n#L26#ʨ�ӱ�  �̵�#l  #L27#���Ǳ�  �̵�#l   #L28#�����߱��̵�#l \r\n "; 
        cm.sendSimple(selStr);

    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
	    cm.openShop(100000);
            break;
        case 1:
            cm.dispose();
	    cm.openShop(100001);
            break;
        case 2:
            cm.dispose();
            cm.openShop(100002);
            break;

        case 3:
            cm.dispose();
            cm.openShop(100003);
            break;
        case 4:
            cm.dispose();
            cm.openShop(100004);
            break;
        case 5:
            cm.dispose();
            cm.openShop(100005);
            break;

        case 6:
            cm.dispose();
            cm.openShop(100006);
            break;
        case 7:
            cm.dispose();
            cm.openShop(100007);
            break;
        case 8:
            cm.dispose();
            cm.openShop(100008);
            break;

        case 9:
            cm.dispose();
            cm.openShop(100009);
            break;
        case 10:
            cm.dispose();
            cm.openShop(100010);
            break;
        case 11:
            cm.dispose();
            cm.openShop(100011);
            break;

        case 20:
            cm.dispose();
            cm.openShop(100020);
            break;
        case 21:
            cm.dispose();
            cm.openShop(100021);
            break;
        case 22:
            cm.dispose();
            cm.openShop(100022);
            break;

        case 23:
            cm.dispose();
            cm.openShop(100023);
            break;
        case 24:
            cm.dispose();
            cm.openShop(100024);
            break;
        case 25:
            cm.dispose();
            cm.openShop(100025);
            break;

        case 26:
            cm.dispose();
            cm.openShop(100026);
            break;
        case 27:
            cm.dispose();
            cm.openShop(100027);
            break;
        case 28:
            cm.dispose();
            cm.openShop(100028);
            break;



        }
    }
}