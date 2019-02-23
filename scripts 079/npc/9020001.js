importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.server.life);
importPackage(java.awt);

var status;
var curMap;
var playerStatus;
var chatState;
var questions = Array("���ȸ����һ�����⣡����ϸ���ã���Ϊһ��սʿ������1ת��ʱ����Ҫ�ﵽ�ĵȼ��Ƕ��٣���ô�뽻����ͬ��������ͨ��֤��",
			"���ȸ����һ�����⣡ ����ϸ���ã���Ϊһ��սʿ������1ת��ʱ����Ҫ����������ֵ��С�Ƕ��ٵ㣬��ô�뽻����ͬ��������ͨ��֤��",
			"���ȸ����һ�����⣡����ϸ���ã� ��Ϊһ����ʦ������1ת��ʱ����Ҫ����������ֵ��С�Ƕ��ٵ㣬��ô�뽻����ͬ��������ͨ��֤��",
			"���ȸ����һ�����⣡����ϸ���ã� ��Ϊһ�������֣�����1ת��ʱ����Ҫ���ݵ�����ֵ��С�Ƕ��ٵ㣬��ô�뽻����ͬ��������ͨ��֤��",
			"���ȸ����һ�����⣡����ϸ���ã� ��Ϊһ������������1ת��ʱ����Ҫ���ݵ�����ֵ��С�Ƕ��ٵ㣬��ô�뽻����ͬ��������ͨ��֤��",
			"���ȸ����һ�����⣡����ϸ���ã� ����ְҵ��2ת��ʱ����Ҫ�ﵽ�ĵȼ��Ƕ��٣���ô�뽻����ͬ��������ͨ��֤��");
var qanswers = Array(10, 35, 20, 25, 25, 30);
var party;
var preamble;
var stage2rects = Array(Rectangle(-755,-132,4,218),Rectangle(-721,-340,4,166),
			Rectangle(-586,-326,4,150),Rectangle(-483,-181,4,222));
var stage2combos = Array(Array(0,1,1,1),Array(1,0,1,1),Array(1,1,0,1),Array(1,1,1,0));
var stage3rects = Array(Rectangle(608,-180,140,50),Rectangle(791,-117,140,45),
			Rectangle(958,-180,140,50),Rectangle(876,-238,140,45),
			Rectangle(702,-238,140,45));
var stage3combos = Array(Array(0,0,1,1,1),Array(0,1,0,1,1),Array(0,1,1,0,1),
			Array(0,1,1,1,0),Array(1,0,0,1,1),Array(1,0,1,0,1),
			Array(1,0,1,1,0),Array(1,1,0,0,1),Array(1,1,0,1,0),
			Array(1,1,1,0,0));
var stage4rects = Array(Rectangle(910,-236,35,5),Rectangle(877,-184,35,5),
			Rectangle(946,-184,35,5),Rectangle(845,-132,35,5),
			Rectangle(910,-132,35,5),Rectangle(981,-132,35,5));
var stage4combos = Array(Array(0,0,0,1,1,1),Array(0,0,1,0,1,1),Array(0,0,1,1,0,1),
			Array(0,0,1,1,1,0),Array(0,1,0,0,1,1),Array(0,1,0,1,0,1),
			Array(0,1,0,1,1,0),Array(0,1,1,0,0,1),Array(0,1,1,0,1,0),
			Array(0,1,1,1,0,0),Array(1,0,0,0,1,1),Array(1,0,0,1,0,1),
			Array(1,0,0,1,1,0),Array(1,0,1,0,0,1),Array(1,0,1,0,1,0),
			Array(1,0,1,1,0,0),Array(1,1,0,0,0,1),Array(1,1,0,0,1,0),
			Array(1,1,0,1,0,0),Array(1,1,1,0,0,0));
var eye = 9300002;
var necki = 9300000;
var slime = 9300003;
var monsterIds = Array(eye, eye, eye, 
			necki, necki, necki, necki, necki, necki,
			slime);
var prizeIdScroll = Array(2040502,2040505,2040514,2040517,
			2040802, 2040805,
			2040002, 2040402, 2040602, 2040902,
			2044502, 2044702, 2044602, 2043302,
			2043102, 2043202, 2043002, 2044402,
			2044302, 2044102, 2044202, 2044002);
var prizeIdUse = Array( 2000001, 2000002, 2000003, 2000006,	
			2000004, 2000005, 2001000, 2001001,
			2002006, 2002007, 2002008, 2002010);
var prizeQtyUse = Array(100, 75, 100, 45,
			20, 10, 35, 30,
			10, 10, 10, 10);
var prizeIdEquip = Array(1032000, 1032009, 1032004, 1032005,
			1032006, 1032007, 1032010,
			1032002, 1032008,
			1002026, 1002089, 1002090);
