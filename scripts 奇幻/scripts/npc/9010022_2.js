/*
 Ϧ��������Chinað�յ�
 ���ʱ�䣺2015��4��28�� 16:34:19
 �ű����ܣ�������ͼ
 */

var a = 0;
var selects;
var eff ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var BossList = Array(
        Array(eff +" "+"[��ͭ] ����ţ [�Ƽ�:1 -10��],��ţ�ǻ���ɫ����", 50000),
        Array(eff +" "+"[��ͭ] ��ˮ�� [�Ƽ�:10-20��]", 101020100),
		Array(eff +" "+"[����] ʯͷ�� [�Ƽ�:20-30��]", 100040300),
		Array(eff +" "+"[����] С���� [�Ƽ�:40-50��]", 103020300),
        Array(eff +" "+"[�ƽ�] ������ [�Ƽ�:50-70��],����̥���Ͻ�����", 540020100),
		Array(eff +" "+"[�ƽ�] ��е�� [�Ƽ�:80-90��]", 600020300),
        Array(eff +" "+"[�׽�] ���鴬 [�Ƽ�:90-99��],�̾�����ר������", 541010010),
        Array(eff +" "+"[�׽�] ������ [�Ƽ�:100-120��],���۲ݻ���װ", 240010400),
        Array(eff +" "+"[��ʯ] ������ [�Ƽ�:120-140��]", 251010403),
		Array(eff +" "+"[��ʯ] ׷��· [�Ƽ�:140-160��],�����һ���װ", 270010500),
		Array(eff +" "+"#r[��ʦ] ������� [�Ƽ�:160-180��],���Ǳһ���װ", 703001000),
		Array(eff +" "+"#r[��ʦ] �߼���ʿ [�Ƽ�:180-200��]", 271030500),
        Array(eff +" "+"#d[����] ����Ұ�� [�Ƽ�:200-220��]", 273030000),
        Array(eff +" "+"#d[����] ����ʯͷ [�Ƽ�:220-250��]", 273060300)
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
            var text = "�����������ﴫ�͵�������ͼ��ף����Ϸ��죡\r\n#b"
            for (var i = 0; i < BossList.length; i++) {
                text += "#L" + i + "# " + BossList[i][0] + "\r\n"
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
            cm.sendYesNo("���������"+" "+ BossList[selects][0] + "��")
        } else if (a == 2) {
            cm.saveLocation("MULUNG_TC");
            cm.warp(BossList[selects][1], 0)
            cm.dispose();
        }//a
    }//mode
}//f
