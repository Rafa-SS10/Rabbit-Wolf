const Footer = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <div data-testid="count" className="footerWrapper">
      {percentage === 100
        ? "Shopping Done"
        : `Total Item: ${numItems}----Completed Item: ${numPacked}-- ${percentage}%`}
    </div>
  );
};
export default Footer;