var prizeIdEtc = Array( 4010000, 4010001, 4010002, 4010003,
			4010004, 4010005, 4010006,
			4020000, 4020001, 4020002, 4020003,
			4020004, 4020005, 4020006,
			4020007, 4020007, 4003000);
var prizeQtyEtc = Array(15, 15, 15, 15,
			15, 15, 8,
			15, 15, 15, 15,
			15, 15, 15,
			8, 5, 20);
			

function start() {
	status = -1;
	mapId = cm.getChar().getMapId();
	if (mapId == 103000800)
		curMap = 1;
	else if (mapId == 103000801)
		curMap = 2;
	else if (mapId == 103000802)
		curMap = 3;
	else if (mapId == 103000803)
		curMap = 4;
	else if (mapId == 103000804)
		curMap = 5;
	playerStatus = cm.isLeader();
	preamble = null;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (curMap == 1) {
			if (playerStatus) {
				if (status == 0) {
					var eim = cm.getChar().getEventInstance();
					party = eim.getPlayers();
					preamble = eim.getProperty("leader1stpreamble");
					if (preamble == null) {
						cm.sendNext("����,��ӭ����#b���������������#k�ĵ�1�׶�.������Χ,��ῴ�������߶�.�����������ʱ���ǻ����#b֤��#,ÿ�����Ա����Ҫ������������Ӧ������,�����ռ���Ӧ��������#b֤��#k�����Ҷһ�#b�ؿ�ͨ��֤#k\r\n�һ���֮���������ӳ�������ɴ˴�����!");
						eim.setProperty("leader1stpreamble","done");
						cm.dispose();
					}
					else {
                        			var complete = eim.getProperty(curMap.toString() + "stageclear");
                        			if (complete != null) {
                        				cm.sendNext("��Ͽ������һ�׶�,�������Ѿ�����!");
                        				cm.dispose();
                        			}
                        			else {
							var numpasses = party.size()-1;
							var passes = cm.haveItem(4001008,numpasses);
							var strpasses = "#b" + numpasses.toString() + "�� �ؿ�ͨ��֤#k";
							if (!passes) {
								cm.sendNext("�Բ���,���޷�����ͨ���˹ؿ�,��δ�õ�" + strpasses + "����ɴ˹ؿ�!\r\n���������ӳ�Ա�����ҵ����Ⲣ���ռ���Ӧ�𰸵�#b֤��#k�����Ҷһ�#b�ؿ�ͨ��֤#k");
								cm.dispose();
							}
							else {
								cm.sendNext("��ϲ���������ͨ���˴�����,��ô��Ҫ��ͨ����һ�صĴ�������!");
								clear(1,eim,cm);
                                                                //cm.givePartyItems(4002002,0, party)
								cm.givePartyExp(2000000, party);
								cm.gainItem(4001008,-numpasses);
								cm.dispose();
							}
						}
					}
				}
			}
			else {
				var eim = cm.getChar().getEventInstance();
				pstring = "member1stpreamble" + cm.getChar().getId().toString();
				preamble = eim.getProperty(pstring);
				if (status == 0 && preamble == null) {
					var qstring = "member1st" + cm.getChar().getId().toString();
					var question = eim.getProperty(qstring);
					if (question == null) {
						var questionNum = Math.floor(Math.random() * questions.length);
						eim.setProperty(qstring, questionNum.toString());
					}
					cm.sendNext("����Ҫ�ռ��Ҹ�����������Ӧ������#b֤��#k�����Ҷһ�#b�ؿ�ͨ��֤#k");
					
				}
				else if (status == 0) {
                        		var complete = eim.getProperty(curMap.toString() + "stageclear");
                        		if (complete != null) {
                        			cm.sendNext("��Ͽ������һ�׶�,�������Ѿ�����!");
                        			cm.dispose();
                        		}
                        		else {
						var qstring = "member1st" + cm.getChar().getId().toString();
						var numcoupons = qanswers[parseInt(eim.getProperty(qstring))];
						var qcorr = cm.haveItem(4001007,(numcoupons+1));
						var enough = false;
						if (!qcorr) { 
							qcorr = cm.haveItem(4001007,numcoupons);
							if (qcorr) {
								cm.sendNext("�ش���ȷ!�����Ҹ����#b�ؿ�ͨ��֤#k��,�뽫���������ǵ�#b��ӳ�#k");
								cm.gainItem(4001007,-numcoupons);
								cm.gainItem(4001008,1);
								enough = true;
							}
						}
						if (!enough) {
							cm.sendNext("�ܱ�Ǹ������������! ����ϸ�������⣬����������ȷ������ͨ��֤��.");
						}
						cm.dispose();
					}
				}
				else if (status == 1) {
					if (preamble == null) {
						var qstring = "member1st" + cm.getChar().getId().toString();
						var question = parseInt(eim.getProperty(qstring));
						cm.sendNextPrev(questions[question]);
					}
					else {
						cm.dispose();
					}
						
				}
				else if (status == 2) {
					eim.setProperty(pstring,"done");
					cm.dispose();
				}
				else {
					eim.setProperty(pstring,"done");
					cm.dispose();
				}
			}
		}
		
		else if (2 <= curMap && 4 >= curMap) {
			rectanglestages(cm);
		}
		else if (curMap == 5) {
			var eim = cm.getChar().getEventInstance();
			var stage5done = eim.getProperty("5stageclear");
			if (stage5done == null) {
				if (playerStatus) {
					var map = eim.getMapInstance(cm.getChar().getMapId());
					var passes = cm.haveItem(4001008,10);
					if (passes) {
						cm.sendNext("��ϲ���������Բ����ɴ˴���������,�����Ҫ��ȥ,�Ǿ��ٵ���һ�ΰ�!");
						party = eim.getPlayers();
						cm.gainItem(4001008,-10);
						clear(5,eim,cm);
						cm.givePartyItems(4002001,1, party)//��Ʊ
						cm.givePartyExp(2000000, party);
						cm.dispose();
					}
					else {
						cm.sendNext("���,��ӭ����#b���������������#k�����׶�.\r\n���ܸõ�ͼ�Ĺ��ﲢ���ռ���#b10�� �ؿ�ͨ��֤#k\r\n�ռ���ɺ��������ҾͿ�����ɴ˴�������!");
					}
					cm.dispose();
				}
				else {
					cm.sendNext("���,��ӭ����#b���������������#k�����׶�.\r\n���ܸõ�ͼ�Ĺ��ﲢ���ռ���#b10�� �ؿ�ͨ��֤#k�������ǵ�#b��ӳ�#k\r\n�ռ���ɺ��������ǵ�#b��ӳ�#k�����ҾͿ�����ɴ˴�������!");
					cm.dispose();
				}
			}
			else {
				if (status == 0) {
					cm.sendNext("�������Ҫ��ȥô?ϣ�����ٴο���������ǵ����!");
				}
				if (status == 1) {
					getPrize(eim,cm);
					cm.dispose();
				}
			}
		}
                else {
                        cm.sendNext("���������������...����ϵ����Աά��...");
                        cm.dispose();
                }
	}
}

