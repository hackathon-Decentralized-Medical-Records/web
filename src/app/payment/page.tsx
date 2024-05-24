export default function Payment() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-red-500">付款方式</h1>

      <div>
        <h2>选择付款方式</h2>
        <label>
          <input type="radio" name="paymentMethod" value="visa" />
          Visa
        </label>
        <label>
          <input type="radio" name="paymentMethod" value="paypal" />
          PayPal
        </label>
      </div>

      <div>
        <h2>姓名：</h2>
        <input type="text" name="name" />
      </div>

      <div>
        <h2>卡号：</h2>
        <input type="text" name="cardNumber" />
      </div>

      <div>
        <h2>日期：</h2>
        <input type="date" name="date" />
      </div>

      <div>
        <h2>地址：</h2>
        <input type="text" name="address" />
      </div>

      <div>
        <h2>国籍：</h2>
        <select name="nationality">
          <option value="china">中国</option>
          <option value="usa">美国</option>
          <option value="japan">日本</option>
          {/* 可以根据需要添加更多的选项 */}
        </select>
      </div>

      <div>
        <h2>邮政编码：</h2>
        <input type="text" name="postalCode" />
      </div>

      <div className="agreement">
        <label>
          <input type="checkbox" name="agreement" required />
          我已阅读并同意<a href="/terms">条款和条件</a>，以及<a href="/privacy">隐私政策</a>。
        </label>
      </div>

      <div>
        <button type="submit">提交</button>
      </div>
    </form>
  );
}
