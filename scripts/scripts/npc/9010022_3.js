/*
 Ϧ��������Chinað�յ�
 ���ʱ�䣺2015��4��28�� 16:34:19
 �ű����ܣ�������ͼ
 */

var a = 0;
var selects;
var eff ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var BossList = Array(
        Array(eff+" "+"[�н�]���ִ塪��԰", 100000202),
		Array(eff+" "+"[�н�]��߳ǡ�ѵ����", 220000006),
	    Array(eff+" "+"[��]�̿�ɭ��", 910130000),
        Array(eff+" "+"[��]��¥��¥", 109030001),
        Array(eff+" "+"[����]���ص�����ɽ����", 280020000),
		Array(eff+" "+"[����]��ߵء��ĸ��׶�", 109040001),
		Array(eff+" "+"[ج��]�������� B-1", 910360000),
		Array(eff+" "+"[ج��]�������� B-2", 910360100),
		Array(eff+" "+"[ج��]�������� B-3", 910360200)
        )

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            var text = "�����Դ��͵��������ֵ�ͼ��ף����Ϸ��죡\r\n#b"
            for (var i = 0; i < BossList.length; i++) {
                text += "#L" + i + "# " + BossList[i][0] + "\r\n"
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
            cm.sendYesNo("�������������" + BossList[selects][0] + "��")
        } else if (a == 2) {
            cm.saveLocation("MULUNG_TC");
            cm.warp(BossList[selects][1], 0)
            cm.dispose();
        }//a
    }//mode
}//f
