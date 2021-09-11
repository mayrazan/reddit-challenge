export default function styleProps(propName) {
  return (componentProps) => ({
    [propName]: componentProps[propName],
  });
}
