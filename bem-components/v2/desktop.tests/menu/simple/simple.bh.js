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
dropRequireCache(require, require.resolve("../../../common.blocks/button/button.bh.js"));
require("../../../common.blocks/button/button.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/button/__text/button__text.bh.js"));
require("../../../common.blocks/button/__text/button__text.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/button/_focused/button_focused.bh.js"));
require("../../../common.blocks/button/_focused/button_focused.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/menu-item/_type/menu-item_type_link.bh.js"));
require("../../../common.blocks/menu-item/_type/menu-item_type_link.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/link/link.bh.js"));
require("../../../common.blocks/link/link.bh.js")(bh);
dropRequireCache(require, require.resolve("../../../common.blocks/icon/icon.bh.js"));
require("../../../common.blocks/icon/icon.bh.js")(bh);
module.exports = bh;