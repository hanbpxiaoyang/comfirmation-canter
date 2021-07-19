/**
 * 模版
 */
<template>
  <div class="hz-body">
    <p>表格</p>
    <div class="hz-body-table">
      <Table stripe :columns="columns" :data="data"></Table>
    </div>
    <div style="margin-top: 50px">
      <p>按钮</p>
      <Row>
        <Col span="5">
          <Button type="primary" icon="ios-search">查询</Button>
        </Col>
        <Col span="5">
          <Button type="primary" icon="ios-add-circle-outline">新增</Button>
        </Col>
      </Row>
    </div>
    <div style="margin-top: 50px">
      <p>输入框</p>
      <Input
        v-model="value"
        placeholder="请输入"
        clearable
        style="width: 200px"
      />
    </div>
    <div style="margin-top: 50px">
      <p>分页</p>
      <Page :total="40" size="small" show-elevator show-sizer show-total />
    </div>
    <div style="margin-top: 50px">
      <p>色值</p>
      <div>
        @primary: #0076ff;<br />
        @warning: #ee9255;<br />
        @status: #1fcc8c;<br />
        @successStatusBackground: #ebfff8;<br />
        @tips: #e6f0ff;<br />
        @fontColor: #52545a;<br />
        @disable: #c0c0c0;<br />
        @error: #fe7272;<br />
        @errorHover: #feefef;<br />
        @tipsFontColor: #808288;<br />
        @tipsFontColorBackground: #f7f7f7;
      </div>
      <Row :gutter="20">
        <Col span="3">
          <div class="border color-1">
            <p>主色调</p>
            <p>#0076FF</p>
          </div>
        </Col>
        <Col span="3">
          <div class="border color-2">
            <p>警告色</p>
            <p>#EE9255</p>
          </div>
        </Col>
        <Col span="3">
          <div class="border color-3">
            <p>完成状态</p>
            <p>#1FCC8C</p>
          </div>
        </Col>
        <Col span="3">
          <div class="border color-4">
            <p>鼠标hover</p>
            <p>#E6F0FF</p>
          </div>
        </Col>
        <Col span="3">
          <div class="border color-5">
            <p>字体颜色</p>
            <p>#82858B</p>
          </div>
        </Col>
        <Col span="3">
          <div class="border color-6">
            <p>禁用色</p>
            <p>#C0C0C0</p>
          </div>
        </Col>
        <Col span="3">
          <div class="border color-7">
            <p>严重色</p>
            <p>#FE7272</p>
          </div>
        </Col>
        <Col span="3">
          <div class="border color-8">
            <p>严重色(浅)</p>
            <p>#FEEFEF</p>
          </div>
        </Col>
        <Col span="3">
          <div class="border color-9">
            <p>提示文字</p>
            <p>#808288</p>
          </div>
        </Col>
        <Col span="3">
          <div class="border color-10">
            <p>提示文字背景色</p>
            <p>#F7F7F7</p>
          </div>
        </Col>
        <Col span="3">
          <div class="border color-11">
            <p>正常背景色</p>
            <p>#EBFFF8</p>
          </div>
        </Col>
      </Row>
    </div>
    <div style="margin-top: 50px">
      <p>提示框</p>
      <Button @click="background('info')">显示普通提示</Button>
      <Button @click="background('success')">显示成功提示</Button>
      <Button @click="background('warning')">显示警告提示</Button>
      <Button @click="background('error')">显示错误提示</Button>
    </div>
    <div style="margin-top: 50px">
      <p>loading</p>
      <Button @click="loading">loading</Button>
      <Button @click="customLoading">自定义内容Loading</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "templateBar",
  data() {
    return {
      value: "",
      columns: [
        {
          title: "Name",
          key: "name",
        },
        {
          title: "Age",
          key: "age",
        },
        {
          title: "Address",
          key: "address",
        },
        {
          title: "操作",
          key: "active",
          render: (h, params) => {
            return h("div", [
              h(
                "span",
                {
                  style: {
                    fontSize: "14px",
                    padding: "5px 10px 5px 0",
                    cursor: "pointer",
                    color: "#388CFF",
                    borderRight: "1px solid #DCDFE6",
                  },
                },
                "查看"
              ),
              h(
                "span",
                {
                  style: {
                    fontSize: "14px",
                    padding: "5px 10px",
                    cursor: "pointer",
                    color: "#388CFF",
                    borderRight: "1px solid #DCDFE6",
                  },
                },
                "修改"
              ),
              h(
                "span",
                {
                  style: {
                    fontSize: "14px",
                    padding: "5px 0 5px 10px",
                    cursor: "pointer",
                    color: "#909090",
                  },
                },
                "删除"
              ),
            ]);
          },
        },
      ],
      data: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03",
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01",
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02",
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04",
        },
      ],
    };
  },
  methods: {
    background(type) {
      /**
       * 此方法已写成公共方法 lib/common.js
       */
      this.$message(type, "这是一条带背景色的通知");
    },
    loading() {
      /**
       * 此方法已写成公共方法 lib/common.js
       * 不需要使用iview自带的$Sipn.show,$Spin.hide方法
       */
      this.$spinShow();
      setTimeout(() => {
        this.$spinHide();
      }, 2000);
    },
    customLoading() {
      this.$spinShow("上传中...");
      setTimeout(() => {
        this.$spinHide();
      }, 2000);
    },
  },
};
</script>

<style lang="less" scoped>
// less公共样式 src/themes/global.less
.border {
  width: 100%;
  color: #fff;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  margin-top: 10px;
}
.color-1 {
  background: @primary;
}
.color-2 {
  background: @warning;
}
.color-3 {
  background: @status;
}
.color-4 {
  background: @tips;
  color: @fontColor;
}
.color-5 {
  background: @fontColor;
}
.color-6 {
  background: @disable;
}
.color-7 {
  background: @error;
}
.color-8 {
  background: @errorHover;
  color: @error;
}
.color-9 {
  background: @tipsFontColor;
}
.color-10 {
  background: @tipsFontColorBackground;
  color: @tipsFontColor;
}
.color-11 {
  background: @successStatusBackground;
  color: @status;
}
</style>
