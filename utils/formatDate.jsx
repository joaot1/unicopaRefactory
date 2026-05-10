export const formatarData = (dataString) => {
  const [ano, mes, dia] = dataString.split('-');
  return `${dia}/${mes}`;
};