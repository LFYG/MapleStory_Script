/*
 Ϧ��������Chinað�յ�
 ���ʱ�䣺2015��4��28�� 16:34:19
 �ű����ܣ����ε�ͼ
 */

var a = 0;
var selects;
var eff ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var BossList = Array(
        Array(eff+" "+"��������-��Ҷ��", 600000000),
		Array(eff+" "+"�Ŵ�����-������", 800000000),
		Array(eff+" "+"��������-��ɽ��", 702000000),
        Array(eff+" "+"��������-�Ϻ���̲",701000000),
		Array(eff+" "+"��������-���۱���", 702100000),
		Array(eff+" "+"��¡����-��������", 550000000),
		Array(eff+" "+"ˮ���г�-̩��", 500000000),
		Array(eff+" "+"��𽹬���", 541000200)
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
            var text = "�����Դ��͵����ε�ͼ��ף����Ϸ��죡\r\n#b"
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
