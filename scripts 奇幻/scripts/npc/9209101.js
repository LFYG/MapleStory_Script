var status = 0;
var eff ="#fEffect/CharacterEff/1112908/0/1#";

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
        var selStr = "===============#r���� �򱦸��� ����#k===============\r\n�װ��ġ� #b#h ##k �� ��#r��ӭ����Chinað�յ���#k\r\n���� ��#r��������#k ��������������������С����Ϊ��ҷ�������ģ�����û�뵽;�������˿ɶ�ġ� #b����ѩ��#k �������������������ﶼ�����ˣ������ô���ģ����ܰ������\r\n#L1##e#r<�򱦻����μ�����2>#k#l\r\n#L2#"+ eff +"#r<����1>#b����ѩ����Ƭ�һ�!#k#l   \r\n#L3#"+ eff +"#r<����2>#b��ŭ�Ĵ�����ѩ��!#k#l   "
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
	    cm.sendOk("=======================#r��δ����#k=====================\r\n��ӭ��λ����#bChinað�յ�#r��δ����#k�������ڴ��������ҽ�Ϊ��ҽ��ܱ��λΪ��Ҵ����ĸ�����\r\n#e#d�١�Merry Christmas��ʥ���ڵĿ�~#n#k\r\n#r�ʱ�䣺#b��δ����\r\n#e#d�ۡ�Merry Christmas������ʥ������~#n#k\r\n#r�ʱ�䣺#b2015��5��1�ա���2015��5��3��\r\nÿ��ǩ������#v2430608##z2430608#����Ŷ���ɿ����ܶྪϲ����Ŷ���ۼ�ǩ������Ӯȡ�������顢ף�������ǿ��ħ���ȳ�ֵ����Ŷ��~");
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9209101,1);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(9209101,2);
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9209101,3);
            break;
        /*case 5:
            cm.dispose();
        cm.sendOk("�뵽������й�������װ��");
            break;
        case 6:
            cm.dispose();
            cm.openShop(1012125);
            break;
        case 7:
            cm.dispose();
            cm.openShop(1033003);
            break;
        case 8:
            cm.dispose();
            cm.openNpc(9900002,26);
            break;
        case 9:
            cm.dispose();
            cm.openShop(2161010);
            break;
        case 10:
            cm.dispose();
            cm.openShop(9310117);
            break;
        case 11:
            cm.dispose();
            cm.openShop(1021000);
            break;
        case 12:
            cm.dispose();
            cm.openShop(9310111);
            break;
        case 13:
            cm.dispose();
            cm.openShop(9000188);
            break; */
        }
    }
}
