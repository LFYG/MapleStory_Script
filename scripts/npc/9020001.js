/* 
 * ��³�� NPC (9020001)
 */
importPackage(java.awt);

var minLevel = 1;//��С�ȼ�
var maxLevel = 200;//���ȼ�
var minPartySize = 1;//��������
var maxPartySize = 6;//�������

var nitem = 4001126;//����ͨ����Ҫ�� ��Ʒ
var jitem = 1;//����ͨ����Ҫ�� ��Ʒ������

var status;
var curMap;
var playerStatus;
var chatState;
var questions = Array("��һ�����⣺תְ��սʿ����͵ȼ��Ƕ��٣�#b\r\n���򵹹����ȡ��Ӧ������֤�顣��", "��һ�����⣺תְ��սʿ���������ֵ��SEX���Ƕ��٣�#b\r\n���򵹹����ȡ��Ӧ������֤�顣��", "��һ�����⣺תְ��ħ��ʦ���������ֵ��INT���Ƕ��٣�#b\r\n���򵹹����ȡ��Ӧ������֤�顣��", "��һ�����⣺תְ�ɹ����ֵ��������ֵ��DEX���Ƕ��٣�#b\r\n���򵹹����ȡ��Ӧ������֤�顣��", "��һ�����⣺תְ�ɷ������������ֵ��DEX���Ƕ��٣�#b\r\n���򵹹����ȡ��Ӧ������֤�顣��", "��һ�����⣺�ȼ�1 �����ȼ�2 ����ľ���ֵ�Ƕ��٣�#b\r\n���򵹹����ȡ��Ӧ������֤�顣��", "��һ�����⣺תְ��ħ��ʦ����͵ȼ��Ƕ��٣�#b\r\n���򵹹����ȡ��Ӧ������֤�顣");
var qanswers = Array(10, 35, 20, 25, 25, 30);
var party;
var preamble;
var stage2combos = Array(Array(0, 0, 1, 1), Array(1, 0, 0, 1), Array(1, 1, 0, 0), Array(1, 0, 1, 0), Array(0, 1, 0, 1), Array(0, 1, 1, 0));
var stage3combos = Array(Array(1, 1, 0, 0, 0), Array(1, 0, 1, 0, 0), Array(1, 0, 0, 1, 0), Array(1, 0, 0, 0, 1), Array(0, 1, 1, 0, 0), Array(0, 1, 0, 1, 0), Array(0, 1, 0, 0, 1), Array(0, 0, 1, 0, 1), Array(0, 0, 1, 1, 0), Array(0, 0, 0, 1, 1));
var prizeIdScroll = Array(2040502, 2040505, // Overall DEX and DEF
2040802, // Gloves for DEX
2040002, 2040402, 2040602); // Helmet, Topwear and Bottomwear for DEF
var prizeIdUse = Array(2000001, 2000002, 2000003, 2000006, // Orange, White and Blue Potions and Mana Elixir
2000004, 2022000, 2022003); // Elixir, Pure Water and Unagi
var prizeQtyUse = Array(80, 80, 80, 50, 5, 15, 15);
var prizeIdEquip = Array(1032004, 1032005, 1032009, // Level 20-25 Earrings
1032006, 1032007, 1032010, // Level 30 Earrings
1032002, // Level 35 Earring
1002026, 1002089, 1002090); // Bamboo Hats
var prizeIdEtc = Array(4010000, 4010001, 4010002, 4010003, // Mineral Ores
4010004, 4010005, 4010006, // Mineral Ores
4020000, 4020001, 4020002, 4020003, // Jewel Ores
4020004, 4020005, 4020006, // Jewel Ores
4020007, 4020008, 4003000); // Diamond and Black Crystal Ores and Screws
var prizeQtyEtc = Array(15, 15, 15, 15, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 3, 30);

