function enter(pi) {
    var papuMap = pi.getC().getChannelServer().getMapFactory().getMap(220080001);
    if (papuMap.getCharacters().isEmpty()) {
        papuMap.resetReactors();
    } else {
        var mapobjects = papuMap.getMapObjects();
        var boss = null;
        var iter = mapobjects.iterator();
        while (iter.hasNext()) {
            o = iter.next();
            if (pi.isMonster(o))
                boss = o;
        }
        if (boss != null) {
            pi.getPlayer().dropMessage("�����Ѿ���ʼ�˶Կ�" + boss.getName() + "��ս����");
            return false;
        }
    }
    pi.warp(220080001, "st00");
    return true;
}