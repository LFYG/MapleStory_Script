importPackage(net.sf.odinms.server.maps);

var status = 0;
var qty = -1;
var eff = "#fEffect/CharacterEff/1082565/2/0#";
var jl = java.lang.Math.floor(Math.random() * 100);
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);//������ڣ��������� 1 ��������ȥ���������� 7��
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var min = ca.get(java.util.Calendar.MINUTE);//��÷���
var sec = ca.get(java.util.Calendar.SECOND); //�����
var xq = "";

var item = new Array(2046825,//�����Ʒ����
                     2046826,//�����Ʒ����
					 2046827,//�����Ʒ����
					 2046828,//�����Ʒ����
					 2046817,//��Ʒ������
					 2046818,//��Ʒħ����
					 2046852,//���ұ�����Ʒ����
					 2046853,//���ұ�����Ʒ����
					 2046854,//���ұ�����Ʒ����
					 2046855//���ұ�����Ʒ����
                    );

var thing = new Array(

Array(Array(4001136, 70),Array(4021035, 2)),
Array(Array(4001136, 70),Array(4021035, 2)),
Array(Array(4001136, 70),Array(4021035, 2)),
Array(Array(4001136, 70),Array(4021035, 2)),
Array(Array(4001136, 30),Array(4021033, 2)),
Array(Array(4001136, 30),Array(4021033, 2)),
Array(Array(4001136, 50),Array(4021034, 2)),
Array(Array(4001136, 50),Array(4021034, 2)),
Array(Array(4001136, 50),Array(4021034, 2)),
Array(Array(4001136, 50),Array(4021034, 2))

);


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (weekday == 1){
	xq = "������";
	}
	if (weekday == 2){
	xq = "����һ";
	}
	if (weekday == 3){
	xq = "���ڶ�";
	}
	if (weekday == 4){
	xq = "������";
	}
	if (weekday == 5){
	xq = "������";
	}
	if (weekday == 6){
	xq = "������";
	}
	if (weekday == 7){
	xq = "������";
	}
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
		    cm.sendOk("�����ؿ��Ǻ��پ���!");
            cm.dispose();
            return;
        } else if (status <= 2 && mode == 0) {
            cm.sendOk("�´������Ҫ����װ����������Ŷ!");
            cm.dispose();
			return;
		} else if (status == 3 && mode == 0) {
            var prompt = "";
            var complete = true;
            for (var i = 0; i < thing[qty].length; i++) {
                if (!cm.haveItem(thing[qty][i][0], thing[qty][i][1])) {
                    complete = false;
                }
            }
            if (!complete || !cm.canHold(item[qty]) || cm.getMeso() < 1000000) {
                prompt += "�Բ�����û����������������ϸ��鱳����\r\n1.ȷ���Ƿ�������������Ĳ��ϡ�\r\n2.ȷ�ϱ����Ƿ����㹻�Ŀռ䡣\r\n3.ȷ���Ƿ���100W�����ѡ�";
            } else if (jl >= 0 && jl <= 25){
                for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1]);
                }
                cm.gainItem(item[qty], 1);
				cm.gainMeso( - 1000000);
                prompt += "������� >> #r#e�ɹ�#n#k\r\n\r\n�����ˣ�#b#v" + item[qty] + "##z" + item[qty] + "#��";
            } else {
			    for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1] / 2);
                }
				cm.gainMeso( - 1000000);
			    prompt += "������� >> #eʧ��#n\r\n\r\n����һ����ϡ�";
			}
            cm.sendOk(prompt);
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
		
        if (status == 0) {
		    if(weekday == 7 || weekday == 1){
            var smed = "";
            for (var i = 0; i < item.length; i++) {
                smed += "\r\n#L" + i + "##b#v" + item[i] + "##z" + item[i] + "##l";
            }
            cm.sendSimple("HI��~�����ĩ�ã�����������ʿ��ֻҪ��λ���㹻�Ĳ��ϣ��Ϳ�������������������Ҫ�ľ���������ö���Ŷ��~��ô�����Ķ��Ļ��͸Ͻ�����������ʲô����ɣ�~" + smed +"\r\n\r\n��#rע������������һ������ʧ�ܣ��Ӷ����һ���ֲ��ϣ�#k��");
			}else{
			cm.sendOk("�Բ��𣬴�����ֻ����ĩ���š�������#r"+ xq +"#k��");
			cm.dispose();
			}
        } else if (status == 1) {
            var prompt = "";
            prompt += "#v" + item[selection] + "##b#z" + item[selection] + "##k������Ҫ��\r\n";
            for (var m = 0; m < thing[selection].length; m++) {
                prompt += "#v" + thing[selection][m][0] + "##z" + thing[selection][m][0] + "# #b" + thing[selection][m][1] + " #k��\r\n";
            }
            prompt += "#r#v4001832##z4001832##k��������������װ�������ĳɹ��ʣ�";
            qty = selection;
            cm.sendYesNo(prompt);
		} else if (status == 2) {
		    qty = qty;
		    if (cm.haveItem(4001832)) {
            cm.sendYesNo("��⵽��ӵ��#r#e#v4001832##z4001832##n#k�����Ƿ�Ҫʹ������");
	    } else {
            var prompt = "";
            var complete = true;
            for (var i = 0; i < thing[qty].length; i++) {
                if (!cm.haveItem(thing[qty][i][0], thing[qty][i][1])) {
                    complete = false;
                }
            }
            if (!complete || !cm.canHold(item[qty]) || cm.getMeso() < 1000000) {
                prompt += "�Բ�����û����������������ϸ��鱳����\r\n1.ȷ���Ƿ�������������Ĳ��ϡ�\r\n2.ȷ�ϱ����Ƿ����㹻�Ŀռ䡣\r\n3.ȷ���Ƿ���100W�����ѡ�";
            } else if (jl >= 0 && jl <= 25){
                for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1]);
                }
				cm.gainMeso( - 1000000);
                cm.gainItem(item[qty], 1);
                prompt += "������� >> #r#e�ɹ�#n#k\r\n\r\n�����ˣ�#b#v" + item[qty] + "##z" + item[qty] + "#��";
            } else {
			    for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1] / 2);
                }
				cm.gainMeso( - 1000000);
			    prompt += "������� >> #eʧ��#n\r\n\r\n����һ����ϡ�";
			}
            cm.sendOk(prompt);
            cm.dispose();
			}
        } else if (status == 3) {
            var prompt = "";
            var complete = true;
            for (var i = 0; i < thing[qty].length; i++) {
                if (!cm.haveItem(thing[qty][i][0], thing[qty][i][1])) {
                    complete = false;
                }
            }
            if (!complete || !cm.canHold(item[qty]) || cm.getMeso() < 1000000) {
                prompt += "�Բ�����û����������������ϸ��鱳����\r\n1.ȷ���Ƿ�������������Ĳ��ϡ�\r\n2.ȷ�ϱ����Ƿ����㹻�Ŀռ䡣\r\n3.ȷ���Ƿ���100W�����ѡ�";
            } else if (jl >= 0 && jl <= 50){
                for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1]);
                }
                cm.gainItem(item[qty], 1);
				cm.gainMeso( - 1000000);
				cm.gainItem(4001832,-1);
                prompt += "������� >> #r#e�ɹ�#n#k\r\n\r\n�����ˣ�#b#v" + item[qty] + "##z" + item[qty] + "#��";
            } else {
			    for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1] / 2);
                }
				cm.gainMeso( - 1000000);
				cm.gainItem(4001832,-1);
			    prompt += "������� >> #eʧ��#n\r\n\r\n����һ����ϡ�";
			}
            cm.sendOk(prompt);
            cm.dispose();
        }
    }
}