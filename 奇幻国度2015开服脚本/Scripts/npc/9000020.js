status = -1;
var maps = [500000000, 702000000, 800000000, 600000000, 540000000, 550000000];
var townText = [["#b̩����ˮ���г�#k����ѵ�����ʤ�ء�ˮ���г�����������ˬˬ�ĺӱߡ��ȴ����ֺ�̩���Ĵ�ͳ�������ϣ�������������������顣", "��������עĿ���ǣ���������С���ﴩԽˮ���г����γ���һ�����صķ羰���Ǻ����ǳ���ȥ��Ȼ�ʹ�ͳ��ʤ�� #b̩����ˮ���г�#k��"], ["#b������#k���й�������������Զ�����ѧ��֮�����������ҡ�������ֹ��������޵У�ȭ�ţ�����������ͨ��", "����ϰ��֮�˿�������ֽ���ѧ��������������������ɽɽ�����������ƺ�֮�У�����ʤ�ա�����׼�����˰� #b������#k�������أ�"], ["#b�ձ��Ŵ�����#k���ձ����ƾõ���ʷ���������͵Ĵ���ά���Ŵ���ĺ�ƽ��", "���˺þ����ڿ��Ե��ձ�����һ�������ɫ���Ļ��� #b�ձ��Ŵ�����#k�������أ�"], ["#b��Ҷ����#k��ŷʽ�����������ִ����Ľ���Ⱥ�����ص������⡣", "��̩�����ձ���Ⱦ�����ȫ��ͬ��������顣 ��ȥ#b��Ҷ��#k�����µ��ó̰ɣ�"], ["��������һ��#b�¼��µ�����������#k��", "�¼��¿������ˣ��������ơ������ͬʱ���Գ������ּ���Ȼ���������ȥ�������ô���������ȫ��������������������������ͷ����³�ǣ�"], ["����ȥ#b��������#k��һ�λ��ֵ�����ô��","�������� �������ˣ��������ơ���˵���к�����������԰�ޡ�ף����;��죡"]];
var selectedMap = -1;
var sCost;

function start() {
    action(1,0,0);
}

function action(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (mode == 0 && status == 4) {
            status -= 3;
        } else {
            cm.dispose();
            return;
        }
    }
    if (cm.getPlayer().getMapId() != 950000000 && cm.getPlayer().getMapId() != 701000000) {
        if (status == 0) {
            cm.sendSimple("������ð���γ���?\r\n#b#L0# �Ѿ������ˣ���ص����μ�ɢ���ġ�#l");
        } else if (status == 1) {
            if (selection == 0) {
                var map = cm.getSavedLocation("WORLDTOUR");
                if (map == undefined)  {
                    map = 950000000;
                }
            cm.clearSavedLocation("WORLDTOUR");
            cm.warp(map, parseInt(Math.random() * 5));
            cm.dispose();
            }
        }
    } else {
        if (status == 0) { 
            var selStr = "Ϊ�˴ӷ�æ���ճ��н��ѣ�ȥ����һ��������ô������������������ӱ������Ļ�������ѧ�����ٶ����Ļ��ᣡ����ð�յ����ι�˾Ϊ��׼���ˣ��ḻ��Ȥ��#b��������#k�ײ͡�˭˵��������ܹ����һ����ġ�";
            if (cm.isBeginnerJob()) {
                selStr += "�����ر�Ϊ���ִ��ۣ�ֻҪ#b300���#k��������ȫ�̡�";
            } else {
                selStr += "���ǵ�#bð�յ����������ײ�#kֻ��Ҫ#b3000���#k�Ϳ�������ȫ�̡�";
            }
            cm.sendNext(selStr);
        } else if (status == 1) { 
            cm.sendSimple("���ھͿ���ȥ�� #b������س���ð�յ���ɫ�ľ���#k����һ������ÿ�����ε��Ҷ���Ϊ����ṩ�����ȳϵķ�����ô��׼���ã����ǳ���ȥ\r\n#b#L0# ˮ���г���̩����#l\r\n#L1# �����£��й���#l\r\n#L2# �Ŵ����磨�ձ���#l\r\n#L3# ��Ҷ�ǣ�ŷ����#l\r\n#b#L4# �������������¼��£�#l\r\n#b#L5# ��¡���У��������ǣ�#l");
        } else if (status == 2) {
            if (selectedMap == -1) {
                selectedMap = selection;
            }
            townText[selectedMap][status-2] == undefined ? cm.dispose() : cm.sendNext(townText[selectedMap][status-2]);
        } else if (status == 3) {
            townText[selectedMap][status-2] == undefined ? cm.dispose() : cm.sendNextPrev(townText[selectedMap][status-2]);
        } else if (status == 4) {
            sCost = (cm.isBeginnerJob() ? 300 : 3000);
            if (cm.getMeso() < sCost) {
                cm.sendNext("�����û���㹻�Ľ�ң������Ļ����Ҳ���Ϊ�����");
                cm.dispose();
                return;
            }
            cm.gainMeso(- sCost);
            cm.saveLocation("WORLDTOUR");
            cm.warp(maps[selectedMap]);
            cm.dispose();
        }
    }
}