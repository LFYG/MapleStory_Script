var status = 0;

var eff = "#fEffect/CharacterEff/1112905/0/1#"; //

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
        var selStr = ""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+"\r\n#k#v5000424##L2#����+13����ħ������15W���#l   \r\n"+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+"\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
            if (cm.getPlayer().getCSPoints(1) >= 150000) {
		cm.gainNX(1, -150000);
                cm.changeDamageSkin(1023);
                cm.sendOk("����ɹ�,��Ӧ�õ�����˺�Ƥ��,��ֿɿ���\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û�е�����,�Ҳ�������һ�");
            }
            break;
        case 2:
            if (cm.getPlayer().getCSPoints(1) >= 150000) {
		cm.gainNX(1, -150000);
                cm.gainItem(2430869,1);
				cm.worldMessage(0x18, "�����򹫸桻" + " : " + "��� " + cm.getChar().getName() + " �ɹ���15W�������+13ħ���﹥�ĳ��");
                cm.sendOk("����ɹ�\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û�е�����,�Ҳ�������һ�");
            }
            break;
			case 3:
            if (cm.getPlayer().getCSPoints(1) >= 600000) {
		cm.gainNX(1, -600000);
                cm.changeDamageSkin(1022);
                cm.sendOk("����ɹ�,��Ӧ�õ�����˺�Ƥ��,��ֿɿ���\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û�е�����,�Ҳ�������һ�");
            }
            break;
        }
        cm.dispose();
    }
}