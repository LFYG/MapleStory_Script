var quantities = Array(10, 8, 6, 5, 4, 3, 2, 1, 1, 1);
var prize1 = Array(1442047, 2000000, 2000001, 2000002, 2000003, 2000004, 2000005, 2430036, 2430037, 2430038, 2430039, 2430040); //1 day
var prize2 = Array(1442047, 4080100, 4080001, 4080002, 4080003, 4080004, 4080005, 4080006, 4080007, 4080008, 4080009, 4080010, 4080011);
var prize3 = Array(1442047, 1442048, 2022070);
var prize4 = Array(1442048, 2430082, 2430072); //7 day
var prize5 = Array(1442048, 2430091, 2430092, 2430093, 2430101, 2430102); //10 day
var prize6 = Array(1442048, 1442050, 2430073, 2430074, 2430075, 2430076, 2430077); //15 day
var prize7 = Array(1442050, 3010183, 3010182, 3010053, 2430080); //20 day
var prize8 = Array(1442050, 3010178, 3010177, 3010075, 1442049, 2430053, 2430054, 2430055, 2430056, 2430103, 2430136); //30 day
var prize9 = Array(1442049, 3010123, 3010175, 3010170, 3010172, 3010173, 2430201, 2430228, 2430229); //60 day
var prize10 = Array(1442049, 3010172, 3010171, 3010169, 3010168, 3010161, 2430117, 2430118, 2430119, 2430120, 2430137); //1 year
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendNext("��ã�����#b#p" + cm.getNpc() + "##k���Ҹ��ܵ�#b���#kһ��������棬�ܵ�˵����һ�ബ���ģ���������������˺þ�Ҳû������������֣���ô��û���أ�");
        } else if (status == 1) {
            cm.sendNextPrev("������Ȼ��˫��̥�����ǳ�������ȥ��ĵط�����ô�죿�����Ҫ��ʼ������ �Ѿ��ܶ��˹�ȥ�ˡ�����û�м�������������");
        } else if (status == 2) {
            cm.sendSimple("�Ǹ���������������ڲ�æ�Ļ�������һ���ߣ���������ܵ�Ӧ�û������һ������\r\n#L0##e1.#n#b ʲô���Ļ?#k#l\r\n#L1##e2.#n#b �������˵��һ�¡�#k#l\r\n#L2##e3.#n#b �ã�����һ���߰ɣ�#k#l\r\n#L3##e4.#n#bPlease exchance Certificate of straight Win to reward item.#k#l");
        } else if (status == 3) {
            if (selection == 0) {
                cm.sendNext("�ǳ�����������������Ϊ��׼���������Ȥ�Ļ��������鿴�˵���Ա��˽�������Щ����ɹ���Ա�������ܽ��У����򽫲��ܽ���ר�õĻ��ͼ����Щ��Ǹ���������Щ��Ҫ�ŶӺ����������зḻ�Ľ�Ʒ�����㡣ף����ˣ�");
                cm.dispose();
            } else if (selection == 1) {
                cm.sendSimple("����׼�����ָ����Ļ�����˽���Ϸ��ɡ����˽����Ϸ����ѡ��~! #b\r\n#L0# ��¥��¥#l\r\n#L1# ��ߵ�#l\r\n#L2# ѩ����#l\r\n#L3# Ҭ�ӱ���#l\r\n#L4# ����OX�ʴ�#l\r\n#L5# Ѱ�ұ���#l\r\n#L6# Ⱥ������#l#k");
            } else if (selection == 2) {
                var marr = cm.getQuestRecord(160200);
                if (marr.getCustomData() == null) {
                    marr.setCustomData("0");
                }
                var dat = parseInt(marr.getCustomData());
                if (dat + 3600000 >= cm.getCurrentTime()) {
                    cm.sendNext("You've entered the event already in the past hour.");
                } else if (!cm.canHold()) {
                    cm.sendNext("Save up some space in your inventory.");
                } else if (cm.getChannelServer().getEvent() > -1 && !cm.haveItem(4031019)) {
                    cm.saveReturnLocation("EVENT");
                    cm.getPlayer().setChalkboard(null);
                    marr.setCustomData("" + cm.getCurrentTime());
                    cm.warp(cm.getChannelServer().getEvent(), cm.getChannelServer().getEvent() == 109080000 || cm.getChannelServer().getEvent() == 109080010 ? 0 : "join00");
                } else {
                    cm.sendNext("Either the event has not been started, you already have the #bScroll of Secrets#k, or you have already participated in this event within the last 24 hours. Please try again later!");
                }
                cm.dispose();
            } else if (selection == 3) {
                var selStr = "Which Certificate of straight Win do you wish to exchange?";
                for (var i = 0; i < quantities.length; i++) {
                    selStr += "\r\n#b#L" + i + "##t" + (4031332 + i) + "# Exchange(" + quantities[i] + ")#l";
                }
                cm.sendSimple(selStr);
                status = 9;
            }
        } else if (status == 4) {
            if (selection == 0) {
                cm.sendNext("#b[��¥��¥]��һ��������������Ϸ�ġ�#k�����ǣ��������Ӻ���������ڵ��У�ѡ������һ������������һ�׶��ƶ���\r\n\r\nһ����3���׶Σ�#rʱ��������6����#k����[��¥��¥]��Ϸ��#b����ʹ����Ծ�����ش󷨣��Ṧ������ٶȵ�ҩˮ�����ߵȡ�#k�����е���ڣ���ʹ����ƶ�����ط�������С�ĵ����");
                cm.dispose();
            } else if (selection == 1) {
                cm.sendNext("#b[��ߵ�]��һ���ϰ�������Ϸ��#k��������ĳ�˯ɭ�ֺ��̿����ֲ�ࡣֻҪ��ʱ������֮�ڣ��˷����е��ѹأ������յ㣬�ͻ�õ��ھ���\r\n\r\n��Ϸ��4���׶Ρ�#bʱ��������15����#k����[��ߵ�]��Ϸ�ﲻ��ʹ�����ش󷨺��Ṧ��");
                cm.dispose();
            } else if (selection == 2) {
                cm.sendNext("#b[ѩ����]#k�Ƿ�����������еı���#b��ѩ���͵���Զ�ط��ĶӾͻ�ʤ#k������ڹ涨ʱ����û�ж��鵽�յ㣬��ôѩ����������Զ�ĶӾͻ�ʤ��\r\n\r\n�ӽ�ѩ�����й���(Ĭ�ϣ�Ctrl��)ѩ��ͻ�����ǰ����Զ���빥�������еļ��ܹ�������Ч��ֻ�н����빥������Ч��\r\n\r\nҪ�ǽ�ɫ������Ӵ���ѩ�����ͱ��͵���㡣�������λ������ѩ�ˣ����Է����Է�ѩ���ǰ���������Ҫ�ú�����˭��ѩ��˭��ѩ�ˡ�");
                cm.dispose();
            } else if (selection == 3) {
                cm.sendNext("#b[Ҭ�ӱ���]#k�Ƿ�����������еı���#b�ڹ涨ʱ���ڻ�ȡҬ�����ĶӾͻ�ʤ#k����Ϸ��#rʱ��������5����#k�������һ�ν����ƽ�ֵĻ�����Ҫ����2���ӡ������û�зֳ�ʤ������������ƽ�ֽ�����\r\n\r\n����ʹ��Զ���빥���ͼ��ܹ�����ֻ��#r�����빥������Ч#k��Ҫ����û�н����빥���������������һ��ͼ���NPC���򡣲��ܽ�ɫ�ĵȼ������������๥������һ����\r\n\r\n��ͼ�ĺܶ�ط����ϰ�������塣�����ɫ�������ý�ɫ���뿪���ͼ��Ҭ�ӵ��µ�ʱ��������˾ͻ��Ҭ�ӡ�ֻ�е��µ�Ҭ�Ӳż�������������µĻ��ƻ��Ĳ����������ͼ�����������ص���ת�㡣��ú�ʹ�ðɡ�");
                cm.dispose();
            } else if (selection == 4) {
                cm.sendNext("#b[����OX�ʴ�]#k���ж�����Ĵ𰸶Դ����Ϸ���μ���Ϸ�󣬰�M�����Դ�С��ͼ���鿴O��X��λ�á�����������⼴�ɻ�ʤ��\r\n\r\n�Ķ�������������ӵ����Լ���Ϊ����ȷ�𰸵�λ�á��������޶�ʱ��������ѡ�����δѡ����ȷ�𰸣��������������ϣ��ڼǷ�ʱ���Զ���ʧ�ܴ�����һ��Ҫ�ڻ����ϵ�[�ش���ȷ]��ʧ֮���ٽ����ƶ���");
                cm.dispose();
            } else if (selection == 5) {
                cm.sendNext("#b[Ѱ�ұ���]#k��Ϸ����10����֮�ڴ������ҵ����ص�#b�����ļ�#k�����ﴦ�������صı����䡣�������ӻᱬ���������ĵ��ߣ�������Ҫ���Ǳ����ļ���\r\n\r\n�������ʱ��ֻ����һ�㹥�����ҵ������ļ��󽻸�NPC�����ỻ�����ħ���ᡣ��NPC�������У������Ը�⣬������۵�#b[����]#kҲ���Խ�����\r\n\r\n�������Ϸ����ںܶ����ܴ��͵㡣����ĳ���ط�ͣ�£�����#b����#k�Ϳ��Ե���һ���ط���Ҳ�������ݺ����ӣ���ȻʲôҲ����������ȥ���԰ɡ����еı������������ƶ�����ĵط�����������Է��ָ���ı����䡣\r\n\r\n��ע����Ѱ�ұ������Ϸ�ﲻ��ʹ�ü��ܡ�");
                cm.dispose();
            } else if (selection == 6) {
                cm.sendNext("#b[Ⱥ������]#k��Ϸ�Ƿ�Ϊ����Ӫ������Ӫ�����޶�ʱ���ڿ�ʣ������˭��˭�ٵ���Ϸ��");
                cm.dispose();
            }
        } else if (status == 10) {
            if (selection < 0 || selection > quantities.length) {
                return;
            }
            var ite = 4031332 + selection;
            var quan = quantities[selection];
            var pri;
            switch (selection) {
            case 0:
                pri = prize1;
                break;
            case 1:
                pri = prize2;
                break;
            case 2:
                pri = prize3;
                break;
            case 3:
                pri = prize4;
                break;
            case 4:
                pri = prize5;
                break;
            case 5:
                pri = prize6;
                break;
            case 6:
                pri = prize7;
                break;
            case 7:
                pri = prize8;
                break;
            case 8:
                pri = prize9;
                break;
            case 9:
                pri = prize10;
                break;
            default:
                cm.dispose();
                return;
            }
            var rand = java.lang.Math.floor(java.lang.Math.random() * pri.length);
            if (!cm.haveItem(ite, quan)) {
                cm.sendOk("You need #b" + quan + " #t" + ite + "##k to exchange it with item.");
            } else if (cm.getInventory(1).getNextFreeSlot() <= -1 || cm.getInventory(2).getNextFreeSlot() <= -1 || cm.getInventory(3).getNextFreeSlot() <= -1 || cm.getInventory(4).getNextFreeSlot() <= -1) {
                cm.sendOk("You need space for this item.");
            } else {
                cm.gainItem(pri[rand], 1);
                cm.gainItem(ite, -quan);
                cm.gainMeso(100000 * selection); //temporary prize lolol
            }
            cm.dispose();
        }
    }
}