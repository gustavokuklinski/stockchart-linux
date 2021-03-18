

  const alpha = alphavantage({ key: 'VKKTJH9WNB8WF9E6' });

  alpha.data.daily('mglu3.sao','compact').then(data => {
    console.log(data['Time Series (Daily)']);
    var ohlc = [],
      volume = [],
      dataLength = data['Time Series (Daily)'],
      i = 0;
      for(var time in dataLength) {
        var stock_info = dataLength[time];  
        ohlc.push([        
          time,           
          Number(stock_info["1. open"]),
          Number(stock_info["2. high"]),
          Number(stock_info["3. low"]),
          Number(stock_info["4. close"])

        ]);

        volume.push([
          time, // the date                   
          Number(stock_info["5. volume"]) // the volume
        ]);
    }
  });

