defmodule FreelancerRates do
  def daily_rate(hourly_rate), do: hourly_rate * 8.0

  def apply_discount(before_discount, discount) do
    before_discount - before_discount * discount * 0.01
  end

  def monthly_rate(hourly_rate, discount) do
    billable_days = 22
    before_discount = billable_days * daily_rate(hourly_rate)

    apply_discount(before_discount, discount) |> Float.ceil() |> trunc()
  end

  def days_in_budget(budget, hourly_rate, discount) do
    daily_rate_with_discount =
      hourly_rate
      |> daily_rate()
      |> apply_discount(discount)

    Float.floor(budget / daily_rate_with_discount, 1)
  end
end
