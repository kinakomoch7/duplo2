export const MoneyToJPY = (money:number) => {
  const formattedMoney = money.toLocaleString('ja-JP', {style:'decimal', currency: 'JPY'});
  return formattedMoney;
}