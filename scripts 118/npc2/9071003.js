var status = 0;

function start() {
    if (cm.getMapId() == 951000000) {
        cm.sendYesNo("你好。怪物公园客车竭诚为大家提供最好的服务。你想回到村里去吗？");
    } else {
        cm.sendYesNo("亲爱的顾客，你想到充满了欢乐的休彼德蔓的怪物公园去吗？");
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        if (cm.getMapId() == 951000000) {
            cm.warp(100000000);
        } else {
            cm.warp(951000000);
        }
    }
    cm.dispose();
}