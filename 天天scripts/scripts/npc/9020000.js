/*
    ������˹ - Victoria Road: Kerning City (103000000)
*/



var status = -1;
var minLevel = 160;
var maxLevel = 250;

var minPartySize = 3;
var maxPartySize = 6;

var GetMeny = 500; //���ĵㄻ����

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        cm.removeAll(4001007);
        cm.removeAll(4001008);
        // if (cm.getPlayer().getMapId() != 910000000) {

        var text = "#e<����������ѵ����>#n\r\n";
        text += "������߳���ս������Ҫ" + GetMeny + "�ㄻһ��.\r\n";
        text += "һ���˺�ÿ��ֻ�ܽ���6��,ǰ������ѡ�\r\n";
        text += "\r\n\r\n#L0#����������ѵ���������ҡ�#l\r\n";
        text += "#L1#����Ѱ�Ҷ�Ա��#l\r\n#L2#��������˵����#l"
        cm.sendSimple(text);
        // } else {
        //     cm.sendSimple("#e<����������ѵ����>#n\r\n����Ͷ�Ա��һ��Ŭ��������������������кܶ������ͬ��Э�����޷�������ϰ���������ս�Ļ�����ͨ��#b������ӵĶӳ�#k����˵����);
        // }
    } else if (status == 1) {
        if (selection == 0) { //����ִ���������
            if (cm.getEventCount("��������") > 6) {
                cm.sendOk("�Բ���һ��ֻ�ܽ���6�Ρ�")
                cm.dispose();
            } else if (cm.getEventCount("��������") >= 3 && cm.getChar().getCSPoints(1) < GetMeny) {
                cm.sendOk("�Բ���ֻ��ǰ�������,��������Ҫ" + GetMeny + "��ȯһ��!")
                cm.dispose();
            } else if ((cm.getLevel() < minLevel) || (cm.getLevel() > maxLevel)) {
                cm.sendOk("��ĵȼ�������Ҫ��!");
                cm.dispose();
            } else {
                if (cm.getEventCount("��������") > 3) {
                    cm.getChar().modifyCSPoints(1, -GetMeny);
                }
                cm.saveLocation("MULUNG_TC");
                cm.warp(910340000, 0);
                cm.dispose();
                // cm.sendSimple("- #e#d��߳������ս����#k#n:\r\n\r\n#b����������Ҫ" + GetMeny + "�ㄻһ��,ǰ�������,�����Ƿ����?��\r\n\r\n#L0#[ִ��]��ս����#l\r\n")
            }
            // if (cm.getPlayer().getMapId() != 910000000) { //��������ʼ��ͼ
            // cm.saveLocation("MULUNG_TC");
            // cm.warp(910340700, 0);
            // } 

            // else if (cm.getPlayer().getParty() == null) { //û�����
            //     cm.sendNext("����������Σ�գ�����һ���˵������С�\r\n#b������Ӻ��ٺ���̸������");
            // } else if (!cm.isLeader()) { //���Ƕӳ�
            //     cm.sendNext("�����ǵĴ���������˵����");
            // } else {
            //     var party = cm.getPlayer().getParty().getMembers();
            //     var mapId = cm.getPlayer().getMapId();
            //     var next = true;
            //     var levelValid = 0;
            //     var inMap = 0;
            //     var it = party.iterator();
            //     while (it.hasNext()) {
            //         var cPlayer = it.next();
            //         if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
            //             levelValid += 1;
            //         } else {
            //             next = false;
            //         }
            //         if (cPlayer.getMapid() == mapId) {
            //             inMap += 1;
            //         }
            //     }
            //     if (party.size() > maxPartySize || inMap < minPartySize) {
            //         next = false;
            //     }
            //     if (next) {
            //         var em = cm.getEventManager("KerningPQ");
            //         if (em == null) {
            //             cm.sendOk("���Ժ�����......");
            //         } else {
            //             var prop = em.getProperty("state");
            //             if (prop == null || prop.equals("0")) {
            //                 em.startInstance(cm.getParty(), cm.getMap(), 150);
            //             } else {
            //                 cm.sendOk("���Ե�...�������ڽ�����.");
            //             }
            //         }
            //     } else {
            //         cm.sendOk("����������ӵ���������2�����ϣ��޷�ִ�����������2�����ϡ����������ļ��Ա������ʹ��Ѱ����ӹ��ܡ�");
            //     }
            // }
            // cm.dispose();
        } else if (selection == 1) { //����Ѱ�Ҷ�Ա��
            status = -1;
            cm.sendNext("������Χ�ĺ���������ӡ�ͨ��Ѱ����ӣ���ݼ�O����������ʱ�ҵ��ʺ��Լ�����ӡ�ϣ�����ܲο�һ�¡�");
        } else if (selection == 2) { //��������˵����
            status = -1;
            cm.sendOk("�����ڵȴ��¸ҵ�ð�ռҡ��������Լ����������ǻۣ�һ���ƽ����⣬����ǿ���#r#o9300003##k��ͨ������ȡ�����������ȵ�ͨ��֤���͡��²���ȷλ�á����ʴ��#o9300003#�ͻ���֡�\r\n - #e�ȼ�#n��20������#r���Ƽ��ȼ���20��69 ��#k\r\n - #e����ʱ��#n��20����\r\n - #e�μ�����#n��2��4��\r\n - #e�����Ʒ#n��#i1072369:# #t1072369# #b��#o9300003#���䣩#k\r\n - #e�����Ʒ#n��#i1072533:# #t1072533# #b����15��#t4001531#������#k");
        } else if (selection == 3) { //������#t1072533#��
            status = -1;
            cm.sendNext("��Ҫ#i1072533:# #t1072533#�Ļ�����Ҫ#b15��#t4001531##k������#r��ˮ����#k�����Ի��#t4001531#��");
        } else if (selection == 4) { //����֪�������ʣ����ս������
            status = -1;
            cm.sendOk("����ʣ����ս����"+(7-cm.getEventCount("��������") )+"���Ρ�");
        }
    } else if (status == 2) {
        cm.dispose();
    }
}
