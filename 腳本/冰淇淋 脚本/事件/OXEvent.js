/*
 * �˲����� ���ð�յ�����������
 * ��ϵQQ��537050710
 * ��ӭ���Ƹ��ֽű�
 * OX�ʴ𸱱�
 */
var questions = new Array("��������������������裿\r\nO:����\tX:����", //false,
        "����������ˮ���ݸ��ã�\r\nO:��ˮ\tX:��ˮ", //true,
        "�������ֲ�ϵ�������й��˴��ϵ֮�У�\r\nO:����\tX:��", //true,
        "�ƹϲ�������������ʳ����䣿\r\nO:����\tX:����", // true,
        "�ƺ�¥��ʲô�ط���\r\nO:�人\tX:����", //true,
        "��������������ڼ�������\r\nO:����\tX:����", //false,
        "��Ӱ���߼��紫��������\r\nO:��������\tX:������", //true
        "���ÿɰ���\r\nO:�ɰ�\tX:�ǳ��ɰ�", //false
        "GTO������ʦ���������͵ģ�\r\nO:����\tX�����͵��Ӿ�", //false
        "ҹ���г�Զ������ʲôӰ�죿\r\nO:��������ä\tX:����Ӱ��", //true
        "��������С������ʲô��\r\nO:����\tX:С����", //true
        "�������ܵ�������ʲô��\r\nO:��Ǯ��\tX:����", //false
        "��г�Ÿ������ʱ���ܴﵽ���٣�\r\nO:300\tX:500", //false
        "���ն�����ʲô��\r\nO:����\tX:�ܳ�", //false
        "LOL��Ĵ�����ȫ����ʲô��\r\nO:��ʲ�о�\tX:�޵д���", //true
        "ð�յ���ֻ��ð�ռ�һ�ַ�ʦ��\r\nO:��\tX:����", //false
        "ʱ��100������������ƶ���Ҫ�����ͣ��\r\nO:40-45��\tX:50-60��", //true
        "LOL��Ķ�����ʹ��ʲô��\r\nO:����ʹ\tX:Ī����", //false
        "�ϻ�����ʲô�ද�\r\nO:è�ƶ���\tX:���ж���", //true
        "����Ϊʲô����ģ�\r\nO:������Ϊ��\tX:������Ϊ��", //true
        "һֱ��ģ����δ����Խ��Ϊɶ��\r\nO:̫����\tX:������ģ�²��˵�", //false
        "����?D?·�ɵ�үү��ʲô��\r\nO:����?D?����\tX:����?D?������", //true
        "����?D?·�ɸ�˭ѧ��İ�����\r\nO:���ź����\tX:ڤ������", //false
        "���������ǣ�\r\nO:ģ��\tX:�ձ�Ů��", //false
        "�й�����λ�����\r\nO:�Ĵ�\tX:����", //true
        "ë�󶫹��������\r\nO:��ɳ\tX:��̶", //false
        "��¡ˮ����԰�����\r\nO:����\tX:����" //true
        );
var answers = new Array(false, true, true, true, true, false, true, false, false, true, true, false, false, false, true, false, true, false, true, true, false, true, false, false, true, false, true);

var asked = new Array();//�ж��Ѿ��ش�ĸ���
var currentQuestion;
var eim;
var mapidPre = 910048000;//׼����ͼ
var mapid = 910048100;//���е�ͼ
var map;
var setupTask;
var setupTaskEvent;

function init() {
    scheduleNew();
    eim = em.newInstance("OXEvent")
    map = eim.getMapInstance(mapid);
    ResetProperty();
}

function ResetProperty() {
    em.setProperty("OXEventState", "0");
    em.setProperty("start", "0");
    em.setProperty("question", "0");
    em.setProperty("RightAnwser", "0");//�õ��������ȷ��
    asked = Array();
    //setupTaskEvent.cancel(true);
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 1;//1���Ӽ��һ��ʱ��
    }
    setupTask = em.scheduleAtTimestamp("startEvent", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}


function startEvent() {
    if (em.getProperty("start") == "1") {//�Ѿ������ú������ҽ����ˡ�
        if (eim.getMapFactory().getMap(mapid).getCharactersSize() == 0) {
            ResetProperty();//������ͼû�ˣ��Զ��ͷſ�����ڵȴ���һ���˵Ľ��롣
            scheduleNew();
        } else {
            for (var i = 0; i < eim.getMapFactory().getMap(mapid).getCharactersSize(); i++) {
                if (eim.getMapFactory().getMap(mapid).getCharactersSize() != 0) {
                    map.startMapEffect("������3���ӵ�ʱ��Ⱥ�������ң����Ժ�", 5121052);
                    eim.getMapFactory().getMap(mapid).getCharactersThreadsafe().get(i).getClient().getSession().write(Packages.tools.MaplePacketCreator.getClock(180));//10��
                    eim.getMapFactory().getMap(mapid).getCharactersThreadsafe().get(i).openNpc(9000277, 4);//������ʾNPC
                }
            }
            em.broadcastServerMsg("[OX�����] OX������Ѿ���ʼ�ˣ����ڴ�Լ��3���ӵı���ʱ�䣬���ٶȵ�����������");
            em.setProperty("start", "2");//�ȴ�״̬
            setupTaskEvent = em.schedule("WatingStatus", 1000 * 60 * 3, eim);//3���Ӻ�������
        }
    } else if (em.getProperty("start") == "3") {//�ر����״̬
        if (eim.getMapFactory().getMap(mapid).getCharactersSize() == 0) {
            ResetProperty();//������ͼû�ˣ��Զ��ͷſ�����ڵȴ���һ���˵Ľ��롣
            scheduleNew();
            cancelSchedule();
        }
    } else if (em.getProperty("start") == "4") {//�������״̬
        ResetProperty();//������ͼû�ˣ��Զ��ͷſ�����ڵȴ���һ���˵Ľ��롣
        scheduleNew();
    } else {
        ResetProperty();
        scheduleNew();
    }
}

