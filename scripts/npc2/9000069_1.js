var status = -1;
var newJob;
var newJobName;
var possibleJobs = new Array();

function start() {
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
        if (mode == 1) {
            status++;
        } else {
            if (status == 1) {
                cm.sendNext("�������Ҫ����תְ�����Ļ�����ô���´������ң�");
                cm.dispose();
                return;
            }
            status--;
        }
        if (status == 0) {
            /*
             * �ж�ְҵID: 
             * 0 - ���� 
             * 1000 - ��ʿ�� 
             * 2000 - սͯ 
             * 3000 - Ԥ����
             */
            if (cm.getPlayer().getJob() == 0 || cm.getPlayer().getJob() == 1000 || cm.getPlayer().getJob() == 2000 || cm.getPlayer().getJob() == 3000) {
                for (var i = 1; i < 5; i++) {
                    possibleJobs.push(0 + 100 * i); //ְҵID: 100 200 300 400
                }
                possibleJobs.push(430); // ��ϰ����
                possibleJobs.push(501); // ��������
                possibleJobs.push(508); // ���Ĵ���
                possibleJobs.push(509); // ����(��)
                for (var i = 1; i < 6; i++) {
                    possibleJobs.push(1000 + 100 * i); // ְҵID: 1100 1200 1300 1400 1500
                }
                for (var i = 1; i < 4; i++) {
                    possibleJobs.push(2000 + 100 * i); // ְҵID: 2100 2200 2300
                }
                for (var i = 1; i < 4; i++) {
                    possibleJobs.push(3000 + 100 * i); // ְҵID: 3100 3200 3300
                }
                possibleJobs.push(3500); // ��еʦ
            /*
             * �ȼ�����69��
             * isValidJob �Ǽ�⵱ǰְҵID + 2 ���ְҵ�ڷ�����Ƿ����
             */
            } else if (cm.getPlayer().getLevel() > 69 && cm.isValidJob(cm.getPlayer().getJob() + 2)) {
                possibleJobs.push(cm.getPlayer().getJob() + 1); // ��ӵ�ǰְҵID�ı������ + 1
            /*
             * �ȼ�����119��
             * isValidJob �Ǽ�⵱ǰְҵID + 1 ���ְҵ�ڷ�����Ƿ����
             */
            } else if (cm.getPlayer().getLevel() > 119 && cm.isValidJob(cm.getPlayer().getJob() + 1)) {
                possibleJobs.push(cm.getPlayer().getJob() + 1); // ��ӵ�ǰְҵID�ı������ + 1
            /*
             * �ȼ�����29��
             */
            } else if (cm.getPlayer().getLevel() > 29) {
                switch (cm.getPlayer().getJob()) {
                    case 100: // սʿ
                    case 200: // ħ��ʦ
                        possibleJobs.push(cm.getPlayer().getJob() + 10);
                        possibleJobs.push(cm.getPlayer().getJob() + 20);
                        possibleJobs.push(cm.getPlayer().getJob() + 30);
                        break;
                    case 300: // ������
                    case 400: // ����
                        possibleJobs.push(cm.getPlayer().getJob() + 10);
                        possibleJobs.push(cm.getPlayer().getJob() + 20);
                        break;
                    case 430: // ��ϰ����
                        possibleJobs.push(cm.getPlayer().getJob() + 2);
                        break;
                    case 501: // ��������
                        possibleJobs.push(cm.getPlayer().getJob() + 30);
                        break;
                    case 508: // ���Ĵ���1ת
                        possibleJobs.push(570);
                        break;
                    case 509: // ���� ��ְҵID
                        possibleJobs.push(580);
                        possibleJobs.push(590);
                        break;
                    case 1100: // ����ʿ
                    case 1200: // ����ʿ
                    case 1300: // ����ʹ��
                    case 1400: // ҹ����
                    case 1500: // ��Ϯ��
                    case 2100: // ս��
                    case 2200: // ����
                    case 2300: // ˫����:
                    case 3100: // ��ħ����
                    case 3200: // ���鶷ʦ
                    case 3300: // ������
                    case 3500: // ��еʦ
                        possibleJobs.push(cm.getPlayer().getJob() + 10);
                        break;
                    default:
                        break;
                }
            }
            if (possibleJobs.length == 0) { // ���ְҵ�б��Ƿ���ڿ���תְ��ѡ��
                cm.sendOk("�������Ѿ�ͨ����ȫ����תְ�ˣ����ð��������ô����������������ĵ��£�ЦЦ�͹��ˡ��Ժ��кܶ����������ȥ��ԡ�");
                cm.dispose();
            } else {
                var text = "��ȷ��Ҫתְ��(��ħ/˫��/��.../�Զ�תְҵ.)\r\n������ѡ��...#b";
                for (var j = 0; j < possibleJobs.length; j++) {
                    text += "\r\n#L" + j + "#" + cm.getJobNameById(possibleJobs[j]) + "#l";
                }
                cm.sendSimple(text);
            }
        } else if (status == 1) {
            newJob = possibleJobs[selection]; // ���浱ǰѡ��תְ��ID
            newJobName = cm.getJobNameById(possibleJobs[selection]); // ��ȡѡ��תְ��ID������
            if (cm.isValidJob(newJob)) { // ���ְҵ�Ƿ����
                cm.sendYesNo("��ȷ�����Ҫתְ��Ϊ #b" + newJobName + "#k ��");
            } else {
                cm.sendNext("��ǰѡ���ְҵID: " + newJob + " ����");
                cm.dispose();
            }
        } else if (status == 2) {
            cm.worldMessage("[תְ����] ��ϲ��� " + cm.getName() + " תְΪ " + newJobName + " ��");
            cm.changeJob(newJob);
            cm.dispose();
        }
    }
}