function clear(stage, eim, cm) {
	eim.setProperty(stage.toString() + "stageclear","true");
	var packetef = MaplePacketCreator.showEffect("quest/party/clear");
	var packetsnd = MaplePacketCreator.playSound("Party1/Clear");
	var packetglow = MaplePacketCreator.environmentChange("gate",2);
	var map = eim.getMapInstance(cm.getChar().getMapId());
	map.broadcastMessage(packetef);
	map.broadcastMessage(packetsnd);
	map.broadcastMessage(packetglow);
	var mf = eim.getMapFactory();
	map = mf.getMap(103000800 + stage);
	var nextStage = eim.getMapInstance(103000800 + stage);
	var portal = nextStage.getPortal("next00");
	if (portal != null) {
		portal.setScriptName("kpq" + (stage+1).toString());
	}
	else {
	}
}

function failstage(eim, cm) {
	var packetef = MaplePacketCreator.showEffect("quest/party/wrong_kor");
	var packetsnd = MaplePacketCreator.playSound("Party1/Failed");
	var map = eim.getMapInstance(cm.getChar().getMapId());
	map.broadcastMessage(packetef);
	map.broadcastMessage(packetsnd);
}

function rectanglestages (cm) {
	var debug = false;
	var eim = cm.getChar().getEventInstance();
	if (curMap == 2) {
		var nthtext = "2th";
		var show = "��������������,ȷ����������������ĳ�Ա";
		var curcombo = stage2combos;
		var currect = stage2rects;
		var objset = [0,0,0,0];
	}
	else if (curMap == 3) {
		var nthtext = "3th";
		var show = "������̨������,ȷ������̨��������ĳ�Ա";
		var curcombo = stage3combos;
		var currect = stage3rects;
		var objset = [0,0,0,0,0];
	}
	else if (curMap == 4) {
		var nthtext = "4th";
		var show = "��������������,ȷ����������������ĳ�Ա";
		var curcombo = stage4combos;
		var currect = stage4rects;
		var objset = [0,0,0,0,0,0];
	}
        if (playerStatus) {
                if (status == 0) {
                        party = eim.getPlayers();
                        preamble = eim.getProperty("leader" + nthtext + "preamble");
                        if (preamble == null) {
                                cm.sendNext("���,��ӭ����#b���������������#k�ĵ�"+curMap+"�׶�.\r\n���������ӳ�Ա"+show+",�漴��ϳɴ�,Ȼ���ٵ����ύ��!");
                                eim.setProperty("leader" + nthtext + "preamble","done");
                                var sequenceNum = Math.floor(Math.random() * curcombo.length);
                                eim.setProperty("stage" + nthtext + "combo",sequenceNum.toString());
                                cm.dispose();
                        }
                        else {
                        	var complete = eim.getProperty(curMap.toString() + "stageclear");
                        	if (complete != null) {	
                        		var mapClear = curMap.toString() + "stageclear";
                        		eim.setProperty(mapClear,"true");
                        		cm.sendNext("��Ͽ������һ�׶�,�������Ѿ�����!");
                        	}
                        	else { 
                        	        var totplayers = 0;
                        	        for (i = 0; i < objset.length; i++) {
                        	                for (j = 0; j < party.size(); j++) {
                        	                        var present = currect[i].contains(party.get(j).getPosition());
                        		                        if (present) {
                        	                                objset[i] = objset[i] + 1;
                        	                                totplayers = totplayers + 1;
                        	                        }
                        	                }
                        	        }
                        	        if (totplayers == 3 || debug) {
                        	                var combo = curcombo[parseInt(eim.getProperty("stage" + nthtext + "combo"))];
                        	                var testcombo = true;
                        	                for (i = 0; i < objset.length; i++) {
                        	                	if (combo[i] != objset[i])
                        	                		testcombo = false;
                        	                }
                        	                if (testcombo || debug) {
                        	                        clear(curMap,eim,cm);
cm.setBossLog('FQZD');
cm.givePartyItems(4031454,1, party)
cm.givePartyExp(2000000, party);
                        	                        cm.dispose();
                        	                }
                        	                else {
                        	                        failstage(eim,cm);
                        	                        cm.dispose();
                        	                }
                        	        }
                        	        else {
                        	                if (debug) {
                        	               		var outstring = "�������:"
                        	               		for (i = 0; i < objset.length; i++) {
                        	               			outstring += "\r\n" + (i+1).toString() + ". " + objset[i].toString();
                        	               		}
                        	                	cm.sendNext(outstring); 
                        	                }
                        	                else
							cm.sendNext("����û��ʹ��ĳ�Ա��ɴ���,���������ӳ�Ա"+show+",�漴��ϳɴ�,Ȼ���ٵ����ύ��!");
                        	                
                        	                cm.dispose();
                        	        }
                        	}
                        }
                }
                else {
                	var complete = eim.getProperty(curMap.toString() + "stageclear");
                       	if (complete != null) {	
                		var target = eim.getMapInstance(103000800 + curMap);
				var targetPortal = target.getPortal("st00");
                		cm.getChar().changeMap(target, targetPortal);
                	}
                	cm.dispose();
                }
        }
        else {
        	if (status == 0) {
        	        var complete = eim.getProperty(curMap.toString() + "stageclear");
        	        if (complete != null) {
        	        	cm.sendNext("��Ͽ������һ�׶�,�������Ѿ�����!");
        	        }
        	        else {
        	        	cm.sendNext("�������ǵ�#b��ӳ�#k�����Ұ�!");
        	        	cm.dispose();
        	        }
        	}
		else {
                	var complete = eim.getProperty(curMap.toString() + "stageclear");
		       	if (complete != null) {	
				var target = eim.getMapInstance(103000800 + curMap);
				var targetPortal = target.getPortal("st00");
                		cm.getChar().changeMap(target, targetPortal);
			}
                	cm.dispose();
                }
        }
}

function getPrize(eim,cm) {
	var itemSetSel = Math.random();
	var itemSet;
	var itemSetQty;
	var hasQty = false;
	if (itemSetSel < 0.3)
		itemSet = prizeIdScroll;
	else if (itemSetSel < 0.6)
		itemSet = prizeIdEquip;
	else if (itemSetSel < 0.9) {
		itemSet = prizeIdUse;
		itemSetQty = prizeQtyUse;
		hasQty = true;
	}
	else { 
		itemSet = prizeIdEtc;
		itemSetQty = prizeQtyEtc;
		hasQty = true;
	}
	var sel = Math.floor(Math.random()*itemSet.length);
	var qty = 1;
	if (hasQty)
		qty = itemSetQty[sel];
	//cm.gainItem(itemSet[sel],qty);
	var map = eim.getMapInstance(103000805);
	var portal = map.getPortal("sp");
	cm.getPlayer().changeMap(map,portal);
}