var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			//cm.sendOk("#d֪ͨ�����������15���Ǽۣ���ԭ�ȵ�3/�졢80/�¡�500/���Ϊ10/�졢240/�¡�1200/�ꡣ\r\n���ܸĶ���ÿ�����ѹ������Ϊ��ȡ�����������ר������þ�����ÿ����ȡר������ף����x100������ף����x100. ÿ�ճ齱��x5. ������װ���ȵȻ��𲽿��š�");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			//rmb = cm.getPlayer().updateRMB();
                        var selStr = "#b��ѡ����������#n#k\r\n";
                        selStr +="\r\n  - #e#r����ǰ������ֵ���Ϊ #d" + cm.getPlayer().getRMB() + "#k#r #eԪ#n#k\r\n";
                        selStr +="       #d����ǰ�ĵ��Ϊ��#r" + cm.getPlayer().getCSPoints(1) + " #d��#k\r\n";
						selStr +="       #d����ר��VIPѫ�¡���Ƭ��ָ�����챳����ָ\r\n\r\n\r\n";
			selStr +="#L1##b"+aaa+" ����ʵ����Ʒ����30ѩ����/��[�������鿴]#l#k\r\n\r\n";			
			selStr +="#L2##b"+aaa+" ����ʵ����Ʒ����100ѩ����/��[�������鿴]#l#k\r\n\r\n";
			selStr +="#L3##b"+aaa+" ����ʵ����Ʒ����800ѩ����/��[�������鿴]#l#k\r\n";
                        cm.sendSimple(selStr);	
		} else if (status == 1) {
			if (selection == 1) {
				typed=1;
				cm.sendYesNo("- #e#d����ʵ����Ʒ���һ��Ȩ��#n#k\r\n\r\n- #e#r��ʾ:#k#n  #rvip���غ��� 30ѩ����/��#k\r\n\r\n- #e#d������Ȩ��#n#k\r\n\t\t#bӵ��ȫ��������ʾ������������ɫ��\r\n- #e#d��ϸ˵����#n#k\r\n\t\t������۵���30ѩ���ң�����ÿ�췵��1000���1����ÿ���������������Լ�˫�����ʣ�ÿ�����ȡ�����Ƶ��ߣ��齱�䡢ħ���������ȣ������������ѡ���������Լ�����ϴѪ����������ȡÿ�ս�ҡ�#k\r\n\r\n- #e#d������ʾ��#n#b���ǽ��й��򡣵�񷵻���һҳ.#k");
			} else if (selection == 2) {
				typed=2;
				cm.sendYesNo("- #e#d����ʵ����Ʒ���һ��Ȩ��#n#k\r\n\r\n- #e#r��ʾ:#k#n  #rvip���غ��� 100ѩ����/��#k\r\n\r\n- #e#d������Ȩ��#n#k\r\n\t\t#bӵ��ȫ��������ʾ������������ɫ��\r\n- #e#d��ϸ˵����#n#k\r\n\t\t������۵���100ѩ���ң����ҷ�30�췵��3����30����ÿ���������������Լ�˫�����ʣ�ÿ�����ȡ�����Ƶ��ߣ��齱�䡢ħ���������ȣ������������ѡ���������Լ�����ϴѪ����������ȡÿ�ս�ҡ�#r��������50������ħ����20���߼�����ħ����\r\n\r\n- #e#d������ʾ��#n#b���ǽ��й��򡣵�񷵻���һҳ.#k");
                        } else if (selection == 3) {
				typed=3;
				cm.sendYesNo("- #e#d����ʵ����Ʒ���һ��Ȩ��#n#k\r\n\r\n- #e#r��ʾ:#k#n  #rvip���غ��� 800ѩ����/��#k\r\n\r\n- #e#d������Ȩ��#n#k\r\n\t\t#bӵ��ȫ��������ʾ������������ɫ��\r\n- #e#d��ϸ˵����#n#k\r\n\t\t������۵���800ѩ���ң�����ÿ�췵��1000���1����ÿ���������������Լ�˫�����ʣ�ÿ�����ȡ�����Ƶ��ߣ��齱�䡢ħ���������ȣ������������ѡ���������Լ�����ϴѪ����������ȡÿ�ս�ҡ�#r��������200���߼�����ħ����100���ռ�ħ����\r\n\r\n- #e#d������ʾ��#n#b���ǽ��й��򡣵�񷵻���һҳ.#k");
                        } else if (selection == 4) {
				typed=4;
				cm.sendYesNo("");	
			}
		} else if (status == 2) {
			if(typed==1){
                if (cm.haveItem(2430865) < 1 && cm.getSpace(1)>3 && cm.getSpace(2) > 2 && cm.haveItem(4310014, 30)) {
			cm.gainItem(2430865,1,7);
			cm.gainItem(1142328, 1, 7);
			cm.gainItem(1112140, 1, 7);
			cm.gainItem(1112247, 1, 7);
			//cm.addHyPay(10);
			cm.setBossLog(cm.getPlayer().getName()+"VIPһ��");
			cm.gainItem(4310014, -30);
			cm.sendOk("��ϲ���ɹ�����һ���������.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�������Ʒ���һ��Ȩ��", 5120012);
			cm.worldSpouseMessage(0x20, "[ϵͳ����] : ��ϲ " + cm.getChar().getName() + " �ɹ�����һ����Ʒ���.");
			cm.dispose();
                } else {
			cm.sendOk("ʧ�ܣ�\r\n\r\n#r1). �����������δ����,�޷��ظ�����.\r\n2). ��ֵ���δ�ﵽ����.\r\n3). ������װ������������λ����,������.");
			cm.dispose();
				}
			} else if(typed==2){
                if (cm.haveItem(2430865) < 1 && cm.getSpace(2) > 2 && cm.haveItem(4310014, 100)) {
			cm.gainItem(2430865,1,30);
			cm.gainItem(4310014, -100);
			cm.gainItem(1142328, 1, 30);
			cm.gainItem(1112139, 1, 30);
			cm.gainItem(1112246, 1, 30);
			cm.gainItem(5062000, 50);
			cm.gainItem(5062002, 20);
			cm.setBossLog(cm.getPlayer().getName()+"VIPһ��");
			//cm.gainNX(1, -50000);
			cm.sendOk("��ϲ���ɹ�����һ������Ʒ���.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�������Ʒ���һ����Ȩ��", 5120012);
			cm.worldSpouseMessage(0x20, "[ϵͳ����] : ��ϲ " + cm.getChar().getName() + " �ɹ�����һ����Ʒ���.");
			cm.dispose();
                } else {
			cm.sendOk("ʧ�ܣ�\r\n\r\n#r1). ������Ʒ���δ����,�޷��ظ�����.\r\n2). ��ֵ���δ�ﵽ����.\r\n3). ������������λ����,������.");
			cm.dispose();
				}
			} else if(typed==3){
                if (cm.haveItem(2430865) < 1 && cm.getSpace(2) > 2 && cm.haveItem(4310014, 800)) {
			cm.gainItem(2430865,1,365);
			cm.gainItem(4310014, -800);
			cm.gainItem(1142328, 1, 365);
			cm.gainItem(1112138, 1, 365);
			cm.gainItem(1112245, 1, 365);
			//cm.gainItem(5062000, 400);
			cm.gainItem(5062002, 200);
			cm.gainItem(5062010, 100);
			cm.setBossLog(cm.getPlayer().getName()+"VIPһ��");
			//cm.gainNX(1, -400000);
			cm.sendOk("��ϲ���ɹ�����һ����Ʒ���.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�������Ʒ���һ��Ȩ��", 5120012);
			cm.worldSpouseMessage(0x20, "[ϵͳ����] : ��ϲ " + cm.getChar().getName() + " �ɹ�����һ����Ʒ���.");
			cm.dispose();
                } else {
			cm.sendOk("ʧ�ܣ�\r\n\r\n#r1). �����������δ����,�޷��ظ�����.\r\n2). ��ֵ���δ�ﵽ����.\r\n3). ������������λ����,������.");
			cm.dispose();
				}
           }
      }
   }
}