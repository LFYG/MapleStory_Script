var status = -1;
var status2 = -1;
var select = -1;
var select2 = -1;
var nowLv = -1;
var questDat = -1;
var questDat = -1;
var rewardLevel = [10, 15, 30, 45, 60, 85, 100];
var rewarditems = [2450042, 2450042, 2450042, 2450042, 2450042, 2450042, 2450042];
var supportLevel = [10, 30, 60, 100];
var supports = [4001784,4001017, 2022257, 1112593];//1113020



function start() {
	im.sendSimple("���, ����Ϊ����ð�յ����������ʿ�ĳɳ��������ṩ������\r\n#b#L0#��ȡ�ɳ�֧Ԯ����#l\r\n#L1#תְ�ȼ������������#l\r\n#L2#ð�յ�������#l#k");
}

function action(mode, type, selection) {
	if (mode == 1) {
		if (status2 == -1)
			status++;
	} else {
		if (status2 == -1)
			status--;
	}
	if (status == 0) {
		if (select == -1)
			select = selection;
		if (select == 0) {
			im.sendNext("Ϊ�˰�����ʿ��ɳ�, ��׼���˸��ֵ��ߡ�");
			questDat = im.getQuestRecord(99998).getCustomData();
			if (questDat == null)
				questDat = -1;
			else
				questDat = Number(questDat);
		} else if (select == 1) {
			im.sendNext("Ϊ�˰����ﵽתְ�ȼ���10��, 30��, 60��, 100��������ʿ�ɳ�, ��׼���˸��ֵ��ߡ�");
			questDat = im.getQuestRecord(99999).getCustomData();
			if (questDat == null)
				questDat = -1;
			else
				questDat = Number(questDat);
		} else if (select == 2) {
			im.sendSimple("���ǶԲ����������ڽ̳����ݵ���ʿ��׼�����ر��飡\r\n���ǽ�ͨ���ر���Ϊ��ҽ�����ð�յ�ʱӦ��֪�������ݡ�\r\n�������۵���\r\n#b#L0#����#l\r\n#L1#����#l\r\n#L2#�����г�#l\r\n#L3#èͷӥ#l#k\r\n\r\nװ��ǿ��\r\n#b#L4#����ǿ��#l\r\n#L5#�Ǽ�ǿ��#l\r\n#L6#Ǳ�ܣ�ħ����#l#k\r\n\r\nװ���ɫ\r\n#b#L7#��ɫ��װ#l\r\n#L8#�����뷢��#l#k");
		}
	} else if (status == 1) {
		if (nowLv == -1)
			nowLv = im.getPlayer().getLevel();
		if (select == 0 || select == 1) {
			im.sendNextPrev("��ǰ��ʿ��ĵȼ�Ϊ#b" + nowLv + "��#k����");
		} else if (select == 2) {
			xiangDao(mode, type, selection);
		}
	} else if (status == 2) {
		if (select == 0) {
			var can = -1;
			for (var i = questDat; i < rewardLevel.length; i++) {
				if (questDat == -1 && nowLv >= rewardLevel[0]) {
					can = -2;
					break;
				} else if (nowLv >= rewardLevel[i+1] && questDat != i+1) {
					can = i+1;
					break;
				}
			}
			var str = "";
			if (can == -1 || (can == questDat && questDat == 0)) {
				if (nowLv < rewardLevel[0]) {
					im.sendOk("���ڻ��޷���ȡ�κζ���Ŷ��");
				} else {
					if (questDat < rewardLevel.length-1) {
						str = "�����ﵽ" + rewardLevel[questDat+1] + "��, �Ҿ͸���#i" + rewarditems[questDat+1] + "##b #t" + rewarditems[questDat+1] + "##k, ��ǵ�����ȡŶ!";
					}
					im.sendOk("���Ѿ���ȡ��#t" + rewarditems[questDat] + "#�˰���" + str);
				}
			} else {
				if (can == -2)
					can = 0;
				if (im.canHold(rewarditems[can])) {
					im.gainItem(rewarditems[can], 1);
					if (questDat < rewardLevel.length-2) {
						str = "�����ﵽ" + rewardLevel[can+1] + "��, �һ����#i" + rewarditems[can+1] + "##b #t" + rewarditems[can+1] + "##k, ��ǵ�����ȡŶ!";
					}
					im.sendOk("��ɹ���ȡ��#t" + rewarditems[can] + "#��" + str);
					im.getQuestRecord(99998).setCustomData(can);
				} else {
					im.sendOk("��ȷ����ı����ռ��Ƿ��㹻��");
				}
			}
		} else if (select == 1) {
			var can = -1;
			for (var i = questDat - 1; i < supportLevel.length; i++) {
				if (questDat == -1 && nowLv >= supportLevel[0]) {
					can = -2;
					break;
				} else if (nowLv >= supportLevel[i+1] && questDat != i+1) {
					can = i+1;
					break;
				}
			}
			var str = "";
			if (can == -1 || (can == questDat && questDat == 0)) {
				if (nowLv < supportLevel[0]) {
					im.sendOk("���ڻ��޷���ȡ�κζ���Ŷ��");
				} else {
					//if (questDat < supportLevel.length-1) {
						str = "�����ﵽ" + supportLevel[questDat+1] + "��, �Ҿ͸���#i" + supports[questDat+1] + "##b #t" + supports[questDat+1] + "##k, ��ǵ�����ȡŶ!";
					//}
					//im.sendOk("���Ѿ���ȡ��#t" + supports[questDat] + "#�˰���" + str);
				}
			} else {
				if (can == -2)
					can = 0;
				if (im.canHold(supports[can])) {
					if (can == 0) {
						im.gainPet(supports[can], "�����ZealMS", 15, 1642, 100, 0, -1);
					} else {
						im.gainItem(supports[can], 1);
					}
					if (questDat < supportLevel.length-2) {
						str = "�����ﵽ" + supportLevel[can+1] + "��, �һ����#i" + supports[can+1] + "##b #t" + supports[can+1] + "##k, ��ǵ�����ȡŶ!";
					}
					im.sendOk("��ɹ���ȡ��#t" + supports[can] + "#��" + str);
					im.getQuestRecord(99999).setCustomData(can);
				} else {
					im.sendOk("��ȷ����ı����ռ��Ƿ��㹻��");
				}
			}
		}
		im.dispose();
	} else {
		im.dispose();
	}
}

