var status = 0;
var typed=0;

function start() {
	status = -1;
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
		if (status == 0) {
			cm.sendSimple("ð�յ������˸��㴫����\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list1#��������#fUI/UIWindow2.img/UtilDlgEx/list4#\r\n#d#L1#������ӥ#l��������������#L8#��ɫ����\r\n#L2#���������#l������������#L9#���﹫԰\r\n#L3#����Ƥ��ū˹#l����������#L10#ȫ���˶���\r\n#L4#���н���/��������#l���� #L11#��߳��������\r\n#L5#���н���/��������#l���� #L12#̽��δ֪��ð�յ���½\r\n#L6#����ʨ���������۰�\r\n#L7#����ʱ������Ʒ����");					
		} else if (status == 1) {
			if (selection == 1) {
				typed=1;
				cm.sendYesNo("#fUI/UIWindow2.img/UtilDlgEx/list1#\r\n��Ϣ�ڸ���Ҷ�ɭ�ֵ���������塣���Ŷ����޵����塢ͺ�յĳ���ʨ�ӵı��ӡ������ĺ�ǿ����ʹ����Ҳ���Բ����������ڱ���Ϊ��������ص���ľ�������˳�Ѩ����Ϊӵ�кܸߵ����ܺ����������壬��˵����Ӣ�۱�ʾ���ӡ�\r\n\r\n- #e�Ƽ��ȼ�#n��100������\r\n- #e�μ���Ա#n������/���\r\n- #e�ƶ�����#n����ľ��ɭ���\r\n- #e���ս���#n��#i4310034# #t4310034#\r\n- #e������Ʒ#n���ռ�#i4000243# #t4000243#");
			} else if (selection == 2) {
				typed=2;
				cm.sendYesNo("#fUI/UIWindow2.img/UtilDlgEx/list1#\\r\n��Ϣ���������Ϣ�ص�а��������һ�֡����ڸ߼������壬�ǳ���������ʹ�ø���ħ�������巽�������Ҳ��ǿ��ӵ�м�Ӳ��Ƥ�׺Ϳ����ۻ������Ļ��档��Ȼ���ͽ�С�����ǳ��г�򣬿��Է��С���ȥ�����ʹ������Ѻã����ǲ�֪��Ϊʲô���ڱ���˵жԹ�ϵ��\r\n\r\n- #e�Ƽ��ȼ�#n��100������\r\n- #e�μ���Ա#n������/���\r\n- #e�ƶ�����#n����ľ��ɭ���\r\n- #e���ս���#n��#i4310034# #t4310034#\r\n- #e������Ʒ#n���ռ�#i4000235# #t4000235#");
			} else if (selection == 3) {
				typed=3;
				cm.sendYesNo("#fUI/UIWindow2.img/UtilDlgEx/list1#\r\n��ˮ��������������һ������Ƥ��ū˹�Ĺ������Ȼ��������ʯ���޷���������ȴ��ñ���ǰ�����ױ���ȥ����Ƥ��ū˹�ɡ�\r\n\r\n- #e�Ƽ��ȼ�#n��110������\r\n- #e�μ���Ա#n������/���\r\n- #e�ƶ�����#n���Σ�ն�Ѩ�\r\n- #e���ս���#n��#i4310034# #t4310034#\r\n- #e������Ʒ#n���ռ�#i4000175# #t4000175#");
			} else if (selection == 4) {
				typed=4;
				cm.sendYesNo("�ڱ���ѩ��Ͽ��������������ݵ�а�����������ʯ�����˿ֲ��Ķ��󡣱���������������ȵ���һ�塣\r\n\r\n- #eԶ���Ӳμ��ʸ�#n\r\n   1) ��ͨģʽ��50������\r\n   2) ����ģʽ��100������\r\n- #e�μ���Ա#n������Զ���ӡ���������Զ����\r\n- #e�ƶ�����#n������ѩ��Ͽ��\r\n- #e���ս���#n��#i4310034# #t4310034#\r\n- #e������Ʒ#n���ռ�#i4001083# #t4001083#");
			} else if (selection == 5) {
				typed=5;
				cm.sendYesNo("#fUI/UIWindow2.img/UtilDlgEx/list1#\\r\n�������̾������ɶ�ɭ���е�����ı����ߺڰ����������Ⱦ������ĵ���\r\n\r\n- #eԶ���Ӳμ��ʸ�#n\r\n   1) ��ͨģʽ��80������\r\n   2) ����ģʽ��110������\r\n- #e�μ���Ա#n���ڰ�����Զ���ӡ����׺ڰ�����Զ����\r\n- #e�ƶ�����#n��Σ�ճ�Ѩ�·�����֮Ѩ\r\n- #e���ս���#n��#i4310034# #t4310034#\r\n- #e������Ʒ#n���ռ�#i4001430# #i4001430#");
			} else if (selection == 6) {
				typed=6;
				cm.sendYesNo("#fUI/UIWindow2.img/UtilDlgEx/list1#\r\nΪ�˸���������������ħ��ʦ�����ˡ���ʨ�����ࡤ�װ������ˡ�������ܰࡤ�װ���\r\n\r\n-#e Զ���Ӳμ��ʸ�#n��120������\r\n- #e�μ���Ա#n���ࡤ�װ�Զ����\r\n- #e�ƶ�����#n���ӱ���ѩ��ʨ����֮��\r\n- #e���ս���#n��#i4310034# #t4310034#\r\n- #e������Ʒ#n���ռ�#i4310010# #t4310010#");	
			} else if (selection == 7) {
				typed=7;
				cm.sendYesNo("#fUI/UIWindow2.img/UtilDlgEx/list1#\r\nʱ������ȥ֮·�ľ�ͷ������а�����ͨ��Ů��ļ�̳�ٻ��������Ĺ����Ȼ����ȥ�ܺ��棬����ȴ����Σ�յĹ����Ʒ���ͣ�ȥ����Ʒ���Ͱɡ�\r\n\r\n-#e Զ���Ӳμ��ʸ�#n��120������\r\n- #e�μ���Ա#n��Ʒ����Զ����\r\n- #e�ƶ�����#n���ӹ�ȥ֮·��ͷ��������\r\n- #e���ս���#n��#i4310034# #t4310034#\r\n- #e������Ʒ#n���ռ�#i4032002# #t4032002#");
			} else if (selection == 8) {
				typed=8;
				cm.sendYesNo("#fUI/UIWindow2.img/UtilDlgEx/list5#\r\n������OS4...�ظ�,������OS4���������һ�����Խ������׹ܲ����á���Сʱ��ȥ�ˣ�������...ι���������𣿺٣�ð�ռң����BOSS����ս����������һֱ������������¡ʵ�顣�Կ����˵�OS4��������������޴ε������������ɳ����ֻҪ���룡\r\n\r\n- #eԶ���Ӳμ��ʸ�#n��120������\r\n- #e�μ���Ա#n����ɫ����Զ����\r\n- #e�ƶ�����#n����������\r\n- #e���ս���#n��#i4310034# #t4310034#\r\n- #e������Ʒ#n���ռ�#i2028091# #t2028091#");
			} else if (selection == 9) {
				typed=9;
				cm.sendYesNo("#fUI/UIWindow2.img/UtilDlgEx/list5#\r\n#b���﹫԰#k��ʲô���Ǻǣ����ǿ��Լ������ݱ˵�����ð�յ������Ѽ���������Ĺ���ĵط�����ò������Ȼ��һ����������������֮�����֪����ʲô��ͬ�ˣ��Ǻǡ���Ҳ֪������һ�����Ӻ�ƽ���ŽᡣΪ���ô����һ�����ܿ��֣��Ұѹ��﹫԰�ڵĸ���ȫ���ĳ���#b�����Ϸ����#k����Ȼһ����Ҳ�ܽ�ȥ��������ӽ�ȥ����á���Ȼ�Ὺ�Ź��﹫԰�������ڴ�ʲô���Ⱑ���ǺǺǣ�����˵ʲô�ء�����ֻ�����ô�ҿ��İ��ˡ�����̫�࣬�����ȥ��ɡ��������ˣ���Ҫ�볡ȯ���ܽ�ȥ������Ҳ�˵��Ҳ֪���ɣ�����ͨ�������ԣ����Ի��#b#t4001513##k��#b#t4001515##k��#b#t4001521##k���Ѽ�10�Ž���#b#p9071002##k�����Խ�����һ���볡ȯ��\r\n\r\n- #eԶ�����Ƽ��ȼ�#n��10������\r\n- #e�μ���Ա#n������/���\r\n- #e����ʱ��#n��20����\r\n- #e�ƶ�����#n�����﹫԰���ճ�\r\n- #e���ս���#n��#i4310034# #t4310034#\r\n- #e������Ʒ#n���ռ�#i4310020# #t4310020#");
			} else if (selection == 10) {
				typed=10;
				cm.sendNext("#fUI/UIWindow2.img/UtilDlgEx/list5#\r\n\r\n��������ȴ����ţ�");
			} else if (selection == 11) {
				typed=11;
				cm.sendYesNo("#fUI/UIWindow2.img/UtilDlgEx/list5#\r\n������ʱ���ѷ죡Ϊ����ֹ���ѷ���ӿ��Ĺ�������¸ҵ�ð�ռ��ǵİ������Ϳ������ε�ͬ���Ǻ�������#m220000000#�ɣ�\n������˹���⿪�������⣬���ڶ�#r#o9300012##k��ս���л�ʤ��\r\n\r\n- #e�Ƽ��ȼ�#n��70������\r\n- #e�μ���Ա#n��3~6��\r\n- #e����ʱ��#n��20����\r\n- #e�ƶ�����#n����Ԫ֮��\r\n- #e���ս���#n��#i4310034# #t4310034#\r\n- #e������Ʒ#n���ռ�#i4031172# #t4031172#");
			} else if (selection == 12) {
				typed=12;
				cm.sendYesNo("#fUI/UIWindow2.img/UtilDlgEx/list5#\r\n���˽�ð�յ����������Ϥ����ô�����̽����������ɡ���������һ�������ð��֮�á�\r\n- #e�Ƽ��ȼ�#n��120������\r\n- #e�μ���Ա#n������/���\r\n- #e����ʱ��#n��������\r\n- #e�ƶ�����#n�����ܴ���Ա\r\n- #e���ս���#n��#i4310034# #t4310034#\r\n- #e������Ʒ#n���ռ�......");
			}
		} else if (status == 2) {
			if(typed==1){
                if (cm.getBossLog("��ӥ����") > 4) {
                    cm.sendOk("������Ѿ���ɹ�2������������������");
                    cm.dispose();
          }else if (cm.itemQuantity(4000243) >= 1) {
                    cm.gainItem(4000243,-1);
                    cm.gainItem(4310034, 1);
                    cm.setBossLog("��ӥ����");
                    cm.gainExp(1500);
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n�����x1\r\n#fUI/UIWindow2.img/QuestIcon/8/0#\r\n����ֵ1,500");
                    cm.dispose();
                } else {
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list0#\r\n\r\n�������ɶ�ɭ�����������ӥ��\r\n#i4000243# #t4000243##e(#c4000243#/1)");
                    cm.dispose();
                }
			}
			if(typed==2){
                if (cm.getBossLog("���������") > 4) {
                    cm.sendOk("������Ѿ���ɹ�2������������������");
                    cm.dispose();
          }else if (cm.itemQuantity(4000235) >= 1) {
                    cm.gainItem(4000235,-1);
                    cm.gainItem(4310034, 1);
                    cm.setBossLog("���������");
                    cm.gainExp(1500);
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n�����x1\r\n#fUI/UIWindow2.img/QuestIcon/8/0#\r\n����ֵ1,500");
                    cm.dispose();
                } else {
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list0#\r\n\r\n���ɶ�ɭ����������������\r\n#i4000235# #t4000235##e(#c4000235#/1)");
                    cm.dispose();
                }
			}
			if(typed==3){
                if (cm.getBossLog("��������") > 2) {
                    cm.sendOk("������Ѿ���ɹ�2������������������");
                    cm.dispose();
          }else if (cm.itemQuantity(4000175) >= 1) {
                    cm.gainItem(4000175,-1);
                    cm.gainItem(4310034, 2);
                    cm.setBossLog("��������");
                    cm.gainExp(1500);
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n�����x2\r\n#fUI/UIWindow2.img/QuestIcon/8/0#\r\n����ֵ1,500");
                    cm.dispose();
                } else {
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list0#\r\n\r\n���ں��������������Ƥ��ū˹��\r\n#i4000175# #t4000175##e(#c4000175#/1)");
                    cm.dispose();
                }
			}
			if(typed==4){
                if (cm.getBossLog("��������") > 2) {
                    cm.sendOk("������Ѿ���ɹ�2������������������");
                    cm.dispose();
          }else if (cm.itemQuantity(4001083) >= 1) {
                    cm.gainItem(4001083,-1);
                    cm.gainItem(4310034, 2);
                    cm.setBossLog("��������");
                    cm.gainExp(1500);
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n�����x2\r\n#fUI/UIWindow2.img/QuestIcon/8/0#\r\n����ֵ1,500");
                    cm.dispose();
                } else {
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list0#\r\n\r\n���ڱ���ѩ��Ͽ��������������\r\n#i4001083# #t4001083##e(#c4001083#/1)");
                    cm.dispose();
                }
			}
			if(typed==5){
                if (cm.getBossLog("��������") > 2) {
                    cm.sendOk("������Ѿ���ɹ�2������������������");
                    cm.dispose();
          }else if (cm.itemQuantity(4001430) >= 1) {
                    cm.gainItem(4001430,-1);
                    cm.gainItem(4310034, 2);
                    cm.setBossLog("��������");
                    cm.gainExp(1500);
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n�����x2\r\n#fUI/UIWindow2.img/QuestIcon/8/0#\r\n����ֵ1,500");
                    cm.dispose();
                } else {
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list0#\r\n\r\n���������̾������ɶ�ɭ���е�����ı����ߺڰ�������\r\n#i4001086# #t4001430#(#c4001430#/1)");
                    cm.dispose();
                }
			}
			if(typed==6){
                if (cm.getBossLog("ʨ��������") > 2) {
                    cm.sendOk("������Ѿ���ɹ�2������������������");
                    cm.dispose();
          }else if (cm.itemQuantity(4310010) >= 1) {
                    cm.gainItem(4310010,-1);
                    cm.gainItem(4310034, 2);
                    cm.setBossLog("ʨ��������");
                    cm.gainExp(1500);
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n�����x2\r\n#fUI/UIWindow2.img/QuestIcon/8/0#\r\n����ֵ1,500");
                    cm.dispose();
                } else {
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list0#\r\n\r\n���ڱ���ѩ���������ʨ���������۰���\r\n#i4310010# #t4310010##e(#c4310010#/1)");
                    cm.dispose();
                }
			}
			if(typed==7){
                if (cm.getBossLog("Ʒ��������") > 2) {
                    cm.sendOk("������Ѿ���ɹ�2������������������");
                    cm.dispose();
          }else if (cm.itemQuantity(4021010) >= 1) {
                    cm.gainItem(4021010,-1);
                    cm.gainItem(4310034, 2);
                    cm.setBossLog("Ʒ��������");
                    cm.gainExp(1500);
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list3#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n�����x2\r\n#fUI/UIWindow2.img/QuestIcon/8/0#\r\n����ֵ1,500");
                    cm.dispose();
                } else {
                    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list0#\r\n\r\n����ʱ������������ʱ������Ʒ���͡�\r\n#i4021010# #t4021010##e(#c4021010#/1)");
                    cm.dispose();
                }
			}
			if(typed==8){
                    if (cm.getLevel() >= 120) {
                    cm.warp(689010000, 0);
                    cm.sendOk("ð�յ������˸��㴫����\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list4#\r\n\r\n���Ѿ�����Ŀ�ĵ�.(��ս��ɫ�����������⽱��!)\r\n������ȥ����#b @hg #k����س�");
                    cm.dispose();
                } else {
                    cm.sendOk("ð�յ������˸��㴫����\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list0#\r\n\r\n�Բ���ֻ��120�����ϵ��˲��ܽ��롣");
                    cm.dispose();
                }
            }
			if(typed==9){
                    cm.dispose();
		    cm.openNpc(9071003);
                }
			if(typed==10){
		    cm.dispose();
		    cm.sendOk("#fUI/UIWindow2.img/UtilDlgEx/list5#\r\n\r\n������кõ��뷨���ύ����̳��http://www.5ifly.com")
                }
			if(typed==11){
		    cm.dispose();
                    cm.warp(689010000, 0);
                }
			if(typed==12){
		    cm.dispose();
                    cm.sendOk("�����ռ�ʲô�أ�");
                }
		}
	}
}
