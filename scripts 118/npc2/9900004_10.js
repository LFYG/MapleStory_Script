/*	��ֵ���һ��н�	*/

var status = -1;
var Space = 0;
var beauty = 0;
var Scount = 0;
var pay = Array(100, 300, 600, 1000);
var count = Array(200, 800, 1600, 2600);


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
            if (status == 1) { //���Ƿ�ťʱѡ������ʾ
                cm.sendNext("�������Ҫ��ֵ���һ���#v4000463#�������ҵĻ�����ô���´������ң�");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            var selStr = "�װ���#b#h ##k���ã�����ð�յ���ҵ���ֵ�һ�Ա������������ϢΪ:\r\n��ֵ���:#r " + cm.getHyPay(1) + " #kԪ �����ѽ��:#r " + cm.getHyPay(2) + " #kԪ �ۼƳ�ֵ�ܽ��:#r " + cm.getHyPay(3) + " #kԪ";
            for (var i = 0; i < pay.length; i++) {
                selStr += "\r\n#b#L" + i + "#�һ��н�(" + pay[i] + "Ԫ ==> " + count[i] + "��#v4000463#��������)";
            }
            cm.sendSimple(selStr);
        } else if (status == 1) {
            if (cm.getHyPay(1) == 0) {
                cm.sendNext("��û�пɶһ��ĳ�ֵ��");
                cm.dispose();
            } else {
                beauty = pay[selection]; //��ȡѡ��Ľ������
                Scount = count[selection]; //��ȡѡ��һ�������
                Space = Math.floor(count[selection] / 200); //��������200����1���н� ȡ���ֵ
                if (cm.getHyPay(1) < beauty) { //����Ƿ�����ô���ֵ
                    cm.sendNext("����ֵ���� " + beauty + " Ԫ��");
                    cm.dispose();
                } else if (cm.getSpace(4) < Space) { //��������������ռ��Ƿ�����ô��
                    cm.sendNext("�����ռ䲻�����뽫�������ճ� " + Space + " ��λ�á�");
                    cm.dispose();
                } else {
                    cm.sendYesNo("���Ƿ�Ҫ��#r " + beauty + " #kԪ�ĳ�ֵ���һ���#b " + Scount + " #k��#v4000463#�������ҡ�");
                }
            }
        } else if (status == 2) {
            if (beauty < 100 || Scount == 0) { //���ѡ���ȡ���Ƿ����
                cm.sendNext("�һ��н���ִ����뷴��������Ա��");
            } else if (cm.getSpace(4) < Space) { //��������������ռ��Ƿ�����ô��
                cm.sendNext("�����ռ䲻�����뽫�������ճ� " + Space + " ��λ�á�");
            } else if (cm.getHyPay(1) < beauty) { //����Ƿ�����ô���ֵ
                cm.sendNext("����ֵ���� " + beauty + " Ԫ��");
            } else if (cm.addHyPay(beauty) > 0) { //����Ƿ����ѳɹ�
                cm.gainItem(4000463, Scount);
                cm.sendOk("��ϲ���ɹ��һ�#b " + Scount + " #k��#v4000463#�������ң����ζһ����ѳ�ֵ���#r " + beauty + " #kԪ����Ŀǰ�ĳ�ֵ���Ϊ:#r " + cm.getHyPay(1) + " #kԪ��");
            } else {
                cm.sendOk("�һ��н���ִ����뷴��������Ա��");
            }
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}
