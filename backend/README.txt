## National Stock Exchange (NSE) API

- Get the stock market status (open/closed)<br/>
Format: JSON<br/>
http://localhost:4000/get_market_status<br/>

- Get all the indices of NSE(change, year high and low, index order)<br/>
Format: JSON<br/>
http://localhost:4000/nse/get_indices<br/>

- Get the quotes of all indexes in NSE<br/>
Format: HTML<br/>
http://localhost:4000/nse/get_quotes<br/>

- Get the quotation data of the symbol (companyName) from NSE<br/>
Format: JSON<br/>
http://localhost:4000/nse/get_quote_info?companyName=TCS<br/>

- Get the top 10 gainers of NSE<br/>
Format: JSON<br/>
http://localhost:4000/nse/get_gainers<br/>

- Get the top 10 losers of NSE<br/>
Format: JSON<br/>
http://localhost:4000/nse/get_losers<br/>

- Get advances/declines of individual index, and the value if its changed or not<br/>
Format: JSON<br/>
http://localhost:4000/nse/get_incline_decline<br/>

- Get the information of all the companies in a single NSE index<br/>
Format: JSON<br/>
http://localhost:4000/nse/get_index_stocks?symbol=nifty<br/>

- Get the list of companies in provided NSE index with matching keyword data<br/>
Format: JSON<br/>
http://localhost:4000/nse/search_stocks?keyword=AXIS<br/>

- Get the intraday data of company in NSE<br/>
Format: XML<br/>
http://localhost:4000/nse/get_intra_day_data?companyName=TCS&time=1<br/>
http://localhost:4000/nse/get_intra_day_data?companyName=TCS&time=month<br/>

- Get 52 weeks all high stocks in NSE<br/>
Format: JSON<br/>
http://localhost:4000/nse/get_52_week_high<br/>

- Get 52 weeks all low stocks in NSE<br/>
Format: JSON<br/>
http://localhost:4000/nse/get_52_week_low<br/>

- Get the NSE stocks with highest values<br/>
Format: JSON<br/>
http://localhost:4000/nse/get_top_value_stocks<br/>

- Get the NSE stocks with highest sold volumes<br/>
Format: JSON<br/>
http://localhost:4000/nse/get_top_volume_stocks<br/>

- Get the futures data for a company stock (symbol) and time<br/>
Format: JSON<br/>
http://localhost:4000/nse/get_stock_futures_data?companyName=TCS&time=15<br/>
http://localhost:4000/nse/get_stock_futures_data?companyName=VEDL&time=month<br/>

- Get chart data of a company name(symbol) depending on time in NSE<br/>
Format: CSV Format (delimiter - |)<br/>
http://localhost:4000/nse/get_chart_data_new?companyName=VEDL&time=5<br/>
http://localhost:4000/nse/get_chart_data_new?companyName=VEDL&time=year<br/>


## Bombay Stock Exchange (BSE) API

- Get details of all index in BSE Stock exchange<br/>
Format: JSON<br/>
http://localhost:4000/bse/get_indices<br/>

- Get all the indices of NSE(Get the information of only a single index<br/>
Format: JSON<br/>
http://localhost:4000/bse/getIndexInfo?indexId=16<br/>

- Get todays closing data and daily data of past time using IndexId and time from BSE<br/>
Format: JSON<br/>
http://localhost:4000/bse/get_index_chart_data?indexId=16<br/>

- Get details of all the stocks in an index<br/>
Format: JSON<br/>
http://localhost:4000/bse/get_index_stocks?indexId=16<br/>

- Gets the StockValue, Volume for company in specified past time<br/>
// 500112 - symbol (securityCode) of SBIN stock BSE<br/>
Format: JSON<br/>
http://localhost:4000/bse/get_company_info?companyKey=500112<br/>

- Get the stocks chart data<br/>
Format: JSON<br/>
http://localhost:4000/bse/get_stocks_chart_data?companyKey=500325&time=5<br/>
http://localhost:4000/bse/get_stocks_chart_data?companyKey=500325&time=month<br/>

- Get BSE stock data of stock info and day chart<br/>
Format: HTML<br/>
http://localhost:4000/bse/get_stock_info_and_day_chart_data?companyKey=500325<br/>

- Get the top gainers of BSE stock exchange<br/>
Format: JSON<br/>
http://localhost:4000/bse/get_gainers<br/>

- Get the top losers of BSE stock exchange<br/>
Format: JSON<br/>
http://localhost:4000/bse/get_losers<br/>

- Get the top turnovers of BSE stock exchange<br/>
Format: JSON<br/>
http://localhost:4000/bse/getTopTurnOvers<br/>


