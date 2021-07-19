import { Message, Spin } from "view-design";

export const message = (type, content) => {
  Message[type]({
    background: true,
    content: content
  });
}

export const spinShow = (title = '数据加载中...') => {
  Spin.show({
    render: (h) => {
      return h('div', [
        h('Icon', {
          'class': 'demo-spin-icon-load',
          props: {
            type: 'ios-loading',
            size: 18
          }
        }),
        h('div', title)
      ])
    }
  });
}

export const spinHide = () => {
  Spin.hide();
}