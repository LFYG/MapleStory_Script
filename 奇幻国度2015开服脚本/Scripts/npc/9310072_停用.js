var status;
var text;
var taskid = 140001;
var package1 = 2431091; //������ֵ���������
var package2 = 2431092; //���ⳬֵ���������
var waitMap = 310030210; // �ȴ���ͼ
var changeJobMap = 913051200;   // תְ��ͼ
var payurl = "http://www.baidu.com";

var package1_list = new Array(
                        Array(2431091, 100),
                        Array(2431091, 100),
                        Array(2431091, 100),
                        Array(2431091, 100)
                        );
var package2_list = new Array(
                        Array(2431091, 100),
                        Array(2431091, 100),
                        Array(2431091, 100),
                        Array(2431091, 100)
                        );

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
        else {
            cm.dispose();
            return;
        }

        if (cm.getBossLog("������") > 0) {
            cm.dispose();
            return;
        }

        if (status == 0 && cm.getBossLog("���ֲ���ţ����") > 0) {
            status = 1;
        }

        if (status == 0) {
            var rank = cm.getRanking("����ţ����").iterator();
            text = "\t\t\t\t- ����ţ�������а� -\r\n\r\n";
            text += "����\t�����\t\t����\r\n";
            var i = 1;
            while(rank.hasNext()) {
                var cid = rank.next();
                var light = cid.name == cm.getPlayer().getName();
                text += (light ? "#g" : "") + i + "\t" + cid.name + "\t\t" + cid.value + (light ? "#k" : "");
                i++;
            }
            //cm.setBossLog("���ֲ���ţ����", true);
            cm.sendNextS(text, 1);
        } else if (status == 1) {
            //text = "��ϲ���Ѿ�������Ϊ���ǵ�һԱ������������#b#z" + package1 + "##k��ף����Ϸ��죡��������ֵһԪ���ɻ��#r#z" + package2 + "##k��\r\n\r\n#b";
            text = "��ϲ���Ѿ�������Ϊ���ǵ�һԱ�������� #e#r��ҳ�1��Ǯ�𣿸ҳ��Ҿ͸������漶�����������#k#n\r\n\r\n";
            for (var i = 0; i < 10; i++) {
                if (i != 9) {
                    text += "#L" + i + "##r#e������ս��ֵ1��Ǯ��#l#n\r\n";
                } else {
                    text += "#L" + i + "##b��������ս#l\r\n";
                }
            }
            cm.sendSimpleS(text, 1);
        } else if (status == 2) {
            cm.gainItem(package1, 1);
            cm.gainItem(package2, 1);
            //cm.setBossLog("������", true);
            if (selection != 9) {
                cm.openWeb(payurl);
                cm.sendNextS("������ת��ֵҳ�棬��ֵ��Ϻ�����һ������", 1);
            } else {
                cm.sendYesNo("��ô�Ƿ�׼��ǰ��תְ��ͼ�أ�");
            }
        } else if (status == 3) {
            cm.warp(waitMap);
            cm.getPlayer().startMapTimeLimitTask(10, cm.getMap(changeJobMap));
            cm.dispose();
            if (cm.getRMB() > 1) {
                cm.gainRMB(-1);
                cm.setBossLog("�׳�һԪ���", true);
                cm.worldBrodcastEffect(5121037, "[ϵͳ����] : ���[" + cm.getName() + "]��ȡ��1Ԫ�׳����~");
                cm.worldMessageYellow("[ϵͳ����] : ���[" + cm.getName() + "]��ȡ��1Ԫ�׳����~");
                cm.sendOk("��л���Ŀ������ң����Դ򿪱���ʹ������ˣ���������ǰ��תְ��ͼ��");
            } else {
                cm.sendOk("����ѷ��ͣ����ڱ�������գ���������ǰ��תְ��ͼ��");
            }
        }
    }
}