function WatingStatus(eim) {
    if (em.getProperty("start") == "2") {//�ȴ�״̬
        em.setProperty("start", "3");//�ر���ڣ����������
        if (eim.getMapFactory().getMap(mapid).getCharactersSize() == 0) {
            ResetProperty();
            scheduleNew();//�ٴ�ѭ��
        }
        if (eim.getMapFactory().getMap(mapid).getCharactersThreadsafe() != 0) {//�����ʼ�˵Ļ�
            setupTaskEvent = em.schedule("QuetionStart", 1000 * 10, eim);//10���������
            for (var i = 0; i < eim.getMapFactory().getMap(mapid).getCharactersSize(); i++) {
                if (eim.getMapFactory().getMap(mapid).getCharactersSize() != 0) {
                    eim.getMapFactory().getMap(mapid).getCharactersThreadsafe().get(i).getClient().getSession().write(Packages.tools.MaplePacketCreator.getClock(10));//10��
                    //  eim.getMapFactory().getMap(mapid).getCharactersThreadsafe().get(i).dropMessage(1, "����10�����⣬������׼����");
                    eim.getMapFactory().getMap(mapid).getCharactersThreadsafe().get(i).dropMessage(6, "����10�����⣬������׼����");
                }
            }
            // map.startMapEffect("����10�����⣬������׼����", 5121052);
        } else {
            ResetProperty();
            scheduleNew();//�ٴ�ѭ��
        }
    } else {
        if (eim.getMapFactory().getMap(mapid).getCharactersSize() == 0) {
            ResetProperty();
            scheduleNew();//�ٴ�ѭ��
        }
    }
}

function QuetionStart(eim) {//�����������
    if (asked.length != 20) {
        currentQuestion = Math.floor(Math.random() * questions.length);
        asked.push(currentQuestion);
        em.setProperty("question", currentQuestion);//�õ������index
        for (var i = 0; i < eim.getMapFactory().getMap(mapid).getCharactersSize(); i++) {
            if (eim.getMapFactory().getMap(mapid).getCharactersSize() != 0) {
                eim.getMapFactory().getMap(mapid).getCharactersThreadsafe().get(i).openNpc(9000277, 1);//������ʾNPC
            }
        }
        setupTaskEvent = em.schedule("AfterQuestion", 1000 * 15, eim);//15���������
        for (var i = 0; i < eim.getMapFactory().getMap(mapid).getCharactersSize(); i++) {
            if (eim.getMapFactory().getMap(mapid).getCharactersSize() != 0) {
                eim.getMapFactory().getMap(mapid).getCharactersThreadsafe().get(i).getClient().getSession().write(Packages.tools.MaplePacketCreator.getClock(15));//15��
                eim.getMapFactory().getMap(mapid).getCharactersThreadsafe().get(i).dropMessage(6, "����15��������⣡��վ����ȷ��λ�ã�");
                //    eim.getMapFactory().getMap(mapid).getCharactersThreadsafe().get(i).dropMessage(1, "����15��������⣡��վ����ȷ��λ�ã�");
            }
        }
        //map.startMapEffect("����30��������⣡��վ����ȷ��λ�ã�", 5121052);
    } else {//�Ѿ��ش���20����Ŀ
        for (var i = 0; i < eim.getMapFactory().getMap(mapid).getCharactersSize(); i++) {
            if (eim.getMapFactory().getMap(mapid).getCharactersSize() != 0) {
                eim.getMapFactory().getMap(mapid).getCharactersThreadsafe().get(i).openNpc(9000277, 3);//������Ա����NPC,���NPCҪֱ�Ӱ�����ͳ���ͼ
            }
        }
        em.setProperty("start", "4");//�������״̬
        scheduleNew();//�ٴ�ѭ��
    }
    em.setProperty("OXEventState", asked.length);
}

function AfterQuestion(eim) {//�����鲿��
    em.setProperty("question", currentQuestion);//�õ������index
    for (var i = 0; i < eim.getMapFactory().getMap(mapid).getCharactersSize(); i++) {
        eim.getMapFactory().getMap(mapid).getCharactersThreadsafe().get(i).openNpc(9000277, 2);//������NPC
    }
    for (var i = 0; i < eim.getMapFactory().getMap(mapid).getCharactersSize(); i++) {
        if (eim.getMapFactory().getMap(mapid).getCharactersSize() != 0) {
            //eim.getMapFactory().getMap(mapid).getCharactersThreadsafe().get(i).openNpc(9000277, 2);//������NPC
            eim.getMapFactory().getMap(mapid).getCharactersThreadsafe().get(i).dropMessage(6, "����5����ٴγ��⣡");
            // eim.getMapFactory().getMap(mapid).getCharactersThreadsafe().get(i).dropMessage(1, "����5����ٴγ��⣡");
            eim.getMapFactory().getMap(mapid).getCharactersThreadsafe().get(i).getClient().getSession().write(Packages.tools.MaplePacketCreator.getClock(5));//5
        }//���ⱨ��
    }
    //map.startMapEffect("����10����ٴγ��⣡", 5121052);
    if (eim.getMapFactory().getMap(mapid).getCharactersSize() != 0) {//���ⱨ��
        setupTaskEvent = em.schedule("QuetionStart", 1000 * 5, eim);//5����ٴγ���
    } else {
        scheduleNew();//�ٴ�ѭ��
        ResetProperty();
    }
}