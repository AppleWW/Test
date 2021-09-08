const scrollEvent = (event) => {
  if (!event.srcElement.scrollTop) {
    //处理向上使劲滚动的时候scrollTop为undefined
    return undefined;
  }
  // 滚动的高度
  const scrollTop =
    (event.srcElement ? event.srcElement.scrollTop : false) ||
    window.pageYOffset ||
    (event.srcElement ? event.srcElement.body.scrollTop : 0);
  // 视窗高度
  const clientHeight =
    (event.srcElement && event.srcElement.clientHeight) ||
    document.body.clientHeight;
  // 页面高度
  const scrollHeight =
    (event.srcElement && event.srcElement.scrollHeight) ||
    document.body.scrollHeight;
  // 距离页面底部的高度
  const height = scrollHeight - scrollTop - clientHeight;

  return height;
};

const initialState = {
  page: 1,
  pageSize: 50
};

const reducer = (state, action) => {
  const payload = reap(action, 'payload', {});
  switch (action.type) {
    case 'update':
      return { ...state, ...payload };
    default:
      throw new Error();
  }
};

function Demo(props) {
  const { getList } = props;

  const [hasMore, setHasMore] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [list, setList] = useState([]);

  const _handleScroll = useCallback(
    (event) => {
      const height = scrollEvent(event);

      if (hasMore && height <= 100) {
        const page = state.page + 1;
        //get new list data
        dispatch({
          type: 'update',
          payload: {
            page
          }
        });
      }
    },
    [hasMore, state.page]
  );

  useEffect(() => {
    const scrollDom = document.getElementById('layoutContentContainer');
    scrollDom.addEventListener('scroll', _handleScroll);

    return () => scrollDom.removeEventListener('scroll', _handleScroll);
  }, [_handleScroll]);

  useEffect(() => {
    const { page, pageSize, searchText } = state;
    getList({ page, pageSize, name: searchText }).then((res) => {
      const code = reap(res, 'code', 0);
      if (code === 200) {
        //判断设置还有没有数据可以加载了  setHasMore()
        //设置获取的数据列表setList(a => a.concat(list))
      }
    });
  }, [getList, state]);

  return <React.Fragment>{/** show list map to ui */}</React.Fragment>;
}
Demo.propTypes = {
  getList: PropTypes.func
};

export default Demo;
