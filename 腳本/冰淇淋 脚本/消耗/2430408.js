/* 
 * 2430408 - ����7��ʹ��ȯ - ��������ʹ��ȯ.\r\n#c˫���������7����ʹ�ú��������＼��.#
 */
var period = 8;
var mountSkillId = 80001068;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}