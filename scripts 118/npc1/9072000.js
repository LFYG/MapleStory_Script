/* �ٰ̹±� - �ɻ���ƾNPC*/

var status = 0;
var sel;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendSimple("�����ɻ�������з��аɡ��������������ó��죡����Ȼ��ʹ��ˣ������ҿ��Ը����������Ϸɵķ�����#b\r\n\r\n#L0#�������޷ɻ���#l\r\n#L1#��Ϊ��˵��һ�·ɻ���#l\r\n#L2#�ɻ�����Щ�����أ�#l");
    } else if (status == 1) {
        if (selection == 0) {
            cm.sendSimple("��������ʲô�ɻ��أ�\r\n#b\r\n#L0# #fSkill/8000.img/skill/80001027/iconMouseOver#ľ�ɻ���1�죩#r10000���#b#l\r\n#L1# #fSkill/8000.img/skill/80001027/iconMouseOver#ľ�ɻ���7�죩#r50000���#b#l\r\n#L2# #fSkill/8000.img/skill/80001028/iconMouseOver#��ɻ���1�죩#r30000���#b#l\r\n#L3# #fSkill/8000.img/skill/80001028/iconMouseOver#��ɻ���7�죩#r150000���#b#l");
        } else if (selection == 1) {
            status = 4;
            cm.sendNext("�ɻ���ʲô���ɻ���ð�յ���������½�ͨ���ߡ����������һ�������Գ����ɻ������ڸ���֮�䡣���Ƿɻ������ڲ�ͬ��½����С�");
        } else if (selection == 2) {
            cm.sendOk("�������޵ķɻ���������ͨ���۸���˵�#bľ�ɻ�#k���Լ��۸��Թ󵫿���ʹ��½���ƶ�ʱ������2���ӵ�#b��ɻ�#k�������ѡ���Լ���Ҫ�����ࡣ");
            cm.dispose();
        }
    } else if (status == 2) {
        cm.sendOk("�ݲ�֧�ַɻ�������");
        cm.dispose();
    } else if (status == 3) {
        cm.dispose();
    } else if (status == 4) {
        cm.sendNext("�ɻ���ʲô���ɻ���ð�յ���������½�ͨ���ߡ����������һ�������Գ����ɻ������ڸ���֮�䡣���Ƿɻ������ڲ�ͬ��½����С�");
    } else if (status == 5) {
        cm.sendNextPrev("�������д�½�����Է��С�ֻ�ܴ�#b���֮��#k����#b��������ʥ�ء����¶�˹̹����߳ǡ����ﰲ�ء����ꡢ��ľ��#k����ȻҲ���Է�������С�������#b������#k��#b���¶�˹̹#k֮��Ҳ���Է��С������ĵط���̫Σ�գ��޷����С�ϣ�����ܼ�ס��");
    } else if (status == 6) {
        cm.sendNextPrev("������ɻ���������½ȥ�Ļ���ֻҪ���������ϵ�#b��ƱԱ#k�Ի����С�");
    } else if (status == 7) {
        cm.sendPrev("������Щ����������");
        cm.dispose();
    }
}