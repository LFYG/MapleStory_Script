importPackage(net.sf.odinms.server.maps);

var belts = Array(1132000, 1132001, 1132002, 1132003, 1132004);
var belt_level = Array(25, 35, 45, 60, 75);
var belt_points = Array(200, 1800, 4000, 9200, 17000);

var status = -1;
var selectedMenu = -1;

function start() {
    if (isRestingSpot(cm.getPlayer().getMap().getId())) {
        cm.sendSimple("�Һܾ��������ߵ�������ǣ������￪ʼ,����Ļ���ѡ��㻹��Ҫ��ս?\r\n\r\n#b#L0#������һ����ս#l\r\n#L1#�����뿪#l\r\n#L2#����������������¼,��һ����ս�������￪ʼ#l");
    } else if (cm.getPlayer().getLevel() >= 25) {
        if (cm.getPlayer().getMap().getId() == 925020001) {
            cm.sendSimple("ʦ��������ĵ�һǿ�ߡ��������ּһ�Ҳ����ս������ڵģ�\r\n#b#L0#������ս#l\r\n#L1#�Ŷ���ս#l\r\n#L2#��ȡ����#l\r\n#L3#���ʼ����������#l\r\n#L5#���������ʲô��#l");
        } else {
            cm.sendYesNo("ʲô����Ҫ���������ϧ���˳��Ļ���Ҫ���¿�ʼ�ˡ��Ƿ���ķ������˳���");
        }
    } else {
        cm.sendOk("ʲô������Ϊ����˭���㳰Ц�ҵ����ˣ����ֱ��һ��Ц������������Ҫ #b25#k ���ſ�����ս��");
        cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else if (cm.getPlayer().getMap().getId() == 925020001) {
        if (mode >= 0) {
            if (status == -1)
                selectedMenu = selection;
            status++; //there is no prev.
            if (selectedMenu == 0) { //I want to challenge him alone.
                if (!cm.getPlayer().hasEntered("dojang_Msg") && !cm.getPlayer().getFinishedDojoTutorial()) { //kind of hackish...
                    if (status == 0) {
                        cm.sendYesNo("�����㣡�����㣡����Ӧ��������˰ɡ�����ʦ���ɲ�������û�µ��ˣ�ĬĬ���������ǲ��ܼ���ġ���������ĳ����������Ը��Ѵ´������ˡ�ֻҪ����Ҿ͸�����սʦ���Ļ��ᣡ��Σ��������Ԥ��Ľ���ǡ�");
                    } else if (status == 1) {
                        if (mode == 0) {
                            cm.sendNext("��������һȭ�ͱ������ļһ�Ҳ����ս���ǣ���ȥ���������ɣ�");
                        } else {
                            for (var i = 0 ; i < 39; i++) { //only 32 stages, but 38 maps
                                if(cm.getC().getChannelServer().getMapFactory().getMap(925020000 + 100 * i).getCharacters().size() > 0) {
                                    cm.sendOk("�����Ѿ��ڵ�����ս�������Ƶ����ս��");
                                    cm.dispose();
                                    return;
                                }
                            }
                            cm.warp(925020010, 0);
                            cm.getPlayer().setFinishedDojoTutorial();
                        }
                        cm.dispose();
                    }
                } else if (cm.getPlayer().getDojoStage() > 0) {
                    if (status == 0) {
                        cm.sendYesNo("������һ����ս��,������һ����¼�㡣���ܰ��������������ھ�Ҫȥ��?");
                    } else {
                        cm.warp(mode == 1 ? cm.getPlayer().getDojoStage() : 925020100, 0);
                        cm.getPlayer().setDojoStage(0);
                        cm.dispose();
                    }
                } else {
                    cm.getC().getChannelServer().getMapFactory().getMap(925020100).resetReactors();
                    cm.getC().getChannelServer().getMapFactory().getMap(925020100).killAllMonsters();
                    cm.warp(925020100, 0);
                    cm.dispose();
                }
            } else if (selectedMenu == 1) { //I want to challenge him with a party.
                var party = cm.getPlayer().getParty();
                if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendNext("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                    cm.dispose();
                } else if (party.getMembers().size() == 1) {
                    cm.sendNext("�Լ�Ҫ����ӵ�ģʽ��ս��");
                } else {
                    cm.getC().getChannelServer().getMapFactory().getMap(925020100).resetReactors();
                    cm.getC().getChannelServer().getMapFactory().getMap(925020100).killAllMonsters();
                    cm.warpParty(925020100);
                    cm.dispose();
                }
                cm.dispose();
            } else if (selectedMenu == 2) { //I want to receive a belt.
                if (mode < 1) {
                    cm.dispose();
                    return;
                }
                if (status == 0) {
                    var selStr = "�����������Ϊ #b" + cm.getPlayer().getDojoPoints() + "#k ʦ��ϲ���в��ܵ��ˡ������һ���������������Ϳ��Ը���������������ȡ������\r\n";
                    for (var i = 0; i < belts.length; i++)
                        selStr += "\r\n#L" + i + "##i" + belts[i] + "# #t" + belts[i] + "#l";
                    cm.sendSimple(selStr);
                } else if (status == 1) {
                    var belt = belts[selection];
                    var level = belt_level[selection];
                    var points = belt_points[selection];
                    if (cm.getPlayer().getDojoPoints() > points) {
                        if (cm.getPlayer().getLevel() > level)
                            if (cm.haveItem(belt) && !cm.haveItem(1132004)) {
                                cm.sendNext("���Ѿ������������ˡ����������Ļ��ֺ�����ս��ȡ��");
                            } else {
                                cm.gainItem(belt, 1);
                                cm.sendOk("��ȡ�ɹ�!");
                            }
                        else
                            cm.sendNext("��Ҫ��ȡ #i" + belt + "# #b#t" + belt + "##k, ���ĵȼ�����ﵽ #b" + level + "#k ��, ��������Ҫ�õ��������� #b" + points + " ��#k.\r\n\r\n������뻻��������,������Ҫ�������� #r" + points + "#k ��.");
                    } else
                        cm.sendNext("Ϊ�˵õ� #i" + belt + "# #b#t" + belt + "##k, ��ĵȼ�����ﵽ #b" + level + "#k a��, ��������Ҫ�õ��������� #b" + points + " �� #k.\r\n\r\n������뻻��������,������Ҫ�������� #r" + points + "#k ��.");
                    cm.dispose();
                }
            } else if (selectedMenu == 3) { //I want to reset my training points.
                if (status == 0) {
                    cm.sendYesNo("ѵ����������ʼ������Ϊ0��ม���������Ӧ�����ף�����δ�ز��á�ѵ����������ʼ��ʱ֮ǰ�ļ�¼��ɾ�����㻹��ӵ�����������ʰ�ѵ������Ҫ��ʼ����");
                } else if (status == 1) {
                    if (mode == 0) {
                        cm.sendNext("���������������Ŀ������");
                    } else {
                        cm.getPlayer().setDojoPoints(0);
                        cm.sendNext("�����ɹ���ѵ�������Ѿ��ɹ���ʼ������ô��ʼ�µ�ѵ���ɣ�");
                    }
                    cm.dispose();
                }
            } else if (selectedMenu == 4) { //I want to receive a medal.
                if (status == 0) {
                    cm.sendYesNo("You haven't attempted the medal yet? If you defeat one type of monster in Mu Lung Dojo #b100 times#k you can receive a title called #bxx Vanquisher#k. It looks like you haven't even earned the #b#t1142033##k... Do you want to try out for the #b#t1142033##k?");
                } else if (status == 1) {
                    if (mode == 0) {
                        cm.sendNext("If you don't want to, that's fine.");
                        cm.dispose();
                    } else {
                        if (cm.c.getPlayer().getDojoStage() > 37) {
                            cm.sendNext("You have complete all medals challenges.");
                        } else if (cm.getPlayer().getVanquisherKills() < 100)
                            cm.sendNext("You still need #b" + (100 - getVanquisherStage()) + "#k in order to obtain the #b#t" + (1142033 + cm.getPlayer().getVanquisherStage()) + "##k. Please try a little harder. As a reminder, only the mosnters that have been summoned by our Master in Mu Lung Dojo are considered. Oh, and make sure you're not hunting the monsters and exiting!#r If you don't go to the next level after defeating the monster, it doesn't count as a win#k.");
                        else {
                            cm.sendNext("You have obtained #b#t" + (1142033 + cm.getPlayer().getVanquisherStage()) + "##k.");
                            cm.gainItem(1142033 + cm.getPlayer().getVanquisherStage(), 1);
                            cm.getPlayer().setVanquisherStage(cm.c.getPlayer().getVanquisherStage() + 1);
                            cm.getPlayer().setVanquisherKills(0);
                        }
                    }
                    cm.dispose();
                }
            } else if (selectedMenu == 5) { //What is a Mu Lung Dojo?
                cm.sendNext("�ҵ�ʦ������������ǿ��һλ���������ӡ��ֻ���ڴ�����ط���������������������Լ38¥֮�ߵĽ�����������������ͬʱҲ������ѵ��ָ������Ȼ�����ʵ��ȥ��������Щ���ѡ�");
                cm.dispose();
            }
        } else
            cm.dispose();
    } else if (isRestingSpot(cm.getPlayer().getMap().getId())) {
        if (selectedMenu == -1)
            selectedMenu = selection;
        status++;
        if (selectedMenu == 0) {
            cm.warp(cm.getPlayer().getMap().getId() + 100, 0);
            cm.dispose();
        } else if (selectedMenu == 1) { //I want to leave
            if (status == 0) {
                cm.sendAcceptDecline("֪�Ѷ����˰�!�ǲ���������뿪����?");
            } else {
                if (mode == 1) {
                    cm.warp(925020000);
                } else {//probably insult the user
					
                }
                cm.dispose();
            }
        } else if (selectedMenu == 2) { //I want to record my score up to this point
            if (status == 0) {
                cm.sendYesNo("�����������������¼�����´�����ս���Դ����￪ʼ���ⲻ�Ǻܷ����������¼��Ŀǰλ����?");
            } else {
                if (mode == 0) {
                    cm.sendNext("����Ϊ�����ȥ�����ߵĵط���ף����!");
                } else {
                    cm.sendNext("���Ѱ����λ�����˼�¼����һ��������ս��ʱ����Ϳ��Դ����￪ʼ.");
                    cm.getPlayer().setDojoStage(cm.getPlayer().getMap().getId());
                }
                cm.dispose();
            }
        }
    } else {
        if (mode < 1) {
            cm.sendNext("ֹͣ����뷨�ɣ�����֮�����ڵģ����������ȥ.");
        } else {
            cm.warp(925020001, 0);
        }
        cm.dispose();
    }
}

function isRestingSpot(id) {
    return (id / 100 - 9250200) % 6 == 0;
}
