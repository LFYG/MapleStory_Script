/* 
 * 2430416 - ���ȵ�ħ��7��ʹ��ȯ - ���ȵ�ħ��7��ʹ��ȯ.\r\n#c˫���������7����ʹ�ú��������＼��.#
 */
var period = 7;
var mountSkillId = 80001058;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}