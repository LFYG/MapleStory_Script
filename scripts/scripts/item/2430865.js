var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//����
var typed = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        im.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#e#r#fEffect/ItemEff/1112811/0/0##fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k\r\n\r\n";
		selStr += "#d��ӭʹ��������Ȩ,�����Խ��ҷ����ڼ��̿�ݼ���ʹ�ã�#k\r\n";
		selStr += "#r#L0#"+z+" ÿ�չ���#l  #L7#"+z+" ˫��˫��#l  #L2#"+z+" ����Ѫ��#l\r\n";
		selStr += "#L14#"+z+" ���纰��#l  #L6#"+z+" ��ѡ����#l  #L4#"+z+" ��������\r\n";
		selStr += "#L11#"+z+" ���ٲֿ�#l  #L12#"+z+" ���ٴ���#l  #L13#"+z+" ����ǩ��#l\r\n";
		selStr += "#L15#"+z+" ��������#l \r\n";  //#L13#"+z+" ����ǩ��#l\r\n";
		selStr += "\r\n\r\n#fEffect/ItemEff/1112811/0/0##fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k";
        im.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
			if (im.getPlayer().getName() == "�������") {
				//for(var i = 0 ; i<10; i++) {
				im.gainExp(2000000000);
				//}
				//im.dispose();
				//return;
			}
           if (im.getBossLog("����") < 1) { //����
            	im.gainMeso(3000000);
				im.setBossLog("����");
				im.gainNX(11000);
				im.gainItem(5064000,1);//����
				im.gainItem(2340000,1);//ף��
				im.gainItem(5062500,1);//��ʦ
				im.gainItem(5062000,1);//����
				im.gainItem(5062002,1);//�߼�
				im.gainItem(5064003,1);//�����
				im.gainItem(2049137,1);//����40%
				im.gainItem(5220040,5);//ת��
				im.gainItem(4310143,10);//boss��
				im.gainItem(2430069,5,1);//��ĸ��
				im.gainItem(5076000, 1);//����
				im.sendOk("��ϲ����ȡ��Ʒ����ÿ�չ��ʣ����300����Ϸ�ҡ�11000���10��#b��ĸ�̳齱����#k��#b�������������� 40%�����汣��֮�ܡ��߼�����ħ������ʦ������ħ��������ħ�����������ᡢף�����ᡢ��������#kx1");
				im.worldSpouseMessage(0x20,"[�������] ����ϲ��� "+ im.getChar().getName() +" ͨ��������ƺ�����ȡÿ�չ��ʣ��������ħ����������Ľ��");
				im.dispose();
            } else {
                im.sendOk("ʧ�ܣ�\r\n\r\n#r1). ���Ѿ���ȡ�������������졣\r\n2). ����ǰ���߻��ֲ���180�㡣");
				im.dispose();
            }
            break;
        case 2:
           //if (im.getPlayer().getCSPoints(1) > 10000) { //��Ա�ȼ�
				im.dispose();
				im.openNpc(9900001,9);
           // } else {
            //    im.sendOk("����Ū���ء�����㻹��ʲô�����ٵ�ӵ��1����ſ���ʹ�á�");
			//	im.dispose();
           // }
            break;
		case 7:
           if (im.getBossLog("����") < 1) { //����
            	im.gainItem(5210004,1,1);
                im.gainItem(5210002,1,1);
				im.gainItem(5360015,1,1);
				im.setBossLog("����");
				im.sendOk("��ϲ����ȡ��Ʒ���ÿ��˫�����鿨�Լ�˫�����ʿ�.");
				im.worldSpouseMessage(0x20,"[�������] ����ϲ��� "+ im.getChar().getName() +" ͨ����ƺ�����ȡÿ��˫�����鿨�Լ�˫�����ʿ���������Ľ��");
				im.dispose();
            } else {
                im.sendOk("���Ѿ���ȡ�������������졣");
				im.dispose();
            }
            break;
		case 11:
			im.dispose();
			im.openNpc(9030100);
		/*
           if (im.getBossLog("����") < 1 && im.getPlayerPoints() > 180) { //����
            	im.gainPlayerPoints(200);
				im.setBossLog("����");
				im.sendOk("��ϲ����ȡVIP�����ÿ�ջ���200��.");
				im.worldSpouseMessage(0x20,"��������� ����� "+ im.getChar().getName() +" ������NPC����ȡÿ�ջ��� 200 �㡣");
				im.dispose();
            } else {
                im.sendOk("ʧ�ܣ�\r\n\r\n#r1). ���Ѿ���ȡ�������������졣\r\n2). ����ǰ����ʱ�䲻��180���ӡ�");
				im.dispose();
            }*/
            break;
		case 12:
			im.dispose();
			im.openNpc(9070000);
          /* if (im.getBossLog("����") < 1 && im.getPlayerPoints() > 180) { //����
            	im.gainPlayerEnergy(50);
				im.gainPlayerPoints(-180);
				im.setBossLog("����");
				im.sendOk("��ϲ����ȡVIP�����ÿ�ջ���50��.");
				im.worldSpouseMessage(0x20,"��������� ����� "+ im.getChar().getName() +" ������NPC����ȡÿ�ջ��� 50 �㡣");
				im.dispose();
            } else {
                im.sendOk("ʧ�ܣ�\r\n\r\n#r1). ���Ѿ���ȡ�������������졣\r\n2). ����ǰ���߻��ֲ���180�㡣");
				im.dispose();
            }*/
            break;
		case 4:
           if (im.getBossLog("���и�������") < 1) { //��������
				//im.resetEventCount("�齱");
				im.resetEventCount("����");
				im.resetEventCount("����");
				im.resetEventCount("����");
				im.resetEventCount("����");
				im.resetEventCount("����");
				im.resetEventCount("���");
				im.resetEventCount("���յ�");
				im.resetBossLog("���յ�");
				im.resetBossLog("mrdb");
				im.resetBossLog("��������");
				im.resetBossLog("��ͨ����");
				im.resetBossLog("��ͨ����");
				im.resetBossLog("���׺���");
				im.resetBossLog("��ͨƤ����");
				im.resetBossLog("�����˹");
				im.resetBossLog("Կ��");
				im.resetBossLog("����Կ��");
				im.resetBossLog("����Ƥ����");
				im.resetBossLog("����Ʒ����");
				im.resetBossLog("ϣ��˹");
				im.resetBossLog("Ʒ����");
				im.resetBossLog("ʨ����");
				im.resetBossLog("���ױ���");
				im.resetBossLog("��ͨ����");
				im.resetBossLog("��ͨѪ��Ů��");
				im.resetBossLog("����Ѫ��Ů��");
				im.resetBossLog("����Ѫ��Ů��");
				//im.resetBossLog("���ﰲ�ؾ�����");
				im.resetBossLog("���͵�");
				im.setBossLog("���и�������");
				im.sendOk("��ϲ��ʹ����Ʒ������������еĸ���.");
				im.worldSpouseMessage(0x20,"[�������] ����ϲ��� "+ im.getChar().getName() +" ͨ����ƺ���������ȫ����������������Ľ��");
				im.dispose();
            } else {
                im.sendOk("���Ѿ���ȡ�������������졣");
				im.dispose();
            }
            break;
		case 6:
          // if (im.getPlayer().getCSPoints(1) > 1000) { //��ѡ����
				//im.gainNX(-10000);
				im.dispose();
				im.openNpc(9900001, 10);
            //} else {
           //     im.sendOk("�����1000������ɶ��");
			//	im.dispose();
            //}
            break;
		case 13:
			im.dispose();
			im.openNpc(9310144);
            break;
		case 14:
			if (im.getMeso() >= 100000) {
				im.sendGetText("����10����Ϸ�ң���������Ҫ˵�Ļ���");
				typed = 14;
			} else {
				im.sendOk("��û��10����Ϸ�ң����ܽ������纰����");
				im.dispose();
			}
			break;
		case 15:
			im.dispose();
			im.openNpc(9030000);
			break;
        }
    } else if (status == 2) {
		if (typed == 14) {
			im.worldSpouseMessage(0x07, "[����]"+im.getPlayer().getMedalText()+im.getChar().getName()+" : "+im.getText());
			im.gainMeso(-100000);
			//im.dispose();
		}
		im.dispose();
	}
}
