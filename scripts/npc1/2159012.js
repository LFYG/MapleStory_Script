var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendNext("�š���ʵ������չ��˳����ֻҪ�ܵõ��㹻���壬һ�оͲ��������⡣�ͺ�ɫ֮�����֣���Ȼ�����ǵ�ѡ�񡭡��ǺǺǡ�");
    } else if (status == 1) {
        cm.sendNextPrevS("����÷�����˹�Ȼ���ȼ�֮����", 4, 2159008);
    } else if (status == 2) {
        cm.sendNextPrev("��ɫ֮����˵�����ܻ��������Ͼ�������ˡ������ҵÿ�ʼ��һ�׶ε�ʵ���ˡ���Ҫ������������˵�ĸ���Ȥ�Ķ�����");
    } else if (status == 3) {
        cm.sendNextPrevS("��һ�׶Σ�", 4, 2159008);
    } else if (status == 4) {
        cm.sendNextPrev("�Ǻǡ����㻹��֪���𣿿������ʵ������Ӧ�þ���֪���˰ɣ��������Ķ�����ʲô���ʹ����е����Ȥ�����ܻ����˲�ͬ���Ǹ�����˼�ġ���");
    } else if (status == 5) {
        cm.sendNextPrevS("�ţ����ʵ���ң�����������Щʵ��������ʲô��", 4, 2159008);
    } else if (status == 6) {
        cm.sendNextPrev("������۹⣬�����޷��������ʵ���ΰ��֮�����ҿ�����⡣��ֻҪ�����Լ�����������ˡ�ֻҪ���������ʵ���壬�����������ܾ��С�");
    } else if (status == 7) {
        cm.sendNextPrev("�����ţ�����û������ʲô��ֵ�������");
    } else if (status == 8) {
        cm.sendNextPrevS("�ţ���ֵ��������ţ���������ʲô�������죿������", 4, 2159008);
    } else if (status == 9) {
        cm.updateInfoQuest(23007, "vel00=2;vel01=1");
        cm.trembleEffect(0, 500);
        cm.MovieClipIntroUI(true);
        cm.showWZEffect("Effect/Direction4.img/Resistance/TalkInLab");
        cm.dispose();
    }
}