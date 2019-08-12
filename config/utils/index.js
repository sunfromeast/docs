const utils = {
  genSidebar: function (title, children = [''], collapsable = true) {
    return {
      title,
      collapsable,
      children
    }
  }
};

module.exports = utils;