function start() {
    status = -1;
    mapId = cm.getMapId();
    if (mapId == 910340100) {
        curMap = 1;
    } else if (mapId == 910340200) {
        curMap = 2;
    } else if (mapId == 910340300) {
        curMap = 3;
    } else if (mapId == 910340400) {
        curMap = 4;
    } else if (mapId == 910340500) {
        curMap = 5;
    }
    playerStatus = cm.isLeader();
    preamble = null;
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
    if (curMap == 1) { // First Stage.
        if (playerStatus) { // Check if player is leader
            if (status == 0) {
                var eim = cm.getEventInstance();
                party = eim.getPlayers();
                preamble = eim.getProperty("leader1stpreamble");

                if (preamble == null) {
                    cm.sendNext("��ã���ӭ������һ���׶Σ�����������ܻῼ���ܶ��׺ݵ����㣬���ҶԻ����һ������ÿһ���˳�һ����Ŀ�������ٴ��׺ݵ������ȡ��Ӧ��Ŀ��֤�鿨�����ң������ˡ�֮���һ������һ��ͨ��֤�����ǰ�ͨ��֤ȫ��������ӳ�����ӳ��ٺ��ҽ������Ϳ���˳��ͨ���ˣ���ôף��һ��˳����");
                    eim.setProperty("leader1stpreamble", "done");
                    cm.dispose();
                } else { // Check how many they have compared to number of party members
                    // Check for stage completed
                    var complete = eim.getProperty(curMap.toString() + "stageclear");
                    if (complete != null) {
                        cm.sendNext("���ڿ��Ե���һ���ؿ��ˣ���������Ļ����ſ��ܾ͹ر��ˡ�");
                        cm.dispose();
                    } else {
                        var numpasses = party.size() - 1;
                        var strpasses = "#b" + numpasses.toString() + " passes#k";
                        if (!cm.haveItem(4001008, numpasses)) {
                            cm.sendNext("�Բ������ռ���ͨ��֤����û�дﵽ��������ġ�");
                            cm.dispose();
                        } else {
                            cm.sendNext("����������������Ѿ��ɹ�����˵�һ�׶Ρ����ˣ��ҽ�����ͨ����һ���ؿ��Ľ�磬ʱ�䲻���ˣ����ǸϿ쵽������еڶ��׶ε���ս�ɡ�");
                            clear(1, eim, cm);
                            cm.givePartyExp(100, party);
                            cm.gainItem(4001008, -numpasses);
                            cm.dispose();
                            // TODO: Make the shiny thing flash
                        }
                    }
                }
            }
        } else { // Not leader
            var eim = cm.getChar().getEventInstance();
            pstring = "member1stpreamble" + cm.getChar().getId().toString();
            preamble = eim.getProperty(pstring);
            if (status == 0 && preamble == null) {
                var qstring = "member1st" + cm.getChar().getId().toString();
                var question = eim.getProperty(qstring);
                if (question == null) {
                    // Select a random question to ask the player.
                    var questionNum = Math.floor(Math.random() * questions.length);
                    eim.setProperty(qstring, questionNum.toString());
                }
                cm.sendNext("���ˣ�����Ҫ�ռ�#b��Ӧ��Ŀ#k��֤����ҡ�");
            } else if (status == 0) { // Otherwise, check for stage completed
                var complete = eim.getProperty(curMap.toString() + "stageclear");
                if (complete != null) {
                    cm.sendNext("���ڿ��Ե���һ���ؿ��ˣ���������Ļ����ſ��ܾ͹ر��ˡ�");
                    cm.dispose();
                } else {
                    // Reply to player correct/incorrect response to the question they have been asked
                    var qstring = "member1st" + cm.getChar().getId().toString();
                    var numcoupons = qanswers[parseInt(eim.getProperty(qstring))];
                    var qcorr = cm.haveItem(4001007, (numcoupons + 1));
                    var enough = false;
                    if (!qcorr) { // Not too many
                        qcorr = cm.haveItem(4001007, numcoupons);
                        if (qcorr) { // Just right
                            cm.sendNext("ף���㣬���Ѿ�������ͨ��֤�����ͨ��֤�����ӳ�֮�󣬰����������Ѱɣ�");
                            cm.gainItem(4001007, -numcoupons);
                            cm.gainItem(4001008, 1);
                            enough = true;
                        }
                    }
                    if (!enough) {
                        cm.sendNext("����ҵ�֤�������ʹ𰸲���Ӧ����������ǣ�\r\n" + questions[thequestion] + " ");
                    }
                    cm.dispose();
                }
            } else if (status == 1) {
                if (preamble == null) {
                    var qstring = "member1st" + cm.getChar().getId().toString();
                    var question = parseInt(eim.getProperty(qstring));
                    cm.sendNextPrev(questions[question]);
                } else { // Shouldn't happen, if it does then just dispose
                    cm.dispose();
                }
            } else if (status == 2) { // Preamble completed
                eim.setProperty(pstring, "done");
                cm.dispose();
            } else { // Shouldn't happen, but still...
                eim.setProperty(pstring, "done"); // Just to be sure
                cm.dispose();
            }
        } // End first map scripts
    } else if (2 <= curMap && 3 >= curMap) {
        rectanglestages(cm);
    } else if (curMap == 4) {
        var eim = cm.getChar().getEventInstance();
        var stage5done = eim.getProperty("4stageclear");
        if (stage5done == null) {
            if (playerStatus) { // Leader
                var passes = cm.getMap().getAllMonstersThreadsafe().size() == 0;
                if (passes) {
                    // Clear stage
                    cm.sendNext("�������ͨ�����ĸ��ؿ��������кܶ����͵Ĺ��������ף�������������ͨ��������ս��");
                    party = eim.getPlayers();
                    clear(4, eim, cm);
                    cm.givePartyExp(700, party);
                    cm.dispose();
                } else { // Not done yet
                    cm.sendNext("��ã���ӭ������4�׶Σ��������ߣ����ܻᷢ�ֺܶ����͵Ĺ��������ǣ���ȡͨ��֤13�ţ��ٰ����ǽ����ҡ���ס��������ܱ���ǿ��ܶ࣬��С��һ�㣬ף��ͨ����һ�ء�");
                }
                cm.dispose();
            } else { // Members
                cm.sendNext("��ӭ������4�׶Σ��ڵ�ͼ�����ߣ���ͻῴ��������͵Ĺ��������ǻ�ȡ�������ϵ�ͨ��֤13�ţ��������ǵ���ӳ���");
                cm.dispose();
            }
        } else { // Give rewards and warp to bonus
            cm.sendNext("���ڿ��Ե���һ���ؿ��ˣ���������Ļ����ſ��ܾ͹ر��ˡ�");
            cm.dispose();
        }
    } else if (curMap == 5) { // Final stage
        var eim = cm.getChar().getEventInstance();
        if (eim == null) {
            cm.dispose();
            return;
        }
        var stage5done = eim.getProperty("5stageclear");
        if (stage5done == null) {
            if (playerStatus) { // Leader
                var passes = cm.haveItem(4001008, 1);
                if (passes) {
                    // Clear stage
                    cm.sendNext("�������ţ����������Ա�����������������ս���������ҶԻ������Ը�����ȡ������");
                    party = eim.getPlayers();
                    cm.gainItem(4001008, -1);
                    clear(5, eim, cm);
                    cm.addPartyTrait("will", 8);
                    cm.dispose();
                } else { // Not done yet
                    cm.sendNext("��ã���ӭ������5�׶Σ��������ߣ����ܻᷢ�ֺܶ����͵Ĺ��������ǣ���ȡͨ��֤���ٰ����ǽ����ҡ���ס��������ܱ���ǿ��ܶ࣬��С��һ�㣬ף��ͨ����һ�ء�");
                }
                cm.dispose();
            } else { // Members
                cm.sendNext("��ӭ������5�׶Σ��ڵ�ͼ�����ߣ���ͻῴ��������͵Ĺ��������ǻ�ȡ�������ϵ�ͨ��֤���������ǵ���ӳ���");
                cm.dispose();
            }
        } else { // Give rewards and warp to bonus
            if (status == 0) {
                cm.sendNext("�������ţ���ͨ�������н׶ν�������һ�㡣������һ��С��Ϊ�������ĳ�ɫ���������������������ǣ���ȷ������ʹ�õ���Ʒ��Ҫ�пո� \r\n#b�㽫�޷��յ���Ʒ���������û�пո�!#k");
            }
            if (status == 1) {
                getPrize(eim, cm);
                cm.dispose();
            }
        }
    } else { // No map found
        cm.sendNext("����");
        cm.dispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty(stage.toString() + "stageclear", "true");

    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");

    var mf = eim.getMapFactory();
    map = mf.getMap(910340100 + (stage * 100));
    var nextStage = eim.getMapFactory().getMap(910340100 + (stage * 100));
    var portal = nextStage.getPortal("next00");
    if (portal != null) {
        portal.setScriptName("kpq" + (stage + 1).toString());
    }
}

function failstage(eim, cm) {
    cm.showEffect(true, "quest/party/wrong_kor");
    cm.playSound(true, "Party1/Failed");
}

function rectanglestages(cm) {
    // Debug makes these stages clear without being correct
    var eim = cm.getChar().getEventInstance();
    if (curMap == 2) {
        var nthtext = "2nd";
        var nthobj = "ropes";
        var nthverb = "hang";
        var nthpos = "hang on the ropes too low";
        var curcombo = stage2combos;
        var objset = [0, 0, 0, 0];
    } else if (curMap == 3) {
        var nthtext = "3rd";
        var nthobj = "platforms";
        var nthverb = "stand";
        var nthpos = "stand too close to the edges";
        var curcombo = stage3combos;
        var objset = [0, 0, 0, 0, 0];
    }

    if (playerStatus) { // Check if player is leader


        if (status == 0) {

            // Check for preamble

                    var party = cm.getParty().getMembers();
                    var mapId = cm.getPlayer().getMapId();
                    var next = true;
                    var levelValid = 0;
                    var inMap = 0;
                    var it = party.iterator();
                    while (it.hasNext()) {
                        var cPlayer = it.next();
                        if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
                            levelValid += 1;
                        } else {
                            next = false;
                        }
                        if (cPlayer.getMapid() == mapId) {
                            inMap += 1;
                        }
                    }

                  if (inMap >= 2) {


            party = eim.getPlayers();
            preamble = eim.getProperty("leader" + nthtext + "preamble");


            if (preamble == null) {
                cm.sendNext("��ӭ������ " + nthtext + " �ؿ��� �����Ա�����ܻῴ���ܶ����ӣ���������ӳ�Ա�������ӣ��ҵ���ȷ��λ�ã��Ϳ���ͨ���˹ؿ���");
                eim.setProperty("leader" + nthtext + "preamble", "done");
                var sequenceNum = Math.floor(Math.random() * curcombo.length);
                eim.setProperty("stage" + nthtext + "combo", sequenceNum.toString());
                cm.dispose();
            } else {
                // Otherwise, check for stage completed
                var complete = eim.getProperty(curMap.toString() + "stageclear");
                if (complete != null) {
                    var mapClear = curMap.toString() + "stageclear";
                    eim.setProperty(mapClear, "true"); // Just to be sure
                    cm.sendNext("ͨ����һ�ص����Ѿ��򿪣��Ұ����͵���һ�ذɣ�");

                } else { // Check for people on ropes and their positions

                    var totplayers = 0;
                    for (i = 0; i < objset.length; i++) {
                        var present = cm.getMap().getNumPlayersItemsInArea(i);
                        if (present != 0) {
                            objset[i] = objset[i] + 1;
                            totplayers = totplayers + 1;
                        }
                    }

                    // Compare to correct positions
                    // First, are there 3 players on the correct positions?

                    if (totplayers == 2) {

                        var combo = curcombo[parseInt(eim.getProperty("stage" + nthtext + "combo"))];

                        // Debug
                        // Combo = curtestcombo;

                        var testcombo = true;
                        for (i = 0; i < objset.length; i++) {
                            if (combo[i] != objset[i]) testcombo = false;
                        }


                        if (testcombo) {
                            // Do clear
                            clear(curMap, eim, cm);
                            var exp = (Math.pow(2, curMap) * 50);
                            cm.givePartyExp(exp, party);
                            cm.dispose();
                        } else { // Wrong
                            // Do wrong
                            failstage(eim, cm);
                            cm.dispose();
                        }

                    } else {//(totplayers == 2)


                        cm.sendNext("�㿴��������û�з�����ȷ��λ�ã������٣�����ӳ�Ա�����ӻ�̤�����ҵ���ȷ��λ�á�");
                        cm.dispose();


                    }
                }



            } 

      } else {

                 if (cm.getPlayer().getItemQuantity(nitem) >= jitem) {

                            // Do clear
                            clear(curMap, eim, cm);
                          //  var exp = (Math.pow(2, curMap) * 50);
                            //cm.givePartyExp(exp, party);
                            cm.dispose();
                        

                        } else {

                        cm.sendOk("��Ķ���ֻ����һ���ˣ�");
                        cm.dispose();

                        }



         }




        } else {
            var complete = eim.getProperty(curMap.toString() + "stageclear");
            if (complete != null) {
                var target = eim.getMapInstance(910340100 + (curMap * 100));
                var targetPortal = target.getPortal("st00");
                cm.getChar().changeMap(target, targetPortal);
            }
            cm.dispose();
        }
    } else { // Not leader
        if (status == 0) {
            var complete = eim.getProperty(curMap.toString() + "stageclear");
            if (complete != null) {
                cm.sendNext("ʱ�䲻���ˣ����㵽����һ���ؿ���");
            } else {
                cm.sendNext("���������ӳ�����̸����");
                cm.dispose();
            }
        } else {
            var complete = eim.getProperty(curMap.toString() + "stageclear");
            if (complete != null) {
                var target = eim.getMapInstance(910340100 + (curMap * 100));
                var targetPortal = target.getPortal("st00");
                cm.getChar().changeMap(target, targetPortal);
            }
            cm.dispose();
        }
    }
}

function getPrize(eim, cm) {
    var itemSetSel = Math.random();
    var itemSet;
    var itemSetQty;
    var hasQty = false;
    if (itemSetSel < 0.3) {
        itemSet = prizeIdScroll;
    } else if (itemSetSel < 0.6) {
        itemSet = prizeIdEquip;
    } else if (itemSetSel < 0.9) {
        itemSet = prizeIdUse;
        itemSetQty = prizeQtyUse;
        hasQty = true;
    } else {
        itemSet = prizeIdEtc;
        itemSetQty = prizeQtyEtc;
        hasQty = true;
    }
    var sel = Math.floor(Math.random() * itemSet.length);
    var qty = 1;
    if (hasQty) qty = itemSetQty[sel];
    cm.gainItem(itemSet[sel], qty);
    //cm.gainItem(4001531, 1);
    cm.gainExp_PQ(70, 1.5);
    cm.removeAll(4001007);
    cm.removeAll(4001008);
    cm.getPlayer().endPartyQuest(1201);
    cm.warp(910340700, 0); //cm.isGMS() ? 910340600 : 
}