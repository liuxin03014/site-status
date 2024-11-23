// 超链接组件
const CustomLink = (props) => {
  const { text, to, iconDom } = props;

  // 检查链接
  const url =
    to.startsWith("http://home.15641300.xyz") ||
    to.startsWith("https://blog.15641300.xyz") ||
    to.startsWith("mailto")
      ? to
      : `//${to}`;

  return (
    <a className="link" title={text} href={url} target="_blank">
      {iconDom}
      {text}
    </a>
  );
};

export default CustomLink;
