class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentClass: 'conditionArea'
    };
    this.windowOnScroll();
    let isScrollTop = true;
  }
  windowOnScroll() {
    let _this = this;
    window.onscroll = function () {
      //获取滚动条滚动的距离
      let h = document.body.scrollTop;
      console.log(h);
      if (h > 74) {
        console.log('111');
        _this.setState({
          contentClass: 'conditionArea conditionArea_fixed'
        });
      } else {
        _this.setState({
          contentClass: 'conditionArea'
        });
      }
    };
  }
  render() {
    return (
      <div className="container">
        <div className="set_head_fixed">
          <span className="set_text">我是头部</span>
        </div>
        <div id="conditionArea" className={this.state.contentClass}>
          <div className="content_name">
            <span>置顶块</span>
          </div>
        </div>
        <div className="set_displayContent">
          <p>内容区域</p>
        </div>
      </div>
    );
  }
}
function APP() {
  return (
    <div className="head_top ">
      <Head title="头部" />
    </div>
  );
}
ReactDOM.render(<APP />, document.getElementById('demo'));