function xiangDao(mode, type, selection) {
	if (mode == 1) {
		status2++;
	} else {
		status2--;
	}

	if (status2 == 0) {
		if (select2 == -1)
			select2 = selection;
		if (select2 == 0) {
			im.sendNext("�����ǳ������Ա�������������Ŀɰ���顣����������кܶ࣬���Ի�õ��ߣ�����ʹ�����漼�ܽ������ԡ�");
		} else if (select2 == 1) {
			im.sendNext("ͨ�����Թ��Ｐ������ֻ��õĵ��ߣ����ᱻ�����ڱ����С�");
		} else if (select2 == 2) {
			im.sendNext("�����Ѽ�������ĵ��ߡ���ð�յ�����������������ʿ�������һ�𣬽��е��߽��׵ĵط����������г���\r\n#i3800707#");
		} else if (select2 == 3) {
			im.sendNext("�����г���������̫���ˣ������ҵ���Ҫ����Ʒ����ô��������#i5230000# #t5230000#�������ҵ��Լ���Ҫ�ĵ��߰ɡ�");
		} else if (select2 == 4) {
			im.sendNext("ǿ���Ǵ�ʹ�þ��������ǿ������ʼ�ġ�");
		} else if (select2 == 5) {
			im.sendNext("��Ҫ��������ǿ����������Ҫ���������������ҽ�Ϊ��˵��ǿ�������׶�--�Ǽ�ǿ��������ϸ���á�");
		} else if (select2 == 6) {
			im.sendNextPrev("�ҽ�Ϊ��˵����ǿ��֮��--Ǳ�ܣ�");
		} else if (select2 == 7) {
			im.sendNextPrev("��������������ʿ��ͬ�����������и��ԣ�");
		} else if (select2 == 8) {
			im.sendNextPrev("ʱ�е��ص㵱Ȼ����������");
		}
	} else if (status2 == 1) {
		if (select2 == 0) {
			im.sendNextPrev("�����ܰ�æʰȡ�������ĵ��ߣ������˵���ı����С�\r\nѧ�����⼼�ܵĳ�����԰���ʹ��ҩˮ��������ʩչ���漼�ܡ�\r\n#i3800701#");
		} else if (select2 == 1) {
			im.sendNextPrev("���Ѿ�ͨ���̳��˽⵽�����Ļ�������˰ɣ�\r\n����Ϊ��˵���±����ĸ��ֹ��ܰɡ�");
		} else if (select2 == 2) {
			im.sendNextPrev("�����г������кܶ෿�䣬������ڸ������ڿ���������������Ʒ�����ߵ�������ʿ�����������ﹺ����Ҫ����Ʒ��\r\n#i38007078");
		} else if (select2 == 3) {
			im.sendNextPrev("��������̳��е�#b#e�̵�#k#nѡ���½��й���\r\n#i3800710#");
		} else if (select2 == 4) {
			im.sendNextPrev("��������е�װ��ǿ����ť��Ȼ�󽫾����װ������ȥ�ɡ�\r\n#i3800712#");
		} else if (select2 == 5) {
			im.sendNextPrev("�����ʹ��#i2049301# #t2049301#���Կ���������Ϊ0��װ�������Ǽ�ǿ����");
		} else if (select2 == 6) {
			im.sendNextPrev("�Լ�С�ĸ�����Ұ���ñ�����Ǳ�ܵ�װ��ʱ������ʹ��#i2049401# #t2049401#Ϊc��װ������Ǳ��ʱ����������װ�������ص�������");
		} else if (select2 == 7) {
			im.sendNextPrev("���øߵȼ�װ���������ܲ���������������װ����ʿ��������������עĿ��..�����ѽ�ɫװ��ø��ÿ����Ǿ����̳Ƿ�װѡ��������װѡ���½��й���ɡ�\r\n#i3800718#");
		} else if (select2 == 8) {
			im.sendNextPrev("��ͨ������/�������ý�ɫ��ø�ʱ�аɡ�\r\n���ڳ���#i5152053# #t5152053#, #i5150040# #t5150040#֮����ߵ�����£�ȥ��ׯ�е�������ƻ�����Ժ�����ɡ�");
		}
	} else if (status2 == 2) {
		if (select2 == 0) {
			im.sendNextPrev("������˽�������ϸ�鱨�������ڽ�ɫ��Ϣ������װ�����ĳ����ǩ�н��в鿴��\r\n#i3800702#");
		} else if (select2 == 1) {
			im.sendNextPrev("��������չ�������򿪱�����ᷢ�ֱ�����ֻ��24���ո񡣵��#b#e��չ����#k#n��ť�������һ���ӿ���96���ո�\r\n#i3800703#");
		} else if (select2 == 2) {
			im.sendNextPrev("Ϊ�˿��������������Ե��̳ǵ���Ϸ- �̵�ѡ���£������������������֤���߹����Ӷ���ˡ�\r\n ����ϸ�Ķ�����˵���󣬹����������ͼ����������������\r\n#i3800709#");
		} else if (select2 == 3) {
			im.sendNextPrev("���ʹ�ù����èͷӥ���ߣ�������Ҫ������߳��۵ĵ��ߣ������ҵ��õ��ߵļ۸���λ�á�\r\n#i3800711#");
		} else if (select2 == 4) {
			im.sendNextPrev("ȷ���������;����Ƿ��Ѿ���ӵ�װ��ǿ������Ȼ����������ť�����ܽ���ǿ���ˣ�\r\n#i3800713#");
		} else if (select2 == 5) {
			im.sendNextPrev("װ��ǿ�������ʹ�÷�ʽ������ǿ��ʱ��ͬ��");
		} else if (select2 == 6) {
			im.sendNextPrev("������Ǳ�ܵ�װ���ȼ��ɷ�ΪB~SS4����װ����ʾ����·������ע�������Ǳ�ܡ�");
		} else if (select2 == 7) {
			im.sendNextPrev("��ֻҪ�ڱ������������д����������װ�������ˡ���������װ����װ�����еĵ��߻ᱻ�Զ����¡�\r\n#i3800719#");
		} else if (select2 == 8) {
			im.sendNextPrev("��˵#p1012117#��ð�յ��������������ʦ��~\r\n#i3800720#");
		}
	} else if (status2 == 3) {
		if (select2 == 0) {
			im.sendNextPrev("�������װ���ͳ��＼�ܿ������̳ǵĳ���ѡ���½��й���");
		} else if (select2 == 1) {
			im.sendNextPrev("����������\r\n #i3800704#\r\n��ʾX�Ĳ���Ϊ�޷�ʹ�õĿռ䡣");
		} else if (select2 == 2) {
			im.dispose();
		} else if (select2 == 3) {
			im.sendNextPrev("���и�������#i5230003# #t5230003#������Բο�һ�¡�");
		} else if (select2 == 4) {
			im.sendNextPrev("ֻ�е�װ���Ŀ�������������0ʱ�����ܽ�������ǿ����ÿ������ʱ����������������1�Ρ�");
		} else if (select2 == 5) {
			im.sendNextPrev("����Ǽ�ǿ���ɹ������������Ϸ������Ǿͻ����ࡣ\r\n���ס���ڽ����Ǽ�ǿ��ʱ�����������Ϸ������Ǹ���Խ�࣬����ֵ��Խǿ����ͬʱǿ���ĳɹ��ʽ��ή�͡�\r\n#i3800715#");
		} else if (select2 == 6) {
			im.sendNextPrev("��������װ���ȼ������߸���װ���������Ǳ�ܣ�����ʹ��#i5062000# #t5062000#���͵ĵ��ߡ�ħ���������̳�ǿ��ѡ���н���ȷ�ϡ�");
		} else if (select2 == 7) {
			im.dispose();
		} else if (select2 == 8) {
			im.dispose();
		}
	} else if (status2 == 4) {
		if (select2 == 0) {
			im.sendNextPrev("�����Գ����������κ����ʣ�����ȥ��#m100000200#��#p1012005�����ǳ������Ա��Ӧ���ܰ������ܶ����ʡ�");
		} else if (select2 == 1) {
			im.sendNextPrev("ͨ�����ñ�����չ����(#i2430951# #i2430952# #i2430953# #i2430954#)��ʹ�õĻ����ɿ����ܹ�������ߵĿռ䡣\r\n��Ҳ����ͨ���̳ǿ��������ռ䡣");
		} else if (select2 == 3) {
			im.sendNextPrev("���ﵽ10��ʱ��Ϊ��������ͨ��#t2342824#������èͷӥ���ߣ��ҽ�Ϊ�㷢��#i5230000# #t5230000#��#i5230003# #t5230003#���벻Ҫ��������ȡ����");
		} else if (select2 == 4) {
			im.sendNextPrev("ǿ���ɹ�ʱ���������Աߵ����ֻ�������������ǿ���ű���Ϊ������ǿ����\r\n#i3800714#");
		} else if (select2 == 5) {
			im.sendNextPrev("��������Ե���˵���б�ע�����桱��װ�������Ǽ�ǿ������װ��������ֵ�����������������ü���װ����һ��Ҫ�����Ǽ�ǿ��Ŷ��\r\n#i3800716#");
		} else if (select2 == 6) {
			im.sendNextPrev("������������Ǳ��ֻ��1����2��̫��ϧ�ˣ���������#i2049500# #t2049500#֮��ĵ��ߣ���Ǳ�����������3�������סŶ��\r\n#i3800717#");
		}
	} else if (status2 == 5) {
		if (select2 == 0) {
			im.sendNextPrev("���ﵽ10��ʱ��Ϊ��������ͨ��#t2342824#��7�����������һ�Ϊ�㷢��#i5000393# #t5000393#���벻Ҫ��������ȡ����");
		} else if (select2 == 1) {
			im.sendNextPrev("����������£�����������������ֵ�5���ǩ��ÿ����ǩ���������ÿռ�Ϊ96���ո���£����������þ��ǿ����õ��ߵ������ø��ӱ�����");
		} else if (select2 == 3) {
			im.dispose();
		} else if (select2 == 4) {
			im.sendNextPrev("ʹ�ô����ƻ����ʵľ������ǿ������ǿ��ʧ��ʱ���ò������Ѽ�����װ��������ʧ��Ϊ�˷�ֹ�������鷢�������Դ��̳ǹ���#i5064000# #t5064000#���ڽ���ǿ��ǰʹ�ã�");
		} else if (select2 == 5) {
			im.dispose();
		} else if (select2 == 6) {
			im.sendNextPrev("��2014��7��9����2014��7��25�����ʱ�䣬�������#m706040000#������ͨ���޴�ħ����������Ǳ�ܣ�����������");
		}
	} else if (status2 == 6) {
		if (select2 == 0) {
			im.dispose();
		} else if (select2 == 1) {
			im.sendNextPrev("���������£��ť���ñ�ǩ�µĵ��߾ͻ�����Ϸ���ʼ�������У������м䲻�������ո�\r\n#i3800705#");
		} else if (select2 == 4) {
			im.dispose();
		} else if (select2 == 6) {
			im.dispose();
		}
	} else if (status2 == 7) {
		if (select2 == 1) {
			im.sendNextPrev("ԭ����ʾ�����Ѽ���ť�ĵط��������˰��������а�ť���������ڵ���°��������а�ť�ɣ�\r\n�ð�ť�ܽ���ر�ǩ�µĵ��߰������Ƶ�����������С��ǲ��Ǻܷ��㰡��\r\n#i3800706#");
		}
	} else if (status2 == 8) {
		if (select2 == 1) {
			im.sendNextPrev("�������������صĹ��ܣ���Ч�ع������ɣ�");
		}
	} else if (status2 == 9) {
		if (select2 == 1) {
			im.sendNextPrev("���ﵽ30��ʱ��Ϊ��������ͨ��#t2342824#���ܸ��౳���ռ䣬�ҽ�Ϊ�㷢��#i2430952# #t2430952#���벻Ҫ��������ȡ����");
		}
	} else if (status2 == 10) {
		if (select2 == 1) {
			im.dispose();
		}
	} else {
		status2 = -1;
	}
}