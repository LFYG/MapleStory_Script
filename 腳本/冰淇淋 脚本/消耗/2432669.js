var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//����

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
        var selStr = "#e#r������ѡ������ķ���,ѡ�����Ը�#k#n\r\n";
		selStr += "#L1##b"+z+" ����˫ͷ�� ҹ�ⷨʦ#l\r\n";
		selStr += "#L2##b"+z+" ���������� ��������#l\r\n";
		selStr += "#L3##b"+z+" ���ж�ħ�� ��ħ������#l\r\n";
		selStr += "#L4##b"+z+" ���������� ���#l\r\n";
		selStr += "#L5##b"+z+" ���н� ���ֽ�#l\r\n";
		selStr += "#L6##b"+z+" ���и� ���ָ�#l\r\n";
		selStr += "#L7##b"+z+" ���д� ���ֶ���#l\r\n";
		selStr += "#L8##b"+z+" ����ذ�� ˫������#l\r\n";
		selStr += "#L9##b"+z+" ���е� ˫������#l\r\n";
		selStr += "#L10##b"+z+" �������� ��Ӱ����#l\r\n";
		selStr += "#L11##b"+z+" ���ж��� ��ʦ����#l\r\n";
		selStr += "#L12##b"+z+" ���г��� ��ʦ����#l\r\n";
		selStr += "#L13##b"+z+" ����˫�ֽ� սʿ˫�ֽ�#l\r\n";
		selStr += "#L14##b"+z+" ����˫��ս�� սʿ˫�ָ�#l\r\n";
		selStr += "#L15##b"+z+" ���о޴� սʿ˫�ֶ���#l\r\n";
		selStr += "#L16##b"+z+" ����ì սʿǹ#l\r\n";
selStr += "#L17##b"+z+" ����� սʿì#l\r\n";
selStr += "#L18##b"+z+" ���й� ���ֹ�#l\r\n";
selStr += "#L19##b"+z+" ������ ������#l\r\n";
selStr += "#L20##b"+z+" ����ȭ�� ����ȭ��#l\r\n";
selStr += "#L21##b"+z+" ���г�ȭ ����ָ��#l\r\n";
selStr += "#L22##b"+z+" ������� ������ǹ#l\r\n";
selStr += "#L23##b"+z+" ����˫����� ˫��#l\r\n";
selStr += "#L24##b"+z+" �������� ��������#l\r\n";
selStr += "#L25##b"+z+" ���л���ħ���� ��֮��#l\r\n";
        im.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
		case 1:
            	im.gainItem(1212089,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ������ѡ���ӻ����������ѡ������");
				im.dispose();
            break;
		case 2:
            	im.gainItem(1222084,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
			case 3:
            	im.gainItem(1232084,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
			case 4:
            	im.gainItem(1242090,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
			case 5:
            	im.gainItem(1302297,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
			case 6:
            	im.gainItem(1312173,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
			case 7:
            	im.gainItem(1322223,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
			case 8:
            	im.gainItem(1332247,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
			case 9:
            	im.gainItem(1342090,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
			case 10:
            	im.gainItem(1362109,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
			case 11:
            	im.gainItem(1372195,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
			case 12:
            	im.gainItem(1382231,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
			case 13:
            	im.gainItem(1402220,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
			case 14:
            	im.gainItem(1412152,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
			case 15:
            	im.gainItem(1422158,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
			case 16:
            	im.gainItem(1432187,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
			case 17:
            	im.gainItem(1442242,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
			case 18:
            	im.gainItem(1452226,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
			case 19:
            	im.gainItem(1462213,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
			case 20:
            	im.gainItem(1472235,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
			case 21:
            	im.gainItem(1482189,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
			case 22:
            	im.gainItem(1492199,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
			case 23:
            	im.gainItem(1522113,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
			case 24:
            	im.gainItem(1532118,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
			case 25:
            	im.gainItem(1252033,1);
				im.gainItem(2432669,-1);
                im.worldMessage( "����ѡ���ӡ� : ��ϲ " + im.getPlayer().getName() + " ͨ����ֵ�������ӻ����������ѡ������");
				im.dispose();
            break;
        }
    }
}
