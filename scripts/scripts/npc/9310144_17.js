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
                        selStr +="\r\n  ---- #e#r����ǰԪ����Ϊ #d" + cm.getPlayer().getRMB() + "#k#r #e��#n#k\r\n";
                        selStr +="       #d����ǰ�ĵ��Ϊ��#r" + cm.getPlayer().getCSPoints(1) + " #d��#k\r\n\r\n\r\n";
			selStr +="#L3##b"+aaa+" ����ʵ����Ʒ���30Ԫ/��=9����[�������鿴]#l#k\r\n";
			selStr +="#L2##b"+aaa+" ����ʵ����Ʒ���100Ԫ/��=30����[�������鿴]#l#k\r\n\r\n";
                        cm.sendSimple(selStr);	
		} else if (status == 1) {
			if (selection == 1) {
				typed=1;
				cm.sendYesNo("- #e#d��ӭ�����������һ��Ȩ��#n#k\r\n\r\n- #e#r��ʾ:#k#n  #rvip���غ��� 10Ԫ�ֽ�/��#k\r\n\r\n- #e#d���������Ȩ��#n#k\r\n\t\t#bÿ�տ�����3000���ҹ��ʡ�\r\n\t\t������ѡ���͡���ʹ�ÿ��ϴѪ���ܡ�\r\n\t\tÿ�մ���ħ�������֣��������齱\r\n\t\t��ݴ��ͣ�˫�����飬˫������\r\n\t\t��������Ȩ���˫�����Լ�ר�𸱱���\r\n\r\n- #e#d������ʾ��#n#b���ǽ��й��򡣵�񷵻���һҳ.#k");
			} else if (selection == 2) {
				typed=2;
				cm.sendYesNo("- #e#d����ʵ����Ʒ���һ��Ȩ��#n#k\r\n\r\n- #e#r��ʾ:#k#n  #rvip���غ��� 100Ԫ/�£���һ��ɵ����#k\r\n\r\n- #e#d�����Ȩ��#n#k\r\n\t\t#bӵ��ȫ��������ʾ������������ɫ��\r\n- #e#d��ϸ˵����#n#k\r\n\t\t������۵���100Ԫ�������ҷ�30�췵��330000���30����ÿ������˫�������Լ�˫�����ʣ�������ʮ���ڻ᷵����30���߼�����ħ������ʦ������ħ�����������ᡢף�����ᡣ���������Ѹ��������Լ�����ϴѪ����������ȡÿ��300����!\r\n\r\n- #e#d������ʾ��#n#b���ǽ��й��򡣵�񷵻���һҳ.#k");
                        } else if (selection == 3) {
				typed=3;
				cm.sendYesNo("- #e#d��ӭ�����������һ��Ȩ��#n#k\r\n\r\n- #e#r��ʾ:#k#n  #rvip���غ��� 30Ԫ/�ܣ���һ��ɵ����#k\r\n\r\n- #e#d�����Ȩ��#n#k\r\n\t\t#bӵ��ȫ��������ʾ������������ɫ��\r\n- #e#d��ϸ˵����#n#k\r\n\t\t������۵���30Ԫ�������ҷ�7�췵��77000���7����ÿ������˫�������Լ�˫�����ʣ����������ڻ᷵����7���߼�����ħ������ʦ������ħ�����������ᡢף�����ᡣ���������Ѹ��������Լ�����ϴѪ����������ȡÿ��300����!\r\n\r\n- #e#d������ʾ��#n#b���ǽ��й��򡣵�񷵻���һҳ.#k");
                        } else if (selection == 4) {
				typed=4;
				cm.sendYesNo("");	
			}
		} else if (status == 2) {
			if(typed==1){
                if (cm.haveItem(2430865) < 1 && cm.getSpace(2) > 2 && cm.getHyPay(1) >= 10) {
			cm.gainItem(2430865,1,1);
			cm.addHyPay(10);
			cm.sendOk("��ϲ���ɹ�����һ���������.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�������Ʒ���һ��Ȩ��", 5120012);
			cm.worldSpouseMessage(0x15, "[�������] : ��ϲ " + cm.getChar().getName() + " �ɹ�����һ����Ʒ���.");
			cm.dispose();
                } else {
			cm.sendOk("ʧ�ܣ�\r\n\r\n#r1). �����������δ����,�޷��ظ�����.\r\n2). ��ֵ���δ�ﵽ����.\r\n3). ������������λ����,������.");
			cm.dispose();
				}
			} else if(typed==2){
                if (cm.haveItem(2430865) < 1 && cm.getSpace(2) > 2 &&   cm.getPlayer().getCSPoints(1) >= 300000) {
			cm.gainItem(2430865,1,30);
			cm.gainNX(-300000);
			cm.sendOk("��ϲ���ɹ�����һ������Ʒ���.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ������������һ����Ȩ��", 5120012);
			cm.worldSpouseMessage(0x15, "[�������] : ��ϲ��� " + cm.getChar().getName() + " ������Ʒ���һ��Ȩ,�������ܹ������");
			cm.dispose();
                } else {
			cm.sendOk("ʧ�ܣ�\r\n\r\n#r1). ������Ʒ���δ����,�޷��ظ�����.\r\n2). ��ֵ���δ�ﵽ����.\r\n3). ������������λ����,������.");
			cm.dispose();
				}
			} else if(typed==3){
                if (cm.haveItem(2430865) < 1 && cm.getSpace(2) > 2 &&  cm.getPlayer().getCSPoints(1) >= 90000) {
			cm.gainItem(2430865,1,7);
			cm.gainNX(-90000);
			cm.sendOk("��ϲ���ɹ�����һ������Ʒ���.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�������Ʒ���һ����Ȩ��", 5120012);
			cm.worldSpouseMessage(0x15, "[�������] : ��ϲ��� " + cm.getChar().getName() + " ������Ʒ���һ��Ȩ,�������ܹ������");
			cm.dispose();
                } else {
			cm.sendOk("ʧ�ܣ�\r\n\r\n#r1). �����������δ����,�޷��ظ�����.\r\n2). ��ֵ���δ�ﵽ����.\r\n3). ������������λ����,������.");
			cm.dispose();
				}
           }
      }
   }
}