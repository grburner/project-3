export const summaryStatsAPI = new Promise(function(resolve) {
  resolve(
    [
      {'title': 'Products Listed', 'data': 23},
      {'title': 'Sales', 'data': 5445},
      {'title': 'Open Orders', 'data': 12}
    ]
  );
});

export const orderDataAPI = new Promise(function(resolve) {
  resolve(
    [
      {'order_number': 274234, 'order_amount': 233.75, 'order_items': 12, 'status': 'shipped' },
      {'order_number': 123423, 'order_amount': 142.62, 'order_items': 12, 'status': 'ppending' },
      {'order_number': 263474, 'order_amount': 623.23, 'order_items': 6, 'status': 'shipped' },
      {'order_number': 211342, 'order_amount': 1102.12, 'order_items': 12, 'status': 'shipped' },
      {'order_number': 634744, 'order_amount': 75.82, 'order_items': 3, 'status': 'ppending' },
      {'order_number': 624362, 'order_amount': 135.52, 'order_items': 12, 'status': 'ppending' },
    ]
  );
});