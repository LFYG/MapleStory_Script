var status = 0;
var selStr;
var sel;
var selitem;
var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var bbb = "#fUI/UIWindow.img/Shop/meso#";
var vvv = "#fUI/UIWindow2.img/ValuePack/button/complete/0#"; //��ȡ���
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
        if (cm.getChar().getMapId() == 744000000) {
            selStr = "���ٵ�ʲô��ȥ��ս��֮��У��#k.#b\r\n";
			//selStr += "����Ҫ��1.ת����������ﵽ30��(Vip6����Ҫ).\r\n";
			//selStr += "����Ҫ��2.Vip3~Vip5ÿ���ܽ���2��,Vip6ÿ���ܽ���4��.#k\r\n";
			selStr += "������Ѿ����룺 #r" + cm.getBossLog("��У") + "#k ��\r\n";
			//selStr += "��Ŀǰת���� #r" + cm.getChar().getReborns() + "#k ��\r\n";
            //selStr += "#L2#" + aaa + " ʲô�Ǿ�����ʲô�Ƿ�Ҷ��У#l\r\n";
			selStr += "#L1#" + aaa + " #r �����У#k#l\r\n";
			//selStr += "#L3#" + aaa + "  #rʹ��2000ʥ���ҽ����֮��У�������ƣ�#l#k\r\n";
			//selStr += "#L777#" + aaa + "  #rʹ��������Ʊ�����֮��У�������ƣ�#l#k\r\n";
			//selStr += "#L2#" + aaa + "  ʲô�Ƿ�֮��У#l\r\n";

            
            cm.sendSimple(selStr);
        } else {
            cm.dispose();
            cm.openNpc(9330192, 1);
        }
    } else if (status == 1) {
        sel = selection;
        if (sel == 1) {
            //if (cm.haveItem(5252017)) {
                var em = cm.getEventManager("fzgx");
                if (em == null) {
                    cm.sendOk("��������,����ϵ����Ա!");
                } else {
					if(cm.getBossLog("��У") >= 5){
						cm.sendOk("ÿ��ֻ����5�ο�Ŷ����Ȼ�������ģ�");
						cm.dispose();
						return;
					}
                    var prop = em.getProperty("started");
                    if (prop == null || prop.equals("false")) { //prop.equals("false") || 
                        em.startInstance_CharID(cm.getPlayer());
                        cm.resetBossLog("haogan" + 744000001);
                        cm.resetBossLog("haogandt");
                        for (var i = 4; i <= 15; i++) {
                            cm.resetBossLog("haogan" + (744000000 + i));
                        }
                        //cm.gainItem(5252017, -1);
						cm.setBossLog("��У");
                        //cm.laba(-3,cm.getChar().getName()+" began to challenge HighSchool in "+cm.getC().getChannel()+" channel.");
                        cm.worldSpouseMessage(0x15,"����֮��У��: ���<" + cm.getChar().getName() + ">��Ѫ���ڵĽ����˷�֮��У");
						//cm.startTimeByStudy(cm.getChar());
                    } else {
                        cm.sendOk("���Ƶ���Ѿ���������ս�ˣ���Ȼ��");
                    }
                }
            //} else {
                //cm.sendOk("��û��#z5252017#");
            //}
            cm.dispose();
        }
        if (sel == 2) {//#r#e<����>#n#k\r\nÿ���ڻ�Ա�������棨�г�3���ſڵ�NPC��ȡ��Ա���ʣ�ÿ�첻ͬ��Ա�ȼ���ȡ�ľ���ֵ��һ���������뿴�г�������С�㾫������\r\n
            cm.sendOk("#r#e<��֮��У>#k#n\r\n��Ϊ12�أ��͹ٷ�����һ�����еĹؿ���ɺ���Ҫ�ȴ�1-2���ӣ��ȵ�ʱ��ȫ��������\r\nÿͨ��һ�ض�����4�ֲ�ͬ�Ľ�����#r��Ʊ�����������˱ң��ʺ��Ҷ#k����ѡ��\r\n#r#z4310023##k������4�����������任ȡ�������ӣ�����ҩˮ����װ��\r\nͨ��12�ػ����Ի��һ��130������������������150-300��<������ְҵ�������Ѽ���>");
            cm.dispose();
        }
		if (sel == 777) {
                var em = cm.getEventManager("Gxfb");
                if (em == null) {
                    cm.sendOk("��������,����ϵ����Ա!");
                } else {
					if (!cm.haveItem(4033235,1)) {
				cm.sendOk("��Ǹ����û��������Ʊ#v4033235#!");
                cm.dispose();
                return;
                }
					cm.gainItem(4033235,-1);
					cm.playerMessage(1, "         ������һ��������Ʊ");
                    var prop = em.getProperty("started");
                    if (prop == null || prop.equals("false")) { //prop.equals("false") || 
                        em.startInstance_CharID(cm.getPlayer());
                        cm.resetBossLog("haogan" + 744000001);
                        cm.resetBossLog("haogandt");
                        for (var i = 4; i <= 15; i++) {
                            cm.resetBossLog("haogan" + (744000000 + i));
                        }
                       // cm.gainItem(5252017, -1);
						//cm.setBossLog("��У");
                        //cm.laba(-3,cm.getChar().getName()+" began to challenge HighSchool in "+cm.getC().getChannel()+" channel.");
                        cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x09, cm.getC().getChannel(), "����֮��У��" + " : " + "���<" + cm.getChar().getName() + ">��ʥ������Ѫ���ڵĽ����˷�֮��У"));
						cm.startTimeByStudy(cm.getChar());
                    } else {
                        cm.sendOk("���Ƶ���Ѿ���������ս�ˣ���Ȼ��");
                    }
                }
            cm.dispose();
			}
        if (sel == 3) {
                var em = cm.getEventManager("Gxfb");
                if (em == null) {
                    cm.sendOk("��������,����ϵ����Ա!");
                } else {
					if (cm.getHyPay(1) <= 2000) {
					cm.sendOk("�Բ�����û��2000ʥ�����޷�����.");
					cm.dispose();
					return;
					}
					cm.addHyPay(2000,true);
					cm.playerMessage(1, "         ������2000ʥ����          ʣ��:" + cm.getHyPay(1) + "ʥ����");
                    var prop = em.getProperty("started");
                    if (prop == null || prop.equals("false")) { //prop.equals("false") || 
                        em.startInstance_CharID(cm.getPlayer());
                        cm.resetBossLog("haogan" + 744000001);
                        cm.resetBossLog("haogandt");
                        for (var i = 4; i <= 15; i++) {
                            cm.resetBossLog("haogan" + (744000000 + i));
                        }
                       // cm.gainItem(5252017, -1);
						//cm.setBossLog("��У");
                        //cm.laba(-3,cm.getChar().getName()+" began to challenge HighSchool in "+cm.getC().getChannel()+" channel.");
                        cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x09, cm.getC().getChannel(), "����֮��У��" + " : " + "���<" + cm.getChar().getName() + ">��ʥ������Ѫ���ڵĽ����˷�֮��У"));
						cm.startTimeByStudy(cm.getChar());
                    } else {
                        cm.sendOk("���Ƶ���Ѿ���������ս�ˣ���Ȼ��");
                    }
                }
            cm.dispose();
			}
        cm.dispose();
    }
}
