"use strict";
/** THIS FILE IS AUTOMATICALLY GENERATED FROM : https://www.bitmex.com/api/explorer/swagger.json **/
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// tslint:disable:max-line-length
const BitmexAbstractAPI_1 = require("./BitmexAbstractAPI");
class BitmexAPI extends BitmexAbstractAPI_1.BitmexAbstractAPI {
    constructor() {
        super(...arguments);
        this.basePath = '/api/v1';
        this.Announcement = {
            /**
             * Get site announcements.
             */
            get: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/announcement', { qs }); }),
            /**
             * @Authorized
             * Get urgent (banner) announcements.
             */
            getUrgent: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/announcement/urgent', {}, true); }),
        };
        this.APIKey = {
            /**
             * @Authorized
             * Create a new API Key.API Keys can only be created via the frontend.
             */
            new: (form = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('POST', '/apiKey', { form }, true); }),
            /**
             * @Authorized
             * Get your API Keys.
             */
            get: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/apiKey', { qs }, true); }),
            /**
             * @Authorized
             * Remove an API Key.
             */
            remove: (form) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('DELETE', '/apiKey', { form }, true); }),
            /**
             * @Authorized
             * Disable an API Key.
             */
            disable: (form) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('POST', '/apiKey/disable', { form }, true); }),
            /**
             * @Authorized
             * Enable an API Key.
             */
            enable: (form) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('POST', '/apiKey/enable', { form }, true); }),
        };
        this.Chat = {
            /**
             * Get chat messages.
             */
            get: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/chat', { qs }); }),
            /**
             * @Authorized
             * Send a chat message.
             */
            new: (form) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('POST', '/chat', { form }, true); }),
            /**
             * Get available channels.
             */
            getChannels: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/chat/channels', {}); }),
            /**
             * Get connected users.Returns an array with browser users in the first position and API users (bots) in the second position.
             */
            getConnected: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/chat/connected', {}); }),
        };
        this.Execution = {
            /**
             * @Authorized
             * Get all raw executions for your account.This returns all raw transactions, which includes order opening and cancelation, and order status
             * changes. It can be quite noisy. More focused information is available at `/execution/tradeHistory`.
             *
             * You may also use the `filter` param to target your query. Specify an array as a filter value, such as
             * `{"execType": ["Settlement", "Trade"]}` to filter on multiple values.
             *
             * See [the FIX Spec](http://www.onixs.biz/fix-dictionary/5.0.SP2/msgType_8_8.html) for explanations of these fields.
             */
            get: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/execution', { qs }, true); }),
            /**
             * @Authorized
             * Get all balance-affecting executions. This includes each trade, insurance charge, and settlement.
             */
            getTradeHistory: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/execution/tradeHistory', { qs }, true); }),
        };
        this.Funding = {
            /**
             * Get funding history.
             */
            get: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/funding', { qs }); }),
        };
        this.Instrument = {
            /**
             * Get instruments.This returns all instruments and indices, including those that have settled or are unlisted. Use this endpoint if you want to query for individual instruments or use a complex filter. Use `/instrument/active` to return active instruments, or use a filter like `{"state": "Open"}`.
             */
            get: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/instrument', { qs }); }),
            /**
             * Get all active instruments and instruments that have expired in <24hrs.
             */
            getActive: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/instrument/active', {}); }),
            /**
             * Get all price indices.
             */
            getIndices: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/instrument/indices', {}); }),
            /**
             * Helper method. Gets all active instruments and all indices. This is a join of the result of /indices and /active.
             */
            getActiveAndIndices: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/instrument/activeAndIndices', {}); }),
            /**
             * Return all active contract series and interval pairs.This endpoint is useful for determining which pairs are live. It returns two arrays of   strings. The first is intervals, such as `["XBT:perpetual", "XBT:monthly", "XBT:quarterly", "ETH:monthly", ...]`. These identifiers are usable in any query's `symbol` param. The second array is the current resolution of these intervals. Results are mapped at the same index.
             */
            getActiveIntervals: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/instrument/activeIntervals', {}); }),
            /**
             * Show constituent parts of an index.Composite indices are built from multiple external price sources.
             *
             * Use this endpoint to get the underlying prices of an index. For example, send a `symbol` of `.XBT` to
             * get the ticks and weights of the constituent exchanges that build the ".XBT" index.
             *
             * A tick with reference `"BMI"` and weight `null` is the composite index tick.
             */
            getCompositeIndex: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/instrument/compositeIndex', { qs }); }),
        };
        this.Insurance = {
            /**
             * Get insurance fund history.
             */
            get: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/insurance', { qs }); }),
        };
        this.Leaderboard = {
            /**
             * Get current leaderboard.
             */
            get: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/leaderboard', { qs }); }),
            /**
             * @Authorized
             * Get your alias on the leaderboard.
             */
            getName: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/leaderboard/name', {}, true); }),
        };
        this.Liquidation = {
            /**
             * Get liquidation orders.
             */
            get: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/liquidation', { qs }); }),
        };
        this.GlobalNotification = {
            /**
             * @Authorized
             * Get your current GlobalNotifications.This is an upcoming feature and currently does not return data.
             */
            get: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/globalNotification', {}, true); }),
        };
        this.Order = {
            /**
             * @Authorized
             * Get your orders.To get open orders only, send {"open": true} in the filter param.
             *
             * See <a href="http://www.onixs.biz/fix-dictionary/5.0.SP2/msgType_D_68.html">the FIX Spec</a> for explanations of these fields.
             */
            getOrders: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/order', { qs }, true); }),
            /**
             * @Authorized
             * Create a new order.## Placing Orders
             *
             * This endpoint is used for placing orders. See individual fields below for more details on their use.
             *
             * #### Order Types
             *
             * All orders require a `symbol`. All other fields are optional except when otherwise specified.
             *
             * These are the valid `ordType`s:
             *
             * * **Limit**: The default order type. Specify an `orderQty` and `price`.
             * * **Market**: A traditional Market order. A Market order will execute until filled or your bankruptcy price is reached, at
             * which point it will cancel.
             * * **MarketWithLeftOverAsLimit**: A market order that, after eating through the order book as far as
             * permitted by available margin, will become a limit order. The difference between this type and `Market` only
             * affects the behavior in thin books. Upon reaching the deepest possible price, if there is quantity left over,
             * a `Market` order will cancel the remaining quantity. `MarketWithLeftOverAsLimit` will keep the remaining
             * quantity in the books as a `Limit`.
             * * **Stop**: A Stop Market order. Specify an `orderQty` and `stopPx`. When the `stopPx` is reached, the order will be entered
             * into the book.
             * * On sell orders, the order will trigger if the triggering price is lower than the `stopPx`. On buys, higher.
             * * Note: Stop orders do not consume margin until triggered. Be sure that the required margin is available in your
             * account so that it may trigger fully.
             * * `Close` Stops don't require an `orderQty`. See Execution Instructions below.
             * * **StopLimit**: Like a Stop Market, but enters a Limit order instead of a Market order. Specify an `orderQty`, `stopPx`,
             * and `price`.
             * * **MarketIfTouched**: Similar to a Stop, but triggers are done in the opposite direction. Useful for Take Profit orders.
             * * **LimitIfTouched**: As above; use for Take Profit Limit orders.
             *
             * #### Execution Instructions
             *
             * The following `execInst`s are supported. If using multiple, separate with a comma (e.g. `LastPrice,Close`).
             *
             * * **ParticipateDoNotInitiate**: Also known as a Post-Only order. If this order would have executed on placement,
             * it will cancel instead.
             * * **MarkPrice, LastPrice, IndexPrice**: Used by stop and if-touched orders to determine the triggering price.
             * Use only one. By default, `'MarkPrice'` is used. Also used for Pegged orders to define the value of `'LastPeg'`.
             * * **ReduceOnly**: A `'ReduceOnly'` order can only reduce your position, not increase it. If you have a `'ReduceOnly'`
             * limit order that rests in the order book while the position is reduced by other orders, then its order quantity will
             * be amended down or canceled. If there are multiple `'ReduceOnly'` orders the least aggressive will be amended first.
             * * **Close**: `'Close'` implies `'ReduceOnly'`. A `'Close'` order will cancel other active limit orders with the same side
             * and symbol if the open quantity exceeds the current position. This is useful for stops: by canceling these orders, a
             * `'Close'` Stop is ensured to have the margin required to execute, and can only execute up to the full size of your
             * position. If `orderQty` is not specified, a `'Close'` order has an `orderQty` equal to your current position's size.
             * * Note that a `Close` order without an `orderQty` requires a `side`, so that BitMEX knows if it should trigger
             * above or below the `stopPx`.
             *
             * #### Linked Orders
             *
             * [Linked Orders are deprecated as of 2018/11/10](https://blog.bitmex.com/api_announcement/deprecation-of-contingent-orders/)
             *
             * #### Trailing Stops
             *
             * You may use `pegPriceType` of `'TrailingStopPeg'` to create Trailing Stops. The pegged `stopPx` will move as the market
             * moves away from the peg, and freeze as the market moves toward it.
             *
             * To use, combine with `pegOffsetValue` to set the `stopPx` of your order. The peg is set to the triggering price
             * specified in the `execInst` (default `'MarkPrice'`). Use a negative offset for stop-sell and buy-if-touched orders.
             *
             * Requires `ordType`: `'Stop', 'StopLimit', 'MarketIfTouched', 'LimitIfTouched'`.
             *
             * #### Simple Quantities
             *
             * [Simple Quantities are deprecated as of 2018/10/26](https://blog.bitmex.com/api_announcement/deprecation-of-simpleorderqty-functionality/)
             *
             * #### Rate Limits
             *
             * See the [Bulk Order Documentation](#!/Order/Order_newBulk) if you need to place multiple orders at the same time.
             * Bulk orders require fewer risk checks in the trading engine and thus are ratelimited at **1/10** the normal rate.
             *
             * You can also improve your reactivity to market movements while staying under your ratelimit by using the
             * [Amend](#!/Order/Order_amend) and [Amend Bulk](#!/Order/Order_amendBulk) endpoints. This allows you to stay
             * in the market and avoids the cancel/replace cycle.
             *
             * #### Tracking Your Orders
             *
             * If you want to keep track of order IDs yourself, set a unique `clOrdID` per order.
             * This `clOrdID` will come back as a property on the order and any related executions (including on the WebSocket),
             * and can be used to get or cancel the order. Max length is 36 characters.
             *
             * You can also change the `clOrdID` by amending an order, supplying an `origClOrdID`, and your desired new
             * ID as the `clOrdID` param, like so:
             *
             * ```
             * # Amends an order's leavesQty, and updates its clOrdID to "def-456"
             * PUT /api/v1/order {"origClOrdID": "abc-123", "clOrdID": "def-456", "leavesQty": 1000}
             * ```
             */
            new: (form) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('POST', '/order', { form }, true); }),
            /**
             * @Authorized
             * Amend the quantity or price of an open order.Send an `orderID` or `origClOrdID` to identify the order you wish to amend.
             *
             * Both order quantity and price can be amended. Only one `qty` field can be used to amend.
             *
             * Use the `leavesQty` field to specify how much of the order you wish to remain open. This can be useful
             * if you want to adjust your position's delta by a certain amount, regardless of how much of the order has
             * already filled.
             *
             * > A `leavesQty` can be used to make a "Filled" order live again, if it is received within 60 seconds of the fill.
             *
             * Like order placement, amending can be done in bulk. Simply send a request to `PUT /api/v1/order/bulk` with
             * a JSON body of the shape: `{"orders": [{...}, {...}]}`, each object containing the fields used in this endpoint.
             */
            amend: (form = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('PUT', '/order', { form }, true); }),
            /**
             * @Authorized
             * Cancel order(s). Send multiple order IDs to cancel in bulk.Either an orderID or a clOrdID must be provided.
             */
            cancel: (form = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('DELETE', '/order', { form }, true); }),
            /**
             * @Authorized
             * Create multiple new orders for the same symbol.This endpoint is used for placing bulk orders. Valid order types are Market, Limit, Stop, StopLimit, MarketIfTouched, LimitIfTouched, MarketWithLeftOverAsLimit, and Pegged.
             *
             * Each individual order object in the array should have the same properties as an individual POST /order call.
             *
             * This endpoint is much faster for getting many orders into the book at once. Because it reduces load on BitMEX
             * systems, this endpoint is ratelimited at `ceil(0.1 * orders)`. Submitting 10 orders via a bulk order call
             * will only count as 1 request, 15 as 2, 32 as 4, and so on.
             *
             * For now, only `application/json` is supported on this endpoint.
             */
            newBulk: (form = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('POST', '/order/bulk', { form }, true); }),
            /**
             * @Authorized
             * Amend multiple orders for the same symbol.Similar to POST /amend, but with multiple orders. `application/json` only. Ratelimited at 10%.
             */
            amendBulk: (form = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('PUT', '/order/bulk', { form }, true); }),
            /**
             * @Authorized
             * Close a position. [Deprecated, use POST /order with execInst: 'Close']If no `price` is specified, a market order will be submitted to close the whole of your position. This will also close all other open orders in this symbol.
             */
            closePosition: (form) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('POST', '/order/closePosition', { form }, true); }),
            /**
             * @Authorized
             * Cancels all of your orders.
             */
            cancelAll: (form = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('DELETE', '/order/all', { form }, true); }),
            /**
             * @Authorized
             * Automatically cancel all your orders after a specified timeout.Useful as a dead-man's switch to ensure your orders are canceled in case of an outage.
             * If called repeatedly, the existing offset will be canceled and a new one will be inserted in its place.
             *
             * Example usage: call this route at 15s intervals with an offset of 60000 (60s).
             * If this route is not called within 60 seconds, all your orders will be automatically canceled.
             *
             * This is also available via [WebSocket](https://www.bitmex.com/app/wsAPI#Dead-Mans-Switch-Auto-Cancel).
             */
            cancelAllAfter: (form) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('POST', '/order/cancelAllAfter', { form }, true); }),
        };
        this.OrderBook = {
            /**
             * Get current orderbook in vertical format.
             */
            getL2: (qs) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/orderBook/L2', { qs }); }),
        };
        this.Position = {
            /**
             * @Authorized
             * Get your positions.This endpoint is used for retrieving position information. The fields largely follow the [FIX spec](http://www.onixs.biz/fix-dictionary/5.0.SP2/msgType_AP_6580.html) definitions. Some selected fields are explained in more detail below.
             *
             * The fields _account_, _symbol_, _currency_ are unique to each position and form its key.
             *
             * * **account**: Your unique account ID.
             * * **symbol**: The contract for this position.
             * * **currency**: The margin currency for this position.
             * * **underlying**: Meta data of the _symbol_.
             * * **quoteCurrency**: Meta data of the _symbol_,  All prices are in the _quoteCurrency_
             * * **commission**: The maximum of the maker, taker, and settlement fee.
             * * **initMarginReq**: The initial margin requirement.  This will be at least the symbol's default initial maintenance margin, but can be higher if you choose lower leverage.
             * * **maintMarginReq**: The maintenance margin requirement.  This will be at least the symbol's default maintenance maintenance margin, but can be higher if you choose a higher risk limit.
             * * **riskLimit**: This is a function of your _maintMarginReq_.
             * * **leverage**: 1 / initMarginReq.
             * * **crossMargin**: True/false depending on whether you set cross margin on this position.
             * * **deleveragePercentile**: Indicates where your position is in the ADL queue.
             * * **rebalancedPnl**: The value of realised PNL that has transferred to your wallet for this position.
             * * **prevRealisedPnl**: The value of realised PNL that has transferred to your wallet for this position since the position was closed.
             * * **currentQty**: The current position amount in contracts.
             * * **currentCost**: The current cost of the position in the settlement currency of the symbol (_currency_).
             * * **currentComm**: The current commission of the position in the settlement currency of the symbol (_currency_).
             * * **realisedCost**: The realised cost of this position calculated with regard to average cost accounting.
             * * **unrealisedCost**: _currentCost_ - _realisedCost_.
             * * **grossOpenCost**: The absolute value of your open orders for this symbol.
             * * **grossOpenPremium**: The amount your bidding above the mark price in the settlement currency of the symbol (_currency_).
             * * **markPrice**: The mark price of the symbol in _quoteCurrency_.
             * * **markValue**: The _currentQty_ at the mark price in the settlement currency of the symbol (_currency_).
             * * **homeNotional**: Value of position in units of _underlying_.
             * * **foreignNotional**: Value of position in units of _quoteCurrency_.
             * * **realisedPnl**: The negative of _realisedCost_.
             * * **unrealisedGrossPnl**: _markValue_ - _unrealisedCost_.
             * * **unrealisedPnl**: _unrealisedGrossPnl_.
             * * **liquidationPrice**: Once markPrice reaches this price, this position will be liquidated.
             * * **bankruptPrice**: Once markPrice reaches this price, this position will have no equity.
             */
            get: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/position', { qs }, true); }),
            /**
             * @Authorized
             * Enable isolated margin or cross margin per-position.
             */
            isolateMargin: (form) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('POST', '/position/isolate', { form }, true); }),
            /**
             * @Authorized
             * Update your risk limit.
             */
            updateRiskLimit: (form) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('POST', '/position/riskLimit', { form }, true); }),
            /**
             * @Authorized
             * Transfer equity in or out of a position.
             */
            transferIsolatedMargin: (form) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('POST', '/position/transferMargin', { form }, true); }),
            /**
             * @Authorized
             * Choose leverage for a position.
             */
            updateLeverage: (form) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('POST', '/position/leverage', { form }, true); }),
        };
        this.Quote = {
            /**
             * Get Quotes.
             */
            get: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/quote', { qs }); }),
            /**
             * Get previous quotes in time buckets.
             */
            getBucketed: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/quote/bucketed', { qs }); }),
        };
        this.Schema = {
            /**
             * Get model schemata for data objects returned by this API.
             */
            get: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/schema', { qs }); }),
            /**
             * Returns help text & subject list for websocket usage.
             */
            websocketHelp: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/schema/websocketHelp', {}); }),
        };
        this.Settlement = {
            /**
             * Get settlement history.
             */
            get: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/settlement', { qs }); }),
        };
        this.Stats = {
            /**
             * Get exchange-wide and per-series turnover and volume statistics.
             */
            get: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/stats', {}); }),
            /**
             * Get historical exchange-wide and per-series turnover and volume statistics.
             */
            history: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/stats/history', {}); }),
            /**
             * Get a summary of exchange statistics in USD.
             */
            historyUSD: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/stats/historyUSD', {}); }),
        };
        this.Trade = {
            /**
             * Get Trades.Please note that indices (symbols starting with `.`) post trades at intervals to the trade feed. These have a `size` of 0 and are used only to indicate a changing price.
             *
             * See [the FIX Spec](http://www.onixs.biz/fix-dictionary/5.0.SP2/msgType_AE_6569.html) for explanations of these fields.
             */
            get: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/trade', { qs }); }),
            /**
             * Get previous trades in time buckets.Please note the `open` price **is equal** to the `close` price of the previous timeframe bucket.
             */
            getBucketed: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/trade/bucketed', { qs }); }),
        };
        this.User = {
            /**
             * @Authorized
             * Get a deposit address.
             */
            getDepositAddress: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/user/depositAddress', { qs }, true); }),
            /**
             * @Authorized
             * Get your current wallet information.
             */
            getWallet: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/user/wallet', { qs }, true); }),
            /**
             * @Authorized
             * Get a history of all of your wallet transactions (deposits, withdrawals, PNL).
             */
            getWalletHistory: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/user/walletHistory', { qs }, true); }),
            /**
             * @Authorized
             * Get a summary of all of your wallet transactions (deposits, withdrawals, PNL).
             */
            getWalletSummary: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/user/walletSummary', { qs }, true); }),
            /**
             * @Authorized
             * Get the execution history by day.
             */
            getExecutionHistory: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/user/executionHistory', { qs }, true); }),
            /**
             * Get the minimum withdrawal fee for a currency.This is changed based on network conditions to ensure timely withdrawals. During network congestion, this may be high. The fee is returned in the same currency.
             */
            minWithdrawalFee: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/user/minWithdrawalFee', { qs }); }),
            /**
             * @Authorized
             * Request a withdrawal to an external wallet.This will send a confirmation email to the email address on record, unless requested via an API Key with the `withdraw` permission.
             */
            requestWithdrawal: (form) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('POST', '/user/requestWithdrawal', { form }, true); }),
            /**
             * Cancel a withdrawal.
             */
            cancelWithdrawal: (form) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('POST', '/user/cancelWithdrawal', { form }); }),
            /**
             * Confirm a withdrawal.
             */
            confirmWithdrawal: (form) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('POST', '/user/confirmWithdrawal', { form }); }),
            /**
             * @Authorized
             * Get secret key for setting up two-factor auth.Use /confirmEnableTFA directly for Yubikeys. This fails if TFA is already enabled.
             */
            requestEnableTFA: (form = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('POST', '/user/requestEnableTFA', { form }, true); }),
            /**
             * @Authorized
             * Confirm two-factor auth for this account. If using a Yubikey, simply send a token to this endpoint.
             */
            confirmEnableTFA: (form) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('POST', '/user/confirmEnableTFA', { form }, true); }),
            /**
             * @Authorized
             * Disable two-factor auth for this account.
             */
            disableTFA: (form) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('POST', '/user/disableTFA', { form }, true); }),
            /**
             * Confirm your email address with a token.
             */
            confirm: (form) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('POST', '/user/confirmEmail', { form }); }),
            /**
             * @Authorized
             * Get your current affiliate/referral status.
             */
            getAffiliateStatus: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/user/affiliateStatus', {}, true); }),
            /**
             * Check if a referral code is valid.If the code is valid, responds with the referral code's discount (e.g. `0.1` for 10%). Otherwise, will return a 404 or 451 if invalid.
             */
            checkReferralCode: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/user/checkReferralCode', { qs }); }),
            /**
             * Log out of BitMEX.
             */
            logout: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('POST', '/user/logout', {}); }),
            /**
             * @Authorized
             * Log all systems out of BitMEX. This will revoke all of your account's access tokens, logging you out on all devices.
             */
            logoutAll: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('POST', '/user/logoutAll', {}, true); }),
            /**
             * @Authorized
             * Save user preferences.
             */
            savePreferences: (form) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('POST', '/user/preferences', { form }, true); }),
            /**
             * @Authorized
             * Get your user model.
             */
            get: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/user', {}, true); }),
            /**
             * @Authorized
             * Update your password, name, and other attributes.
             */
            update: (form = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('PUT', '/user', { form }, true); }),
            /**
             * @Authorized
             * Get your account's commission status.
             */
            getCommission: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/user/commission', {}, true); }),
            /**
             * @Authorized
             * Get your account's margin status. Send a currency of "all" to receive an array of all supported currencies.
             */
            getMargin: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/user/margin', { qs }, true); }),
            /**
             * @Authorized
             * Register your communication token for mobile clients
             */
            communicationToken: (form) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('POST', '/user/communicationToken', { form }, true); }),
        };
        this.UserEvent = {
            /**
             * @Authorized
             * Get your user events
             */
            get: (qs = {}) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.request('GET', '/userEvent', { qs }, true); }),
        };
    }
}
exports.BitmexAPI = BitmexAPI;
