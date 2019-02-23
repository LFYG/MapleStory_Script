/* Joyce
	Event NPC
*/

var status = -1;
var maps = Array(
    910001000, //���ص�ͼ - רҵ������ׯ&lt;���˽�>
    230000000, //ˮ������ - ˮ������
    260000000, //����֮· - ���ﰲ��
    101000000, //ħ������ - ħ������
    211000000, //���ص� - ����ѩ��
    120030000, //�ƽ�̲ - ���߹���
    130000200, //Ů��֮· - ʥ�ز�·
    100000000, //���ִ� - ���ִ�
    103000000, //�������� - ��������
    222000000, //ʱ�侲ֹ֮�� - ͯ����
    240000000, //��ľ�� - ��ľ��
    104000000, //����� - �����
    220000000, //��߳� - ��߳�
    802000101, //���֮�� - ��ķ�� ���ڲ���
    120000000, //ŵ����˹ - ŵ����˹��ͷ
    221000000, //ʱ�侲ֹ֮�� - �����������
    200000000, //���ص� - ���֮��
    102000000, //��ʿ���� - ��ʿ����
    300000000, //����ɭ�� - ����̩Ӫ��
    801000000, //�Ѻʹ� - �Ѻʹ�
    540000000, //�¼��� - ����������
    541000000, //�¼��� - ������ͷ��
    250000000, //���� - ����
    251000000, //�ٲ��� - �ٲ���
    551000000, //�������� - �ʰ��
    550000000, //�������� - ��¡���� 
    261000000, //ɯ��С�� - �������
    541020000, //�¼��� - ��³�����
    270000000, //ʱ����� - ������
    682000000, //���ص�ͼ - �ֹ�լۡ�ⲿ
    140000000, //��ѩ֮�� - ���
    970010000, //���ص�ͼ - ����ɽ��
    103040000, //�϶��㳡 - �϶��㳡����
    555000000, //M�� - ��ɫʥ��ɽ��
    310000000, //��ɫ֮����� - ���¶�˹̹
    200100000, //����еĿ����� - ���������
    211060000, //ʨ����֮�� - ����ԭҰ
    310040300, //��· - ��ʯ·
    701000000);//�Ϻ���̲
var pqMaps = Array(
    101020100,
    102030000,
    102030400,
    551000200,
    600020300,
    240020400,
    240030000,
    541020000,
    541020200,
    541020500,
    220060000,
    240040510,
    541000300, //�¼��� - ����ͨ�� 3 �ȼ���85-100
    220050300, //��߳� - ʱ��ͨ��
    229000020, //�ֹ�լۡ - �ͷ�2
    230040200, //ˮ������ - Σ��Ͽ��1
    541010010, //�¼��� - ���鴬 2
    551030100, //�������� - ��ɭ�������
    240040500, //��ľ�� - ��֮��Ѩ���
    800020110, //������ - ��Ұ������
    105030500, //���������Ժ - ���ɼ�̳
    102040200, //�ż������ - �ż�������Ӫ��
    105100100, //�������� - ��Ժ����
    211041100, //����ɭ��
    270030500); //��ȴ֮·5

var selectedMap = -1;
var selectedArea = -1;


var dsa = "";

var mmd = "";


function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2 || status == 0) {
            cm.dispose();
            return;
        }
        status--;
        cm.dispose();
    }

    if (status == 0) {

        mmd = "#r ���������T��#i4251202##r   ��ݴ���   #i4251202# #r��T�������� \r\n\r\n";

       dsa += "#r ���������T��#i4251202##r   ��ݴ���   #i4251202# #r��T�������� \r\n\r\n#r��ѡ������Ҫ�Ĵ��ͷ���:\r\n#b#L0#������#l\r\n#L1#���⴫��#l\r\n#L2#��Ԫ����#l#k";
       var name = cm.getVipname();
       var dsas = dsa;

        if (cm.getVip() > 0 || cm.getChar().getAccountID()==1) {

               dsa += "\r\n#L4#VIP���ɵ�ͼ#l"; //\r\n#L3#���ɵ�ͼ#l

       }

            dsas += "\r\n\#r#L10#���͵�����ʥ��---���﹫԰#l\r\n  \r\n";

            cm.sendSimple(dsas); //\r\n#L3#���ɵ�ͼ#l
       




    } else if (status == 1) {
        var selStr = "��ѡ������Ŀ�ĵ�: #b";
        if (selection == 0) {
            for (var i = 0; i < maps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + maps[i] + "# #l";
            }
      } else if (selection == 1) {
            for (var i = 0; i < pqMaps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + pqMaps[i] + "# #l";
            }
        } else if (selection == 2) {
            cm.dispose();
            cm.openNpc(9010022);
            return;
        } else if (selection == 3) {
            cm.dispose();
            cm.openNpc(9070007);
            return;
        } else if (selection == 4) {
            for (var i = 0; i < pqMaps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + pqMaps[i] + "# #l";
            }
        } else if (selection == 10) {
           cm.warp(951000000);

           selStr = mmd + "���Ѿ��������͵��˹��﹫԰��";
           cm.dispose();
        }


        selectedArea = selection;
        cm.sendSimple(selStr);
    } else if (status == 2) {
        cm.sendYesNo(mmd + "#d��ȷ��Ҫ�ƶ���   #r#m" + (selectedArea == 0 ? maps[selection] : pqMaps[selection]) + "#  #d��");
        selectedMap = selection;
    } else if (status == 3) {
        if (selectedMap >= 0) {
            cm.warp(selectedArea == 0 ? maps[selectedMap] : pqMaps[selectedMap], 0);
        }
        cm.dispose();
    } else if (status == 6) {
        if (selection == 1) {
            if (cm.getPlayer().getSkillLevel(8) > 0 || cm.getPlayer().getSkillLevel(10000018) > 0 || cm.getPlayer().getSkillLevel(20000024) > 0 || cm.getPlayer().getSkillLevel(20011024) > 0) {
                cm.sendOk("���Ѿ�ѧϰ��������ܡ�");
            } else {
                if (cm.getJob() == 2001 || (cm.getJob() >= 2200 && cm.getJob() <= 2218)) {
                    cm.teachSkill(20011024, 1, 0); // ���� - Ⱥ��
                } else if (cm.getJob() == 2000 || (cm.getJob() >= 2100 && cm.getJob() <= 2112)) {
                    cm.teachSkill(20000024, 1, 0); // ս�� - Ⱥ��
                } else if (cm.getJob() >= 1000 && cm.getJob() <= 1512) {
                    cm.teachSkill(10000018, 1, 0); // ��ʿ�� - Ⱥ��
                } else {
                    cm.teachSkill(8, 1, 0); // ð�ռ� - Ⱥ��
                }
                cm.sendOk("��ϲ��ѧϰ���ܳɹ���");
            }
            cm.dispose();
        } else if (selection == 4) {
            if (cm.getPlayer().getSkillLevel(80001000) > 0) {
                cm.sendOk("���Ѿ�ѧϰ��������ܡ�");
            } else {
                if (cm.getJob() >= 3000) {
                    cm.sendOk("�Բ��𣡸�ְҵ��ʱ�޷�ѧϰ������ܡ�");
                    cm.dispose();
                    return;
                }
                cm.teachSkill(80001000 ,  1, 1);
                cm.sendOk("��ϲ��ѧϰ���ܳɹ���");
            }
            cm.dispose();
        } else if (selection == 5) {
            cm.openShop(2060003);
            cm.dispose();
        }
    }
}