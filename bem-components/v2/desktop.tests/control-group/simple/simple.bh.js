function dropRequireCache(requireFunc, filename) {
    var module = requireFunc.cache[filename];
    if (module) {
        if (module.parent) {
            if (module.parent.children) {
                var moduleIndex = module.parent.children.indexOf(module);
                if (moduleIndex !== -1) {
                    module.parent.children.splice(moduleIndex, 1);
                }
            }
            delete module.parent;
        }
        delete module.children;
        delete requireFunc.cache[filename];
    }
};
dropRequireCache(require, require.resolve("../../../node_modules/bh/lib/bh.js"));
var BH = require("../../../node_modules/bh/lib/bh.js");
var bh = new BH();
bh.setOptions({
jsAttrName: 'data-bem',
jsAttrScheme: 'json'
})
dropRequireCache(require, require.resolve("../../../libs/bem-core/common.blocks/page/page.bh.js"));
require("../../../libs/bem-core/common.blocks/page/page.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../libs/bem-core/desktop.blocks/page/page.bh.js"));
require("../../../libs/bem-core/desktop.blocks/page/page.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../libs/bem-core/common.blocks/ua/ua.bh.js"));
require("../../../libs/bem-core/common.blocks/ua/ua.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../libs/bem-core/common.blocks/page/__css/page__css.bh.js"));
require("../../../libs/bem-core/common.blocks/page/__css/page__css.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../libs/bem-core/desktop.blocks/page/__css/page__css.bh.js"));
require("../../../libs/bem-core/desktop.blocks/page/__css/page__css.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../libs/bem-core/common.blocks/page/__js/page__js.bh.js"));
require("../../../libs/bem-core/common.blocks/page/__js/page__js.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../libs/bem-core/common.blocks/ua/__svg/ua__svg.bh.js"));
require("../../../libs/bem-core/common.blocks/ua/__svg/ua__svg.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/checkbox-group/checkbox-group.bh.js"));
require("../../../common.blocks/checkbox-group/checkbox-group.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/checkbox/checkbox.bh.js"));
require("../../../common.blocks/checkbox/checkbox.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/checkbox/__box/checkbox__box.bh.js"));
require("../../../common.blocks/checkbox/__box/checkbox__box.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/checkbox/__control/checkbox__control.bh.js"));
require("../../../common.blocks/checkbox/__control/checkbox__control.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/button/button.bh.js"));
require("../../../common.blocks/button/button.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/button/__text/button__text.bh.js"));
require("../../../common.blocks/button/__text/button__text.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/button/_focused/button_focused.bh.js"));
require("../../../common.blocks/button/_focused/button_focused.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/checkbox/_type/checkbox_type_button.bh.js"));
require("../../../common.blocks/checkbox/_type/checkbox_type_button.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/radio-group/radio-group.bh.js"));
require("../../../common.blocks/radio-group/radio-group.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/radio/radio.bh.js"));
require("../../../common.blocks/radio/radio.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/radio/__box/radio__box.bh.js"));
require("../../../common.blocks/radio/__box/radio__box.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/radio/__control/radio__control.bh.js"));
require("../../../common.blocks/radio/__control/radio__control.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/radio/_type/radio_type_button.bh.js"));
require("../../../common.blocks/radio/_type/radio_type_button.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/icon/icon.bh.js"));
require("../../../common.blocks/icon/icon.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/input/input.bh.js"));
require("../../../common.blocks/input/input.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/input/__box/input__box.bh.js"));
require("../../../common.blocks/input/__box/input__box.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/input/__control/input__control.bh.js"));
require("../../../common.blocks/input/__control/input__control.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/input/_type/input_type_search.bh.js"));
require("../../../common.blocks/input/_type/input_type_search.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/select/select.bh.js"));
require("../../../common.blocks/select/select.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/select/_focused/select_focused.bh.js"));
require("../../../common.blocks/select/_focused/select_focused.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/select/__control/select__control.bh.js"));
require("../../../common.blocks/select/__control/select__control.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/select/__button/select__button.bh.js"));
require("../../../common.blocks/select/__button/select__button.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/select/__menu/select__menu.bh.js"));
require("../../../common.blocks/select/__menu/select__menu.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/menu/menu.bh.js"));
require("../../../common.blocks/menu/menu.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/menu-item/menu-item.bh.js"));
require("../../../common.blocks/menu-item/menu-item.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/menu/_focused/menu_focused.bh.js"));
require("../../../common.blocks/menu/_focused/menu_focused.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/menu/__group/menu__group.bh.js"));
require("../../../common.blocks/menu/__group/menu__group.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/menu/__group-title/menu__group-title.bh.js"));
require("../../../common.blocks/menu/__group-title/menu__group-title.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/popup/popup.bh.js"));
require("../../../common.blocks/popup/popup.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/select/_mode/select_mode_radio.bh.js"));
require("../../../common.blocks/select/_mode/select_mode_radio.bh.js")(bh);
module.exports = bh;